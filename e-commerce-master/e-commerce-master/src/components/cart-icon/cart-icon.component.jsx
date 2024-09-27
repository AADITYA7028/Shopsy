import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon.style';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { useNavigate } from "react-router-dom";  

const CartIcon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const smallScreen = window.screen.width <= 480 ? true : false; 

  const handleClick = () => {
    smallScreen ? navigate("/checkout"):toggleIsCartOpen();
  }

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;