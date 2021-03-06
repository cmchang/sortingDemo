$(document).ready(function(){
   $('.demoGraphJS').each(function(){
         setup_Graph(this);
         
      });
});




function setup_Graph(){
//    $( "#slider" ).slider();
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
         .text("value");
    
      svg.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("id",function(d){return "ID" + d.index;})
         .attr("class", "bar")
         .attr("x", function(d) {return x(d.index); })

         .attr("width", x.rangeBand())
         .attr("y", function(d) { return y(d.height); })
         .attr("height", function(d) { return height - y(d.height); })
      
      //n: current for-loop (from length to 2), ii: index (from -1 to n-2 for each n)
      var n = length, ii=-1;
      var isPause=false;//whether stop is on
      var isPlaying=false;//whether it is playing
      var old1,old2;//temp values
      var startIndices=[];
      var dataArray = data.map(function(d){return d.height});
      var bubbleSort=bubbleSort1.slice(0);

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
         bubbleSort=bubbleSort1.slice(0);
      }
      function descending(){
         fastBackward();
         $(".descendBtn").addClass("disabled");
         $(".ascendBtn").removeClass("disabled");
         bubbleSort=bubbleSort2.slice(0);
      }

      function play(){
         $(".playBtn").addClass("disabled");
         $(".pauseBtn").removeClass("disabled");
         
         isPlaying=true;

         setTimeout(function (){
            forward();
            if(!isPause&&(n>2||ii<n-2)){
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
                 
         //coloring graph
         svg.select("#ID"+old1).style("fill","#369DBB");
         svg.select("#ID"+old2).style("fill","#369DBB");
         svg.select("#ID"+indicesOrder[ii]).style("fill","#888888");
         svg.select("#ID"+(indicesOrder[ii+1])).style("fill","black");
         old1=indicesOrder[ii];
         old2=indicesOrder[ii+1];
          
          
         //change table on html page
          
          var temp1 = dataArray[indicesOrder[ii+1]-1];
          var temp2 = dataArray[indicesOrder[ii]-1]
          var iiplus1 = ii+1;
          for (var xx = 0; xx < dataArray.length; xx++){
              $(".index" + xx).css("color", "black");}

          $(".index" + ii).text(temp2).css("color", "#369DBB");
          $(".index" + iiplus1).text(temp1).css("color", "#1c728e");
                  


          //highlighting lines of code
         //display: i=length-n+1 , j=ii+1
         $('.line7').text("         //current value of i = "+(length-n+1) + ", j =  " + (ii+1) + "          ");

         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d,i) {return x0(d.index); });
      }

      function backward(){

         isPause=true;
         setTimeout(function (){
            isPause=false;
         }, 50)

         isPlaying=false;
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

          
        //change table on html page
          var iiplus1 = ii+1;
          var iiplus2 = ii+2;
          var temp1 = dataArray[indicesOrder[iiplus1]-1];
          var temp2 = dataArray[indicesOrder[iiplus2]-1]
        
          for (var xx = 0; xx < dataArray.length; xx++){
              $(".index" + xx).css("color", "black");}

          $(".index" + iiplus2).text(temp2).css("color", "#369DBB");
          $(".index" + iiplus1).text(temp1).css("color", "#1c728e");
          
          
          
                  
         //highlighting lines of code
         //display: i=length-n+1 , j=ii+1
         $('.line7').text("         //current value of i = "+(length-n+1) + ", j =  " + (ii+1) + "          ");

         var x0 = x.domain(indicesOrder);
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };

         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });
      }
       
      function fastForward(){
         isPause=true;
         setTimeout(function (){
            isPause=false;
         }, 50)
         
         isPlaying=false;
         n=2;
         ii=n-2;

         var indicesOrder=bubbleSort[length-n][ii].slice(0)

         svg.select("#ID"+old1).style("fill","#369DBB");
         svg.select("#ID"+old2).style("fill","#369DBB");
         svg.select("#ID"+indicesOrder[0]).style("fill","#888888");
         svg.select("#ID"+(indicesOrder[1])).style("fill","black");
         old1=indicesOrder[0];
         old2=(indicesOrder[1]);

         //highlighting lines of code
         //display: i=length-n+1 , j=ii+1
         $('.line7').text("         //current value of i = "+(length-n+1) + ", j =  " + (ii+1) + "          ");

         var x0 = x.domain(indicesOrder);
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };
         
         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });
          
          //changes table
          for (var xx = 0; xx < dataArray.length; xx++){
              $(".index" + xx).text(dataArray[indicesOrder[xx]-1]).css("color", "black"); ////change indicesOrder
          }

      }
          
      function fastBackward(){ //refresh icon
         isPause=true;
         setTimeout(function (){
            isPause=false;
         }, 200)
         
         isPlaying=false;
         n=length;
         ii=-1;

         var indicesOrder=startIndices.slice(0);

         svg.select("#ID"+old1).style("fill","#369DBB");
         svg.select("#ID"+old2).style("fill","#369DBB");

         //highlighting lines of code
         //display: i=length-n+1 , j=ii+1
         $('.line7').text("         //current value of i = "+(length-n+1) + ", j =  " + (ii+1) + "          ");

         var x0 = x.domain(indicesOrder);
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };
         
         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });

          //changes table
          for (var xx = 0; xx < dataArray.length; xx++){
              $(".index" + xx).text(dataArray[xx]).css("color", "black"); ////change indicesOrder
          }
          
      }
   });
}
