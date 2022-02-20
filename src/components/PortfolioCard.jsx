import { React } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function PortfolioCard({ portfolioCardDetails }) {
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
      <CardActionArea href={portfolioCardDetails.url}>
        <CardMedia
          component="img"
          height="300"
          width="300"
          image={portfolioCardDetails.img}
          alt={portfolioCardDetails.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {portfolioCardDetails.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {portfolioCardDetails.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

PortfolioCard.propTypes = {
  portfolioCardDetails: PropTypes.shape({
    img: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
