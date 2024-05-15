document.querySelector("#push").onclick =()=> {
  const taskInput = document.querySelector('#newtask input');
  if (taskInput.value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector("#newtask input").value}
            </span>
            <button class="delete">
            <i class="fa-solid fa-trash" style="color: #ffffff;"></i>
            </button>
        </div>
    `;

    taskInput.value='';


    let current_tasks = document.querySelectorAll(".delete");
    current_tasks.forEach(button=>{
      button.onclick = (e) => {
        e.currentTarget.parentNode.remove();
      }
    })

    let tasks = document.querySelectorAll(".task");
    tasks.forEach(task => {
      task.onclick = (e) => {
        if(e.target !== task.querySelector('.delete')){
          e.currentTarget.classList.toggle('completed');
        }
      }
    })
  }
};
