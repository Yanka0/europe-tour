import {ChangeEvent, useReducer, useState} from "react";
import * as yup from 'yup';
import {useTranslation} from 'react-i18next';


type FormState = {
  name: string,
  text: string,
}
type FormAction = {
  type: string,
  payload: string
}
const reducer = (state: FormState, {type, payload}: FormAction): FormState => {
  switch (type) {
    case 'setName':
      return {
        ...defaultInitialValue,
        name: payload
      }
    case 'setText':
      return {
        ...state,
        text: payload
      }

    default:
      return state
  }
}

const defaultInitialValue: FormState = {
  name: '',
  text: '',
}


const useReviewForm = (initialValue?: FormState) => {
  const [form, dispatch] = useReducer(reducer, initialValue ?? defaultInitialValue)
  const [errors, setErrors] = useState<{ text: string }>({text: ''});
  const {t} = useTranslation();
  const validationSchema = yup.object().shape({
    text: yup.string()
      .min(3, t('enterText'))
      .max(500, t('textSize'))
      .matches(/[A-Za-zА-Яа-яЁё]+/, t('isValidText')),
  });
  const validateForm = async () => {
    try {
      await validationSchema.validate(form, {abortEarly: false});
      setErrors({text: ''});
      return true;
    } catch (err) {
      setErrors({text: err.errors[0]});
      return false;
    }
  };
  return {
    form,
    setName: (e: ChangeEvent<HTMLInputElement>) => dispatch({type: 'setName', payload: e.target.value}),
    setText: (e: ChangeEvent<HTMLInputElement>) => dispatch({type: 'setText', payload: e.target.value}),
    errors,
    validateForm,
  };
}

export default useReviewForm;
