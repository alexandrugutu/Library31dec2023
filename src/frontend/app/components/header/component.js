import { HeaderNav } from './components/header-nav';
import { Logo } from './components/logo';
import { SearchBar } from './components/search-bar';
import { UserControlPanel } from './components/user-control-panel';
import './styles.scss';

export function Header(){
    const header = document.createElement('header');

    header.append(HeaderNav(), Logo(), SearchBar(), UserControlPanel());
    header.classList.add('header');

    return header;
}