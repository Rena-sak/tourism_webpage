var menuBtn=document.getElementById("menuBtn")
var navbar=document.getElementById("navbar")
var menu=document.getElementById("menu")

navbar.style.right=="-250px";

menuBtn.onclick=function(){
    if(navbar.style.right=="-250px"){
        navbar.style.right="0";
        menu.src="images/close icon.png";
    }else{
        navbar.style.right="-250px";
        menu.src="images/menu btn.png";

    }
}
