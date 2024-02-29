import { CardInfoCategoriesProps } from '@/entities/CardInfoCategories/CardInfoCategories.props';

export const CardInfoCategories: CardInfoCategoriesProps[] = [
  {
    id: 1,
    title: 'Готэк',
    month: 'Октябрь',
    year: 2023,
    type: 'seo',
    src: '/img/manager_1.jpg',
    price: 500000,
    remain: 110000,
    sum: 390000,
    progressData: [
      { category: 'time', color: 'white', initialData: 24, finalData: 76 },
      { category: 'profit', color: 'green', initialData: 20, finalData: 10 },
    ],
    isExpired: false,
    progress: 20,
    timeColor: 'green',
    profitColor: 'green',
    hours: 10,
    percentage: 100,
  },
  {
    id: 2,
    title: 'Готэк',
    month: 'Октябрь',
    year: 2023,
    type: 'seo',
    src: '/img/manager_2.jpg',
    price: 500000,
    remain: 110000,
    sum: 390000,
    progressData: [
      { category: 'time', color: 'white', initialData: 24, finalData: 76 },
      { category: 'profit', color: 'green', initialData: 20, finalData: 10 },
    ],
    isExpired: false,
    progress: 20,
    timeColor: 'green',
    profitColor: 'green',
    hours: 58,
    percentage: 100,
  },
  {
    id: 3,
    title: 'Готэк',
    month: 'Октябрь',
    year: 2023,
    type: 'seo',
    src: '/img/manager_3.jpg',
    price: 500000,
    remain: 110000,
    sum: 390000,
    progressData: [
      { category: 'time', color: 'white', initialData: 24, finalData: 76 },
      { category: 'profit', color: 'red', initialData: 5, finalData: 10 },
    ],
    isExpired: true,
    progress: 1,
    timeColor: 'red',
    profitColor: 'yellow',
    hours: 108,
    percentage: 80,
  },
];
