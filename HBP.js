


let button1 = document.querySelector("#button1");
button1.addEventListener("click", resultsPage1);

let button2 = document.querySelector("#button2");
button2.addEventListener("click", resultsPage2);

let button3 = document.querySelector("#button3");
button3.addEventListener("click", resultsPage3);

let revert = document.querySelector("#revert");
revert.addEventListener("click", revertPage);




function resultsPage1() { 
  document.getElementById("mainFrameOne").style.display="none"; 
  document.getElementById("headertext1").style.display="none";
  document.getElementById("mainFrameTwo").style.display="block"; 
  document.getElementById("revert").style.display="block";

  
  document.getElementById("imgPlayer").src = "https://previews.123rf.com/images/saphatthachat/saphatthachat1805/saphatthachat180500171/102007681-vector-pixel-art-hunter-isolated-cartoon.jpg";
  
  let robot = Math.floor(Math.random()*3)+1; 
    switch(robot){
      case(1):
        result = "Tie!";
        document.getElementById("imgRobot").src = "https://previews.123rf.com/images/saphatthachat/saphatthachat1805/saphatthachat180500171/102007681-vector-pixel-art-hunter-isolated-cartoon.jpg";
        break;
      case(2):
        result = "You Won!";
        document.getElementById("imgRobot").src = "http://pixelartmaker.com/art/d2dc9caaef73f10.png";
        break;
      case(3):
        result = "You Lost!"
        document.getElementById("imgRobot").src = "http://pixelartmaker.com/art/7a40d068e7d71de.png";
        break;
    }
}

function resultsPage2() { 
  document.getElementById("mainFrameOne").style.display="none"; 
  document.getElementById("headertext1").style.display="none";
  document.getElementById("mainFrameTwo").style.display="block"; 
  document.getElementById("revert").style.display="block";

  
  document.getElementById("imgPlayer").src = "http://pixelartmaker.com/art/d2dc9caaef73f10.png";
  
  let robot = Math.floor(Math.random()*3)+1; 
    switch(robot){
      case(1):
        result = "You Lost!";
        document.getElementById("imgRobot").src = "https://previews.123rf.com/images/saphatthachat/saphatthachat1805/saphatthachat180500171/102007681-vector-pixel-art-hunter-isolated-cartoon.jpg";
        break;
      case(2):
        result = "Tie!";
        document.getElementById("imgRobot").src = "http://pixelartmaker.com/art/d2dc9caaef73f10.png";
        break;
      case(3):
        result = "You Won!"
        document.getElementById("imgRobot").src = "http://pixelartmaker.com/art/7a40d068e7d71de.png";
        break;
    }
}

function resultsPage3() { 
  document.getElementById("mainFrameOne").style.display="none"; 
  document.getElementById("headertext1").style.display="none";
  document.getElementById("mainFrameTwo").style.display="block"; 
  document.getElementById("revert").style.display="block";

  
  document.getElementById("imgPlayer").src = "http://pixelartmaker.com/art/7a40d068e7d71de.png";
  
  let robot = Math.floor(Math.random()*3)+1; 
    switch(robot){
      case(1):
        result = "You Won!";
        document.getElementById("imgRobot").src = "https://previews.123rf.com/images/saphatthachat/saphatthachat1805/saphatthachat180500171/102007681-vector-pixel-art-hunter-isolated-cartoon.jpg";
        break;
      case(2):
        result = "You Lost!";
        document.getElementById("imgRobot").src = "http://pixelartmaker.com/art/d2dc9caaef73f10.png";
        break;
      case(3):
        result = "Tie!"
        document.getElementById("imgRobot").src = "http://pixelartmaker.com/art/7a40d068e7d71de.png";
        break;
    }
}


function revertPage() { 
  document.getElementById("mainFrameOne").style.display="inline-flex"; 
  document.getElementById("headertext1").style.display="block";
  document.getElementById("mainFrameTwo").style.display="none"; 
  document.getElementById("revert").style.display="none";
}





    
 
    
    


