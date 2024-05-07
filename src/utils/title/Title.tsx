import {FunctionComponent} from 'react';
import styles from 'src/utils/title/title.module.scss'

type Props = {
  name: string,
  className?: string
};

const Title: FunctionComponent<Props> = ({name, className}) => {

  return (<div className={styles.title + ' ' + className}>{name}</div>);
};

export default Title;
