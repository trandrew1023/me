import {
  Fragment,
  React,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Grow,
  IconButton,
  Typography,
} from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageChicken from '../static/images/chick.png';
import ResumeModal from './ResumeModal';

export default function Resume() {
  const [time, setTime] = useState(new Date());
  const [scrollButtonVisible, setScrollButtonVisible] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const footerRef = useRef();

  const toggleScrollButtonVisible = () => {
    const element = document.documentElement;
    if (element.scrollHeight - element.scrollTop <= element.clientHeight + 69) {
      setScrollButtonVisible(false);
    } else {
      setScrollButtonVisible(true);
    }
  };

  const renderList = (items) => (
    <ul>
      {items.map((item) => (
        <li key={item}><Typography>{item}</Typography></li>
      ))}
    </ul>
  );

  const renderExperience = (experience) => (
    <Grid container sx={{ mt: 1 }}>
      <Grid item xs={12}>
        <Typography sx={{ display: 'inline', fontWeight: 'bold' }}>{experience.name}</Typography>
        {experience.location && <Typography sx={{ display: 'inline' }}> - </Typography>}
        <Typography sx={{ display: 'inline' }}>{experience.location}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{experience.position}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{experience.date}</Typography>
      </Grid>
    </Grid>
  );

  const experience = () => (
    <>
      {renderExperience({
        name: 'Cerner Corporation',
        location: 'Kansas City, Missouri',
        position: 'Software Engineer',
        date: 'July 2020 - Present',
      })}
      {renderList(
        [
          'Support/developed clinical inventory management (supply chain) applications.',
          'Developed Java (8) services to find and manage items used by different teams and for a new mobile application.',
          'Debugged/deployed fixes within legacy code to improve client experience.',
          'Learned and implemented code that follows strict standards such as barcodes, NDCs, and EDI.',
          'Contributed to team/API documentation.',
        ],
      )}
      {renderExperience({
        name: 'Cerner Corporation',
        location: 'Kansas City, Missouri',
        position: 'Software Intern',
        date: 'May 2019 - August 2019',
      })}
      {renderList(['Implemented and unit tested part of a REST web service for message routing using Java.'])}
      {renderExperience({
        name: 'Iowa State University',
        location: 'Ames, Iowa',
        position: 'Electronics and Technology Group (ETG) Assistant',
        date: 'November 2018 - May 2020',
      })}
      {renderList(
        [
          'ETG is the Computer, Electric, and Software Engineering\'s resource for classes, research, and labs.',
          'Provided equipment and guidance for classes.',
          'Managed and rebuilt department computers and equipment.',
          'Managed and recruited for lab monitoring team.',
        ],
      )}
    </>
  );

  const skills = () => (
    <Grid container sx={{ mt: 1 }}>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 'bold' }}>Languages I Have Most Experience With:</Typography>
        {renderList([
          'Java',
        ])}
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 'bold' }}>Other Languages I&apos;ve Used:</Typography>
        {renderList([
          'SQL',
          'JavaScript',
          'C',
          'C#',
          'HTML/CSS',
          'Python',
          'CCL (Cerner Command Language)',
        ])}
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 'bold' }}>Tools/Technologies I&apos;ve Used:</Typography>
        {renderList([
          'Android',
          'Django',
          'Docker',
          'Firebase',
          'Git',
          'JAX-RS',
          'JBehave',
          'Jira',
          'JUnit',
          'Maven',
          'MySQL',
          'Oracle Database',
          'Postgres',
          'React',
          'Serenity',
          'Spring',
          'Swagger',
        ])}
      </Grid>
    </Grid>
  );

  const education = () => (
    <>
      {renderExperience({
        name: 'Iowa State University',
        location: 'Ames, Iowa',
        position: 'Bachelor of Science in Software Engineering',
        date: 'Fall 2016 - Spring 2020, GPA 3.88/4.00',
      })}
    </>
  );

  const honorsAndAwards = () => (
    <>
      {renderExperience({
        name: 'George Washington Carver Scholar',
        position: 'Multicultural Student Affairs',
        date: 'Fall 2016 - Spring 2020',
      })}
      {renderExperience({
        name: 'The President’s Volunteer Service Award',
        position: 'Corporation for National & Community Service',
        date: 'May 2016',
      })}
      {renderExperience({
        name: 'Deans List',
        position: 'Iowa State University',
        date: 'Spring/Fall 2017, Spring/Fall 2018 Spring/Fall 2019, Spring 2020',
      })}
      {renderExperience({
        name: '1st Place Hardware',
        position: 'HackISU X',
        date: 'October 2018',
      })}
      {renderExperience({
        name: 'Most Ethical Hack',
        position: 'HackISU X',
        date: 'October 2018',
      })}
      {renderExperience({
        name: '1st Project (voted by peers and TAs)',
        position: 'SE 319 - Construction of User Interfaces',
        date: 'Fall 2018',
      })}
    </>
  );

  const timelineDetails = [
    {
      date: 'August 2015',
      content: 'Took AP Computer Science and Game Design classes',
    },
    {
      date: 'May 2016',
      content: 'Graduated from Hoover High School',
    },
    {
      date: 'August 2016',
      content: 'Undeclared major in the College of Liberal Arts and Sciences at Iowa State University',
    },
    {
      date: 'August 2017',
      content: 'Started Software Engineering Undergraduate Major',
    },
    {
      date: 'November 2018',
      content: 'Started working in ETG',
    },
    {
      date: 'May 2019',
      content: 'Worked at Cerner as a Software Intern',
    },
    {
      date: 'May 2020',
      content: 'Graduated from Iowa State University with a Bachelor of Science in Software Engineering',
    },
    {
      date: 'July 2020',
      content: 'Began working as a Software Engineer at Cerner',
    },
  ];

  const resumeBody = () => (
    <Grid
      container
      width="80%"
      spacing={2}
      sx={{ mt: 1, mr: 2 }}
    >
      <Grow
        in
        timeout={800}
      >
        <Grid item xs={12} md={4} sx={{ width: '50%' }}>
          <div data-aos="fade-in">
            <Typography
              variant="h5"
              sx={{
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Experience
            </Typography>
            {experience()}
          </div>
        </Grid>
      </Grow>
      <Grow
        in
        timeout={1600}
      >
        <Grid item xs={12} md={4} sx={{ width: '50%' }}>
          <div data-aos="fade-in">
            <Typography
              variant="h5"
              sx={{
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Education
            </Typography>
            {education()}
            <Typography
              variant="h5"
              sx={{
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Honors/Awards
            </Typography>
            {honorsAndAwards()}
          </div>
        </Grid>
      </Grow>
      <Grow
        in
        timeout={2400}
      >
        <Grid item xs={12} md={4} sx={{ width: '50%' }}>
          <div data-aos="fade-in">
            <Typography
              variant="h5"
              sx={{
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Skills
            </Typography>
            {skills()}
          </div>
        </Grid>
      </Grow>
    </Grid>
  );

  const getTimeLineItem = (timelineItemDetails, index) => (
    <TimelineItem
      data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
    >
      <TimelineOppositeContent color="text.secondary">
        {timelineItemDetails.date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {timelineItemDetails.content}
      </TimelineContent>
    </TimelineItem>
  );

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  useEffect(() => {
    document.title = 'Resume - Trandrew';
    window.scrollTo(0, 0);
    window.addEventListener('scroll', toggleScrollButtonVisible);
    AOS.init();
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', toggleScrollButtonVisible);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        zIndex: 0,
      }}
    >
      {scrollButtonVisible && (
        <Grow
          in
          timeout={800}
        >
          <IconButton
            onClick={() => (
              footerRef.current.scrollIntoView({ behavior: 'smooth' })
            )}
            sx={{
              position: 'fixed',
              bottom: 60,
              right: 5,
            }}
          >
            <ArrowCircleDownIcon fontSize="large" />
          </IconButton>
        </Grow>
      )}
      <Grow
        in
        timeout={800}
      >
        <Typography
          variant="h4"
          sx={{
            mt: window.innerWidth >= 540 ? 10 : 5,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Resume
        </Typography>
      </Grow>
      <Grow
        in
        timeout={800}
      >
        <Button
          variant="outlined"
          onClick={() => setResumeOpen(true)}
          sx={{
            mt: 2,
          }}
        >
          View PDF
        </Button>
      </Grow>
      {resumeBody()}
      <Timeline
        position="alternate"
        sx={{ overflowX: 'hidden', overflowY: 'hidden' }}
      >
        {timelineDetails.map((timelineDetail, index) => (
          <Fragment key={timelineDetail.date}>
            {getTimeLineItem(timelineDetail, index)}
          </Fragment>
        ))}
        <TimelineItem data-aos="fade-up">
          <TimelineOppositeContent color="text.secondary">
            <Typography color="text.secondary">{time.toLocaleString(undefined, options)}</Typography>
            <Typography color="text.secondary">{time.toLocaleTimeString()}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Probably working or sleeping
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Avatar
        ref={footerRef}
        data-aos="fade-up"
        src={imageChicken}
        sx={{ mb: 13 }}
      />
      <ResumeModal resumeOpen={resumeOpen} setResumeModalOpen={setResumeOpen} />
    </Box>
  );
}
