import {IconTypes, Icon} from '../icon';
import styles from './styles.module.scss';


export function Stars(starsCount = 1) {
    const maxStars = 5;
    const fragment = document.createElement('div');
    
    fragment.classList.add(styles.stars);

    for (let i=0; i<starsCount; i++) {
        const icon = Icon(IconTypes.Star);
        icon.classList.add(styles.active);
        fragment.append(icon);
    }

    for (let i=starsCount; i<maxStars; i++) {
        const icon = Icon(IconTypes.Star);
        icon.classList.add(styles.inactive);
        fragment.append(icon);
    }

    return fragment;
}