let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
var date = document.getElementById("ab")
function clock() {
  var dt ;
  dt= new Date().toString()
   date.textContent = dt.split(' ').slice(0, 5).join(' ')
  
}

setInterval(clock, 1000);
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
function h4()
{
    document.getElementById("contact").style.display = "block";

    document.getElementById("Education").style.display = "none";

    document.getElementById("home").style.display = "none";

    document.getElementById("Gallery").style.display="none";
    document.getElementById("about").style.display = "none";

}


function h1()
{
    document.getElementById("contact").style.display = "none";

    document.getElementById("Education").style.display = "none";

    document.getElementById("home").style.display = "none";

    document.getElementById("Gallery").style.display="none";
    document.getElementById("about").style.display = "block";
}

function h3()
{
    document.getElementById("contact").style.display = "none";

    document.getElementById("Education").style.display = "none";

    document.getElementById("home").style.display = "none";

    document.getElementById("Gallery").style.display="";
    document.getElementById("about").style.display = "none";

}

function h2()
{
    
    document.getElementById("contact").style.display = "none";

    document.getElementById("Education").style.display = "block";

    document.getElementById("home").style.display = "none";

    document.getElementById("Gallery").style.display="none";
    document.getElementById("about").style.display = "none";

}
function h()
{

    document.getElementById("contact").style.display = "none";

    document.getElementById("Education").style.display = "none";

    document.getElementById("home").style.display = "block";

    document.getElementById("Gallery").style.display="none";
    document.getElementById("about").style.display = "none";
}
h();

//home
//about
//Education
//Gallery
//contact
