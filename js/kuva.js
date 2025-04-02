document.addEventListener('DOMContentLoaded', function() {
    var days = ['maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'];
    
    days.forEach(function(day) {
      var menu = document.getElementById(day + 'Menu');
      var image = document.getElementById(day + 'Image');

      menu.addEventListener('show.bs.collapse', function () {
        image.style.display = 'block';
      });

      menu.addEventListener('hide.bs.collapse', function () {
        image.style.display = 'none';
      });

      // Initially hide the image if the menu is not visible
      if (!menu.classList.contains('show')) {
        image.style.display = 'none';
      }
    });
  });