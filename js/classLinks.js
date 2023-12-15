  document.addEventListener('DOMContentLoaded', function () {
    var classLinks = document.querySelector('.class-links');

    classLinks.addEventListener('click', function () {
      classLinks.classList.toggle('active');
    });
  });

