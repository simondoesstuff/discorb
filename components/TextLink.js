import React from 'react';
import {Typography} from "@mui/material";

function TextLink({children}) {
  return (
    <Typography
      color={theme => theme.palette.text.secondary}
      variant={'subtitle1'}
      sx={{
        '&:hover': {
          'text-decoration': 'underline'
        }
      }}
    >
      {children}
    </Typography>
  );
}

export default TextLink;