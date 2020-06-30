import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { colour, alpha, screenSize } from '../util/util';
import Button from '@material-ui/core/Button';

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
        {e.subcontent &&
          <p className={css(styles.cardSubcontent)}>{e.subcontent}</p>
        }
        {e.links &&
          <div className={css(styles.links)}>
            {e.links.sourceCode &&
              <Button
                variant={'contained'}
                className={css(styles.linkButton)}
                target={'_blank'}
                href={e.links.sourceCode}>
                  View Source Code
              </Button>
            }
            {e.links.website &&
              <Button
                variant={'contained'}
                className={css(styles.linkButton)}
                target={'_blank'}
                href={e.links.website}
              >
                Visit Website
              </Button>
            }
          </div>
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
    backgroundColor,
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
        margin: '0 0 20px 0',
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
        backgroundColor: backgroundColor || 'transparent',
        boxShadow: `0 5px 5px ${alpha(colour.black, 0.2)}`,
        textAlign: 'center',
        padding: '20px 8px',
        borderRadius: 4,
        margin: '1%',
        marginBottom: '2%',
        flexGrow: 1,
        width: '100%',
        [screenSize.mobileLarge]: {
          maxWidth: '45%',
          margin: '0.5%',
          marginBottom: '1%',
        },
        [screenSize.desktop]: {
          maxWidth: '22%',
          margin: '0.5%',
          marginBottom: '1%',
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
        marginBottom: 8,
      },
      cardContent: {
        color: textColor || '#000',
        margin: '8px 0',
      },
      cardSubcontent: {
        color: textColor || '#000',
        margin: '6px 0 12px 0',
        fontSize: 12,
        fontStyle: 'italic',
        lineHeight: 1,
      },
      links: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      linkButton: {
        backgroundColor: alpha(colour.backgroundLight, 0.1),
        borderRadius: 5,
        fontSize: 12,
        color: textColor || '#000',
        padding: '4px 8px',
        margin: 5,
        transition: '0.3s',
        ':hover': {
          backgroundColor: alpha(colour.backgroundLight, 0.2),
          cursor: 'pointer',
        }
      },
    });
  }, [backgroundColor, textColor]);
};

InfoCards.propTypes = {
  cardsRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.any })
  ]),
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
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
      subcontent: PropTypes.string,
      links: PropTypes.shape({
        sourceCode: PropTypes.string,
        website: PropTypes.string,
      }),
    })
  ),
};

export default InfoCards;
