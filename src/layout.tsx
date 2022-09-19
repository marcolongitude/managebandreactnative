import React, { useEffect, useState } from 'react';
// import Navbar from './components/NavBar/Navbar';
// import GlobalStyle from './globalStyles';
// import Footer from './components/Footer';

const Layout = (props: {
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('reduxState');
    if (isAuth) {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      {/* <GlobalStyle /> */}
      {/* {isAuth && <Navbar />} */}
      <div>{props.children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
