const search = document.querySelector('.busca');

search.addEventListener('submit', async (e) => {
  e.preventDefault();

  const input = document.querySelector('.searchInput').ariaValueMax;

  if(input !== '') {
    showWarning('Carregando ...');

    const url = `api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=49d36bba59b54549fcefe79d51fff261&units=metric&lang=pt_br`;
    
  }
});

const showWarning = () => {
  document.querySelector('.aviso').innerHTML = msg;
}