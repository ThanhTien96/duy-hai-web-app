import { AppTitle } from '@/components/global';
import React from 'react';
import NewsSubItem from './NewsSubItem';
import NewsMainItem from './NewsMainItem';
import { INews } from '@/@types/news';
import { IPagination } from '@/@types/global';
import { EMPTY_IMAGE } from '@/constants';
import moment from 'moment';

export type TNewsSectionProps = {
  newsList?: {
    data: INews[];
  } & IPagination;
};

const NewsSection = async ({ newsList }: TNewsSectionProps) => {
  return (
    <div className="w-full">
      <AppTitle title="Tin Tức & Sự Kiện" />
      {/* render item */}
      <div className="grid grid-cols-12 gap-4 lg:gap-8 w-full">
        {/* main item */}
        <div className="col-span-12 lg:col-span-4">
          <NewsMainItem
            id={newsList?.data[0]?.maTinTuc}
            src={
              newsList &&
              Array.isArray(newsList.data) &&
              newsList.data[0].hinhAnh
                ? newsList.data[0].hinhAnh[0]?.hinhAnh
                : EMPTY_IMAGE
            }
            title={
              newsList && Array.isArray(newsList.data)
                ? newsList?.data[0]?.tieuDe
                : ''
            }
            content={
              newsList && Array.isArray(newsList.data)
                ? newsList?.data[0]?.noiDungNgan
                : ''
            }
            createAt={
              newsList && Array.isArray(newsList.data)
                ? newsList?.data[0]?.updateAt
                : ''
            }
          />
        </div>
        {/* sub item */}
        <div className="col-span-12 lg:col-span-4 w-full">
          <div className="flex flex-col justify-between gap-4 w-full">
            {newsList &&
              Array.isArray(newsList.data) &&
              newsList?.data
                .splice(1, 3)
                .map((ele: INews, index: number) => (
                  <NewsSubItem
                    key={index}
                    id={ele.maTinTuc}
                    src={
                      ele?.hinhAnh && Array.isArray(ele.hinhAnh)
                        ? ele?.hinhAnh[0]?.hinhAnh
                        : EMPTY_IMAGE
                    }
                    title={ele.tieuDe}
                    content={ele.noiDungNgan}
                    createAt={
                      ele.createAt && moment(ele?.updateAt).format('DD/MM/YYYY')
                    }
                  />
                ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="flex flex-col justify-between gap-4">
            {newsList &&
              Array.isArray(newsList.data) &&
              newsList?.data
                .splice(1)
                .map((ele: any, index: number) => (
                  <NewsSubItem
                    key={index}
                    id={ele.maTinTuc}
                    src={
                      ele?.hinhAnh && Array.isArray(ele.hinhAnh)
                        ? ele?.hinhAnh[0]?.hinhAnh
                        : EMPTY_IMAGE
                    }
                    title={ele.tieuDe}
                    content={ele.noiDungNgan}
                    createAt={
                      ele.createAt && moment(ele?.updateAt).format('DD/MM/YYYY')
                    }
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
