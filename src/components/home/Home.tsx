import {FunctionComponent} from 'react';
import styles from 'src/components/home/home.module.scss'
import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";

type Props = {};
const Home: FunctionComponent<Props> = () => {
  const {t} = useTranslation();

  return <section className={styles.home}>
    <Container>
      <Row>
        <Col lg={6}>
          <p className={styles.homeTitle}>{t('homeTitle')}</p>
          <p className={styles.homeDesc}>{t('homeDesc')}</p>
        </Col>
      </Row>
    </Container>
  </section>;
};

export default Home;
