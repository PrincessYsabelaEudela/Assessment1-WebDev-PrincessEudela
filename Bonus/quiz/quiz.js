function result(){
    var score = 0;
    if (document.getElementById('right1').checked){
        score++;
    }
    if (document.getElementById('right2').checked){
        score++;
    }
    if (document.getElementById('right3').checked){
        score++;
    }

    if (score==3){
        document.write("Your score is: " + score + "/3 Excellent!")
        document.write
    }
    if (score==2){
        document.write("Your score is: ", score, "/3 Good Job!")
    }
    if (score==1){
        document.write("Your score is: ", score, "/3 Do better")
    }
    if (score==0){
        document.write("Your score is: ", score, "/3 Revise your lessons")
    }
}
