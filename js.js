function handleEnvelopeClick(event) {
    if (!event.target.closest('.right-stamp-wrapper')) {
        toggleEnvelope();
    }
}

function toggleEnvelope() {
    const envelope = document.querySelector('.envelope');
    const flap = document.querySelector('.envelope-flap');
    const rightStamp = document.querySelector('.right-stamp-wrapper');
    
    envelope.classList.toggle('open');
    
    if (envelope.classList.contains('open')) {
        flap.style.transform = 'rotateX(180deg)';
        rightStamp.style.zIndex = '4';
    } else {
        flap.style.transform = 'rotateX(0deg)';
        rightStamp.style.zIndex = '5';
    }
}

function openDocument(event) {
    event.stopPropagation();
    window.open(
        "https://docs.google.com/document/d/1W6lRVS3HGpLeIf5XD8dVjKKCR6DAhaB5/edit?pli=1",
        "_blank"
    );
}