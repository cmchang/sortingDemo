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


      //n: current for-loop (from 1 to length-1), ii: means we are in the iith step of the loop (from 0 to insertSort[n].length-1)
      var n = 0,ii=-1;
      var isPause=false;//whether stop is on
      var isPlaying=false;//whether it is playing
      var old;//temp values
      var startIndices=[];
      var insertSort=insertSort1.slice(0);
      var oldK=-1;
      var dataArray = data.map(function(d){return d.height});

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

            var x0 = x.domain(indicesOrder); //calculates the widt
            var transition = svg.transition().duration(75),
               delay = function(d, i) { return i * 20; };
                    
            //coloring graph
            svg.select("#ID"+old).style("fill","black");
            if(!(ii==insertSort[n].length-1 && n==length-1)){
               svg.select("#ID"+indicesOrder[n-ii-1]).style("fill","#888888");
            }
            svg.select("#ID"+(indicesOrder[n-ii])).style("fill","black");
            old=indicesOrder[n-ii-1];
             
            //highlighting lines of code
            //display: i=length-n+1 , j=ii+1
            $('.line2').text("//current value of n = "+n + ", i =  " + (n-ii) + "          ");

            //change table on html page
            var k = n-ii;
            var temp1 = dataArray[indicesOrder[k-1]-1];
            var temp2 = dataArray[indicesOrder[k]-1];

            $(".index"+oldK).css("color","#1c728e");
            $(".index" + (k-1)).text(temp1).css("color", "#369DBB");
            $(".index" + k).text(temp2).css("color", "#1c728e");
            oldK=k-1;

            transition.selectAll(".bar")
               .delay(delay)
                     .attr("x", function(d,i) {return x0(d.index); });
         }else{
            svg.select("#ID"+(ii+1)).style("fill","black");
            $(".index" + 0).text(temp1).css("color", "#1c728e");
         }
      }

      function decrement(n,ii){
         if(ii<=0){
            if(n>1){
               n-=1;
               if(insertSort[n].length==0){
                  console.log(n+1)
                  svg.select("#ID"+(n+2)).style("fill","#369DBB");

                  var temp1 = dataArray[n];
                  var temp2 = dataArray[n+1];
                  $(".index" + (n)).text(temp1).css("color", "#369DBB");
                  $(".index" + (n+1)).text(temp2).css("color", "black");

                  a=decrement(n,ii);
                  n=a[0];
                  ii=a[1];
               }else{
                  ii=insertSort[n].length-1;
               }
            }else{
               //end
               n=0;
               ii=-1;
            }
         }else{
            ii-=1;
         }
         return [n,ii];
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
         a=decrement(n,ii);
         n=a[0];
         ii=a[1];
         
         old=-1
         oldK=-1;
         console.log(n,ii);
         if(ii==insertSort[n].length-1&&n>=1){
            var indicesOrder=insertSort[n][ii].slice(0);
            svg.select("#ID"+indicesOrder[n+1]).style("fill","#369DBB");

            var temp1 = dataArray[indicesOrder[n]-1];
            var temp2 = dataArray[indicesOrder[n+1]-1];
            $(".index" + (n)).text(temp1).css("color", "#1c728e");
            $(".index" + (n+1)).text(temp2).css("color", "black");
         }else{
            if(n>1){
               var indicesOrder=insertSort[n][ii].slice(0);
               svg.select("#ID"+indicesOrder[n-ii-1]).style("fill","#888888");
               svg.select("#ID"+(indicesOrder[n-ii])).style("fill","black");

               //change table on html page
               var k = n-ii;
               var temp1 = dataArray[indicesOrder[k-1]-1];
               var temp2 = dataArray[indicesOrder[k-2]-1];

               $(".index" + (k-1)).text(temp1).css("color", "#369DBB");
               $(".index" + (k-2)).text(temp2).css("color", "#1c728e");
            }
            else{
               var indicesOrder=startIndices.slice(0);
               svg.select("#ID"+1).style("fill","#369DBB");
               svg.select("#ID"+2).style("fill","#369DBB");
               $(".index" + 0).text(dataArray[0]).css("color", "black");
               $(".index" + 1).text(dataArray[1]).css("color", "black");
            }


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

         for (var xx = 0; xx < dataArray.length; xx++){
            $(".index" + xx).text(dataArray[indicesOrder[xx]-1]).css("color", "#1c728e"); ////change indicesOrder
         }

         //highlighting lines of code
         $('.line2').text("//current value of n = "+ n + ", ii =  " + (n-ii) + "          ");

         var x0 = x.domain(indicesOrder);
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };
         
         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });
      }
          
      function fastBackward(){
         old=-1;
         oldK=-1;
         isPause=true;
         setTimeout(function (){
            isPause=false;
         }, 200)
         isPlaying=false;
         n=0;
         ii=-1;

         var indicesOrder=startIndices.slice(0);

         svg.selectAll(".bar").style("fill","#369DBB");

         //highlighting lines of code
         //display: i=length-n+1 , j=ii+1
         $('.line2').text("         //current value of n = "+n + ", i =  " + (n-ii) + "          ");

         for (var xx = 0; xx < dataArray.length; xx++){
            $(".index" + xx).text(dataArray[xx]).css("color", "black"); ////change indicesOrder
         }

         var x0 = x.domain(indicesOrder);
    
         var transition = svg.transition().duration(75),
            delay = function(d, i) { return i * 20; };
         
         transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.index); });
      }
   });
}
