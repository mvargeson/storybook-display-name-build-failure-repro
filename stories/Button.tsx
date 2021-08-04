import React from 'react';

/**
 * Primary UI component for user interaction
 */
export const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} />
  );
};

Button.displayName = 'HTML Button Element';