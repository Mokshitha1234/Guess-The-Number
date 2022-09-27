// random value generated
var y = Math.floor(Math.random()*10 + 1);
// counting the number of guesses
var x = document.getElementById("guessField").value;

if(x == y)
{
alert("CONGRATULATIONS!!!"+player_name+"YOU GUESSED RIGHT IN "  
          + guess + " GUESS ");
}
else if(x > y)
{
    guess++;
alert("OOPS SORRY!! TRY A SMALLER NUMBER")

}
else
{
    guess++;
alert("OOPS SORRY!! TRY A GREATER NUMBER")
    
}
// made for correct Guess

  
// function for number guessed by user     
function play_again(){
    y = Math.floor(Math.random()*10 + 1);
}