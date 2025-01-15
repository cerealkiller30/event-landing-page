function readMore() { 
    const mycontent = 
        document.getElementById('more'); 
    const mybutton = 
        document.getElementById('rm'); 
  
    if (mycontent.style.display === 'none'
        || mycontent.style.display === '') { 
        mycontent.style.display = 'block'; 
        mybutton.textContent = 'Less'; 
    } else { 
        mycontent.style.display = 'none'; 
        mybutton.textContent = 'Know More'; 
    } 
}

function openRegistrationForm() {
    const url = 'index2.html';
    window.open(url, '_blank');
}