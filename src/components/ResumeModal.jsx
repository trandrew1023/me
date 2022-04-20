import { React } from 'react';
import {
  Box,
  Grid,
  Modal,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function ResumeModal({ resumeOpen, setResumeModalOpen }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={resumeOpen}
      onClose={() => setResumeModalOpen(false)}
    >
      <Box component="form" sx={style}>
        <Grid container>
          <embed
            data-aos="fade-up"
            src="https://drive.google.com/file/d/1XBBhJlMTlGwpZM0gTzeCzOdjZr9MGu4X/preview?usp=sharing"
            style={{
              marginBottom: 75,
              width: '100%',
              height: '80vh',
            }}
          />
        </Grid>
      </Box>
    </Modal>
  );
}

ResumeModal.propTypes = {
  resumeOpen: PropTypes.bool.isRequired,
  setResumeModalOpen: PropTypes.func.isRequired,
};
