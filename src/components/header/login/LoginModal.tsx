import {FunctionComponent} from 'react';
import Input from "src/utils/input/Input.tsx";
import useLogInForm from "src/components/header/login/useLogInForm.tsx";
import styles from 'src/components/header/login/loginModal.module.scss'
import Button from "src/utils/button/Button.tsx";
import {useAuth} from "src/contexts/Auth.tsx";
import {createPortal} from "react-dom";
import {useTranslation} from "react-i18next";


type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal: FunctionComponent<Props> = ({setShowModal}) => {
  const modal = document.getElementById('overlays')!
  const {form, setName, setEmail, errors, validateForm} = useLogInForm()
  const {t} = useTranslation();
  const {login} = useAuth();
  const handleContinueClick = async () => {
    const isValid = await validateForm();
    if (isValid) {
      login({name: form.name, email: form.email});
      setShowModal(false);
    }
  };

  return createPortal(
    <div className={styles.container}>
      <div className={styles.loginModal}>
        <p className={styles.logIn}>{t('logIn')}</p>
        <div className={styles.allInputs}>
          <Input htmlFor={'name'} id={'name'} label={t('name')} value={form.name} onChange={setName} type="text"
                 className={styles.inputItem} errorMessage={errors.name}/>
          <Input htmlFor={'email'} id={'email'} label={t('email')} value={form.email} onChange={setEmail} type="text"
                 className={styles.inputItem} errorMessage={errors.email}/>
        </div>
        <div className={styles.allBtns}>
          <Button className={styles.loginModalBtn} children={t('continue')} onClick={handleContinueClick}/>
          <Button className={styles.loginModalBtn} children={t('cancel')} onClick={() => setShowModal(false)}/>
        </div>
        <p className={styles.logInHint}>{t('logInHint')}</p>
      </div>
    </div>,
    modal
  );
};

export default LoginModal;