import React from 'react';
import BannerSlide from './BannerSlide';
import YoutubeTop from './YoutubeTop';
import YoutubeBottom from './YoutubeBottom';
import { IBanner, IYoutubePost } from '@/@types/home';
import clsx from 'clsx';

type BannerSectionProps = {
  banner: IBanner[];
  youtubePost?: IYoutubePost[];
  className?: string;
};

const BannerSection = ({ banner, youtubePost, className }: BannerSectionProps) => {
  return (
    <div className={clsx("block pb-10 z-0", className)}>
      {/* banner section */}
      <div className="grid grid-cols-12 gap-2 h-full">
        <div className="col-span-3 lg:block hidden -z-10"></div>
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 xs:col-span-12 max-xs:col-span-12  h-[310px] w-full">
          <BannerSlide banner={banner} />
        </div>
          {/* youtube right */}
          <div className="grid grid-cols-3 col-span-3 gap-2 lg:grid md:hidden sm:hidden xs:hidden max-xs:hidden h-full">
            {youtubePost &&
              Array.isArray(youtubePost) &&
              youtubePost.slice(0, 2).map((ele: IYoutubePost) => {
                return (
                  <YoutubeTop
                    key={ele.maYT}
                    src={ele.hinhAnh}
                    title={ele.tieuDe}
                    embed={ele.embedLink}
                    link={ele.url}
                  />
                );
              })}
          </div>
          {/* youtube bottom */}
          {youtubePost &&
            Array.isArray(youtubePost) &&
            youtubePost.slice(2, 6).map((ele: IYoutubePost) => {
              return (
                <div
                  key={ele.maYT}
                  className="col-span-6 lg:col-span-3 bg-red-400 w-full h-full"
                >
                  <YoutubeBottom
                    src={ele.hinhAnh}
                    title={ele.tieuDe}
                    embed={ele.embedLink}
                    link={ele.url}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default BannerSection;
