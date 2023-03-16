import { useState, useEffect } from 'react';
import { Select, MenuItem, FormHelperText, FormControl} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


function Dropdown({ setBgColor }) {
  const location = useLocation();
  const history = useNavigate();
  const [value, setValue] = useState(location.state.dorm);

  const setColor = (dormValue) => {
    switch (dormValue) {
      case "Hedrick":
        setBgColor("#ff9800");
        break;
      case "Sunset":
        setBgColor("#f48fb1");
        break;
      case "Rieber":
        setBgColor("#26a69a");
        break;
      case "Deneve":
        setBgColor("#7986cb");
        break;
      case "Saxon":
        setBgColor("#5a8b5c");
        break;
      default:
        setBgColor("#fff");
        break;
    }
  };
  
  useEffect(() => {
    setColor(value);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value); 
    history("/home", {
      state: { id: location.state.id, dorm: event.target.value },
    });
    setColor(event.target.value);
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