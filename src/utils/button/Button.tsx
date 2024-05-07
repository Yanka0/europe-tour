import {FunctionComponent, ReactNode} from 'react';
import styles from 'src/utils/button/button.module.scss'

type Props = {
  children: ReactNode,
  className?: string,
  onClick?: () => void,
  disabled?: boolean
};

const Button: FunctionComponent<Props> = ({children, className, onClick, disabled}) => {

  return (<button className={`${styles.btn} ${className}`} onClick={onClick} disabled={disabled}>{children}</button>);
};

export default Button;
