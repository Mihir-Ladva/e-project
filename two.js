document.addEventListener('DOMContentLoaded', function() {
   let a = document.querySelector('#main');
   let currentImg = 1;
   
let b = ["give your workout<br> a new style!","Fashion"," New Offers"];
let currentText = 0;
   setInterval(() => {
      if (currentImg > 3 && currentText > 2) {
         currentImg = 1;
         currentText = 0;
      } 
      a.src = `./img/img-${currentImg}.png`;
      document.getElementById('h1').innerHTML = b[currentText];
      currentText++
      currentImg++;
   }, 2000);
});



