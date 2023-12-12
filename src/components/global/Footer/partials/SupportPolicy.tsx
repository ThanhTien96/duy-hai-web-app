import { IFooterLink } from '@/@types/global';
import { Title } from '@/components/shared';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type TSupportPolicyProps = {
  className?: string;
  title?: string;
  linkList?: IFooterLink[];
};

const SupportPolicy = ({ className, title, linkList }: TSupportPolicyProps) => {
  return (
    <div className={clsx(className)}>
      {/* title */}
      <Title
        level={3}
        className="text-[18px] lg:text-[22px] font-bold mb-2 capitalize border-b border-solid border-gray-border/40 pb-2"
      >
        {title}
      </Title>

      <ul className="flex flex-col gap-4 items-start list-disc">
        {linkList &&
          Array.isArray(linkList) &&
          linkList.map((ele) => (
            <li key={ele.id}>
              <Link href={ele.link}>{ele.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SupportPolicy;
