import { useState } from 'react';
import { Select, MenuItem, FormHelperText, FormControl} from '@mui/material';

function Dropdown() {
  const dorm = localStorage.getItem('dorm')
  const [value, setValue] = useState(dorm); // Set initial value
  
  const handleChange = (event) => {
    setValue(event.target.value); // Update value when an option is selected
  };

  return (
    <div className='Dropdown'>
    <FormControl>
      <Select value={value} onChange={handleChange}>
        <MenuItem value="Hedrick">Hedrick</MenuItem>
        <MenuItem value="Sunset">Sunset</MenuItem>
        <MenuItem value="Rieber">Rieber</MenuItem>
        <MenuItem value="Deneve">Deneve</MenuItem>
        <MenuItem value="Saxon">Saxon</MenuItem>
      </Select>
      <FormHelperText>Select a dorm</FormHelperText>
    </FormControl>
    </div>
  );
}

export default Dropdown;
