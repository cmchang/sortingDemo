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
    //  console.log(length)

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
         .attr("id",function(d){return "ID" + d.index;})
         .attr("class", "bar")
         .attr("x", function(d) {return x(d.index); })

         .attr("width", x.rangeBand())
         .attr("y", function(d) { return y(d.height); })
         .attr("height", function(d) { return height - y(d.height); })
      //    .attr("data-index",data.index);
      // console.log(svg.select(".bar").attr("data-index"))

      var n = length, ii=-1;//current state
      var isPause=false;//whether stop is on

      $('.forwardBtn').on("click", forward); 
      $('.backwardBtn').on("click", backward); 
      $('.playBtn').on("click",play);
      $('.pauseBtn').on("click",pause);
      //$('.fastForwardBtn.').on("click", change);

      function play(){
         $(".playBtn").attr("disabled", "disabled");
         setTimeout(function (){
            forward();
            if(!isPause&&(n>1||ii<n-2)){
               play();
            }else if(isPause){
               isPause=false;
            }
         }, 500);

      }

      function pause(){
         $(".pauseBtn").attr("disabled", "disabled");
         isPause=true;
         console.log(isPause);
      }

      function forward(){
         
         //if n==1 and ii==n-2 -> done
         if(ii==n-2){
            if(n>1){
               ii=0;
               n-=1;
            }else{
               //end
            }
           }
         else if(ii<n-2){
            ii+=1;
         }

         var x0 = x.domain(bubbleSort[length-n][ii].slice(0));
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };
         
         //d3.select("ID"+(parseInt(ii)+1)).attr("fill","red");

         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });
         
         transition.select(".x.axis")
            .call(xAxis)
            .selectAll("g")
            .delay(delay);
         
         console.log(length-n,ii);
      }

      function backward(){

         //if n==length and ii==0 -> done
         if(ii==0){
            if(n<length){
               ii=n-2;
               n+=1;
            }else{
               //end
            }
           }
         else if(ii>0){
            ii-=1;
         }

         var x0 = x.domain(bubbleSort[length-n][ii].slice(0));
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };
         
         //d3.select("ID"+(parseInt(ii)+1)).attr("fill","red");

         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });
    
         transition.select(".x.axis")
            .call(xAxis)
            .selectAll("g")
            .delay(delay);
         
         console.log(length-n,ii);

      }

      function change() {    
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
