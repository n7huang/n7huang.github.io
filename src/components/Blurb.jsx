import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { colour, screenSize, alpha } from '../util/util';
import IconButton from '@material-ui/core/IconButton';
import {
  Email, GitHub, LinkedIn
} from '@material-ui/icons';

const MAIL_LINK = 'mailto:huang.nick9@gmail.com';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/nicholas-huang-05579b105/';
const GITHUB_LINK = 'https://github.com/n7huang';

const Blurb = (props) => {
  const {
    experienceRef,
    skillsRef
  } = props;

  const styles = useStyle();
  const scrollTo = (ref, offset = 0) => window.scrollTo(0, ref.current.offsetTop + offset);

  return (
    <div className={css(styles.container)}>
      <div class={css(styles.snsContainer)}>
        <IconButton 
          aria-label={'email'} className={css(styles.snsButton)}
          target={'_blank'} href={MAIL_LINK}
        >
          <Email className={css(styles.snsIcon)} fontSize='medium'/>
        </IconButton>
        <IconButton 
          aria-label={'linkedin'} className={css(styles.snsButton)}
          target={'_blank'} href={LINKEDIN_LINK}
        >
          <LinkedIn className={css(styles.snsIcon)} fontSize='medium'/>
        </IconButton>
        <IconButton
          aria-label={'github'} className={css(styles.snsButton)}
          target={'_blank'} href={GITHUB_LINK}
        >
          <GitHub className={css(styles.snsIcon)} fontSize='medium'/>
        </IconButton>
      </div>
      <div className={css(styles.introContainer)}>
        <h1 className={css(styles.introTitle)}>hi, i'm 
          <span className={css(styles.name)}> nicholas</span>.
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
  );
}

const useStyle = () => {
  return useMemo(() => {
    return StyleSheet.create({
      container: {
        paddingTop: 200,
      },
      name: {
        color: colour.accent,
      },
      snsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '0 auto 7px 15%',
        padding: '0 40px 0 30px',
        width: '30%',
      },
      snsButton: {
        margin: '0 7%',
        width: 24,
        height: 24,
        ':hover': {
          backgroundColor: alpha(colour.backgroundLight, 0.2),
          cursor: 'pointer',
        },
      },
      snsIcon: {
        color: colour.white,
      },
      introContainer: {
        backgroundColor: colour.backgroundDark,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        margin: '0 15%',
        padding: '20px 40px 0 30px',
        width: '30%',
        height: 545,
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
        transition: '0.3s',
        ':hover': {
          textDecoration: 'none',
          cursor: 'pointer',
          color: colour.complementDark,
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
