let list = document.querySelectorAll("ul li");
const icon =`<i class="fas fa-check"></i>`

for(let li of list) {
    li.addEventListener("click",function(){
        this.classList.toggle("active");

        if(this.classList.contains("active")){
          let myNew= this.innerText + icon;
            this.innerHTML=myNew;
        }else{
            this.innerHTML=this.innerText;
        }
    })
}