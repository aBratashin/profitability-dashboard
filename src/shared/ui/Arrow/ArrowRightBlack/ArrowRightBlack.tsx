import React from 'react';
import ArrowRight from '/public/img/arrow-right-black.svg';
import {cvaArrowBlack} from './ArrowRightBlackStyles';

const ArrowRightBlack: React.FC<React.SVGProps<SVGSVGElement>> = () => {
    return <ArrowRight className={cvaArrowBlack()}/>;
};

export default ArrowRightBlack;