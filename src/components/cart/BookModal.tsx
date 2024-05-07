import React, {FunctionComponent} from 'react';
import {createPortal} from "react-dom";
import styles from 'src/components/cart/bookModal.module.scss'
import Button from "src/utils/button/Button.tsx";
import {useTranslation} from "react-i18next";
import Title from "src/utils/title/Title.tsx";


type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const BookModal: FunctionComponent<Props> = ({setShowModal}) => {
  const modal = document.getElementById('overlays')!
  const {t} = useTranslation();

  return createPortal(
    <div className={styles.container}>
      <div className={styles.bookModal}>
        <Title name={t('bookModalTitle')}/>
          <p>{t('bookModalDesc')}</p>
        <div className={styles.btn}>
          <Button className={styles.loginModalBtn} children={t('close')} onClick={() => setShowModal(false)}/>
        </div>
      </div>
    </div>,
    modal
  );
};

export default BookModal;
