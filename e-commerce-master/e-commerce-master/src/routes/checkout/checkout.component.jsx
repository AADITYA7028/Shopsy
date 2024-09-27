import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import {
  CheckoutContainer,
  SmallContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const smallScreen = window.screen.width <= 480 ? true : false; 
  return (
    <>
    { 
      smallScreen ?
      <SmallContainer>
        <CartDropdown/>
        <Total>Total: ${cartTotal}</Total>
        <PaymentForm/> 
      </SmallContainer>
        :
      <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm/>  
    </CheckoutContainer>
    }
    </>
  );
};

export default Checkout;