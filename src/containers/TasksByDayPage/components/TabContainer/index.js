import React from 'react'

import Typography from '@material-ui/core/Typography'

export default function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 24, paddingTop: 0, width: "80%"}}>
      {props.children}
    </Typography>
  );
}
