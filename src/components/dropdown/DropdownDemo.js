import React from 'react';
import { Select } from 'grommet';

function DropdownDemo() {
  const [value, setValue] = React.useState('medium');
  return (
    <Select
      options={['small', 'medium', 'large']}
      value={value}
      onChange={({ option }) => setValue(option)}
    />
  );
}

export default DropdownDemo;
