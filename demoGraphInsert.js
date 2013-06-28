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
         .attr("transform", "translate(0," + height + ")")
         .call(xAxis)
         .attr("class", "x axis")
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

      //n: current for-loop (from 1 to length-1), ii: means we are in the iith step of the loop (from 0 to insertSort[n].length-1)

      var n = 0,ii=-1;
      var isPause=false;//whether stop is on
      var isPlaying=false;//whether it is playing
      var old1,old2;//temp values
      var startIndices=[];

      for(var i=0;i<length;i++){
         startIndices.push(i+1);
      }

      $('.forwardBtn').on("click", function stopPlayAndDoFoward(){forward();isPause=true;}); 
      $('.backwardBtn').on("click", backward); 
      $('.playBtn').on("click",play);
      $('.pauseBtn').on("click",pause);
      $('.fastForwardBtn').on("click", fastForward);
      $('.fastBackwardBtn').on("click",fastBackward);
       
      $('.descendBtn').on("click",descending);
      $('.ascendBtn').on("click",ascending);
      
      function ascending(){
         fastBackward();
         $(".ascendBtn").addClass("disabled");
         $(".descendBtn").removeClass("disabled");
         insertSort=insertSort1.slice(0);
      }
      function descending(){
         fastBackward();
         $(".descendBtn").addClass("disabled");
         $(".ascendBtn").removeClass("disabled");
         insertSort=insertSort2.slice(0);
      }

      function play(){
         $(".playBtn").addClass("disabled");
         $(".pauseBtn").removeClass("disabled");
         
         isPlaying=true;

         setTimeout(function (){
            forward();
            if(!isPause&&(n<length-1||ii<insertSort[n].length-1)){
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

         //n: current for-loop (from 1 to length-1), ii: means we are in the iith step of the loop (from 0 to insertSort[n].length)
         if(ii>=insertSort[n].length-1){
            if(n<length-1){
               n+=1;
               ii=0;
            }else{
               //end
            }
         }else{
            ii+=1;
         }

         if(insertSort[n].length>ii){
            var indicesOrder=insertSort[n][ii].slice(0);

            var x0 = x.domain(indicesOrder); //calculates the width
       
            var transition = svg.transition().duration(75),
               delay = function(d, i) { return i * 20; };
                    
            //coloring graph
            //svg.select("#ID"+old1).style("fill","#369DBB");
            svg.select("#ID"+old2).style("fill","black");
            if(!(ii==insertSort[n].length-1 && n==length-1)){
               svg.select("#ID"+indicesOrder[n-ii-1]).style("fill","#888888");
            }
            svg.select("#ID"+(indicesOrder[n-ii])).style("fill","black");
            //old1=indicesOrder[n-ii];
            old2=indicesOrder[n-ii-1];
             
            //highlighting lines of code
            //display: i=length-n+1 , j=ii+1
            $('.line2').text("//current value of n = "+n + ", i =  " + (n-ii) + "          ");

            transition.selectAll(".bar")
               .delay(delay)
                     .attr("x", function(d,i) {return x0(d.index); });
         }else{
            svg.select("#ID"+(ii+1)).style("fill","black");
            //svg.select("#ID"+(ii+2)).style("fill","#888888");            
         }
         //don't want to swap indices
         // transition.select(".x.axis")
         //    .call(xAxis)
         //    .selectAll("g")
         //    .delay(delay);
         console.log(n,ii);
      }

      function backward(){
         isPause=true;
         setTimeout(function (){
            isPause=false;
         }, 50)
         isPlaying=false;
          $(".playBtn").removeClass("disabled");
          $(".pauseBtn").removeClass("disabled");
         
         //n: current for-loop (from 1 to length-1), ii: means we are in the iith step of the loop (from 0 to insertSort[n].length)

         //end n=1, ii=0
         if(ii<=0){
            if(n>1){
               n-=1;
               ii=insertSort[n].length-1;
            }else{
               //end
               n=0;
               ii=-1;
            }
         }else{
            ii-=1;
         }

         if(ii==insertSort[n].length-1&&n>=1){
            var indicesOrder=insertSort[n][ii].slice(0);
            //svg.select("#ID"+old1).style("fill","#369DBB");
            //svg.select("#ID"+old2).style("fill","#369DBB");
            svg.select("#ID"+indicesOrder[n+1]).style("fill","#369DBB");
            //svg.select("#ID"+(indicesOrder[1])).style("fill","black");
            //old1=indicesOrder[0];
            //old2=indicesOrder[1];

         }else{
            if(n>1){
               var indicesOrder=insertSort[n][ii].slice(0);
            }
            else{
               var indicesOrder=startIndices.slice(0);
            }

            //svg.select("#ID"+old1).style("fill","#369DBB");
            svg.select("#ID"+old2).style("fill","#black");
            svg.select("#ID"+indicesOrder[n-ii-1]).style("fill","#888888");
            svg.select("#ID"+(indicesOrder[n-ii])).style("fill","black");
            //old1=indicesOrder[n-ii];
            old2=indicesOrder[n-ii-1];
         }

         //highlighting lines of code
         //display: i=length-n+1 , j=ii+1
         $('.line2').text("//current value of n = "+n+ ", i =  " + (n-ii) + "          ");

         var x0 = x.domain(indicesOrder);
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };

         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });
    
         //don't want to swap indices
         // transition.select(".x.axis")
         //    .call(xAxis)
         //    .selectAll("g")
         //    .delay(delay);
         
         console.log(n,ii);

      }
       
      function fastForward(){
         isPause=true;
         setTimeout(function (){
            isPause=false;
         }, 50)
         isPlaying=false;
         n=length-1;
         ii=insertSort[n].length-1;

         var indicesOrder=insertSort[n][ii].slice(0)

         svg.selectAll(".bar").style("fill","black");


         //highlighting lines of code
         $('.line2').text("//current value of n = "+ n + ", ii =  " + (n-ii) + "          ");

         var x0 = x.domain(indicesOrder);
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };
         
         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });

         //don't want to swap indices
         // transition.select(".x.axis")
         //    .call(xAxis)
         //    .selectAll("g")
         //    .delay(delay);

      }
          
      function fastBackward(){
         isPause=true;
         setTimeout(function (){
            isPause=false;
         }, 50)
         isPlaying=false;
         n=0;
         ii=-1;

         var indicesOrder=startIndices.slice(0);

         svg.selectAll(".bar").style("fill","#369DBB");

         //highlighting lines of code
         //display: i=length-n+1 , j=ii+1
         $('.line2').text("         //current value of n = "+n + ", i =  " + (n-ii) + "          ");

         var x0 = x.domain(indicesOrder);
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };
         
         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });

   //don't want to swap indices
         //transition.select(".x.axis")
            // .call(xAxis)
            // .selectAll("g")
            // .delay(delay);
         console.log(n,ii);

      }
   });
}
