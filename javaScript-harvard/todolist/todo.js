let submitBtn = document.querySelector('#submit')
let task = document.querySelector('#task')
let form = document.querySelector('form')
let taskList = document.querySelector('#tasks')
document.addEventListener('DOMContentLoaded', function() {
    // to disable the submit button on page load
    submitBtn.disabled = true;

    // to enable it when there is a value in the input field
    task.onkeyup = () => {
        if (task.value !== '') {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    
   }


    form.onsubmit = (event) => {
        // to stop for default submission
        event.preventDefault();

        let newTask = task.value;
        //console.log(newTask);
       let li = document.createElement('li');
        li.innerHTML = newTask;

        taskList.appendChild(li);

        task.value = '';
       submitBtn.disabled = true;
    }

})