import {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart, selectDateAmountById} from "src/store/ui/cart/index.ts";
import Button from "src/utils/button/Button.tsx";
import styles from 'src/components/country/dateList/countryDate.module.scss'
import {RootState} from "src/store/index.tsx";
import {Card} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useAuth} from "src/contexts/Auth.tsx";

type Props = {
  id: string;
  name: string;
  price: string;
};

const CountryDateItem: FunctionComponent<Props> = ({id, name, price}) => {
  const amount = useSelector((state: RootState) =>
    selectDateAmountById(state, id)
  )
  const dispatch = useDispatch();
  const {user} = useAuth()
  const {countryId} = useParams()

  return (
    <Card className={styles.dates}>
      <Card.Body><p className={styles.price}>{price}</p>
        <Card.Text className={styles.name}>
          {name}
        </Card.Text>
        {user && (
          <div className={styles.cartBtns}>
            <Button children={'+'} onClick={() => dispatch(addToCart({id, name, price, countryId}))}
                    className={styles.dateBtn} disabled={amount === 5}/>
            <p className={styles.amount}>{amount}</p>
            <Button children={'-'} onClick={() => dispatch(removeFromCart(id))} className={styles.dateBtn}/>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CountryDateItem;
