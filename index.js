const sticky= document.getElementById('sticky');

function sticky() => {
    if (window.pageYOffset > 100) {
        sticky.classList.add('sticky');
    } else {
        sticky.classList.remove('sticky');
    }
}