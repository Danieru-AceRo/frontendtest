import React from 'react'
import "./Dropdown.css"


const Dropdown = ({number}) => {
  function myFunction() {
    document.getElementById("myDropdown"+number).classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  return (
    <div class="dropdown">
  <span onClick={myFunction} class="dropbtn">Compartir</span>
  <div id={"myDropdown"+ number} class="dropdown-content">
    <a href="#">Facebook</a>
    <a href="#">Twitter</a>
    <a href="#">LinkIn</a>
  </div>
</div>

  )
}

export default Dropdown