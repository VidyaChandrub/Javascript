/* const input_text = document.getElementById('text');

const todolist = document.getElementById('todo-list');

add.addEventListener("click",() => {
    if(input_text.value.trim().length == "")
        return;
    

    input_text.valu="";
})
 */

 document.querySelector('#add-btn').onclick = () => {
    if(document.querySelector('#input-box').value.length == 0){
        alert("please enter a task")
    }
 }