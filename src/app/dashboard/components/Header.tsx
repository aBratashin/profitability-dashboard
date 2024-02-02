import Search from '@/components/search/Search';
import SortDropDown from '@/components/sortDropdown/SortDropDown';

const Header = () => {
  return (
    <div className="flex items-center justify-between w-screen px-6 py-6">
      <div>
        <h1 className="text-5xl font-medium">Рентабельность</h1>
      </div>
      <div className="flex gap-6 items-center">
        <Search placeholder="Найти проект" />
        <SortDropDown category="manager" itemType={'all'} />
        <SortDropDown category="project" itemType={'all'} />
        <SortDropDown category="pay_date" itemType={'all'} />
        <button className="bg-white rounded-full w-32 py-4">
          Очистить
        </button>
      </div>
    </div>
  );
};

export default Header;
