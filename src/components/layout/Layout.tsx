import {FunctionComponent} from 'react';
import Header from "src/components/header/Header.tsx";
import Footer from "src/components/footer/Footer.tsx";
import AuthProvider from "src/contexts/Auth.tsx";
import {Outlet} from "react-router-dom";
import styles from 'src/components/layout/layout.module.scss'

type Props = {};

const Layout: FunctionComponent<Props> = () => {
  return (
    <div className={styles.root}>
      <AuthProvider>
        <Header/>
        <div><Outlet/></div>
        <Footer/>
      </AuthProvider>
    </div>);
};

export default Layout;
