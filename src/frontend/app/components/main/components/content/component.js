import { RatingStars } from '../../../base/rating-stars';
import { MovieRecommendation } from '../movie-recommendation';
import styles from './styles.module.scss';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export function Content(){
    const content = document.createElement ('section');
    const span = document.createElement('span');

    span.textContent = 'Loading ...';
    span.style.color = 'white';
    content.classList.add(styles.content);

    content.append(span);

    const fr = document.createDocumentFragment();

    fetch('http://localhost:3000/movies?page=1').then(res => res.json()).then(movies => {
        movies.forEach((movie) => {
            
                fr.append( MovieRecommendation({
                    title: movie.title,
                    genre: movie.genres.join(),
                    quality: new Date(movie.release_date).getFullYear(),
                    stars: randomIntFromInterval(0, 5),
                    translation: movie.overview,
                    imageUrl: movie.poster
                }));
            
            
        });
        span.remove();
        content.append(fr);
        
    });

    return content;
}