const favourite = "naruto";

let guess = prompt("Guess my favourite Anime: ");

while(guess != favourite)
    {
        
    if(guess == "quit"){
        console.log("You Quit");
        break;
    }

    guess = prompt("Good Guess. Try Again!!");
}

if(guess == favourite){
    console.log("Congrats!! you guessed it right");
}