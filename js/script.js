// Banner autoslide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("image-slide");
    if (n > x.length) {slideIndex = 1};
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block";
}

setInterval(() => plusDivs(1), 3000);




// Form Validation
function validation () {
    let name = document.getElementById ('name').value;
    let email = document.getElementById ('email').value;
    let interest = document.getElementById ('interest').value;
    if (name == '' || email == '' || interest == '') {
        alert('All field must be filled out')
    } else {
        alert('Thank you for filling out the form')
    }
}

document.getElementById ('submit-btn').addEventListener ('click' , () => validation())