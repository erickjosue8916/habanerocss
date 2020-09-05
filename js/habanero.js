function closeAlert() {
    let alert = document.getElementById("alert");
    alert.classList.add("close-alert");
}
   
function load() { 
    var el = document.getElementById("close"); 
    el.addEventListener("click", closeAlert, false); 
} 
  
document.addEventListener("DOMContentLoaded", load, false);