//Const
var sec = document.getElementById('sec');
var nav = document.getElementById('nav');
const sclButton = document.querySelectorAll('a')

//Listeneners
sclButton.forEach(btn => {
    btn.addEventListener('click', function(e){

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        },1000);
    })
})

//Functions

//function to toggle the menu button -active class-
function toggle(){
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}