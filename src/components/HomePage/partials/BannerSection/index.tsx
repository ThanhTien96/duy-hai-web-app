import React from 'react';
import BannerSlide from './BannerSlide';
import YoutubeTop from './YoutubeTop';
import YoutubeBottom from './YoutubeBottom';


type BannerSectionProps = {
  data: any;
};

const BannerSection = ({ data }: BannerSectionProps) => {
  return (
    <div className='block pb-10 z-0'> 
      {/* banner section */}
      <div className="grid grid-cols-12 gap-2 h-full">
        <div className="col-span-3 lg:block md:hidden sm:hidden xs:hidden max-xs:hidden -z-10"></div>
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 xs:col-span-12 max-xs:col-span-12  h-[310px] w-full">
          <BannerSlide />
        </div>
        {/* youtube right */}
        <div className="grid grid-cols-3 col-span-3 gap-2 lg:grid md:hidden sm:hidden xs:hidden max-xs:hidden h-full">
          {data?.youtube.slice(0, 2).map((ele: any, index: number) => {
            return (
              <YoutubeTop
                key={index}
                src={ele.image}
                title={ele.title}
                embed={ele.embed}
                link={ele.link}
              />
            );
          })}
        </div>
        {/* youtube bottom */}
        {data?.youtube.slice(2, 6).map((ele: any, index: number) => {
          return(
            <div 
            key={index}
            className="max-xs:col-span-6 md:col-span-3 bg-red-400 w-full h-full">
              <YoutubeBottom 
              title={ele.title}
              link={ele.link}
              embed={ele.embed}
              src={ele.image}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default BannerSection;
