
 
/*animacion hamburguesa */

const hamburguesa = document.querySelector('.hamburguesa');

hamburguesa.addEventListener('click', mostrarMenu)

function mostrarMenu() {
 
  const menuModal = document.querySelector('.modal-menu');
    hamburguesa.classList.toggle("change");
    menuModal.classList.toggle('menu-activo');
 
 
}

/* funcionalidad para input imagen */
 function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('.image-preview').css('background-image', 'url('+e.target.result +')');
            $('.image-preview').hide();
            $('.image-preview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
 $("#foto-cv").change(function() {
    readURL(this);
}); 

$(document).ready(function() {
    var $round = $('.round'),
        roundRadius = $round.find('circle').attr('r'),
        roundPercent = $round.data('percent'),
        roundCircum = 3 * roundRadius * Math.PI,
        roundDraw = roundPercent * roundCircum / 100
    $round.css('stroke-dasharray', roundDraw  + ' 999')
  })



 
 