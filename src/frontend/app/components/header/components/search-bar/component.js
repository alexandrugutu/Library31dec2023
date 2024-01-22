import { Icon, IconTypes } from '../../../base/icon';
import { SearchBarInput } from '../search-bar-input';
import './styles.scss';

export function SearchBar(){
    const searchBar = document.createElement ('div');
    const searchButton = document.createElement ('button');

    searchButton.append(Icon(IconTypes.Search));

    searchBar.classList.add('search-bar');
    searchBar.append(SearchBarInput(), searchButton);

    return searchBar;
}