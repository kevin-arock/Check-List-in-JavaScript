
const taskInput = document.querySelector('.task');
const container = document.querySelector('.container');
const tasks = ["Gym","Grocery Shopping"];
let checks;
let lastChecked;

function checkList(e){
    console.log("hii");
    let inbt = false;
    if(e.shiftKey && this.checked){
        checks.forEach((ck)=>{
            if(ck === this || ck === lastChecked){
                inbt = !inbt;
            }

            if(inbt){
                console.log(ck);
                ck.checked = true;
            }
        })
    }
    lastChecked = this;
}



function addTask(){
    tasks.push(taskInput.value);
    display();
   
}


function display(){
    let html = ``;
    tasks.forEach((task)=>{
        html+=`<div class="item">
                    <input type="checkbox">
                    <p>${task}</p>
                </div>`
        ;
    });

    container.innerHTML = html;
    checks = document.querySelectorAll('.container input[type="checkbox"]');
    checks.forEach((ck)=>{
        ck.addEventListener('click',checkList);
    });
    console.log(checks);
}
display();


