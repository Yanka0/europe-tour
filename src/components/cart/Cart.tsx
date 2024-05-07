import {FunctionComponent, useEffect, useState} from 'react';
import CountryDateItem from "src/components/country/dateList/CountryDateItem.tsx";
import {selectCartProductIdsWithNames} from "src/store/ui/cart/index.ts";
import {useSelector} from "react-redux";
import styles from 'src/components/cart/cart.module.scss'
import Button from "src/utils/button/Button.tsx";
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import BookModal from "src/components/cart/BookModal.tsx";
import Title from "src/utils/title/Title.tsx";

type Props = {};

const Cart: FunctionComponent<Props> = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showBookModal, setShowBookModal] = useState(false);
  const {t} = useTranslation();
  const dateIdsWithNames = useSelector(selectCartProductIdsWithNames);

  useEffect(() => {
    const newTotalPrice = dateIdsWithNames.reduce((accumulator, dateIdWithName) => {
      return accumulator + (dateIdWithName.amount * parseFloat(dateIdWithName.price.replace(/[^0-9.-]+/g, '')));
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [dateIdsWithNames]);

  return (
    <Container>
      <Title name={t('orders')}/>
      {dateIdsWithNames?.length > 0 ? (
        <>
          <div className={styles.cart}>
            {dateIdsWithNames.map(dateIdWithName => (
              <div key={dateIdWithName.dateId}>
                <CountryDateItem id={dateIdWithName.dateId} name={dateIdWithName.name} price={dateIdWithName.price}/>
                <p className={styles.cartCountryName}>{t(dateIdWithName.countryId)}</p>
              </div>
            ))}
          </div>
          <div className={styles.totalPrice}>
            <p className={styles.price}>{t("total")} €{totalPrice}</p>
          </div>
          <div className={styles.payment}>
            <Button children={t('book')} className={styles.btn} onClick={() => setShowBookModal(true)}/>
          </div>
          {showBookModal && <BookModal setShowModal={setShowBookModal}/>}
        </>
      ) : (
        <p className={styles.empty}>{t('empty')}</p>
      )}
    </Container>
  );
};


export default Cart;
