import React from 'react';
import Box from '@material-ui/core/Box';

const defaultProps = {
  //bgcolor: 'background.paper',
  m: 1,
  border: 4,
  //p:2,
  //position:"relative",
  borderRadius :16,
  fontSize:25,
  boxShadow:2,
  textAlign:"center",
  fontWeight:500,
  style: { width: '10rem', height: '10rem' },
};

function Blocks() {
  return (
    <Box display="flex" justifyContent="center">
      <Box borderColor="primary.main" bgcolor="primary.main" {...defaultProps} > Camera 01 ON</Box>
      <Box borderColor="secondary.main" bgcolor="secondary.main" {...defaultProps} > Camera 02 ON</Box>
      <Box borderColor="error.main" bgcolor="error.main" {...defaultProps} > Camera 03 ON</Box>
      <Box borderColor="info.main"  {...defaultProps} > Camera 04 OFF</Box>
    </Box>
  );
}

export default Blocks;
