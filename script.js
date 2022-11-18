const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello World!");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

btn.onclick = alertFunction;

btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
    console.log(e.target);
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

