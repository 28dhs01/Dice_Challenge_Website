
  var randomNumber1 = Math.random() ; // 0 - .99999
  randomNumber1 = randomNumber1*6 ; // 0 - 5.99999
  randomNumber1 = Math.floor(randomNumber1) ; // 0 - 5
  randomNumber1 = randomNumber1+1 ; // 1 - 6
  var randomNumber2 = Math.floor((Math.random()*6)) + 1 ;
  document.querySelector(".dice .img1").setAttribute("src","images/dice"+randomNumber1+".png");
  document.querySelector(".dice .img2").setAttribute("src","images/dice"+randomNumber2+".png");

  if( randomNumber1 < randomNumber2 ){
    document.querySelector("h1").innerHTML = "Player 2 wins ! 🚩" ;
  }else if( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins !" ;
  }else{
    document.querySelector("h1").innerHTML = "Draw !" ;
  }
