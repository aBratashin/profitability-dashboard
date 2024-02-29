import { CategoryProps } from '@/shared/ui/Category/Category.props';

export const getCategoryType = (type: CategoryProps['type']) => {
  if (type === 'dev') {
    return 'Разработка сайта';
  } else if (type === 'sup') {
    return 'Разовые работы';
  } else if (type === 'T&M') {
    return 'T&M';
  } else if (type === 'hours') {
    return 'Пакет часов';
  } else if (type === 'seo') {
    return 'SEO';
  }
};