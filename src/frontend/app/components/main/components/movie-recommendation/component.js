import { Stars } from "./../../../base/stars";
import styles from './styles.module.scss';

export function MovieRecommendation({
    id,
    title, 
    genres, 
    overview, 
    releaseDate, 
    stars, 
    poster
}) {
    const card = document.createElement('div');
    const imgEl = document.createElement('img');
    const cardBody =document.createElement('div');
    const cardTitle = document.createElement('h5');
    const genreEl = document.createElement('h5');
    const cardText = document.createElement('p');
    const cardBtn = document.createElement('button', 'btn-primary', styles.btnOpenMovie);
    
    card.classList.add('card', styles.MovieRecommendation);
    imgEl.classList.add('card-img-top');
    cardBody.classList.add('card-body', styles.description);
    cardTitle.classList.add('card-title');
    cardText.classList.add('card-text');
    cardBtn.classList.add('btn', 'btn-primary');

    imgEl.src = poster;
    cardBtn.setAttribute('data-id', id);
    cardBtn.textContent= 'Go to movie';
    
    cardTitle.textContent = title;
    genreEl.textContent = genres.join();
    cardText.textContent = overview;
    
    cardBody.append(Stars(stars),cardTitle, cardText, cardBtn);
    card.append(imgEl, cardBody);

    return card;
}

//cardBody.classList.add('card-body');