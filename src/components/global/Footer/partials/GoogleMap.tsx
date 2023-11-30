import { Title } from '@/components/shared';
import clsx from 'clsx';
import React from 'react';

type TGoogleMapProps = {
  className?: string;
};

const GoogleMap = ({ className }: TGoogleMapProps) => {
  return (
    <div className={clsx(className)}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6270185829544!2d107.4782248109392!3d11.066565353728876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174453f2dae489b%3A0x306d6b8021dc331c!2zTsOUTkcgQ8agIEjhuqJJIFRSw4AgVMOCTg!5e0!3m2!1svi!2s!4v1701186027597!5m2!1svi!2s"
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
