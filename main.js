const main = document.querySelector('main');
const progressBar = document.querySelector('.progress-bar__inner');

function handleScroll() {
  const { scrollY, innerHeight } = window;
  const { offsetHeight, offsetTop } = main;
  const total = offsetHeight - innerHeight + offsetTop;
  const percent = (100 * scrollY) / total;
  progressBar.style.width = `${percent}%`;
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
