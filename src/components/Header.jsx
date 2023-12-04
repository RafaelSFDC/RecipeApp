import { GrSearch } from "react-icons/gr";
import { RiListSettingsLine } from "react-icons/ri";
const Header = () => {
    return <header>
        <form className="search">
            <div>
                <input type="text" placeholder="Pesquise novas receitas" />
                <GrSearch />
            </div>
            <RiListSettingsLine />
        </form>
    </header>;
};

export default Header;
