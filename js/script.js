// Change images on top of About is page.


console.clear();

var processGraphs = document.querySelectorAll('.process polygon');
var processDetails = document.querySelectorAll('.process-details > div');
var processGraphMouseover = function (event) {
  for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
    if (processGraphs[pg] === event.target && event.type === 'mouseover') {
      processGraphs[pg].style.opacity = 1;
    } else {
      processGraphs[pg].style.opacity = 0.5;
    }
  }
  for (pd = 0, pdl = processDetails.length; pd < pdl; pd++) {
    if (processDetails[pd].classList.contains(event.target.getAttribute('class')) && event.type === 'mouseover') {
      processDetails[pd].style.opacity = 1;
    } else {
      processDetails[pd].style.opacity = 0.5;
    }
  }
};
var processGraphMouseout = function (event) {
  for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
    processGraphs[pg].removeAttribute('style');
  }
  for (pd = 0, pdl = processDetails.length; pd < pdl; pd++) {
    processDetails[pd].removeAttribute('style');
  }
};
for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
  processGraphs[pg].addEventListener('mouseover', processGraphMouseover);
  processGraphs[pg].addEventListener('mouseout', processGraphMouseout);
}



// maintnace and care page
$(function () {
  $('a[href*=#]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });
});








// containerchoise section



// Products PAGE
const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");
const navItem = document.querySelector('a.toggle-nav');

function changeImage(e) {
  activeImage.src = e.target.src;
}

function toggleNavigation() {
  this.nextElementSibling.classList.toggle('active');
}

productImages.forEach(image => image.addEventListener("click", changeImage));
navItem.addEventListener('click', toggleNavigation);



// Resources PAGE


