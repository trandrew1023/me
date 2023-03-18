import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * This compenent renders the button component to toggle the app's theme.
 */
export default function DarkModeToggleButton({ darkMode, toggleDarkMode }) {
  return (
    <IconButton
      aria-label={
        darkMode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      }
      onClick={toggleDarkMode}
      sx={{
        position: 'absolute',
        top: window.innerWidth >= 540 ? 3 : 0,
        right: 0,
        zIndex: 2,
      }}
    >
      {darkMode === 'dark' ? (
        <Tooltip title="Switch to light theme">
          <Brightness5Icon />
        </Tooltip>
      ) : (
        <Tooltip title="Switch to dark theme">
          <Brightness4Icon />
        </Tooltip>
      )}
    </IconButton>
  );
}

DarkModeToggleButton.propTypes = {
  /**
   * The current app theme. 'light' or 'dark'.
   */
  darkMode: PropTypes.string.isRequired,
  /**
   * Callback function to toggle the app theme.
   */
  toggleDarkMode: PropTypes.func.isRequired,
};
