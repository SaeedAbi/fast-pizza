import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

const Header = () => {
    return (
        <header>
            <Link to='/'>Fast React Pizza Co.</Link>
            <SearchOrder/>
            <p>Saeed</p>
        </header>
    );
};

export default Header;