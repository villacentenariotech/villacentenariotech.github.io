import React, { useState } from 'react';
import { useData } from '@/components/context/DataContext';
import * as Icons from '@/components';

export const Skill = ({ skill }) => {
  const [showText, setShowText] = useState(false);
  const { translations } = useData();
  const IconComponent = Icons[skill.iconComponent];

  const handleMoreClick = () => {
    setShowText(!showText);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <div
      className="
        w-24 h-24 bg-gradient-to-r from-primary to-primaryDark
        rounded-full flex items-center justify-center shadow-lg
        transform hover:scale-105 transition-transform duration-300
        dark:from-primaryDark dark:to-primary hover:shadow-2xl
        cursor-pointer relative mx-auto
      "
      onClick={handleMoreClick}
      onMouseLeave={handleMouseLeave}
    >
      {IconComponent && (
        <IconComponent className="text-white w-12 h-12" />
      )}

      {showText && (
        <div
          className="
            absolute inset-0 flex flex-col items-center justify-center
            bg-black bg-opacity-50 text-white rounded-full
          "
        >
          <h2 className="text-sm font-semibold">{skill.name}</h2>
          <p className="text-xs">{skill.experience} {translations.YEARS}</p>
        </div>
      )}
    </div>
  );
};