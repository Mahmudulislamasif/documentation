var links = document.querySelectorAll("ul li a");
  
links.forEach(function(link) {
  link.addEventListener("click", function() {
    links.forEach(function(link) {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});
function toggleSubMenu() {
    var submenuList = document.getElementById("submenu-list");
    var chevronIcon = document.querySelector(".bx-chevron-down");
    
    if (submenuList.classList.contains("show")) {
      submenuList.classList.remove("show");
      chevronIcon.classList.remove("rotate-down");
    } else {
      submenuList.classList.add("show");
      chevronIcon.classList.add("rotate-down");
    }
  }