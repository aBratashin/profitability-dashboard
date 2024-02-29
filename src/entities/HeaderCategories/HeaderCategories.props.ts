import {SortDropDownProps} from '@/features/SortDropdown/SortDropDown.props';
import {DropdownContentProps} from "@/widgets/DropdownContent/DropdownContent.props";

export interface HeaderCategoriesProps {
    id: number;
    category: SortDropDownProps['category'];
    itemType: SortDropDownProps['itemType'];
    buttonType: DropdownContentProps['buttonType'];
}