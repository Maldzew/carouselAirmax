const slidesImg = document.querySelector('.img'),
dot1 = document.querySelector('.dot1'),
dot2 = document.querySelector('.dot2'),
dot3 = document.querySelector('.dot3'),
slidesPrice = document.querySelector('.sup-title__price');

dot1.addEventListener('click',()=> {
   slidesImg.style.marginLeft = '0';
   slidesPrice.style.marginLeft = '0';
   dot1.classList.add('active');
   dot2.classList.remove('active');
   dot3.classList.remove('active');

});
dot2.addEventListener('click',()=> {
   slidesImg.style.marginLeft = '-350px';
   slidesPrice.style.marginLeft = '-180px';
   dot1.classList.remove('active');
   dot2.classList.add('active');
   dot3.classList.remove('active');

});
dot3.addEventListener('click',()=> {
   slidesImg.style.marginLeft = '-700px';
   slidesPrice.style.marginLeft = '-380px';
   dot1.classList.remove('active');
   dot2.classList.remove('active');
   dot3.classList.add('active');

});