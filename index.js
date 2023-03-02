document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let btn = document.getElementById("btn");
    let input = document.getElementById("input");
    let tasks = document.getElementById("tasks");

    add = () => {
        if (input.value == "") {
            alert("Please add a task first");
        } else {
            let i = document.createElement("li");
            i.innerHTML = input.value;
            i.setAttribute("id", "del");
            tasks.appendChild(i);
            input.value = "";//this deletes the input so you dont have to
        }
        

        //this works very well, add event listener to the individual p element, then when you dbl click it 
        // it wil lbe removed
        let del = document.querySelectorAll("#del");
        for (var p = 0; p < del.length; p++){
            del[p].addEventListener("dblclick", function() {
                this.remove();//can only be done with this kind of functions 
            });
        }
    }

    
    btn.addEventListener("click", add);
    
    //so you can hit enter
    window.addEventListener("keydown", function (event) {
        if (13 == event.keyCode) {
           add();
        }
      });
}
