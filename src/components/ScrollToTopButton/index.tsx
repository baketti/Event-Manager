import { memo } from 'react';
import { useScrollToTopButton } from './index.hooks';
import { Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const styles = {
    scrollToTopButton: {
      position: 'fixed',
      bottom: {xs:'60px',sm:'80px'},
      right: {xs:'18px',sm:'50px'},
      padding: '10px 10px',
      minWidth: 'unset!important',
      width: '50px',
      height: '50px',
      fontSize: '16px',
      backgroundColor: 'primary.main',
      color: 'text.secondary',
      border: 'none',
      borderRadius: '100%',
      cursor: 'pointer',
      boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
      transition: 'opacity 0.3s ease-in-out',
      '&:hover': {
        filter: 'brightness(1.2)',
      }
    },
  };

export const ScrollToTopButton = memo(() => {
  const  {
    isVisible,
    buttonRef
  } = useScrollToTopButton();

  return (
    <>
      {isVisible && (
        <Button
          ref={buttonRef}
          sx={styles.scrollToTopButton}
        >
          <KeyboardArrowUpIcon />
        </Button>
      )}
    </>
  );
});

ScrollToTopButton.displayName = "ScrollToTopButton";