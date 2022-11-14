import { React } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)`
  ${({ theme }) => `
  transition: ${theme.transitions.create(['background-color', 'transform'], {
  duration: 250,
})};
  &:hover {
    background: linear-gradient(#e66465, #9198e5);
    transform: scale(1.05);
    border-style: mixed;
  }
  `}
`;

export default function ProjectCard({ projectDetails, openProject, projectImage }) {
  return (
    <StyledCard
      sx={{
        width: 300,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
      }}
    >
      <CardActionArea onClick={() => openProject(projectDetails.name)}>
        <CardMedia
          component="img"
          height="300"
          width="300"
          image={projectImage}
          alt={projectDetails.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {projectDetails.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {projectDetails.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', ml: 'auto', mt: 'auto' }}>
        <IconButton href={projectDetails.url}>
          <GitHubIcon />
        </IconButton>
        {projectDetails.site && (
          <IconButton href={projectDetails.site}>
            <PublicIcon />
          </IconButton>
        )}
      </CardActions>
    </StyledCard>
  );
}

ProjectCard.propTypes = {
  projectDetails: PropTypes.shape({
    key: PropTypes.number,
    img: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    site: PropTypes.string,
  }).isRequired,
  openProject: PropTypes.func.isRequired,
  projectImage: PropTypes.string.isRequired,
};
