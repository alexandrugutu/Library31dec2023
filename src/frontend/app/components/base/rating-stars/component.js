import { Stars } from '../stars';
import styles from './styles.module.scss';
import starsStyles from '../stars/styles.module.scss';

export function RatingStars(){
    const stars = Stars(0);

    stars.classList.add(styles.ratingStars);

    stars.childNodes.forEach((star, index)=>{
        star.addEventListener('mouseover',()=>{
            stars.childNodes.forEach((prevStar, prevIndex)=>{
                if(prevIndex <= index){
                    prevStar.classList.remove(starsStyles.inactive);
                    prevStar.classList.add(starsStyles.active);
                } else {
                    prevStar.classList.remove(starsStyles.active);
                    prevStar.classList.add(starsStyles.inactive);
                }
            });
            
        });
    });
    

    return stars;
}