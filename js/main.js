// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Zoom in pictures
document.querySelectorAll('#inThis #ofme').forEach(image => {
  image.onclick = () =>{
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('nav').style.display = 'none';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});
document.querySelector('.popup-image span').onclick = () =>{
  document.querySelector('.popup-image').style.display = 'none';
  document.querySelector('nav').style.display = 'flex';
}