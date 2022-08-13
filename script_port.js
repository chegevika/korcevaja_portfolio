let menu = document.querySelector('#menu-bars');

let headering = document.querySelector('#header');
console.log(headering);

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    headering.classList.toggle('nazhat'); 
}

window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    headering.classList.remove('nazhat');
};

// эффекты на курсор
let cursor1 = document.querySelector('#cursor-1');
let cursor2 = document.querySelector('#cursor-2');

document.addEventListener("mousemove", function(e){
    cursor1.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " +e.clientY + "px;";
})
//убираем эффекты с ссылок

document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter = () =>{
     
        cursor2.classList.add('nazhat1');
    }

    links.onmouseleave = () =>{
  
    cursor2.classList.remove('nazhat1');
   }
} )