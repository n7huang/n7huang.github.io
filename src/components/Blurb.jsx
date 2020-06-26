import React, { useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Background from '../img/bg/background_02.png'
import { colour, screenSize } from '../util/util';

const Blurb = () => {
  const styles = useStyle();
  const toExperience = () => window.scrollTo(0, 800);
  const toSkills = () => {};

  return (
    <div className={css(styles.background)}>
      <div className={css(styles.tint)}>
        <div className={css(styles.introContainer)}>
          <h1 className={css(styles.introHeader)}>hi, i'm 
            <span className={css(styles.accent)}> nicholas</span>.
          </h1>
          <p className={css(styles.introContent)}>
            I'm a full-stack web developer and Software Engineering graduate from the University of Waterloo.
            <br/>
            <br/>
            I build data-driven APIs and responsive web applications.
            <br/>
            You can check out&nbsp;
            <a onClick={toExperience} className={css(styles.accent, styles.link)}>what I've done</a> and&nbsp;
            <a onClick={toSkills} className={css(styles.accent, styles.link)}>what I can do</a> below. :)
          </p>
        </div>
      </div>
    </div>
  );
}

const useStyle = () => {
  return useMemo(() => {
    return StyleSheet.create({
      background: {
        transition: 'ease all .5s',
        backgroundImage: `url(${Background})`,
        height: 800,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '60%'
        // [screenSize.mobile]: {
        //   backgroundPosition: '60%',
        // },
        // [screenSize.mobileLandscape]: {
        //   backgroundPosition: '60%',
        // },
        // [screenSize.tablet]: {
        //   backgroundPosition: '60%',
        // },
        // [screenSize.desktop]: {
        //   backgroundPosition: 'center'
        // },
      },
      tint: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(24, 37, 64, 0.65)',
        margin: 0,
      },
      accent: {
        color: colour.accent,
      },
      introContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        margin: '0 8%',
        paddingTop: 255,
      },
      introHeader: {
        color: colour.header,
        fontSize: 50,
        margin: 0,
      },
      introContent: {
        color: colour.content,
        fontSize: 18,
        fontWeight: 'bold',
      },
      link: {
        ':hover': {
          textDecoration: 'underline',
          cursor: 'pointer',
        }
      }
    });
  }, []);
};

export default Blurb;
