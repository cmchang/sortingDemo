//This js file currently only has js to make the "test your understanding" section have functional buttons and adds the next question if the previous one is correct


//For Question 1
$(".Q1btn").on("click", checkAnswer1);
function checkAnswer1(){
    if($(".Q1input").val() == "8"){
        $(".Q1result").html('<i class = "icon-ok"></i>');
        $(".Q2Area").html('<span class = "Q2">2. Re-type line 8 so that the list will sort in descending order.</span>'+
                          '<br><input class = "Q2input" type = "text" placeholder="Type the new code for line 8" style = "height:35px;">'+
                          '<a class = "btn btn-small Q2btn">Submit</a><span class ="Q2result"></span><br>');
        Q2activate();
    }else{
        $(".Q1result").html('<i class = "icon-remove"></i>');   
    }

}


//For question 2
var Q2soln = ["if (bList[j] < bList[j+1])", "if(bList[j]<bList[j+1])", "if(bList[j] < bList[j+1])","if(bList[j]< bList[j+1])", "if(bList[j] <bList[j+1])", "if (bList[j]< bList[j+1])", "if (bList[j] <bList[j+1])"]; //some varied spacing

function Q2activate(){
    $(".Q2btn").on("click", checkAnswer2);
    function checkAnswer2(){
        if(Q2soln.indexOf($(".Q2input").val()) >= 0){
            $(".Q2result").html('<i class = "icon-ok"></i>');
        }else{
            $(".Q2result").html('<i class = "icon-remove"></i>');   
        }
    }
}
