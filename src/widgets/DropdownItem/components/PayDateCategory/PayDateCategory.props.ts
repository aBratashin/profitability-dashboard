import { DropdownItemProps } from '@/widgets/DropdownItem/DropdownItem.props';
import { ItemCategoriesProps } from '@/entities/ItemCategories/ItemCategories.props';

export interface PayDateCategoryProps {
  all: DropdownItemProps['all'];
  src: DropdownItemProps['src'];
  payDateList: ItemCategoriesProps['payDate'];
}