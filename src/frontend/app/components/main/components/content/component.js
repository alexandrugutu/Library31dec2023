import { RatingStars } from '../../../base/rating-stars';
import { MovieRecommendation } from '../movie-recommendation';
import styles from './styles.module.scss';

export function Content(){
    const content = document.createElement ('section');

    content.classList.add(styles.content);

    content.append( MovieRecommendation(),MovieRecommendation({
        title: 'window cleaning',
        genre: 'general cleaning',
        stars: 5,
        translation: 'Prof.',
        quality: 'HQu',
        imageUrl: ('https://www.spravnahospodynka.cz/files/148/media/product/59cc76fe6621f34944ab8a1631b9dcbf.png')
    }));
    return content;
}