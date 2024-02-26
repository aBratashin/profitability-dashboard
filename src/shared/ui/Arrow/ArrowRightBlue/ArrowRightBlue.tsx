import React from 'react';
import ArrowRight from '/public/img/arrow-right-blue.svg'
import {cvaArrowBlue} from "@/shared/ui/Arrow/ArrowRightBlue/ArrowRightBlueStyles";

const ArrowRightBlue: React.FC<React.SVGProps<SVGSVGElement>> = () => {
    return <ArrowRight className={cvaArrowBlue()}/>;
};

export default ArrowRightBlue;