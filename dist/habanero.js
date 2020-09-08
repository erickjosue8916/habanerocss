function load() { 
    var el = document.querySelectorAll(".fa-window-close");

    el.forEach((element, i) => {
        element.addEventListener( "click",
            () => {
                document.getElementsByClassName("alert")[i].classList.add("close-alert");
            }
        );
    });
}
  
document.addEventListener("DOMContentLoaded", load, false);