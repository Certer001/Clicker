const btnClick = document.querySelector('.click');
const columnClick = document.querySelector('.click-counts');

btnClick.addEventListener('click', () => {
    ++columnClick.innerHTML
});