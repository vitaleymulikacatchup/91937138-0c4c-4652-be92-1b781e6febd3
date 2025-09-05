import React from 'react';

interface SplitHeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryButtonClick: () => void;
  onSecondaryButtonClick: () => void;
}

const SplitHero: React.FC<SplitHeroProps> = ({ title, subtitle, primaryButtonText, secondaryButtonText, onPrimaryButtonClick, onSecondaryButtonClick }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button onClick={onPrimaryButtonClick}>{primaryButtonText}</button>
        <button onClick={onSecondaryButtonClick}>{secondaryButtonText}</button>
      </div>
      <div className="flex-1">
        {/* Media/Image component can go here */}
      </div>
    </div>
  );
};

export default SplitHero;