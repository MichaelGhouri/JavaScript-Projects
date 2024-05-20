let todo = [];

let req = prompt("Please enter your request");

while(true){
    if(req == "quit"){
        console.log("Quitting App");
        break;
    }
    else if(req == "list"){
        console.log("------Your Tasks------");
       for(let i = 0; i < todo.length; i++){
        console.log(i, todo[i]);
       }
       console.log("-----------------------");
    }
    else if(req == "add"){
        let ntask = prompt("Enter new task");
        todo.push(ntask);   
        console.log("New Task Added");
    }
    else if(req == "delete"){
        let idx = prompt("Enter the index of task");
        todo.splice(idx, 1);
        console.log("Task Deleted");
    }
    else{
        console.log("wrong command")
    }
    req = prompt("Please enter your request");
}