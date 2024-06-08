const max = prompt("Enter the max number");
const random = Math.floor(Math.random() * max);

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }

    if(guess == random){
        console.log("You are correct!!! Congratulations. Your random number was", random);
        break;
    } else if(guess > random){
        guess = prompt("Hint: number is smaller than this guess. Try Again!! ");
    } else{
        guess = prompt("Hint: number is Larger than this guess. Try Again!! ");
    }
}