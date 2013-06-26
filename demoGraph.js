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

      //n: current for-loop (from length to 2), ii: index (from -1 to n-2 for each n)
      var n = length, ii=-1;
      var isPause=false;//whether stop is on
      var isPlaying=false;//whether it is playing
      var old1,old2;//temp values
      var startIndices=[];
      for(var i=0;i<length;i++){
         startIndices.push(i+1);
      }
console.log(bubbleSort[1][0])
      $('.forwardBtn').on("click", function stopPlayAndDoFoward(){forward();isPause=true;}); 
      $('.backwardBtn').on("click", backward); 
      $('.playBtn').on("click",play);
      $('.pauseBtn').on("click",pause);
      $('.fastForwardBtn').on("click", fastForward);
      $('.fastBackwardBtn').on("click",fastBackward);
       
      function play(){
         $(".playBtn").addClass("disabled");
         $(".pauseBtn").removeClass("disabled");
         
         isPlaying=true;

         setTimeout(function (){
            forward();
            if(!isPause&&(n>1||ii<n-2)){
               play();
            }else if(isPause){
               isPause=false;
            }
         }, 150);
      }

      function pause(){
         if(isPlaying){
            $(".playBtn").removeClass("disabled");
            $(".pauseBtn").addClass("disabled");
            isPause=true;isPlaying=false;
         }
      }

      function forward(){
         isPlaying=false;
         $(".playBtn").removeClass("disabled");
         $(".pauseBtn").removeClass("disabled");

         //if n==2 and ii==n-2 -> done
         if(ii==n-2){
            if(n>2){
               ii=0;
               n-=1;
            }else{
               //end
            }
           }
         else if(ii<n-2){
            ii+=1;
         }
        
         var indicesOrder=bubbleSort[length-n][ii].slice(0);
         var x0 = x.domain(indicesOrder); //calculates the width
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };
        
         var jj = length-n;
         

         svg.select("#ID"+old1).style("fill","#369DBB");
         svg.select("#ID"+old2).style("fill","#369DBB");
         svg.select("#ID"+indicesOrder[ii]).style("fill","#888888");
         svg.select("#ID"+(indicesOrder[ii+1])).style("fill","black");
         old1=indicesOrder[ii];
         old2=indicesOrder[ii+1];
          
         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });
         
         transition.select(".x.axis")
            .call(xAxis)
            .selectAll("g")
            .delay(delay);
         
         console.log(n,ii);
      }

      function backward(){
         isPause=true;isPlaying=false;
          $(".playBtn").removeClass("disabled");
          $(".pauseBtn").removeClass("disabled");
         //if n==length and ii==-1 -> done
         if(ii<=0){
            if(n<length){
               n+=1;
               ii=n-2;
            }else{
               //end
               ii=-1;
            }
           }
         else{
            ii-=1;
         }

         //if ii=n-2 means at the transition from i=0->i=n-2 
         //if ii=-1 means start
         if(ii==n-2){
            var indicesOrder=bubbleSort[length-n][ii].slice(0);
            svg.select("#ID"+old1).style("fill","#369DBB");
            svg.select("#ID"+old2).style("fill","#369DBB");
            svg.select("#ID"+indicesOrder[0]).style("fill","#888888");
            svg.select("#ID"+(indicesOrder[1])).style("fill","black");
            old1=indicesOrder[0];
            old2=indicesOrder[1];

         }else{
            if(ii>-1){
               var indicesOrder=bubbleSort[length-n][ii].slice(0);
            }
            else if(ii==-1){
               var indicesOrder=startIndices.slice(0);
            }

            svg.select("#ID"+old1).style("fill","#369DBB");
            svg.select("#ID"+old2).style("fill","#369DBB");
            svg.select("#ID"+indicesOrder[ii+1]).style("fill","#888888");
            svg.select("#ID"+(indicesOrder[ii+2])).style("fill","black");
            old1=indicesOrder[ii+1];
            old2=indicesOrder[ii+2];
         }
         var x0 = x.domain(indicesOrder);
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };

         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });
    
         transition.select(".x.axis")
            .call(xAxis)
            .selectAll("g")
            .delay(delay);
         
         console.log(n,ii);

      }
       
      function fastForward(){
         isPause=true;isPlaying=false;
         n=2;
         ii=n-2;//0

         var indicesOrder=bubbleSort[length-n][ii].slice(0)

         svg.select("#ID"+old1).style("fill","#369DBB");
         svg.select("#ID"+old2).style("fill","#369DBB");
         svg.select("#ID"+indicesOrder[0]).style("fill","#888888");
         svg.select("#ID"+(indicesOrder[1])).style("fill","black");
         old1=indicesOrder[0];
         old2=(indicesOrder[1]);

         var x0 = x.domain(indicesOrder);
    
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

      }
          
      function fastBackward(){
         isPause=true;isPlaying=false;
         n=length;
         ii=-1;

         var indicesOrder=startIndices.slice(0);

         svg.select("#ID"+old1).style("fill","#369DBB");
         svg.select("#ID"+old2).style("fill","#369DBB");

         var x0 = x.domain(indicesOrder);
    
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
      }
   });
}
