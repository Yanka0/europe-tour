import React, {FunctionComponent} from 'react';
import styles from 'src/utils/input/input.module.scss'

type Props = {
  htmlFor: string
  id: string
  type: string
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
  label: string
  className: string
  disabled?: boolean,
  errorMessage?: string
};

const Input: FunctionComponent<Props> = ({
                                           htmlFor,
                                           id,
                                           type,
                                           value,
                                           onChange,
                                           label,
                                           className,
                                           disabled,
                                           errorMessage
                                         }) => {

  return (
    <div className={styles.container}>
      <label htmlFor={htmlFor}>{label}</label>
      <input id={id}
             type={type}
             value={value}
             onChange={onChange}
             className={className}
             disabled={disabled}
      />
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};

export default Input;
