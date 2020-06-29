import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { colour, alpha, screenSize } from '../util/util';

const InfoCards = (props) => {
  const styles = useStyle(props);

  const {
    cardsRef,
    title,
    cards,
  } = props;

  const generateCards = () =>
    cards.map((e) => (
      <div key={`${e.title}`} className={css(styles.card)} style={{ borderTop: `3px solid ${e.color}`}}>
        {e.icon &&
          <div className={css(styles.cardIconBox)} style={{ backgroundColor: e.color }}>
            {e.icon}
          </div>
        }
        {e.title &&
          <h3 className={css(styles.cardTitle)} style={{ color: e.color }}>{e.title}</h3>}
        {Array.isArray(e.content) ?
          <p className={css(styles.cardContent)}>{e.content.map(u => <span key={`${u}`}>{u}<br/></span>)}</p>
          :
          typeof(e.content) == 'string' ?
          <p className={css(styles.cardContent)}>{e.content}</p>
          :
          e.content
        }
      </div>
    ));

  return (
    <div ref={cardsRef} className={css(styles.container)}>
      <h2 className={css(styles.title)}>{title}</h2>
      <div className={css(styles.cardContainer)}>
        {generateCards()}
      </div>
    </div>
  );
}

const useStyle = (props) => {
  const {
    textColor
  } = props;

  return useMemo(() => {
    return StyleSheet.create({
      container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '26px 0',
      },
      title: {
        margin: '0 0 10px 0',
        color: colour.tertiary,
        fontSize: 26,
        textAlign: 'center',
        [screenSize.wide]: {
          fontSize: 32,
        },
      },
      cardContainer: {
        width: '95%',
        maxWidth: 1170,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 'auto',
        justifyContent: 'center',
      },
      card: {
        minHeight: 285,
        backgroundColor: alpha(colour.shadow),
        textAlign: 'center',
        padding: '20px 0',
        borderRadius: 4,
        margin: '0.5%',
        marginBottom: '1%',
        flexGrow: 1,
        width: '100%',
        [screenSize.mobileLarge]: {
          width: '48%',
          maxWidth: '48%',
        },
        [screenSize.desktop]: {
          width: '23%',
          maxWidth: '23%',
        },
      },
      cardIconBox: {
        width: 80,
        height: 80,
        margin: 'auto',
        color: 'white',
        borderRadius: '50%',
        ':nth-child(1n) > svg': {
          width: 60,
          height: 60,
          marginTop: 10,
        }
      },
      cardTitle: {
        fontWeight: 'normal',
      },
      cardContent: {
        color: textColor || 'black',
      },
    });
  }, [textColor]);
};

InfoCards.propTypes = {
  cardsRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.any })
  ]),
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      icon: PropTypes.element,
      title: PropTypes.string,
      content: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
        PropTypes.element,
      ]),
    })
  ),
};

export default InfoCards;
