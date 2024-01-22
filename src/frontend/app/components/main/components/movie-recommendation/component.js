import { Stars } from "./../../../base/stars";
import styles from './styles.module.scss';

export function MovieRecommendation({title, genre, quality, translation, stars, imageUrl} = {
    title: 'Cleaning',
    genre: 'carpets and upholstery',
    quality: 'HQ heigh quality',
    translation: 'prof',
    stars: 4,
    imageUrl: "https://www.cisteniburian.cz/images/content/cisteni_kobercu/prirodni_baze/procherm-carpet-cleaner.png"
}) {
    const movieEl = document.createElement('div');

    movieEl.classList.add('card');

    const imgEl = document.createElement('img');
    imgEl.classList.add(styles.poster);
    imgEl.src = imageUrl;

    const titleEl = document.createElement('h4');
    const genreEl = document.createElement('h5');
    const qualityEl = document.createElement('span');
    const translationEl = document.createElement('span');

    titleEl.classList.add(styles.title);
    qualityEl.classList.add(styles.label);
    translationEl.classList.add(styles.label);

    titleEl.textContent = title;
    genreEl.textContent = genre;
    qualityEl.textContent = quality;
    translationEl.textContent = translation;

    movieEl.append(imgEl, titleEl, genreEl, Stars(stars), qualityEl, translationEl);

    return movieEl;
}