import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import Loader from "./Loader.jsx";

const AppLayout = () => {
    const navigation=useNavigate()
    const isLoading=navigation.state === 'loading'
    return (
        <div className='layout'>
            {isLoading && <Loader/>}
            <Header/>
            <main>
                <Outlet/>
            </main>
            <CartOverview/>
        </div>
    );
};

export default AppLayout;









