import React, { useMemo, useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { colour, alpha } from '../util/util';
import Blurb from '../components/Blurb';
import Timeline from '../components/Timeline';
import InfoCards from '../components/InfoCards';
import { FaLinkedin as LinkedIn } from 'react-icons/fa'
import { ReactComponent as Wish } from '../img/icon/wish.svg';
import { ReactComponent as Waterloo } from '../img/icon/uw.svg';
import { ReactComponent as ChefHero } from '../img/icon/ch.svg';
import { ReactComponent as Veeva } from '../img/icon/veeva.svg';
import { ReactComponent as Ulti } from '../img/icon/us.svg';
import { ReactComponent as Ontario } from '../img/icon/ontario.svg';
import { 
  DiJava as Java,
  DiPython as Python,
  DiJavascript1 as Javascript 
} from 'react-icons/di';
import QueueIcon from '@material-ui/icons/Queue';
import ExperienceBackground from '../img/bg/background_2.jpg';
import SkillsBackground from '../img/bg/background_11.png';

const MainPage = () => {
  const styles = useStyle();
  const experienceRef = useRef(null);
  const experience = useExperience();
  const skillsRef = useRef(null);
  const skills = useSkills();

  return (
    <div className={css(styles.container)}>
      <Blurb
        experienceRef={experienceRef}
        skillsRef={skillsRef}/>
      <div className={css(styles.experienceContainer)}>
        <Timeline
          timelineRef={experienceRef}
          title={`Work Experience & Education`}
          content={`I've had the pleasure of interning at many awesome companies, gaining valuable experience 
          in full-stack development and meshing with many awesome teams.`}
          elements={experience}/>
      </div>
      <div className={css(styles.skillsParallax)}>
        <div className={css(styles.skillsTint)}>
          <InfoCards
            cardsRef={skillsRef}
            textColor={colour.contentLight}
            title={'Skills'}
            cards={skills}/>
        </div>
      </div>
    </div>
  );
};

const useStyle = () => {
  return useMemo(() => {
    return StyleSheet.create({
      container: {
        display: 'flex',
        flexDirection: 'column',
      },
      experienceContainer: {
        backgroundImage: `
          linear-gradient(
            ${colour.backgroundDark} 2%,
            ${alpha(colour.backgroundBlue, 0.8)},
            ${colour.backgroundDark} 98%),
          url(${ExperienceBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      skillsParallax: {
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${SkillsBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'top',
        backgroundPosition: 'center'
      },
      skillsTint: {
        height: '100%',
        width: '100%',
        backgroundColor: alpha(colour.shadow),
      },
    });
  }, []);
};

const useExperience = () =>
  useMemo(() => [
    {
      date: 'Aug 2020 (incoming)',
      contentStyle: { borderTop: `3px solid ${colour.linkedinBlue}` },
      iconStyle: { background: `${colour.linkedinBlue}` },
      icon: <LinkedIn/>,
      title: 'Software Engineer',
      subtitle: 'LinkedIn - Sunnyvale',
    },
    {
      date: 'Sep 2015 - Jun 2020',
      contentStyle: { borderTop: `3px solid ${colour.uwYellowDark}` },
      iconStyle: { background: `${colour.uwYellow}` },
      icon: <Waterloo/>,
      title: 'Bachelor of Software Engineering',
      subtitle: 'University of Waterloo',
      content:
        <p>
          Honours Co-operative Program, with distinction
          <br/>
          <span style={{ fontSize: 12, lineHeight: 1 }}>
            OOP, Data Structures, Algorithms, Operating Systems, User Interfaces, Concurrency,
            Computer Networks, Distributed Computing, Database Management, Software Specifications
          </span>
        </p>,
    },
    {
      date: 'Sep - Dec 2019',
      contentStyle: { borderTop: `3px solid ${colour.wishBlue}` },
      iconStyle: { background: `${colour.wishBlue}` },
      icon: <Wish/>,
      title: 'Software Engineer Intern',
      subtitle: 'Wish - Marketplace Logistics - San Francisco',
      content:
        <p>
          Built a web page delivering near-real time logistics data to merchants.
          Analyzed and queried large datasets of product ratings for product suggestions.
          <br/>
          <span style={{ fontSize: 12, lineHeight: 1 }}>
            Python, React+flow.js, MongoDB, Hive, Presto, Apache Airflow
          </span>
        </p>,
    },
    {
      date: 'Jan - Apr 2019',
      contentStyle: { borderTop: `3px solid ${colour.linkedinBlue}` },
      iconStyle: { background: `${colour.linkedinBlue}` },
      icon: <LinkedIn/>,
      title: 'Software Engineer Intern',
      subtitle: 'LinkedIn - Sales Solutions - Sunnyvale',
      content:
        <p>
          Designed and implemented hero results for a dynamic search page to connect
          users with their desired results more efficiently.
          Built and maintained RESTful APIs for a distributed search service.
          <br/>
          <span style={{ fontSize: 12, lineHeight: 1 }}>
            Ember, Sass, Java+parseq
          </span>
        </p>,
    },
    {
      date: 'May - Aug 2018',
      contentStyle: { borderTop: `3px solid ${colour.chefGreen}` },
      iconStyle: { background: `${colour.chefGreen}` },
      icon: <ChefHero/>,
      title: 'Software Engineer Intern',
      subtitle: 'ChefHero - Product - Toronto',
      content:
        <p>
          Migrated dev-owned email template system to a third party service,
          reducing dev times for email-related tasks.
          Maintained, updated database schema and their respective Elasticsearch queries.
          <br/>
          <span style={{ fontSize: 12, lineHeight: 1 }}>
            React+Redux, Python, Elasticsearch, HTML5, Sass, Google Cloud Platform
          </span>
        </p>,
    },
    {
      date: 'Sep - Dec 2017',
      contentStyle: { borderTop: `3px solid ${colour.veevaOrange}` },
      iconStyle: { background: `${colour.veevaGrey}` },
      icon: <Veeva/>,
      title: 'Backend Engineer Intern',
      subtitle: 'Veeva Systems - Vault - Toronto',
      content:
        <p>
          Designed and implemented scalable infrastructure for adding new internal data types.
          Implemented a logging service to collect data on job runtimes and statistics.
          <br/>
          <span style={{ fontSize: 12, lineHeight: 1 }}>
            Java+Spring, JUnit/Mockito, SQL
          </span>
        </p>,
    },
    {
      date: 'Jan - Apr 2017',
      contentStyle: { borderTop: `3px solid ${colour.ultiGreen}` },
      iconStyle: { background: `${colour.white}` },
      icon: <Ulti/>,
      title: 'QA & Test Engineer Intern',
      subtitle: 'Ultimate Software - UltiPro - Toronto',
      content:
        <p>
          Automated test cases, reducing backlog size by 80%, streamlining regression test process.
          Maintained and automated UI/API/database test cases for an enterprise application.
          <br/>
          <span style={{ fontSize: 12, lineHeight: 1 }}>
            C#, .NET NUnit, SQL
          </span>
        </p>,
    },
    {
      date: 'May - Aug 2016',
      contentStyle: { borderTop: `3px solid ${colour.black}` },
      iconStyle: { background: `${colour.white}` },
      icon: <Ontario/>,
      title: 'System Support Officer',
      subtitle: 'Ministry of the Attorney General - Toronto',
      content:
        <p>
          Wrote Batch scripts to automate MBSA security reporting across multiple application servers.
          <br/>
          <span style={{ fontSize: 12, lineHeight: 1 }}>
            Batch, PowerShell, MBSA
          </span>
        </p>,
    },
  ], []);

const useSkills = () =>
  useMemo(() => [
    {
      color: colour.javaOrange,
      icon: <Java/>,
      title: 'Java',
      content: ['API development', 'Spring', 'Hadoop MapReduce', 'parseq', 'JUnit/Mockito'],
    },
    {
      color: colour.pythonYellow,
      icon: <Python/>,
      title: 'Python',
      content: ['API development', 'Flask', 'NumPy', 'pygame'],
    },
    {
      color: colour.javascriptYellow,
      icon: <Javascript/>,
      title: 'Javascript',
      content: ['React', 'Ember.js', 'Node.js', 'Typescript', 'ES6', 'Redux', 'jQuery'],
    },
    {
      color: colour.tertiary,
      icon: <QueueIcon/>,
      title: 'Other',
      content: ['SQL (MySQL)', 'NoSQL (MongoDB, Elasticsearch)', 'HTML5' , 'CSS3/SASS', 'C/C++, C#'],
    },
  ], []);

export default MainPage;
