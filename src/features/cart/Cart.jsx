import LinkButton from "../../ui/LinkButton.jsx";
import Button from "../../ui/Button.jsx";
import CartItem from "./CartItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, getCart} from "./cartSlice.js";
import {getUser} from "../users/userSlice.js";
import EmptyCart from "./EmptyCart.jsx";

function Cart() {
  const username=useSelector(getUser)
  const cart = useSelector(getCart)
  const dispatch=useDispatch()

  function handleDeleteCart(){
dispatch(clearCart())
  }

  if (!cart.length) return <EmptyCart/>

  return (
    <div className='px-4 py-3 '>
      <LinkButton to="/menu" >&larr; Back to menu</LinkButton>

      <ul className='divide-y divide-stone-200 border-b mt3 '>
        {cart.map(item=><CartItem item={item} key={item.pizzaId} />)}
      </ul>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

      <div className='mt-6 space-x-2'>
        <Button type='primary' to="/order/new">Order pizzas</Button>
        <Button onClick={handleDeleteCart} type='secondary'>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
