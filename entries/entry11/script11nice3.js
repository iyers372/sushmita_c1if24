
const blob = document.querySelector('.blob');


function moveBlob() {
  const pageWidth = window.innerWidth;
  const pageHeight = window.innerHeight;

  const randomX = Math.random() * (pageWidth - 2500); 
  const randomY = Math.random() * (pageHeight - 250);


  blob.style.transform = `translate(-50%, -50%) translate(${randomX}px, ${randomY}px)`;
}


setInterval(moveBlob, 3000);

moveBlob();
