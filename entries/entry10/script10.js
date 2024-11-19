let timeout;

document.querySelector('.circle').addEventListener('mousedown', function() {
  timeout = setTimeout(function() {
   
    window.location.href = "entry10evil1.html";
  }, 1000); 
});


document.querySelector('.circle').addEventListener('mouseup', function() {
  clearTimeout(timeout); 
  window.location.href = "entry10nice1.html"; 
});


document.querySelector('.circle').addEventListener('mouseleave', function() {
  clearTimeout(timeout); 
});
