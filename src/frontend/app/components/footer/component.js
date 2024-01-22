import { Logo } from '../../components/header/components/logo';

export function Footer(){
    const footer = document.createElement ('footer');

    footer.append(Logo());

    return footer;
}