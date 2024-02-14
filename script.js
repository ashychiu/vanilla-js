const handleClick = () => {
    const dir = document.getElementById('phoneDirectory')
    dir.textContent = "Hello World"

    var newHeading = document.createElement('h1');
var newParagraph = document.createElement('p');

// create text nodes for new elements
var h1Text= document.createTextNode('This is a nice header text!');
var pText= document.createTextNode('This is a nice paragraph text!');

// attach new text nodes to new elements
newHeading.appendChild(h1Text);
    newParagraph.appendChild(pText);
    
    document.body.appendChild(newHeading);
    document.body.appendChild(newParagraph);
}




const validateForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const number = document.getElementById('mobile').value

    const errorMessage = document.getElementById('error');
    if (name === '' || email === '' || mobile === '') errorMessage.classList.remove('dn');

}

document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.star');
    let currentRating = 0;

    stars.forEach(star => {
      star.addEventListener('click', function() {
        const value = parseInt(star.getAttribute('data-value'));
        currentRating = value;
      resetStars();
      highlightStars(value);
      updateRatingValue(currentRating)
      });
    });
  
    function highlightStars(value) {
      for (let i = 0; i < value; i++) {
        stars[i].classList.add('active');
      }
    }
  
    function resetStars() {
      stars.forEach(star => {
        star.classList.remove('active');
      });
    }

    function updateRatingValue(value) {
        const ratingNumber = document.getElementById('ratingNumber');
        ratingNumber.textContent = value;
      }
  });
  