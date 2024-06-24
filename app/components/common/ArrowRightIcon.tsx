import Image from 'next/image';
import * as React from 'react';

import Icon from '../../assets/icons/ic_arrow_right.svg';

interface ArrowRightIconProps { }

const ArrowRightIcon: React.FunctionComponent<ArrowRightIconProps> = () => {
    return (<Image src={Icon} alt="arrow-right" />);
}

export default ArrowRightIcon;