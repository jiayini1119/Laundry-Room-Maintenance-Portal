import { useState } from 'react';
import { Select, MenuItem, FormHelperText, FormControl} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


function Dropdown({ setBgColor }) {
  const location = useLocation();
  const history = useNavigate();
  const [value, setValue] = useState(location.state.dorm); 
  const handleChange = (event) => {
    setValue(event.target.value); 
    history("/home", {
      state: { id: location.state.id, dorm: event.target.value },
    });
    switch (event.target.value) {
      case "Hedrick":
        setBgColor("#f2ecdc");
        break;
      case "Sunset":
        setBgColor("#dabfc4");
        break;
      case "Rieber":
        setBgColor("#add8e6");
        break;
      case "Deneve":
        setBgColor("#e6e6fa");
        break;
      case "Saxon":
        setBgColor("#7ec07a");
        break;
      default:
        setBgColor("#fff");
        break;
    }
    };

  return (
    <div className="Dropdown">
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