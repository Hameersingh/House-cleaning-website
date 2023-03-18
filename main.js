// header bg reveal
const headerBG = ()=>{
    const header = document.querySelector(".js-header")
    window.addEventListener("scroll",function(){
        if(this.scrollY>0){
            header.classList.add("bg-reveal");
        }
        else{
            header.classList.remove("bg-reveal");
        }
    });
};
headerBG();