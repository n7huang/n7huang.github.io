import React, { useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Blurb from '../components/Blurb';
import Experience from '../components/Experience';

const MainPage = () => {
  const styles = useStyle();
  return (
    <div className={css(styles.mainRoot)}>
      <Blurb/>
      <Experience/>
    </div>
  );
}

const useStyle = () => {
  return useMemo(() => {
    return StyleSheet.create({
      mainRoot: {
        display: 'flex',
        flexDirection: 'column',
      },
      // parallax: {
      //   backgroundAttachment: 'fixed',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      //   // filter: 'grayscale(80%)',
      //   // background: `url(https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350)`
      // },
      // test: {
      //   // "height:1000px;background-color:red;font-size:36px"
      //   height: 1000,
      //   // opacity: 0,
      //   // backgroundColor: 'transparent',
        
      // },
      // testText: {
      //   color: 'black',
      //   fontSize: 36
      // }
    });
  }, []);
};

export default MainPage;
