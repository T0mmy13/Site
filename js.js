let isEnvelopeOpen = false;
let currentPage = 1;
const totalPages = 3;

document.addEventListener('DOMContentLoaded', function () {
    // Инициализация обработчиков событий
    document.querySelector('.envelope').addEventListener('click', handleEnvelopeClick);
    document.querySelector('.right-stamp-wrapper').addEventListener('click', openDocument);

    // Обработчики для навигации
    document.querySelector('.letter-page-1 .page-nav-right').addEventListener('click', nextPage);
    document.querySelector('.letter-page-1 .page-nav-left').addEventListener('click', closeEnvelope);

    document.querySelector('.letter-page-2 .page-nav-left').addEventListener('click', prevPage);
    document.querySelector('.letter-page-2 .page-nav-right').addEventListener('click', nextPage);

    document.querySelector('.letter-page-3 .page-nav-left').addEventListener('click', prevPage);
});

function handleEnvelopeClick(e) {
    if (!e.target.closest('.right-stamp-wrapper') &&
        !e.target.closest('.page-nav-left') &&
        !e.target.closest('.page-nav-right')) {
        toggleEnvelope();
    }
}

function toggleEnvelope() {
    const envelope = document.querySelector('.envelope');
    const flap = document.querySelector('.envelope-flap');

    isEnvelopeOpen = !isEnvelopeOpen;

    if (isEnvelopeOpen) {
        envelope.classList.add('open');
        flap.style.transform = 'rotateX(180deg)';
    } else {
        envelope.classList.remove('open');
        flap.style.transform = 'rotateX(0deg)';
        // Возвращаем на первую страницу при закрытии
        goToPage(1);
    }
}

function nextPage() {
    if (!isEnvelopeOpen) {
        toggleEnvelope();
        return;
    }

    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}

function goToPage(pageNumber) {
    // Скрываем текущую страницу
    document.querySelector(`.letter-page-${currentPage}`).style.transform =
        `translateX(${-100 * (pageNumber - 1)}%)`;
    document.querySelector(`.letter-page-${currentPage}`).style.opacity = '0';

    // Показываем новую страницу
    document.querySelector(`.letter-page-${pageNumber}`).style.transform = 'translateX(0)';
    document.querySelector(`.letter-page-${pageNumber}`).style.opacity = '1';

    currentPage = pageNumber;
}

function closeEnvelope() {
    if (isEnvelopeOpen) {
        toggleEnvelope();
    }
}

function openDocument(event) {
    event.stopPropagation();
    window.open(
        "https://docs.google.com/document/d/1W6lRVS3HGpLeIf5XD8dVjKKCR6DAhaB5/edit?pli=1",
        "_blank"
    );
}