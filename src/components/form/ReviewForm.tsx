import {ChangeEvent, FunctionComponent} from 'react';
import Input from "src/utils/input/Input.tsx";
import styles from 'src/components/form/form.module.scss'
import useReviewForm from "src/components/form/useReviewForm.tsx";
import {useAuth} from "src/contexts/Auth.tsx";
import {useCreateReviewMutation, useUpdateReviewMutation} from "src/store/services/api.ts";
import Button from "src/utils/button/Button.tsx";
import {useTranslation} from "react-i18next";


type Props = {
  countryId: string
  reviewId?: string,
  reviewText?: string,
  onFormClose: () => void;
};


const ReviewForm: FunctionComponent<Props> = ({countryId, reviewId, reviewText, onFormClose}) => {
  const {form, setText, setName, errors, validateForm} = useReviewForm(
    {name: "", text: reviewText ?? ""}
  );
  const {t} = useTranslation();
  const {user} = useAuth();
  const [createReview] = useCreateReviewMutation();
  const [updateReview] = useUpdateReviewMutation();

  const handleSubmit = async () => {
    const isValid = await validateForm();
    if (isValid) {
      if (reviewId) {
        updateReview({
          reviewId: reviewId,
          editReview: {
            name: user?.name,
            text: form.text,
          }
        }).then(() => {
          onFormClose();
        });
      } else {
        createReview({
          countryId,
          newReview: {
            name: user?.name,
            text: form.text,
          }
        }).then(() => {
          onFormClose();
          setText({target: {value: ''}} as ChangeEvent<HTMLInputElement>);
        });
      }
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.inputList}>
        <p>{reviewId ? t('editReview') : t('addReview')}</p>
        <Input className={styles.inputItem} htmlFor={'name'} id={'name'} type={'text'} label={t('name')}
               value={user ? user.name : ''} onChange={setName} disabled={true}/>
        <Input className={styles.inputItem} htmlFor={'text'} id={'text'} type={'text'} label={t('text')}
               value={form.text}
               onChange={setText} errorMessage={errors.text}/>
      </div>

      <Button onClick={handleSubmit}>
        {reviewId ? t('save') : t('submit')}
      </Button>
    </div>
  );
};

export default ReviewForm;