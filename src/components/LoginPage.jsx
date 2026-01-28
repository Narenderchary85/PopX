import React, { useState } from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
  const [isFocused, setFocused] = useState(false); 

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
    
    </div>
  );
}

export default LoginPage;