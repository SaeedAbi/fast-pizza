import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTotalCartItem, getTotalCartPrice} from "./cartSlice.js";
import {formatCurrency} from "../../utils/helpers.js";

function CartOverview() {
    const totalCartQuantity=useSelector(getTotalCartItem)
    const totalCartPrice=useSelector(getTotalCartPrice)

    if (!totalCartQuantity) return null

  return (
    <div className='bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 flex items-center justify-between'>
      <p className='text-stone-300 font-semibold space-x-4 sm:space-x-6 text-sm md:text-base'>
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
        <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
