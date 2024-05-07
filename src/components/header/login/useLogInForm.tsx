import {ChangeEvent, useReducer, useState} from "react";
import {useTranslation} from "react-i18next";
import * as yup from "yup";


export type FormState = {
  name: string,
  email: string
}
type FormAction = {
  type: string,
  payload: string
}
const reducer = (state: FormState, {type, payload}: FormAction): FormState => {
  switch (type) {
    case 'setName':
      return {
        ...state,
        name: payload
      }
    case 'setEmail':
      return {
        ...state,
        email: payload
      }
    default:
      return state
  }
}

const initialValue: FormState = {
  name: '',
  email: '',
}
const useLogInForm = () => {
  const [form, dispatch] = useReducer(reducer, initialValue)
  const {t} = useTranslation();
  const [errors, setErrors] = useState<{ name: string, email: string }>({
    name: '',
    email: ''
  });
  const validationSchema = yup.object().shape({
    name: yup.string()
      .required(t('enterName'))
      .min(2, t('enterName'))
      .max(30, t('nameSize'))
      .matches(/[A-Za-zА-Яа-яЁё]+/, t('isValidName'))
    ,
    email: yup.string()
      .required(t('isValidEmail'))
      .email(t('isValidEmail'))
  });

  const validateForm = async () => {
    try {
      await validationSchema.validate(form, {abortEarly: false});
      setErrors({name: '', email: ''});
      return true;
    } catch (err) {
      const newErrors = {name: '', email: ''};

      err.inner.forEach(error => {
        if (error.path === 'name') {
          newErrors.name = error.message;
        }
        if (error.path === 'email') {
          newErrors.email = error.message;
        }
      });

      setErrors(newErrors);
      return false;
    }
  };

  return {
    form,
    setName: (e: ChangeEvent<HTMLInputElement>) => dispatch({type: 'setName', payload: e.target.value}),
    setEmail: (e: ChangeEvent<HTMLInputElement>) => dispatch({type: 'setEmail', payload: e.target.value}),
    errors,
    validateForm,
  };
}

export default useLogInForm;
