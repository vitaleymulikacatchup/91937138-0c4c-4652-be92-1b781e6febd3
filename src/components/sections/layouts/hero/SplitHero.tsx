import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SplitHeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryButtonClick: () => void;
  onSecondaryButtonClick: () => void;
}

export default function SplitHero({ title, subtitle, primaryButtonText, secondaryButtonText, onPrimaryButtonClick, onSecondaryButtonClick }: SplitHeroProps) {
  return (
    <div className="hero-container">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="buttons">
        <button onClick={onPrimaryButtonClick}>{primaryButtonText}</button>
        <button onClick={onSecondaryButtonClick}>{secondaryButtonText}</button>
      </div>
    </div>
  );
}