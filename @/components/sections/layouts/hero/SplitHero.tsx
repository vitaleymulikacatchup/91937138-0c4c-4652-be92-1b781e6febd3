import type { LucideIcon } from 'lucide-react';
import React from 'react';

interface SplitHeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  // Additional props for image support
  primaryImage?: string;
  secondaryImage?: string;
}

const SplitHero: React.FC<SplitHeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <div className="split-hero">
      <div className="text-section">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button onClick={onPrimaryButtonClick}>{primaryButtonText}</button>
        <button onClick={onSecondaryButtonClick}>{secondaryButtonText}</button>
      </div>
      <div className="image-section">
        {/* Implement your image logic here */}
        <img src="/images/placeholder1.avif" alt="Primary Visual" />
        <img src="/images/placeholder2.avif" alt="Secondary Visual" />
      </div>
    </div>
  );
};

export default SplitHero;