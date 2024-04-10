const list = document.querySelectorAll('.list');
const indicator = document.querySelector('.indicator');
const navigation = document.querySelector('.navigation');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active')); // Remove 'active' class from all elements
    this.classList.add('active'); // Add 'active' class to the hovered element
    indicator.style.display = 'block'; // Show the indicator
    navigation.classList.add('active'); // Add 'active' class to the navigation bar
}

function hideIndicatorAndDeactivateNavigation() {
    indicator.style.display = 'none'; 
    navigation.classList.remove('active'); 
}

list.forEach((item) => {
    item.addEventListener('mouseenter', activeLink); 
    item.addEventListener('mouseleave', () => { 
        item.classList.remove('active'); 
        hideIndicatorAndDeactivateNavigation(); 
    });
});

var heartClicked = false;

document.getElementById("heartIcon").addEventListener("click", function() {
    var heartIcon = document.getElementById("heartIcon");
    var heart = document.querySelector(".heart");

    if (!heartClicked) {
        heartIcon.style.color = "red";

        heart.classList.add("clicked");

        heartClicked = true;
    } else {
        heartIcon.style.color = "white";

        heart.classList.remove("clicked");

        heartClicked = false;
    }
});

//----------credit  to----Arpit(1612)------//

var cartClicked = false;

document.getElementById("cartIcon").addEventListener("click", function() {
  var cartIcon = document.getElementById("cartIcon");
  var cart = document.querySelector(".cart");

  if (!cartClicked) {
    cartIcon.style.color = "orange"; /* Change to cart color */

    cart.classList.add("clicked");

    cartClicked = true;
  } else {
    cartIcon.style.color = "white"; 

    cart.classList.remove("clicked");

    cartClicked = false;
  }
});







  






