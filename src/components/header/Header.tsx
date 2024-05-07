import {FunctionComponent, useEffect, useState} from 'react';
import styles from 'src/components/header/header.module.scss'
import Button from "src/utils/button/Button.tsx";
import LoginModal from "src/components/header/login/LoginModal.tsx";
import {useAuth} from "src/contexts/Auth.tsx";
import CartButton from "src/components/cart/CartButton.tsx";
import {Link, NavLink, useLocation} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import logo from 'src/img/logo.svg';
import LngBtn from "src/components/header/lngBtn/LngBtn.tsx";
import {useGetCountriesQuery} from "src/store/services/api.ts";
import {HashLink} from 'react-router-hash-link';


type Props = {};

const API_URL = import.meta.env.VITE_API_URL;
const Header: FunctionComponent<Props> = () => {
  const {t, i18n} = useTranslation();
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string>(t("countries"));

  const {user, logout} = useAuth();
  const location = useLocation();
  const handleDropdownSelect = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedItem(eventKey);
    }
  };
  const updateTranslations = () => {
    setSelectedItem(t("countries"));
  };

  useEffect(() => {
    updateTranslations();
  }, [i18n.language]);

  useEffect(() => {
    if (!location.pathname.startsWith('/country/')) {
      setSelectedItem(t("countries"));
    }
  }, [location.pathname]);

  const {data: countries} = useGetCountriesQuery(i18n.language)

  if (!countries) {
    return null
  }
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" width="40" height="40"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-center flex-fill">
              <NavLink to="/" className={styles.link}>
                {t("home")}
              </NavLink>
              <HashLink to="/#aboutUs" className={styles.link}>
                {t("about")}
              </HashLink>
              <HashLink to="#contacts" className={styles.link}>
                {t("contact")}
              </HashLink>
              <NavDropdown
                title={selectedItem}
                className={styles.link}
                onSelect={handleDropdownSelect}
              >{countries.map((country) => (
                <NavDropdown.Item as={NavLink} to={`/country/${country.id}`} eventKey={t(country.id)}
                                  key={t(country.id)}>
                  {t(country.id)} <img src={`${API_URL}/img/${country.imgs.flag}`} alt={country.id} width='20' height='20'/>
                </NavDropdown.Item>
              ))}
              </NavDropdown>
            </Nav>
            <LngBtn/>
            <Nav>
              {user ? (
                <>
                  <p className={styles.userName}>{user.name}</p>
                  <div className={styles.btn}>
                    <Button className={styles.headerBtn} children={t('logOut')} onClick={logout}/>
                  </div>
                  <CartButton className={styles.cartBtn}/>
                </>
              ) : (
                <>
                  <div className={styles.btn}><Button className={styles.headerBtn} children={t('logIn')}
                                                      onClick={() => setShowLoginModal(true)}/></div>
                  {showLoginModal && <LoginModal setShowModal={setShowLoginModal}/>}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>);
};

export default Header;
