import { Title } from '@/components/shared';
import clsx from 'clsx';
import React from 'react';

type TGoogleMapProps = {
  className?: string;
  src?: string;
};

const GoogleMap = ({ className, src }: TGoogleMapProps) => {
  return (
    <div className={clsx(className)}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;
