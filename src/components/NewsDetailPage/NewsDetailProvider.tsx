import React from 'react';
import { MarkdownX } from '../global';
import clsx from 'clsx';
import { Title } from '../shared';
import moment from 'moment';
import NewsMedia from './NewsMedia';
import { IMediaBase } from '@/@types/global';

type TNewsDetailProviderProps = {
  content?: string;
  className?: string;
  title?: string;
  createAt?: string;
  media?: IMediaBase[];
};

const NewsDetailProvider = ({
  content,
  className,
  title,
  createAt,
  media,
}: TNewsDetailProviderProps) => {
  return (
    <div className={clsx(className)}>
      <div className="border-b border-solid border-gray-200 pb-4 flex flex-col lg:flex-row lg:items-center justify-between">
        <Title level={1} className="heading6 capitalize order-2 lg:order-1">
          {' '}
          {title}
        </Title>
        <span className="order-1 lg:order-2 mb-4 lg:mb-0">
          {moment(createAt).format('DD/MM/YYYYY')}
        </span>
      </div>
      <NewsMedia className="mt-4" media={media} />
      <MarkdownX className="news-detail mt-4 lg:mt-8" content={content} />
    </div>
  );
};

export default NewsDetailProvider;
