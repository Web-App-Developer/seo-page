function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("m-drop");
    // if (x.style.display === "block") {
    //   x.style.display = "none";
    // } else {
    //   x.style.display = "block";
    // }
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}
var parent = document.querySelector('.m-nav');
var children = parent.children;
for (var i = 0; i < children.length; i++) {
    children[i].addEventListener("click", function() {
        var current = document.getElementsByClassName(" active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
// $('.input_class_checkbox1').each(function() {
//     $(this).hide().after('<div class="class_checkbox1" id="class_checkbox1" ></div>');

// });
// $('.class_checkbox1').on('click', function() {
//     alert('1')
//     if ($(this).is(':checked')) {
//         $(this).css('background-image', 'url(../images/radio_select_btn.svg)');
//     } else {
//         $(this).css('background-image', 'url(../images/radio_unselect_btn.svg)');
//     }
// });
// $('.input_class_checkbox2').each(function() {
//     $(this).hide().after('<div class="class_checkbox2" ></div>');

// });

// $('.class_checkbox2').on('click', function() {
//     alert('2');
//     $(this).toggleClass('checked').prev().prop('checked', $(this).is('.checked'));
//     $(this).css('background-image', 'url(../images/radio_select_btn.svg)');
// });