import { AppTitle } from '@/components/global';
import { Wrapper } from '@/components/shared';
import React from 'react';
import NewsSubItem from './NewsSubItem';
import NewsMainItem from './NewsMainItem';


const NewsSection = async () => {
  const response = await fetch('http://localhost:3000/api/news', {
    next: { revalidate: 60 }
  });

  const newsData = await response.json();

  return (
    <div>
      <AppTitle title="Tin Tức & Sự Kiện" />

      {/* render item */}
      <div className="grid grid-cols-12 gap-8">
        {/* main item */}
        <div className="col-span-12 lg:col-span-4">
          <NewsMainItem
            src={newsData[0].src}
            title={newsData[0].title}
            content={newsData[0].content}
            createAt={newsData[0].createAt}
          />
        </div>
        {/* sub item */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
          {newsData.splice(1, 3).map((ele: any, index: number) => (
            <NewsSubItem key={index} 
            src={ele.src}
            title={ele.title}
            content={ele.content}
            createAt={ele.createAt}
            />
          ))}
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
        {newsData.splice(1).map((ele: any, index: number) => (
            <NewsSubItem key={index} 
            src={ele.src}
            title={ele.title}
            content={ele.content}
            createAt={ele.createAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
