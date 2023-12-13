'use client';
import { IPagination } from '@/@types/global';
import { INews } from '@/@types/news';
import { EMPTY_IMAGE, FALLBACK_SEO } from '@/constants';
import React, { useCallback, useEffect, useState } from 'react';
import { Wrapper } from '../shared';
import NewsMainItem from '../global/NewsSection/NewsMainItem';
import clsx from 'clsx';
import NewsSubItem from '../global/NewsSection/NewsSubItem';
import NewsCard from '../global/NewsSection/NewsCard';
import { ConfigProvider, Pagination } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store';
import { LoadingClient } from '../global';
import { PageService } from '@/services';
import { setLoading } from '../Product/productAction';

type TNewsProviderProps = {
  data?: INews[];
  pagination?: IPagination;
  className?: string;
};


const NewsProvider = ({ data, pagination, className }: TNewsProviderProps) => {
  const [newsList, setNewsList] = useState<INews[]>();
  const [mainNews, setMainNews] = useState<INews | undefined>(data && data[0]);
  const [pagi, setPagi] = useState<IPagination>();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.app);

  useEffect(() => {
    if (data) {
      setMainNews(data[0]);
      setNewsList(data);
    }

    if (pagination) {
      setPagi(pagination);
    }
  }, [data]);

  //   fetch news
  const handleChangePage = useCallback(async (page: number) => {
    dispatch(setLoading(true));
    try {
      const res = await PageService.fetchAllNews({ page });
      if (res.status === 200) {
        setMainNews(res.data.data[0]);
        setNewsList(res.data.data);
        setPagi({currentPage: res?.data?.currentPage, total: res?.data?.total, totalPage: res?.data?.totalPage});
      }
    } catch (err) {
      // emty block
    } finally {
      dispatch(setLoading(false));
    }
  },[data, pagination]);

  

  return !loading ? (
    <div className={clsx(className)}>
      {/* news top */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-7">
          <NewsMainItem
            src={mainNews?.hinhAnh && mainNews.hinhAnh[0].hinhAnh}
            title={mainNews?.tieuDe}
            content={mainNews?.noiDungNgan}
            createAt={mainNews?.createAt}
          />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="flex flex-col justify-between gap-5">
            {newsList &&
              Array.isArray(newsList) &&
              newsList
                .slice(1, 4)
                .map((ele: INews, index: number) => (
                  <NewsSubItem
                    key={index}
                    src={
                      ele?.hinhAnh && Array.isArray(ele.hinhAnh)
                        ? ele?.hinhAnh[0]?.hinhAnh
                        : EMPTY_IMAGE
                    }
                    title={ele.tieuDe}
                    content={ele.noiDungNgan}
                    createAt={ele.createAt}
                  />
                ))}
          </div>
        </div>
      </div>
      {/* news bottom */}
      <div className="grid grid-cols-12 gap-4 mt-8">
        {newsList &&
          Array.isArray(newsList) &&
          newsList.slice(4, -1).map((news: INews) => {
            return (
              <NewsCard
                className="col-span-12 md:col-span-6 lg:col-span-3"
                key={news.maTinTuc}
                src={news.hinhAnh && news.hinhAnh[0].hinhAnh}
                title={news.tieuDe}
                content={news.noiDungNgan}
                createAt={news.createAt}
              />
            );
          })}
      </div>

      {/* pagination */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ff8027',
          },
        }}
      >
        <div className="text-center mt-8">
          <Pagination
            onChange={(page) => handleChangePage(page)}
            current={pagi?.currentPage}
            total={pagi?.total}
            pageSize={8}
          />
        </div>
      </ConfigProvider>
    </div>
  ) : (
    <LoadingClient />
  );
};

export default NewsProvider;
