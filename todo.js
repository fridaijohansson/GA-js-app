//creating two starting objects in an array ("fake database") 
let fakeDatabase = [{id:1, task:"First task", completed:false},{id:2, task:"Second task", completed:false}];  

//Calling for a function to render the output
renderFakedata();  

//The callback function addTask will run when the even submit occurs through an event listener that listens to the specified ID "taskForm"
document.getElementById("taskForm").addEventListener("submit", addTask);

//this callback function will add a new task when called
function addTask(event){

    //Stops the default event to take place
    event.preventDefault();

    //Getting the value of the ID "task" which is the text input
    let task = document.getElementById("task").value;

    //Adding the completed boolean
    let taskObject = {task: task, completed: false};

    //Pushing the new data into the Array created at row 2
    fakeDatabase.push(taskObject);

    //Recalls the render function of the output, this time with the new data
    renderFakedata();  

}

//Function to render the array to display in the browser
function renderFakedata(){

    //creating a copy of the array and displaying it with backticks through return -
    //with the callback function using the task object that will be displayed in the browser
    let output = fakeDatabase.map(function(object, index){

        return `
        <li class="container">
            <h1 class="newTask"> ${object.task} </h1>  
            <div class="buttons">
                <input type="checkbox" onclick="toggleComplete(this, ${index})" ${object.completed ? "checked" : ""}   >Completed</input>
                <button class="delete-btn" onclick="deleteTask(${index})">-</button>
            </div>
        </li>
        `;  
        
    });

    //Displaying the objects with an <hr> tag inbetween them for separation
    document.getElementById("todoList").innerHTML = output.reverse().join("<hr>");

}

//Callback function for deleting tasks/objects 
function deleteTask(index){

    //Splice takes the given object out of the array
    fakeDatabase.splice(index, 1);
    //Rerender the displayed array again without the spliced object
    renderFakedata();

}

//Function used to mark which task has been completed with a checkbox
function toggleComplete(el, index){

    console.log(el.checked,index);

    fakeDatabase[index].completed = el.checked;
    
    const item = document.querySelector("li");
    if(fakeDatabase[index].completed){
        item.classList.add('completed').el;
    } else {
        item.classList.remove('completed');
    }
}
    


   
    //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
    

