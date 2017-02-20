
//Global Varible 
var lose = 0;
var win = 0;
var crystalValue = Math.floor(Math.random() * (102)+ 19);
var gemArray = [];
var total = 0;

$(document).ready(function(){
	function gemFunc() {
		for (var i = 0; i < 4; i++){
		var gem = Math.floor(Math.random() * 12) + 1 ;
		gemArray.push(gem);
	  }	
	}
	gemFunc();
  //target number to match
  $(".numberToMatch").html(crystalValue);
    console.log(crystalValue);
		console.log(gemArray);

  $('.pic1').on("click", function(){
  //take the value and push it to total score
    var gem1value = gemArray[0];
    console.log(gem1value);
    total = total + gemArray[0];
    $(".score").html (total);
    checkit();
  });

  $('.pic2').on("click", function(){
  //take the value and push it to total score
    var gem2value = gemArray[1];
    console.log(gem2value);
    total = total + gemArray[1];
    $(".score").html (total);
    checkit();
  });

  $('.pic3').on("click", function(){
  //take the value and push it to total score
    var gem3value = gemArray[2];
    console.log(gem3value);
    total = total + gemArray[2];
    $(".score").html (total);
    checkit();
  });

  $('.pic4').on("click", function(){
  //take the value and push it to total score
    var gem4value = gemArray[3];
    console.log(gem4value);
    total = total + gemArray[3];
    $(".score").html (total);
    checkit();
  });
  //check to see if the crystal value === total for win/loss
  function checkit(){
    if(crystalValue===total){
      $(".winlossmessage").html("You won!");
      win=win+1;
      $(".wins").html(win);
      //reset the game
      reset();
    }
    else if (crystalValue < total){
      $(".winlossmessage").html("Sorry you lost!");
      lose=lose+1;
      $(".losses").html(lose);
      //reset the game
      reset();
    }

  };

  //reset the game
  function reset(){
    gemArray.length=0;
    gemFunc();
    crystalValue = Math.floor(Math.random() * (102)+ 19);
    $(".numberToMatch").html(crystalValue);
    total=0;
    $(".score").html(total);
    console.log(gemArray);
  }


});