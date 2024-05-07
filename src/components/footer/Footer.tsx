import {FunctionComponent} from 'react';
import styles from 'src/components/footer/footer.module.scss'
import {Col, Container, Row} from "react-bootstrap";
import phone_icon from "src/img/footer_phone_icon.svg";
import email_icon from "src/img/footer_email_icon.svg";
import finger_icon from "src/img/footer_finger_icon.svg";
import {useTranslation} from "react-i18next";

interface OwnProps {
}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = () => {
  const {t} = useTranslation();

  return (
    <footer className={styles.footer} id="contacts">
      <Container>
        <Row>
          <Col>
            <h6 className='text-center mt-3'>{t('contact')}</h6>
          </Col>
        </Row>
        <Row className={styles.contacts}>
          <Col>
            <div className={styles.footer_item}>
              <img src={phone_icon} alt="icon" width="25" height="25"/>
              <p>{t('phoneNumber')}</p>
            </div>
          </Col>
          <Col>
            <div className={styles.footer_item}>
              <img src={email_icon} alt="icon" width="25" height="25"/>
              <p>{t('companyEmail')}</p>
            </div>
          </Col>
          <Col>
            <div className={styles.footer_item}>
              <img src={finger_icon} alt="icon" width="25" height="25"/>
              <p>{t('companyPlus')}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              &copy; {new Date().getFullYear()} {t('footerDesc')}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
