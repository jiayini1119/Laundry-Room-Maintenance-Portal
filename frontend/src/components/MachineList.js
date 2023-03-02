import React from 'react';
import { Link } from 'react-router-dom';

const MachineList = ({ machines }) => {
  const renderMachine = (machine) => {
    const icon = machine.icon || 'default-icon.png'; // fallback to default icon if no icon is specified
    return (
      <li key={machine.id}>
        <Link to={`/report/${machine.id}`}>
          <img src={icon} alt={`${machine.name} icon`} />
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

export default MachineList;