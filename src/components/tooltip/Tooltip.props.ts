import {DetailedHTMLProps, HTMLAttributes} from "react";
import {InvoiceProgressProps} from "@/components/InvoiceProgress/InvoiceProgress.props";

export interface TooltipProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    type: InvoiceProgressProps['type']
}