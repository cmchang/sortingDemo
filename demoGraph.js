$(document).ready(function(){
   $('.demoGraphJS').each(function(){
         setup_Graph(this);
      });
});

function setup_Graph(){
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 500 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    
   var formatInt = d3.format("d"); //d -> integer (https://github.com/mbostock/d3/wiki/Formatting#wiki-d3_format)
    
   var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1, 1); //([], width of individual bar, width of all bars)
    
   var y = d3.scale.linear()
      .range([height, 0]);
    
   var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom"); //placement of x axis labels
    
   var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left") //placement of y axis labels
      .tickFormat(formatInt);
    
   var svg = d3.select(".demoGraphJS").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    
   d3.tsv("demoData.tsv", function(error, data) {

      var length=data.map(function(d) { return d.index; }).length;
      console.log(length)

      x.domain(data.map(function(d) { return d.index; }));
      y.domain([0, d3.max(data, function(d) { return d.height; })]);
    
      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .append("text")
          .attr("y", 16)
          .attr("x", 430)
          .attr("dx", ".71em")
          .style("text-anchor", "end")
          .text("index");
    
      svg.append("g")
         .attr("class", "y axis")
         .call(yAxis)
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 6)
         .attr("dy", ".71em")
         .style("text-anchor", "end")
         .text("height");
    
      svg.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return x(d.index); })
         .attr("width", x.rangeBand())
         .attr("y", function(d) { return y(d.height); })
         .attr("height", function(d) { return height - y(d.height); })
      //    .attr("data-index",data.index);
      // console.log(svg.select(".bar").attr("data-index"))

      d3.select("input").on("change", change);

      var n = length, ii=0;//current state
      $('.forwardBtn').on("click", sort); 
      //$('.fastForwardBtn.').on("click", change);

      var sortTimeout = setTimeout(function() {
         d3.select("input").property("checked", true).each(change);
      }, 2000);
    

      function sort(){
         var x0 = x.domain(bubbleSort[length-n][ii].slice(0).reverse());
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };
    
         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });
    
         transition.select(".x.axis")
            .call(xAxis)
            .selectAll("g")
            .delay(delay);
         
         console.log(length-n,ii);

         //if n==1 and ii==n-2 -> done
         if(ii==n-2){
            ii=0;
            if(n>1){
               n-=1;
            }
           }
         else if(ii<n-2){
            ii+=1;
         }
      }

      function change() {
         clearTimeout(sortTimeout);
    
         // Copy-on-write since tweens are evaluated after a delay.
         var x0 = x.domain(data.sort(this.checked
            ? function(a, b) { return b.height - a.height; } //checked
            : function(a, b) { return b.index - a.index; })//unchecked
            .map(function(d) { return d.index; }))
            .copy();
    
         var transition = svg.transition().duration(750),
            delay = function(d, i) { return i * 50; };
    
         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });
    
         transition.select(".x.axis")
            .call(xAxis)
            .selectAll("g")
            .delay(delay);
      }
   });
}
