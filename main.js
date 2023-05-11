


const body = document.body;

function addlist(e) {
    e.preventDefault();
    let input = e.target.text.value;
    let div = document.createElement("div");
    
            let p = document.createElement("p");

            p.textContent = input;
   
            let button = document.createElement ("button")

            button.textContent = "Delete";
            div.appendChild(p);
            div.appendChild(button);
            body.appendChild(div);

            div.addEventListener('click',dele)
            
            e.target.text.value = '';
    

}

function dele() {
    console.log(this)
    this.remove();
   
}