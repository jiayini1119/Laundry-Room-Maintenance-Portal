import { useState } from 'react';
import { Select, MenuItem, FormHelperText, FormControl} from '@mui/material';
import { useLocation, useNavigate} from 'react-router-dom';

function Dropdown() {
  const location = useLocation();
  const history = useNavigate();
  const [value, setValue] = useState(location.state.dorm); // Set initial value
  
  const handleChange = (event) => {
    setValue(event.target.value); // Update value when an option is selected
    history("/home", {state: {id: location.state.id, dorm: event.target.value}});
    console.log(event.target.value);
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
