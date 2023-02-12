const header = document.querySelector('header');
const headerBborder = header.style.borderBottom;

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.backgroundImage = 'linear-gradient(to bottom right, #001848, #301860)';
        //header.style.borderBottom = 'none';
    } else {
        header.style.backgroundImage = 'none';
        header.style.borderBottom = headerBborder;
    }
})