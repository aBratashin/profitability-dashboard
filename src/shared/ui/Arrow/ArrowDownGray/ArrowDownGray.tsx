import React from 'react';
import ArrowDown from '/public/img/arrow-down.svg';
import {cvaArrowDown} from "@/shared/ui/Arrow/ArrowDownGray/ArrowDownGrayStyles";

const ArrowDownGray: React.FC<React.SVGProps<SVGSVGElement>> = () => {
    return <ArrowDown className={cvaArrowDown()}/>;
};

export default ArrowDownGray;