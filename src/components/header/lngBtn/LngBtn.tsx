import {FunctionComponent} from 'react';
import {useTranslation} from "react-i18next";
import styles from 'src/components/header/lngBtn/lngBtn.module.scss'
import {Dropdown} from "react-bootstrap";

interface OwnProps {
}

type Props = OwnProps;

const LngBtn: FunctionComponent<Props> = () => {
  const {i18n} = useTranslation();

  const handleChangeLng = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic" className={styles.lngDropdown}>
        {i18n.language}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleChangeLng("en")}>en</Dropdown.Item>
        <Dropdown.Item onClick={() => handleChangeLng("ru")}>ru</Dropdown.Item>
        <Dropdown.Item onClick={() => handleChangeLng("pl")}>pl</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>);
};

export default LngBtn;
