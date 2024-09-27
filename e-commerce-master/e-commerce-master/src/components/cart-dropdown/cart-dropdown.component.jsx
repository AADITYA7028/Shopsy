import { useNavigate } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';


const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    navigate('/checkout');
  };

  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <>
    {
    smallScreen ? <>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
    </> :
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType="base" onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  }
  </>
  );
};

export default CartDropdown;