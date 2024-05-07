import {FunctionComponent, useState} from 'react';
import styles from 'src/components/country/reviews/countryReviews.module.scss'
import {useGetReviewsByCountryIdQuery} from "src/store/services/api.ts";
import ReviewForm from "src/components/form/ReviewForm.tsx";
import Button from "src/utils/button/Button.tsx";
import {useAuth} from "src/contexts/Auth.tsx";
import {useParams} from "react-router-dom";
import {isIdExist} from "src/utils/functions.ts";
import user_icon from 'src/img/user_icon.svg'
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";

type Props = {};

const CountryReviews: FunctionComponent<Props> = () => {
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);

  const {user} = useAuth();
  const {countryId} = useParams();
  isIdExist(countryId);

  const {t} = useTranslation();
  const {data: reviews} = useGetReviewsByCountryIdQuery(countryId);
  const handleEditClick = (reviewId: string) => {
    setEditingReviewId(reviewId);
  };

  const handleFormClose = () => {
    setEditingReviewId(null);
  };

  if (!reviews || !countryId) {
    return null;
  }

  return (
    <Row>
      <Col>
        <div>
          {!user && (
            <p className={styles.reviewTitle}>
              {t('reviewTitle')}
            </p>)}

          {reviews.map(({id, text, name}) => (
            <div className={styles.reviewItem} key={id}>
              <div className='d-flex'>
                <img src={user_icon} width={20} height={20}/>
                <p>{name}</p>
              </div>
              <p className={styles.review}>{text}</p>
              {user && name === user.name &&
                  <>
                    <Button onClick={() => handleEditClick(id)}>{t('edit')}</Button>
                    {editingReviewId === id &&
                        <ReviewForm
                            countryId={countryId}
                            reviewId={id}
                            reviewText={text}
                            onFormClose={handleFormClose}
                        />
                    }
                  </>
              }
            </div>
          ))}
        </div>
      </Col>

      {user && <Col>
        <ReviewForm countryId={countryId} onFormClose={handleFormClose}/>
      </Col>
      }

    </Row>
  )
};
export default CountryReviews;