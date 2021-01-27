function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("m-drop");
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
function myfunction1(){
    var checkbox = $("#show_rich");
    var ch_val = checkbox.val();
    if(ch_val == "0"){
        $("#show_rich").val("1");
        $(".rich_snippet_btn1")[0].src = "../images/radio_select_btn.svg"
        $("#mofo_rich_div_mobile").fadeIn();
        $("#mofo_rich_div").fadeIn();
    }else{
       $("#show_rich").val("0");
       $(".rich_snippet_btn1")[0].src = "../images/radio_unselect_btn.svg"
       $("#mofo_rich_div_mobile").fadeOut();
       $("#mofo_rich_div").fadeOut();
    }
}
function myfunction2(){
    var checkbox = $("#show_date");
    var ch_val = checkbox.val();
    if(ch_val == "0"){
        $("#show_date").val("1");
        $(".date_btn1")[0].src = "../images/radio_select_btn.svg"
        var date_string = '24 Dec, 2019 - ';
        var elm_id = 'serp_meta';
        if ($("#show_mobile").prop('checked')) {
            date_string = '24 Dec 2019 · ';
            elm_id = 'serp_meta_mobile';
        }
        $("#mofo_desc").trigger('keyup');
        $("#" + elm_id).prepend('<span id="rich_date">' + date_string + '</span>');
    }else{
       $("#show_date").val("0");
       $(".date_btn1")[0].src = "../images/radio_unselect_btn.svg"
       $("#" + elm_id).html($("#serp_meta").html().replace(date_string, ''));
       $("#mofo_desc").trigger('keyup');
    }
}