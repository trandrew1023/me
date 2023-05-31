import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import LaunchIcon from '@mui/icons-material/Launch';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Grow,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fragment, React, useEffect, useRef, useState } from 'react';
import resumeAwards from '../static/data/resumeAwards.json';
import resumeEducation from '../static/data/resumeEducation.json';
import resumeExperienceList from '../static/data/resumeExperience.json';
import resumeSkills from '../static/data/resumeSkills.json';
import resumeTimeline from '../static/data/resumeTimeline.json';
import imageChicken from '../static/images/chick.png';
import ResumeModal from './ResumeModal';

export default function Resume() {
  const [time, setTime] = useState(new Date());
  const [scrollButtonVisible, setScrollButtonVisible] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [resumeExperience, setResumeExperience] = useState(null);
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
        <li key={item}>
          <Typography>{item}</Typography>
        </li>
      ))}
    </ul>
  );

  const renderExperience = (experience) => (
    <Grid container key={experience.name} sx={{ mt: 1 }}>
      <Grid item xs={12}>
        {experience.link ? (
          <Link
            href={experience.link}
            sx={{ display: 'inline', fontWeight: 'bold' }}
          >
            {experience.name}
            <LaunchIcon />
          </Link>
        ) : (
          <Typography sx={{ display: 'inline', fontWeight: 'bold' }}>
            {experience.name}
          </Typography>
        )}
        {experience.location && (
          <Typography sx={{ display: 'inline' }}> - </Typography>
        )}
        <Typography sx={{ display: 'inline' }}>
          {experience.location}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{experience.position}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{experience.date}</Typography>
      </Grid>
    </Grid>
  );

  const renderExperienceWithList = (experience) => (
    <Grid container key={experience.date} sx={{ mt: 1 }}>
      <Grid item xs={12}>
        <Typography sx={{ display: 'inline', fontWeight: 'bold' }}>
          {experience.name}
        </Typography>
        {experience.location && (
          <Typography sx={{ display: 'inline' }}> - </Typography>
        )}
        <Typography sx={{ display: 'inline' }}>
          {experience.location}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{experience.position}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{experience.date}</Typography>
      </Grid>
      {renderList(experience.list)}
    </Grid>
  );

  const renderSkills = (skills) => (
    <Grid item key={skills.title} xs={12}>
      <Typography sx={{ fontWeight: 'bold' }}>{skills.title}</Typography>
      {renderList(Array.from(Object.values(skills.list)))}
    </Grid>
  );

  const experience = () => (
    <>
      {resumeExperience.map((workExperience) =>
        renderExperienceWithList(workExperience),
      )}
    </>
  );

  const skills = () => (
    <Grid container sx={{ mt: 1 }}>
      {resumeSkills && resumeSkills.map((skillList) => renderSkills(skillList))}
    </Grid>
  );

  const education = () => (
    <>
      {resumeEducation.map((educationEntry) =>
        renderExperience(educationEntry),
      )}
    </>
  );

  const honorsAndAwards = () => (
    <>{resumeAwards.map((award) => renderExperience(award))}</>
  );

  const resumeBody = () => (
    <Grid container width="80%" spacing={2} sx={{ mt: 1, mr: 2 }}>
      <Grow in timeout={800}>
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
            {resumeExperience && experience()}
          </div>
        </Grid>
      </Grow>
      <Grow in timeout={1600}>
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
      <Grow in timeout={2400}>
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
    <TimelineItem data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
      <TimelineOppositeContent color="text.secondary">
        {timelineItemDetails.date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{timelineItemDetails.content}</TimelineContent>
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
    setResumeExperience([...resumeExperienceList].reverse());
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
        <Grow in timeout={800}>
          <IconButton
            aria-label="Scroll to bottom of the page"
            onClick={() =>
              footerRef.current.scrollIntoView({ behavior: 'smooth' })
            }
            sx={{
              position: 'fixed',
              bottom: window.innerWidth >= 540 ? 10 : 60,
              right: 5,
            }}
          >
            <ArrowCircleDownIcon fontSize="large" />
          </IconButton>
        </Grow>
      )}
      <Grow in timeout={800}>
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
      <Grow in timeout={800}>
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
        {resumeTimeline.map((timelineDetail, index) => (
          <Fragment key={timelineDetail.date}>
            {getTimeLineItem(timelineDetail, index)}
          </Fragment>
        ))}
        <TimelineItem data-aos="fade-up">
          <TimelineOppositeContent color="text.secondary">
            <Typography color="text.secondary">
              {time.toLocaleString(undefined, options)}
            </Typography>
            <Typography color="text.secondary">
              {time.toLocaleTimeString()}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Probably working or sleeping</TimelineContent>
        </TimelineItem>
      </Timeline>
      <Avatar
        alt=""
        ref={footerRef}
        data-aos="fade-up"
        src={imageChicken}
        sx={{ mb: 13 }}
      />
      <ResumeModal resumeOpen={resumeOpen} setResumeModalOpen={setResumeOpen} />
    </Box>
  );
}
