import { useState } from 'react';
import { Select, MenuItem, FormHelperText, FormControl} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function Dropdown() {
  // const dorm = localStorage.getItem('dorm')
  var location = useLocation()
  const dorm = location.state.dorm
  const [value, setValue] = useState(dorm); // Set initial value
  const history = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value); // Update value when an option is selected
    localStorage.setItem('dorm', event.target.value)
    history("/home", {state: {id: location.state.id, dorm: event.target.value}});
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