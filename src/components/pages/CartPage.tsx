import {FunctionComponent} from 'react';
import Cart from "src/components/cart/Cart.tsx";
interface OwnProps {
}

type Props = OwnProps;

const CartPage: FunctionComponent<Props> = () => {
  return (
      <Cart/>
  );
};

export default CartPage;
