const elForm = document.querySelector('.form')
const elSearchInput = document.querySelector('.search-input')
const elFromInput = document.querySelector('.from-input')
const elToInput = document.querySelector('.to-input')
const elList = document.querySelector('.list')

function renderMovies (movie) {

	elList.innerHTML = '';

  movie.forEach(function(item) {
    const liElement = document.createElement('li');
    liElement.classList.add('item');
    
    const imgElement = document.createElement('img');
    imgElement.classList.add('image')
    imgElement.setAttribute('src', `https://i3.ytimg.com/vi/${item.ytid}/maxresdefault.jpg`);
    // imgElement.width = '1200';
		// imgElement.height = '560';
    imgElement.setAttribute('alt', `https://i3.ytimg.com/vi/${item.fulltitle}/maxresdefault.jpg`);

    const bigWrapElement = document.createElement('div');
    bigWrapElement.classList.add('info-big-wrap');

    const titleWrapElement = document.createElement('div');
    titleWrapElement.classList.add('title-wrap');

    const titleElement = document.createElement('h2');
    titleElement.classList.add('movie-title');
    titleElement.textContent = `${item.Title}`;

    const fullTitleElement = document.createElement('h3');
    fullTitleElement.classList.add('movie-fulltitle');
    fullTitleElement.textContent = `${item.fulltitle}`;

    const infoWrap = document.createElement('div');
    infoWrap.classList.add('info-wrap');

    const textWrap = document.createElement('div');
    textWrap.classList.add('text-wrap');

    const descElement = document.createElement('p');
    descElement.classList.add('description');
    descElement.textContent = `${item.summary}`;

    const litleInfoWrap = document.createElement('div');
    litleInfoWrap.classList.add('litle-info-wrap');

    const catigorieElement = document.createElement('span');
    catigorieElement.classList.add('catigorie' , 'info');
    catigorieElement.textContent = `${item.Categories}`;

    const languageElement = document.createElement('span');
    languageElement.classList.add('language' , 'info');
    languageElement.textContent = `${item.language}`;

    const ratingElement = document.createElement('span');
    ratingElement.classList.add('rating' , 'info');
    ratingElement.textContent = `${item.imdb_rating}`;

    const runtimeElement = document.createElement('span');
    runtimeElement.classList.add('runtime' , 'info');
    runtimeElement.textContent = `${item.runtime}`;

    const movieLinkElement = document.createElement('a');
    movieLinkElement.classList.add('movie-link');
    movieLinkElement.setAttribute('href' , `https://www.imdb.com/title/${item.imdb_id}/`);
    movieLinkElement.setAttribute('target' , '_blank');
    movieLinkElement.textContent = 'Watch movie'



    titleWrapElement.append(titleElement, fullTitleElement);
    litleInfoWrap.append(catigorieElement, languageElement, ratingElement, runtimeElement);
    textWrap.append(descElement);
    // infoWrap.append(textWrap, litleInfoWrap);
    bigWrapElement.append(titleWrapElement, textWrap, litleInfoWrap, movieLinkElement);

    liElement.append(imgElement, bigWrapElement);

    elList.append(liElement);
  });
};

renderMovies(movies);


elForm.addEventListener('submit' , function(evt){
  evt.preventDefault();

  const fromValue = elFromInput.value;
  const toValue = elToInput.value;

  const fromTo = movies.filter(function (item){
    return fromValue < item.movie_year && toValue > item.movie_year;
  });

  renderMovies(fromTo);

  elFromInput.value = '';
	elToInput.value = '';
  // elList.innerHTML = '';
});

elSearchInput.addEventListener('keyup', function () {
  const inputValue = elSearchInput.value.trim().toLowerCase();

  let result = movies.filter(function (item){
    let search_title = item.Title.toLowerCase();
    return search_title.includes(inputValue);
  });

  
  renderMovies(result);
  
  
});