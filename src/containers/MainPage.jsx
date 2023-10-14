import React, { useMemo, useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { colour, alpha, screenSize } from '../util/util';
import Blurb from '../components/Blurb';
import Timeline from '../components/Timeline';
import InfoCards from '../components/InfoCards';
import {
  Wish, Waterloo, ChefHero, Veeva, Ulti, Ontario, Jently
} from '../img/icon';
import {
  DiJava as Java, DiPython as Python, DiJavascript1 as Javascript 
} from 'react-icons/di';
import {
  Add, Gamepad, LinkedIn, Web
} from '@material-ui/icons';
import { 
  BlurbBackground, ExperienceBackground, SkillsBackground
} from '../img/bg';

const MainPage = () => {
  const styles = useStyle();
  const experienceRef = useRef(null);
  const experience = useExperience();
  const skillsRef = useRef(null);
  const skills = useSkills();
  const projects = useProjects();

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.blurbBackground)}>
        <div className={css(styles.blurbTint)}>
          <Blurb
            experienceRef={experienceRef}
            skillsRef={skillsRef}/>
        </div>
      </div>
      <div className={css(styles.experienceContainer)}>
        <Timeline
          timelineRef={experienceRef}
          title={`Work Experience & Education`}
          content={`I've had the pleasure of interning at many awesome companies, gaining valuable experience 
          in full-stack development and meshing with many awesome teams.`}
          elements={experience}/>
      </div>
      <div className={css(styles.projectsContainer)}>
        <InfoCards
          backgroundColor={alpha(colour.backgroundLight, 0.05)}
          textColor={colour.contentLight}
          title={'Projects'}
          cards={projects}/>
      </div>
      <div className={css(styles.skillsParallax)}>
        <div className={css(styles.skillsTint)}>
          <InfoCards
            cardsRef={skillsRef}
            backgroundColor={alpha(colour.backgroundLight, 0.04)}
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
        transition: 'ease all .5s',
      },
      blurbBackground: {
        backgroundImage: `url(${BlurbBackground})`,
        height: 800,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '60%',
        [screenSize.ultraWide]: {
          backgroundPosition: '60% 20%',
        },
      },
      blurbTint: {
        height: '100%',
        width: '100%',
        backgroundImage:
          `linear-gradient(
            ${alpha(colour.backgroundBlue)},
            ${colour.backgroundDark})`,
        margin: 0,
      },
      experienceContainer: {
        backgroundImage: `
          linear-gradient(
            ${colour.backgroundDark} 2%,
            ${alpha(colour.backgroundBlue, 0.75)},
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
      date: 'Aug 2020 - Present',
      contentStyle: { borderTop: `3px solid ${colour.linkedinBlue}` },
      iconStyle: { background: `${colour.linkedinBlue}` },
      icon: <LinkedIn/>,
      title: 'Software Engineer',
      subtitle: 'LinkedIn - Sales Solutions',
      content: `
        Building a web application for enterprise sales users.
        Leading feature development and other foundational initiatives.`,
      subcontent: `Typescript, Ember.js, Sass, SQL, Presto, Spark, Java`
    },
    {
      date: 'Sep 2015 - Jun 2020',
      contentStyle: { borderTop: `3px solid ${colour.uwYellowDark}` },
      iconStyle: { background: `${colour.uwYellow}` },
      icon: <Waterloo/>,
      title: 'Bachelor of Software Engineering',
      subtitle: 'University of Waterloo',
      content: `Honours Co-operative Program, with distinction`,
      subcontent: `
        OOP, Data Structures, Algorithms, Operating Systems, User Interfaces, Concurrency,
        Computer Networks, Distributed Computing, Database Management, Software Specifications`,
    },
    {
      date: 'Sep - Dec 2019',
      contentStyle: { borderTop: `3px solid ${colour.wishBlue}` },
      iconStyle: { background: `${colour.wishBlue}` },
      icon: <Wish/>,
      title: 'Software Engineer Intern',
      subtitle: 'Wish - Marketplace Logistics - San Francisco',
      content: `
        Built a web page delivering near-real time logistics data to merchants.
        Analyzed and queried large datasets of product ratings for product suggestions.`,
      subcontent: `Python, React+flow.js, MongoDB, Hive, Presto, Apache Airflow`
    },
    {
      date: 'Jan - Apr 2019',
      contentStyle: { borderTop: `3px solid ${colour.linkedinBlue}` },
      iconStyle: { background: `${colour.linkedinBlue}` },
      icon: <LinkedIn/>,
      title: 'Software Engineer Intern',
      subtitle: 'LinkedIn - Sales Solutions - Sunnyvale',
      content: `
        Designed and implemented hero results for a dynamic search page to connect
        users with their desired results more efficiently.
        Built and maintained RESTful APIs for a distributed search service.`,
      subcontent: `Ember.js, Sass, Java+parseq`,
    },
    {
      date: 'May - Aug 2018',
      contentStyle: { borderTop: `3px solid ${colour.chefGreen}` },
      iconStyle: { background: `${colour.chefGreen}` },
      icon: <ChefHero/>,
      title: 'Software Engineer Intern',
      subtitle: 'ChefHero - Product - Toronto',
      content: `
        Migrated dev-owned email template system to a third party service,
        reducing dev times for email-related tasks.
        Maintained, updated database schema and their respective Elasticsearch queries.`,
      subcontent: `React+Redux, Python, Elasticsearch, HTML5, Sass, Google Cloud Platform`,
    },
    {
      date: 'Sep - Dec 2017',
      contentStyle: { borderTop: `3px solid ${colour.veevaOrange}` },
      iconStyle: { background: `${colour.veevaGrey}` },
      icon: <Veeva/>,
      title: 'Backend Engineer Intern',
      subtitle: 'Veeva Systems - Vault - Toronto',
      content: `
        Designed and implemented scalable infrastructure for adding new internal data types.
        Implemented a logging service to collect data on job runtimes and statistics.`,
      subcontent: `Java+Spring, JUnit/Mockito, SQL`,
    },
    {
      date: 'Jan - Apr 2017',
      contentStyle: { borderTop: `3px solid ${colour.ultiGreen}` },
      iconStyle: { background: `${colour.white}` },
      icon: <Ulti/>,
      title: 'QA & Test Engineer Intern',
      subtitle: 'Ultimate Software - UltiPro - Toronto',
      content: `
        Automated test cases, reducing backlog size by 80%, streamlining regression test process.
        Maintained and automated UI/API/database test cases for an enterprise application.`,
      subcontent: `C#, .NET NUnit, SQL`,
    },
    {
      date: 'May - Aug 2016',
      contentStyle: { borderTop: `3px solid ${colour.black}` },
      iconStyle: { background: `${colour.white}` },
      icon: <Ontario/>,
      title: 'System Support Officer',
      subtitle: 'Ministry of the Attorney General - Toronto',
      content: `Wrote Batch scripts to automate MBSA security reporting across multiple application servers.`,
      subcontent: `Batch, PowerShell, MBSA`,
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
      icon: <Add/>,
      title: 'Other',
      content: ['SQL (MySQL)', 'NoSQL (MongoDB, Elasticsearch)', 'HTML5' , 'CSS3/SASS', 'C/C++, C#'],
    },
  ], []);

const useProjects = () =>
  useMemo(() => [
    {
      color: colour.jentlyYellow,
      icon: <Jently/>,
      title: 'Jent.ly',
      content: `
        Chrome extension that highlights key points in web articles and other content.
        Features customizable highlighting colours and whitelist capabilities.`,
      subcontent: 'Typescript, React, Sass, Python, Flask',
      links: {
        website: 'https://jent.ly/',
        sourceCode: 'https://github.com/jent-ly',
      },
    },
    {
      color: colour.accent,
      icon: <Web/>,
      title: 'Personal Webpage',
      content: `This webpage!`,
      subcontent: 'React, Aphrodite',
      links: {
        sourceCode: 'https://github.com/n7huang/n7huang.github.io',
      },
    },
    {
      color: colour.arcadeRed,
      icon: <Gamepad/>,
      title: 'ArcadeEX',
      content: `
        A light exploration of the game loop, user input, basic 2D graphics, basic animations, and audio.
        Features Hangman, Tic-Tac-Toe, and a Space Invaders clone.`,
      subcontent: 'Python, pygame',
      links: {
        sourceCode: 'https://github.com/n7huang/arcadeex',
      },
    },
  ], []);
export default MainPage;
