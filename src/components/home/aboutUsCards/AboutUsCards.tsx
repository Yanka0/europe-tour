import {FunctionComponent} from 'react';
import like_icon from 'src/img/like_icon.svg'
import medal_icon from 'src/img/medal_icon.svg'
import service_customer_icon from 'src/img/service_customer_icon.svg'
import user_icon from "src/img/user_search_icon.svg";
import {useTranslation} from "react-i18next";
import {Card, CardGroup, Container} from "react-bootstrap";
import Title from "src/utils/title/Title.tsx";
import styles from 'src/components/home/aboutUsCards/aboutUsCards.module.scss'

interface OwnProps {
}

type Props = OwnProps;

const AboutUsCards: FunctionComponent<Props> = () => {
  const {t} = useTranslation();
  return (
    <Container id='aboutUs' className={styles.aboutUsCards}>
      <Title name={t('aboutUsTitle')}/>
      <CardGroup>
        <Card className={styles.aboutUsCard}>
          <img src={medal_icon} alt="medal" width='35' height='35'/>
          <Card.Body>
            <Card.Title className={styles.aboutUsTitle}>{t('aboutUsCard1')}</Card.Title>
          </Card.Body>
        </Card>
        <Card className={styles.aboutUsCard}>
          <img src={service_customer_icon} alt="service_customer" width='35' height='35'/>
          <Card.Body>
            <Card.Title className={styles.aboutUsTitle}>{t('aboutUsCard2')}</Card.Title>
          </Card.Body>
        </Card>
        <Card className={styles.aboutUsCard}>
          <img src={like_icon} alt="like" width='35' height='35'/>
          <Card.Body>
            <Card.Title className={styles.aboutUsTitle}>{t('aboutUsCard3')}</Card.Title>
          </Card.Body>
        </Card>
        <Card className={styles.aboutUsCard}>
          <img src={user_icon} alt="user" width='35' height='35'/>
          <Card.Body>
            <Card.Title className={styles.aboutUsTitle}>{t('aboutUsCard4')}</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default AboutUsCards;
