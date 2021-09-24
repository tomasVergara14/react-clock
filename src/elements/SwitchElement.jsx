import React, { useState } from 'react';
import { Switch } from '@material-ui/core';

const  ControlledSwitches = ()=> {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  console.log(checked)
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
export default ControlledSwitches