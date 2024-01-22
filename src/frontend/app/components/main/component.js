import {Aside} from './components/aside';
import { Content } from './components/content';

export function Main(){
    const main = document.createElement ('main');

    main.append(Aside(), Content());

    return main;
}