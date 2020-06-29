import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { colour, alpha, screenSize } from '../util/util';
import Background from '../img/bg/background_02.png'

const Blurb = (props) => {
  const {
    experienceRef,
    skillsRef
  } = props;

  const styles = useStyle();
  const scrollTo = (ref, offset = 0) => window.scrollTo(0, ref.current.offsetTop + offset);

  return (
    <div className={css(styles.background)}>
      <div className={css(styles.tint)}>
        <div className={css(styles.container)}>
          <div className={css(styles.introContainer)}>
            <h1 className={css(styles.introTitle)}>hi, i'm 
              <span className={css(styles.accent)}> nicholas</span>.
            </h1>
            <p className={css(styles.introContent)}>
              I'm a full-stack web developer and Software Engineering graduate from the University of Waterloo.
              <br/>
              <br/>
              I build data-driven APIs and responsive web applications.
              <br/>
              You can check out&nbsp;
              <span onClick={() => scrollTo(experienceRef)} className={css(styles.link)}>what I've done</span> and&nbsp;
              <span onClick={() => scrollTo(skillsRef, -120)} className={css(styles.link)}>what I can do</span> below. :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyle = () => {
  return useMemo(() => {
    return StyleSheet.create({
      container: {
        transition: 'ease all .5s'
      },
      background: {
        backgroundImage: `url(${Background})`,
        height: 800,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '60%'
      },
      tint: {
        height: '100%',
        width: '100%',
        backgroundImage:
          `linear-gradient(
            ${alpha(colour.backgroundBlue)},
            ${colour.backgroundDark})`,
        margin: 0,
      },
      accent: {
        color: colour.accent,
      },
      introContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        margin: '0 15%',
        paddingTop: 255,
      },
      introTitle: {
        color: colour.header,
        fontSize: 32,
        margin: 0,
        [screenSize.nonMobile]: {
          fontSize: 50,
        }
      },
      introContent: {
        color: colour.contentLight,
        fontSize: 12,
        fontWeight: 'bold',
        [screenSize.nonMobile]: {
          fontSize: 18,
        }
      },
      link: {
        color: colour.complement,
        ':hover': {
          textDecoration: 'underline',
          cursor: 'pointer',
        }
      }
    });
  }, []);
};

Blurb.propTypes = {
  experienceRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.any })
  ]),
  skillsRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.any })
  ]),
}

export default Blurb;
