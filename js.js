function toggleEnvelope() {
    const envelope = document.querySelector('.envelope');
    const flap = document.querySelector('.envelope-flap');
    
    if(envelope.classList.contains('open')) {
        envelope.classList.remove('open');
        flap.style.transform = 'rotateX(0deg)';
    } else {
        envelope.classList.add('open');
        flap.style.transform = 'rotateX(180deg)';
    }
}