import React, { useState } from 'react';

const ColorButtons = () => {
  // Color list provided in the task
  const colors = [
    'bg-red-500 hover:bg-red-600',
    'bg-blue-500 hover:bg-blue-600',
    'bg-green-500 hover:bg-green-600',
    'bg-yellow-500 hover:bg-yellow-600',
    'bg-purple-500 hover:bg-purple-600',
    'bg-pink-500 hover:bg-pink-600',
    'bg-indigo-500 hover:bg-indigo-600',
    'bg-teal-500 hover:bg-teal-600',
    'bg-orange-500 hover:bg-orange-600',
  ];

  // Initialize button states
  const initialButtons = Array(9).fill({
    colorClass: 'bg-gray-200 hover:bg-gray-300', // Default gray
    disabled: false,
    clicked: false,
  });

  const [buttons, setButtons] = useState(initialButtons);
  const [colorIndex, setColorIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = (index) => {
    if (buttons[index].clicked || colorIndex >= colors.length) return;

    // Create updated buttons array
    const updatedButtons = [...buttons];
    updatedButtons[index] = {
      colorClass: colors[colorIndex],
      disabled: true,
      clicked: true,
    };

    // Update state
    setButtons(updatedButtons);
    setColorIndex(colorIndex + 1);
    setClickCount(clickCount + 1);
  };

  const resetButtons = () => {
    setButtons(initialButtons);
    setColorIndex(0);
    setClickCount(0);
  };

  return (
    <div className="space-y-8">
      {/* Stats and Instructions */}
     
    </div>
  );
};

export default ColorButtons;