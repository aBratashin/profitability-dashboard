import Search from "@/components/search/Search";
import SortDropDown from "@/components/sortDropdown/SortDropDown";

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full px-6 py-6">
            <div>
                <h1 className="text-5xl font-medium">Рентабельность</h1>
            </div>
            <div className="flex gap-6 items-center">
                <Search placeholder='Найти проект'/>
                <SortDropDown category="manager" />
                <SortDropDown category="project" />
                <SortDropDown category="pay_date" />
                <button className="bg-white rounded-full w-24 py-2">
                    Очистить
                </button>
            </div>
        </div>
    );
};

export default Header;
