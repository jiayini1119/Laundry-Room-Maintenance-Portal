/*import React from 'react';
import { Link } from 'react-router-dom';

const MachineList = ({ machines }) => {
  const handleMachineClick = (machineId) => {
    console.log(`Clicked machine with ID ${machineId}`);
  };

  const renderMachine = (machine) => {
    const icon = machine.isAvailable ? machine.availableIcon || '/default-available-icon.png' : machine.unavailableIcon;
    return (
      <li key={machine.id}>
        <Link to={`/report/${machine.id}`}>
          <img src={icon} alt={`${machine.name} icon`} onClick={() => handleMachineClick(machine.id)} />
        </Link>
        <div>
          <h3>{machine.name}</h3>
          <p>{machine.description}</p>
        </div>
      </li>
    );
  };

  return (
    <div>
      <h2>Machines:</h2>
      <ul>
        {machines.map((machine) => renderMachine(machine))}
      </ul>
    </div>
  );
};

export default MachineList;*/