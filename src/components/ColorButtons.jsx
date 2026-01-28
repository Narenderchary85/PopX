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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600">Colors Assigned</p>
          <p className="text-2xl font-bold text-gray-800">{clickCount}/9</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600">Next Color</p>
          <div className="flex items-center justify-center space-x-2 mt-1">
            <div className={`w-4 h-4 rounded-full ${colorIndex < colors.length ? colors[colorIndex].split(' ')[0] : 'bg-gray-300'}`}></div>
            <span className="font-medium">
              {colorIndex < colors.length ? `Color ${colorIndex + 1}` : 'Complete!'}
            </span>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <button
            onClick={resetButtons}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 w-full"
          >
            Reset All Buttons
          </button>
        </div>
      </div>

      {/* Color Palette Preview */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Color Sequence</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((colorClass, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full ${colorClass} ${index >= colorIndex ? 'opacity-50' : ''}`}></div>
              <span className="text-xs text-gray-600 mt-1">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Button Grid */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Click the Buttons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              disabled={button.clicked}
              className={`
                ${button.colorClass}
                text-white font-medium py-4 px-6 rounded-xl
                transition-all duration-200
                transform hover:scale-[1.02] active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                shadow-md hover:shadow-lg
                flex items-center justify-center space-x-2
                ${button.disabled ? '' : 'hover:shadow-xl'}
              `}
            >
              <span>Button {index + 1}</span>
              {button.clicked && (
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorButtons;