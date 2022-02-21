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
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import PropTypes from 'prop-types';

export default function ProjectCard({ projectDetails, openProject }) {
  return (
    <Card
      sx={{
        width: 300,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
      }}
    >
      <CardActionArea onClick={() => openProject(projectDetails.key)}>
        <CardMedia
          component="img"
          height="300"
          width="300"
          image={projectDetails.img}
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
    </Card>
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
};
