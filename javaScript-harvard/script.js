let h1 = document.querySelector('h1'); 
let counter = 0;
function hello() {
    
    if(h1.innerHTML === 'Hello!') {
        h1.innerHTML = 'Goodbye!';
    } else {
        h1.innerHTML = 'Hello!';
    }
}
// document.addEventListener('DOMContentLoaded', function() {
//         document.getElementById('count-btn').onclick = count;
// });
 
document.querySelector('#count-btn').addEventListener('click', count)

// to check if there is a counter value in the local storage
if(!localStorage.getItem('counter')) { // if ther is no value of counter in the local storage
    localStorage.setItem('counter', 0); // then set the value of counter to Zero
}

function count() {
    let counter = localStorage.getItem('counter'); // to get the counter value from the local storage
    counter ++;
    document.querySelector('p').innerHTML = counter;
    localStorage.setItem('counter', counter); //  to save the new counter value in the local storage; 
    if(counter % 10 === 0) {
        // alert('paused');
        document.querySelector('p').innerHTML = `The counter is now ${counter}`;
    }   
};
document.querySelector('p').innerHTML = localStorage.getItem('counter');
//setInterval(count,  1000);

//this
// {
//         document.querySelector('form').onsubmit = function(e) {
//         // prevent page refresh on form submit
//         e.preventDefault();
//     h1.innerHTML = "Hello," + (document.querySelector('#name').value);
//     }
//     let coloredHeading = document.querySelector('#color');
//     document.querySelector('#red').onclick = function() {
//         coloredHeading.style.color = 'red';
//     };
//     document.querySelector('#green').onclick = function() {
//         coloredHeading.style.color = 'green';
//     }
//     document.querySelector('#yellow').onclick = function() {
//         coloredHeading.style.color = 'brown';
//     }
// } can also be written as:

// document.querySelectorAll('.btn').forEach(button => {
//     button.onclick = () => {
//         document.querySelector('#color').style.color = button.dataset.color;
//     }   
// })
 
// for yhe select tag
document.querySelector('select').onchange = function() {
    document.querySelector('#color').style.color = this.value;
}

