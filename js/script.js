const button = document.getElementById("button-se")
const container = document.getElementById("container")
const sidebar = document.getElementById("sidebar")
let isSidebarVisible = true;

button.addEventListener("click",()=>{
    
    if (isSidebarVisible) {
       
        sidebar.style.opacity = "0";
        setTimeout(() => {
            sidebar.style.display = "none";
        }, 500);
        container.style.margin = "0";
        container.style.width = "100%";
    } else {
      
        sidebar.style.display = "block";
        setTimeout(() => {
            sidebar.style.opacity = "1";
        }, 110); 
        container.style.margin = "0px 0px 0px 270px";
        container.style.width = "auto";
    }

    isSidebarVisible = !isSidebarVisible;
})

const discord = document.getElementById("discord")

discord.addEventListener("click" , ()=>{
    window.open("https://panel.vyxterhost.com/monedas");
})
const tienda = document.getElementById("tienda")

tienda.addEventListener("click", ()=>{
    window.open("tienda.net")
})


