import Image from 'next/image';
import * as React from 'react';

import Icon from '../../assets/icons/ic_search.svg';

interface SearchIconProps { }

const SearchIcon: React.FunctionComponent<SearchIconProps> = () => {
    return (<Image src={Icon} alt="search" />);
}

export default SearchIcon;