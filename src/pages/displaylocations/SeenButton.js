// SeenButton.jsx
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function SeenButton({ id, onToggleSeen }) {
  const eyeSize = 30;

  const localStorageKey = `isSeen_${id}`;
  const initialIsSeen = JSON.parse(localStorage.getItem(localStorageKey)) || false;

  const [isSeen, setIsSeen] = useState(initialIsSeen);

  const handleToggleSeen = () => {
    const newIsSeen = !isSeen;
    setIsSeen(newIsSeen);
    localStorage.setItem(localStorageKey, JSON.stringify(newIsSeen));
    onToggleSeen(newIsSeen);
  };

  return (
    <button
      onClick={handleToggleSeen}
      style={{
        position: 'absolute',
        top: '10px',
        right: '50px',
        background: 'none',
        border: 'none',
      }}
    >
      {isSeen ? (
        <VisibilityIcon style={{ color: '#4caf50', fontSize: eyeSize }} />
      ) : (
        <VisibilityOffIcon style={{ fontSize: eyeSize }} />
      )}
    </button>
  );
}

export default SeenButton;
