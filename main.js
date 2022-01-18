document.querySelectorAll('.iconPoke')[0].onclick = pikachu;
document.querySelectorAll('.iconPoke')[1].onclick = snorlax;
document.querySelectorAll('.iconPoke')[2].onclick = squirtle;
document.querySelectorAll('.iconPoke')[3].onclick = mewtwo;

function pikachu() {
 document.querySelector('.texto').innerHTML = 'Pikachu';
}
function snorlax() {
 document.querySelector('.texto').innerHTML = 'Snorlax';
}
function squirtle() {
 document.querySelector('.texto').innerHTML = 'Squirtle';
}
function mewtwo() {
 document.querySelector('.texto').innerHTML = 'Mewtwo';
}
