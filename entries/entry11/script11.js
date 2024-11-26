const links = [
  'entry11nice1.html', 
  'entry11nice1.html',  
  'entry11nice1.html',  
  'entry11nice1.html',  
  'entry11evil1.html',  
  'entry11evil1.html',  
  'entry11evil1.html',  
  'entry11evil1.html',  
  'entry11evil1.html',  
];

const blobs = document.querySelectorAll('.blob');

blobs.forEach(blob => {

  blob.addEventListener('click', () => {

    const randomLink = links[Math.floor(Math.random() * links.length)];
    window.location.href = randomLink;
  });

  const randomDuration = Math.random() * 5 + 5; 
  blob.style.animationDuration = `${randomDuration}s`;
});
