import React from 'react';
import Image from 'next/image';

const SplitHero = ({ title, subtitle, primaryButtonText, secondaryButtonText, onPrimaryButtonClick, onSecondaryButtonClick }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button onClick={onPrimaryButtonClick}>{primaryButtonText}</button>
        <button onClick={onSecondaryButtonClick}>{secondaryButtonText}</button>
      </div>
      <div className="flex-1">
        <Image src="/images/placeholder4.avif" alt="Visual representation" width={500} height={500} />
      </div>
    </div>
  );
};

export default SplitHero;