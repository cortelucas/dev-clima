const search = document.querySelector('.busca');

search.addEventListener('submit', async (e) => {
  e.preventDefault();

  let input = document.querySelector('#searchInput').value;

  if(input !== '') {
    clearInfo();
    showWarning('Carregando ...');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=49d36bba59b54549fcefe79d51fff261&units=metric&lang=pt_br`;
    const results = await fetch(url);
    const json = await results.json();
    if(json.cod === 200) {
      showInfo({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        windDeg: json.wind.deg
      });
    } else {
      clearInfo();
      showWarning('Não encontramos esta localização!')
    }
  } else {
    clearInfo();
  }
});

const showInfo = (json) => {
  showWarning('');

  document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
  document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
  document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span></span>`

  document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

  document.querySelector('.ventoPonto').style.transform = `rotate(${json.windDeg - 90}deg)`;

  document.querySelector('.resultado').style.display = 'block';
}

const clearInfo = () => {
  showWarning('');
  document.querySelector('.resultado').style.display = 'none';
}

const showWarning = (msg) => {
  document.querySelector('.aviso').innerHTML = msg;
}