import clsx from 'clsx';
import React from 'react';

type PlayIconProps = {
    className?: string;
    width?: string;
    height?: string;
};

const PlayIcon = ({className, width, height}: PlayIconProps) => {
  return (
    <span className={clsx(className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width={width}
        height={height}
        className={"w-6 h-6"}
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

export default PlayIcon;
