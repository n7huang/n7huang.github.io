import React, { useMemo, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { colour, screenSize } from '../util/util';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';
import { FaLinkedin as LinkedIn } from 'react-icons/fa'
import { ReactComponent as Wish } from '../img/icon/wish.svg';
import { ReactComponent as Waterloo } from '../img/icon/uw.svg';
import { ReactComponent as ChefHero } from '../img/icon/ch.svg';
import { ReactComponent as Veeva } from '../img/icon/veeva.svg';
import { ReactComponent as Ulti } from '../img/icon/us.svg';
import { ReactComponent as Ontario } from '../img/icon/ontario.svg';
import 'react-vertical-timeline-component/style.min.css';

const Experience = (props) => {
  console.log('experience',props);
  const styles = useStyle();
  const tlStyles = useTimelineStyles();
  const [expanded, setExpanded] = useState(false);

  const elements = [
    {
      props: {
        key: 7,
        date: 'Aug 2020 (incoming)',
        className: 'vertical-timeline-element',
        contentStyle: { ...tlStyles.tlContent, borderTop: `3px solid ${colour.linkedinBlue}` },
        contentArrowStyle: { visibility: 'hidden' },
        iconStyle: { ...tlStyles.tlIcon, background: `${colour.linkedinBlue}` },
        icon: <LinkedIn />,
      },
      title: 'Software Engineer',
      subtitle: 'LinkedIn - Sunnyvale',
    },
    {
      props: {
        key: 6,
        date: 'Sep 2015 - Jun 2020',
        className: 'vertical-timeline-element',
        contentStyle: { ...tlStyles.tlContent, borderTop: `3px solid ${colour.uwYellowDark}` },
        contentArrowStyle: { visibility: 'hidden' },
        iconStyle: { ...tlStyles.tlIcon, background: `${colour.uwYellow}` },
        icon: <Waterloo />,
      },
      title: 'Bachelor of Software Engineering',
      subtitle: 'University of Waterloo',
      content:
        <p>
          Honours Co-operative Program, with distinction
          <br/>
          <span className={css(styles.skills)}>
            OOP, Data Structures, Algorithms, Operating Systems, User Interfaces, Concurrency,
            Computer Networks, Distributed Computing, Database Management, Software Specifications
          </span>
        </p>,
    },
    {
      props: {
        key: 5,
        date: 'Sep - Dec 2019',
        className: 'vertical-timeline-element',
        contentStyle: { ...tlStyles.tlContent, borderTop: `3px solid ${colour.wishBlue}` },
        contentArrowStyle: { visibility: 'hidden' },
        iconStyle: { ...tlStyles.tlIcon, background: `${colour.wishBlue}` },
        icon: <Wish />,
      },
      title: 'Software Engineer Intern',
      subtitle: 'Wish - Marketplace Logistics - San Francisco',
      content:
        <p>
          Built a web page delivering near-real time logistics data to merchants.
          Analyzed and queried large datasets of product ratings for product suggestions.
          <br/>
          <span className={css(styles.skills)}>
            Python, React+flow.js, MongoDB, Hive, Presto, Apache Airflow
          </span>
        </p>,
    },
    {
      props: {
        key: 4,
        date: 'Jan - Apr 2019',
        className: 'vertical-timeline-element',
        contentStyle: { ...tlStyles.tlContent, borderTop: `3px solid ${colour.linkedinBlue}` },
        contentArrowStyle: { visibility: 'hidden' },
        iconStyle: { ...tlStyles.tlIcon, background: `${colour.linkedinBlue}` },
        icon: <LinkedIn />,
      },
      title: 'Software Engineer Intern',
      subtitle: 'LinkedIn - Sales Solutions - Sunnyvale',
      content:
        <p>
          Designed and implemented hero results for a dynamic search page to connect
          users with their desired results more efficiently.
          Built and maintained RESTful APIs for a distributed search service.
          <br/>
          <span className={css(styles.skills)}>
            Ember, Sass, Java+parseq
          </span>
        </p>,
    },
    {
      props: {
        key: 3,
        date: 'May - Aug 2018',
        className: 'vertical-timeline-element',
        contentStyle: { ...tlStyles.tlContent, borderTop: `3px solid ${colour.chefGreen}` },
        contentArrowStyle: { visibility: 'hidden' },
        iconStyle: { ...tlStyles.tlIcon, background: `${colour.chefGreen}` },
        icon: <ChefHero />,
      },
      title: 'Software Engineer Intern',
      subtitle: 'ChefHero - Product - Toronto',
      content:
        <p>
          Migrated dev-owned email template system to a third party service,
          reducing dev times for email-related tasks.
          Maintained, updated database schema and their respective Elasticsearch queries.
          <br/>
          <span className={css(styles.skills)}>
            React+Redux, Python, Elasticsearch, HTML5, Sass, Google Cloud Platform
          </span>
        </p>,
    },
    {
      props: {
        key: 2,
        date: 'Sep - Dec 2017',
        className: 'vertical-timeline-element',
        contentStyle: { ...tlStyles.tlContent, borderTop: `3px solid ${colour.veevaOrange}` },
        contentArrowStyle: { visibility: 'hidden' },
        iconStyle: { ...tlStyles.tlIcon, background: `${colour.veevaGrey}` },
        icon: <Veeva />,
      },
      title: 'Backend Engineer Intern',
      subtitle: 'Veeva Systems - Vault - Toronto',
      content:
        <p>
          Designed and implemented scalable infrastructure for adding new internal data types.
          Implemented a logging service to collect data on job runtimes and statistics.
          <br/>
          <span className={css(styles.skills)}>
            Java+Spring, JUnit/Mockito, SQL
          </span>
        </p>,
    },
    {
      props: {
        key: 1,
        date: 'Jan - Apr 2017',
        className: 'vertical-timeline-element',
        contentStyle: { ...tlStyles.tlContent, borderTop: `3px solid ${colour.ultiGreen}` },
        contentArrowStyle: { visibility: 'hidden' },
        iconStyle: { ...tlStyles.tlIcon, background: `${colour.white}` },
        icon: <Ulti/>,
      },
      title: 'QA & Test Engineer Intern',
      subtitle: 'Ultimate Software - UltiPro - Toronto',
      content:
        <p>
          Automated test cases, reducing backlog size by 80%, streamlining regression test process.
          Maintained and automated UI/API/database test cases for an enterprise application.
          <br/>
          <span className={css(styles.skills)}>
            C#, .NET NUnit, SQL
          </span>
        </p>,
    },
    {
      props: {
        key: 0,
        date: 'May - Aug 2016',
        className: 'vertical-timeline-element',
        contentStyle: { ...tlStyles.tlContent, borderTop: `3px solid ${colour.black}` },
        contentArrowStyle: { visibility: 'hidden' },
        iconStyle: { ...tlStyles.tlIcon, background: `${colour.white}` },
        icon: <Ontario />,
      },
      title: 'System Support Officer',
      subtitle: 'Ministry of the Attorney General - Toronto',
      content:
        <p>
          Wrote Batch scripts to automate MBSA security reporting across multiple application servers.
          <br/>
          <span className={css(styles.skills)}>
            Batch, PowerShell, MBSA
          </span>
        </p>,
    },
  ];

  const getTimelineElements = () => {
    const tlElements = elements.map(e => (
      <VerticalTimelineElement {...e.props}>
        <h3 className="vertical-timeline-element-title">{e.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {e.subtitle}
        </h4>
        {e.content}
      </VerticalTimelineElement>
    ));
    return expanded ? tlElements : tlElements.slice(0,4);
  };

  return (
    <div ref={props.experienceRef} className={css(styles.container)}>
      <div className={css(styles.experienceHeader)}>
        <h2 className={css(styles.experienceTitle)}>
          Work Experience & Education
        </h2>
        <p className={css(styles.experienceContent)}>
          I've had the pleasure of interning at many awesome companies, gaining valuable experience 
          in full-stack development and meshing with many awesome teams. 
        </p>
      </div>
      <hr className={css(styles.separator)}/>
      <VerticalTimeline className={css(styles.timeline)}>
        {getTimelineElements()}
        {!expanded &&
          <VerticalTimelineElement
            iconOnClick={() => setExpanded(true)}
            iconClassName="moreButton"
            icon={
              <Fab className={css(styles.fabButton)} aria-label="more">
                <MoreVertIcon className={css(styles.moreIcon)}/>
              </Fab>
            }
          />
        }
      </VerticalTimeline>
    </div>
  );
}

const useStyle = () => {
  return useMemo(() => {
    return StyleSheet.create({
      container: {
        height: '100%',
        width: '100%',
        transition: 'ease all .5s',
      },
      experienceHeader: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '80%',
        margin: 'auto',
      },
      experienceTitle: {
        color: colour.secondary,
        marginBottom: 10,
        // fontWeight: 'normal',
        fontSize: 24,
        [screenSize.wide]: {
          fontSize: 32,
        }
      },
      experienceContent: {
        color: colour.contentLight,
        fontSize: 12,
        marginTop: 0,
      },
      separator: {
        width: '50%',
        borderBottom: `1px solid ${colour.secondary}`,
        margin: '20px auto',
      },
      timeline: {
        width: '75%',
        [screenSize.wide]: {
          width: '95%',
        },
      },
      skills: {
        fontSize: 12,
        lineHeight: 1,
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
};

const useTimelineStyles = () => {
  return useMemo(() => {
    return {
      tlContent: {
        color: colour.contentLight,
        backgroundColor: 'transparent',
        paddingTop: 10,
        boxShadow: 'none',
        border: 'none',
      },
      tlIcon: {
        color: colour.white,
      },
    }
  }, []);
}

export default Experience;
