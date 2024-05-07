import {FunctionComponent} from 'react';
import cartImg from "src/img/cart_icon.svg";
import styles from 'src/components/cart/cart.module.scss'
import {selectDateAmount} from "src/store/ui/cart/index.ts";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

type Props = {
  className?: string
};

const CartButton: FunctionComponent<Props> = ({className}) => {
  const amount = useSelector(selectDateAmount)

  return (
    <div className={`${styles.cartIcon} ${className}`}>
      <NavLink to={'/cart'} className={styles.cartBtn} children={<img alt='cart' src={cartImg} width="30" height="30"/>}/>
      <p className={styles.cartNumber}>{amount}</p>
    </div>
  )
};

export default CartButton;
