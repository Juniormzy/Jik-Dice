function getName(){

    var userName = document.getElementById('userName').value;
  
  
    if(userName == ''){
      document.getElementById("demo").innerHTML = "Name empty";
  
    }
    else{
  
      document.getElementById("demo").innerHTML = "Name saved ";
      document.getElementsByClassName("user1").innerHTML = userName;
      // document.getElementById("userNm").innerHTML = userName;
      // document.getElementById('userNm1').innerHTML = userName;
      // document.getElementById('userNm2').innerHTML = userName;
            // Set Item

            localStorage.setItem("Username", userName);
            // Retrieve
            document.getElementById("demo").innerHTML = localStorage.getItem("lastname");
  
    setInterval(
    function getName(){
    
     document.getElementById("sec-modal").style.display = "none";

     document.getElementById('userNm').innerHTML = localStorage.getItem("Username");
     document.getElementById('userNm1').innerHTML = localStorage.getItem("Username");
     document.getElementById('userNm2').innerHTML = localStorage.getItem("Username");
     },
    4000
  );
    }
  
  }
 







  function getUserRandomNumber(){
    var getRandomNumUser = Math.floor(Math.random () *6) +1;
    var imgSrcUser = './images/dice' + getRandomNumUser + '.png'; 
    document.getElementById('img1').src = imgSrcUser;
    //  document.getElementById('userScore').innerHTML = getRandomNumUser;
  
    }
  
    function getComRandomNumber() {
    var getRandomNumCom = Math.floor(Math.random () *6) +1;
   var imgSrcCom = './images/dice' + getRandomNumCom + '.png'; 
   document.getElementById('comImg').src = imgSrcCom;
  // document.getElementById('comScore').innerHTML = getRandomNumCom;
    }
    function celebration(){
        for(i=0; i<100; i++) {
           // Random rotation
          var randomRotation = Math.floor(Math.random() * 360);
           // Random Scale
           var randomScale = Math.random() * 1;
           // Random width & height between 0 and viewport
          var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
          var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
                                          
           // Random animation-delay
          var randomAnimationDelay = Math.floor(Math.random() * 15);
           
  
            // Random colors
             var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
             // Create confetti piece
             var confetti = document.createElement('div');
          confetti.className = 'confetti';
            confetti.style.top=randomHeight + 'px';
            confetti.style.right=randomWidth + 'px';
            confetti.style.backgroundColor=randomColor;
           // confetti.style.transform='scale(' + randomScale + ')';
           confetti.style.obacity=randomScale;
           confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
          confetti.style.animationDelay=randomAnimationDelay + 's';
         var confetti_wrapper=   document.getElementById("confetti-wrapper").appendChild(confetti);
  
    }
    }
  
  function getImg(){
    var getRandomNumUser = Math.floor(Math.random () *6) +1;
    var imgSrcUser = './images/dice' + getRandomNumUser + '.png'; 
    document.getElementById('img1').src = imgSrcUser;
    //  document.getElementById('userScore').innerHTML = getRandomNumUser;
     
  
      var getRandomNumCom = Math.floor(Math.random () *6) +1;
   var imgSrcCom = './images/dice' + getRandomNumCom + '.png'; 
   document.getElementById('comImg').src = imgSrcCom;
  // document.getElementById('comScore').innerHTML = getRandomNumCom;



      
      
      if (getRandomNumCom> getRandomNumUser) {
    
        document.getElementById('modawinningAnimationl').style.display = "none";
        document.getElementById('modawinningAnimationlLost').style.display = "block";
        IMG_ANI = document.getElementById('img1');
        IMG_ANI.classList.add("face");
        document.getElementById("confetti-wrapper").style.display = 'none';



      }
      else if(getRandomNumCom <getRandomNumUser){
        document.getElementById('modawinningAnimationl').style.display = "block";
        document.getElementById('modawinningAnimationlLost').style.display = "none";
        celebration(); 
        IMG_ANI = document.getElementById('img1');
        IMG_ANI.classList.add("face");
        document.getElementById("confetti-wrapper").style.display = 'block';
    } 
      else{
        document.getElementById('modawinningAnimationl').style.display = "block";
        document.getElementById('modawinningAnimationlLost').style.display = "none";
        IMG_ANI = document.getElementById('img1');
        IMG_ANI.classList.add("face");
        document.getElementById("confetti-wrapper").style.display = 'none';
            
  
      }
  
  
  
    }
    
  