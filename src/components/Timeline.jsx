import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { colour, alpha, screenSize } from '../util/util';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = (props) => {
  const styles = useStyle();
  const tlStyles = useTimelineStyle();
  const [expanded, setExpanded] = useState(false);

  const {
    timelineRef,
    title,
    content,
    elements,
    initLimit,
    initCollapsed,
  } = props;

  const getTimelineElements = () => {
    const tlElements = elements.map((e) => (
      <VerticalTimelineElement
        key={`${e.title}_${e.date}`}
        date={e.date}
        className={'vertical-timeline-element'}
        contentStyle={{ ...tlStyles.tlContent, ...e.contentStyle }}
        contentArrowStyle={{ visibility: 'hidden' }}
        iconStyle={{ ...tlStyles.tlIcon, ...e.iconStyle }}
        icon={e.icon}
      >
        {e.title &&
          <h3 className="vertical-timeline-element-title">{e.title}</h3>}
        {e.subtitle &&
          <h4 className="vertical-timeline-element-subtitle">
            {e.subtitle}
          </h4>}
        {typeof(e.content) == 'string' ?
          <p>
            {e.content}
            {e.subcontent &&
              <><br/>
              <span className={css(styles.subcontent)}>
                {e.subcontent}
              </span>
              </>
            }
          </p>
          :
          e.content
        }
      </VerticalTimelineElement>
    ));
    return !initCollapsed || expanded ? tlElements : tlElements.slice(0,initLimit);
  };

  return (
    <div ref={timelineRef} className={css(styles.container)}>
      <div className={css(styles.header)}>
        <h2 className={css(styles.title)}>
          {title}
        </h2>
        {content &&
          <p className={css(styles.content)}>
            {content}
          </p>
        }
      </div>
      <hr className={css(styles.separator)}/>
      <VerticalTimeline className={css(styles.timeline)}>
        {getTimelineElements()}
        {initCollapsed && !expanded &&
          <VerticalTimelineElement
            iconOnClick={() => setExpanded(true)}
            iconClassName="moreButton"
            icon={
              <Fab className={css(styles.fabButton)} aria-label="more">
                <ExpandMoreIcon className={css(styles.moreIcon)}/>
              </Fab>
            }
          />}
      </VerticalTimeline>
      <hr className={css(styles.separator)}/>
    </div>
  );
}

const useStyle = () =>
  useMemo(() => {
    return StyleSheet.create({
      container: {
        height: '100%',
        width: '100%',
        transition: 'ease all 1s',
      },
      header: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '80%',
        margin: 'auto',
      },
      title: {
        color: colour.secondary,
        marginBottom: 10,
        fontSize: 26,
        [screenSize.wide]: {
          fontSize: 32,
        }
      },
      content: {
        color: colour.contentLight,
        fontSize: 12,
        marginTop: 0,
      },
      subcontent: {
        fontSize: 12,
        fontStyle: 'italic',
        lineHeight: 1,
      },
      separator: {
        width: '50%',
        borderBottom: `1px solid ${colour.secondaryDark}`,
        margin: '20px auto',
      },
      timeline: {
        width: '75%',
        [screenSize.wide]: {
          width: '95%',
        },
      },
      moreButton: {
        boxShadow: 'none'
      },
      fabButton: {
        boxShadow: 'none',
        backgroundColor: colour.secondary,
        width: 40,
        height: 40,
        [screenSize.wide]: {
          width: 60,
          height: 60,
        },
      },
      moreIcon: {
        display: 'inline-block',
        width: 24,
        height: 24,
        position: 'absolute',
        left: 'auto',
        top: 'auto',
        marginLeft: 'auto',
        marginTop: 'auto',
        color: colour.white,
        [screenSize.wide]: {
          width: 32,
          height: 32,
        },
      },
    });
  }, []);

const useTimelineStyle = () =>
  useMemo(() => {
    return {
      tlContent: {
        color: colour.contentLight,
        backgroundColor: alpha(colour.backgroundLight, 0.05),
        paddingTop: 10,
        boxShadow: `0 3px 3px ${alpha(colour.black, 0.1)}`,
        border: 'none',
      },
      tlIcon: {
        color: colour.white,
      },
    }}, []);

Timeline.propTypes = {
  timelineRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.any })
  ]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      contentStyle: PropTypes.object,
      iconStyle: PropTypes.object,
      icon: PropTypes.element,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
      subContent: PropTypes.string,
    })
  ),
  initLimit: PropTypes.number,
  initCollapsed: PropTypes.bool,
};

Timeline.defaultProps = {
  elements: [],
  initLimit: 0,
  initCollapsed: false,
};

export default Timeline;
