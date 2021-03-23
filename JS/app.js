let todoList = [
    
        {todo: "clone repo for starter code", status: "complete"},
        {todo: "changing to my repository", status: "complete"},
        {todo: "working on JS", status: "started"},
        {todo: "pushed final work to github", status: "started"}

]

let completedTodos = [];

for(let i = 0; i < todoList.length; i++){
    if(todoList[i].status == "complete"){
        completedTodos.push(todoList[i]);
    }
}
console.log(completedTodos)

for(let {todo} of completedTodos){
    console.log(todo)
}

