'use client';

import { SearchInput, Wrapper } from '@/components/shared';
import MenuLink from './partials/MenuLink';
import clsx from 'clsx';
import styles from './partials/MainHeader.module.scss';
import Image from 'next/image';
import {
  CaretDownFilled,
  CaretLeftOutlined,
  CaretRightOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { IMainCategory, IMainNavLink, IMenu, ISubCategory, ISubNavLink } from '@/@types/global';
import useScroll from '@/hooks/useScroll';
import { usePathname } from 'next/navigation';


type ChildSubLinkType = {
  id: string;
  url: string;
  tenSubLink: string;
  maNavLink: string;
};

export type NavLinkType =  {
  maNavLink: string;
  tenNavLink: string;
  url: string;
  maMenu: string;
  role: number;
  subLink: ChildSubLinkType[];
}

export type MenuDataType = {
  maMenu: string;
  active: boolean;
  logo: string;
  navlink:NavLinkType[];
};

type MainHeaderProps = {
  menuData?: IMenu;
  categoriesData: IMainCategory[];
};

export interface TInitHeaderState {
  openSubMenu?: string;
  openSubCategory?: string;
  openCategory: boolean;
  openMenu: boolean;
}

const MainHeader = ({ menuData, categoriesData }: MainHeaderProps) => {
  /** control mobile */
  const [openSubMenu, setOpenSubMenu] = useState<string>('');
  const [openSubCategory, setOpenSubCategory] = useState<string>('');
  const [openCategory, setOpenCategory] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [heightOffSet] = useScroll();
  const [mouseHover, setMouseHover] = useState<boolean>(false);
  const pathname = usePathname()


  const handleCloseAll = () => {
    setOpenCategory(false);
    setOpenMenu(false);
    setOpenSubCategory('');
    setOpenSubMenu('');
  };



  /** handle control sub menu */
  const handleOpenSubMenu = (id: string) => {
    id === openSubMenu ? setOpenSubMenu('') : setOpenSubMenu(id);
  };

  /** handle controll sub categories */
  const handleOpenSubCategory = (id: string) => {
    id === openSubCategory ? setOpenSubCategory('') : setOpenSubCategory(id);
  };

  /** handle control category */
  const handleOpenCategory = () => setOpenCategory((current) => !current);
  /** handle control menu */
  const handleOpenMenu = () => setOpenMenu((current) => !current);
  return (
    <div className="bg-app-500 !z-40">
      <Wrapper className="!py-0">
        <div className={clsx(styles.mainMenu)}>
          {/* desktop menu */}
          <ul className=" z-50 items-center max-xs:hidden sm:hidden xs:hidden md:hidden lg:flex">
            {/* categories */}
            <li
            onMouseLeave={() => setMouseHover(false)}
              className={clsx(
                'xl:w-[300px] lg:w-[200px] text-white xl:text-[18px] lg:text-[14px] font-medium bg-black text-right',
                styles.categoryItem,
              )}
            >
              <h5 onMouseOver={() => setMouseHover(true)}  className={clsx("flex items-center xl:gap-8 lg:gap-2 !cursor-pointer", styles.categoriesTitle)}>
                {' '}
                <UnorderedListOutlined className="lg-text-2xl" /> Tất Cả Sản
                Phẩm
              </h5>
              {/* print main categories */}
              <ul className={clsx(styles.mainCategoryBox, 'transition-all duration-200', {
                          'h-0 invisible opacity-0': heightOffSet >= 320 || pathname !== '/',
                          '!h-max !visible !opacity-100': mouseHover,
                        })}>
                {categoriesData && Array.isArray(categoriesData) && categoriesData.map(
                  (ele: IMainCategory, index: number) => {
                    return (
                      <li key={index} className={clsx(styles.mainCategoryItem)}>
                        <Image
                          src={ele.icon}
                          width={20}
                          height={20}
                          alt={ele.tenDanhMuc}
                        />
                        <span>{ele.tenDanhMuc}</span>

                        {/* print sub category */}
                        <ul className={clsx(styles.subCategoryBox)}>
                          {ele.subcategories.map(
                            (subCategory: ISubCategory, key: number) => {
                              return (
                                <li
                                  className={clsx(styles.subCategoryItem)}
                                  key={key}
                                >
                                  <Image
                                    src={subCategory.icon}
                                    width={20}
                                    height={20}
                                    alt={subCategory.tenDanhMucNho}
                                  />
                                  <p>{subCategory.tenDanhMucNho}</p>
                                </li>
                              );
                            },
                          )}
                        </ul>
                      </li>
                    );
                  },
                )}
              </ul>
            </li>

            {/* menu link */}
            {menuData && menuData?.navlink?.map(
              (menu: IMainNavLink, index: number) => {
                return (
                  <li className={clsx(styles.mainMenuItem)} key={index}>
                    <MenuLink link={menu?.url} content={menu.tenNavLink} />
                    {menu.subLink.length > 0 && (
                      <ul className={clsx(styles.subContentBox, 'z-50')}>
                        {menu?.subLink?.map(
                          (subMenu: ISubNavLink, i: number) => {
                            return (
                              <li className={clsx(styles.subMenuItem)} key={i}>
                                <MenuLink
                                  link={`${menu.url}?title=${(subMenu?.url).split('/')[1]}`}
                                  content={subMenu?.tenSubLink}
                                />
                              </li>
                            );
                          },
                        )}
                      </ul>
                    )}
                  </li>
                );
              },
            )}
          </ul>

          {/* mobile menu */}
          <div className="flex justify-between items-center py-2 lg:hidden z-50">
            <MenuUnfoldOutlined
              onClick={() => handleOpenMenu()}
              className="text-3xl text-white flex items-center justify-center"
            />
            <SearchInput className="shadow-inner" />
          </div>
          {
            <div
              className={clsx(
                'z-50 bg-app-500 h-[100vh] absolute top-0 overflow-x-hidden overflow-y-scroll md:block lg:hidden',
                styles.moblieMenu,
                openMenu && styles.activeMenu,
              )}
            >
              <div className=" border-b-2 border-solid border-white pt-4 pb-2 relative">
                <CaretLeftOutlined
                  onClick={() => handleOpenMenu()}
                  className="text-xl text-white flex items-center justify-center absolute top-1/2 left-2 -translate-y-1/2"
                />
                <h4 className="text-white text-[16px] w-full text-center">
                  Menu
                </h4>
              </div>
              <ul>
                {/* categories */}
                <li
                  className={clsx(
                    'py-2 border-b border-solid border-white pl-8 text-white',
                  )}
                >
                  <div
                    onClick={() => handleOpenCategory()}
                    className="relative"
                  >
                    <span>Danh Mục Sản Phẩm</span>
                    <CaretRightOutlined className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-8" />
                  </div>
                  {/* main category */}
                  {
                    <ul
                      className={clsx(
                        'absolute z-50 bg-app-500 w-full z-50',
                        styles.subCategory,
                        openCategory && styles.activeSubCategory,
                      )}
                    >
                      <div
                        onClick={() => handleOpenCategory()}
                        className=" border-b-2 border-solid border-white pt-4 pb-2 relative"
                      >
                        <CaretLeftOutlined className="text-lg text-white flex items-center justify-center absolute top-1/2 left-2 -translate-y-1/2" />
                        <h4 className="text-white text-[16px] w-full text-center">
                          Danh Mục Sản Phẩm
                        </h4>
                      </div>
                      {categoriesData && Array.isArray(categoriesData) && categoriesData.map(
                        (ele: IMainCategory, index: number) => {
                          return (
                            <li
                              onClick={() =>
                                handleOpenSubCategory(ele.maDanhMucChinh)
                              }
                              className={clsx(
                                'py-2 border-b border-solid border-white pl-8',
                              )}
                              key={index}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[16px] text-white capitalize">
                                  <Image
                                    src={ele.icon}
                                    width={20}
                                    height={20}
                                    alt={ele.tenDanhMuc}
                                  />
                                  <span>{ele.tenDanhMuc}</span>
                                </div>
                                {ele.subcategories.length > 0 && (
                                  <div className="relative">
                                    <div className="absolute top-0 bottom-0 w-[1px] bg-white"></div>
                                    <CaretDownFilled
                                      className={clsx(
                                        'text-white transition-all duration-300 px-6',
                                        {
                                          'rotate-180':
                                            openSubCategory ===
                                            ele.maDanhMucChinh,
                                        },
                                      )}
                                    />
                                  </div>
                                )}
                              </div>
                              {/* sub categories */}
                              {openSubCategory.includes(ele.maDanhMucChinh) && (
                                <ul>
                                  {ele.subcategories.map(
                                    (sub: ISubCategory, i: React.Key) => {
                                      return (
                                        <li
                                          key={i}
                                          className={clsx(
                                            'flex items-center gap-2 text-[16px] text-white capitalize border-t border-dotted border-white first-of-type:mt-2 py-2 last-of-type:pb-0 z-50',
                                          )}
                                        >
                                          <Image
                                            src={ele.icon}
                                            width={20}
                                            height={20}
                                            alt={sub.tenDanhMucNho}
                                          />
                                          <span>{sub.tenDanhMucNho}</span>
                                        </li>
                                      );
                                    },
                                  )}
                                </ul>
                              )}
                            </li>
                          );
                        },
                      )}
                    </ul>
                  }
                </li>
                {/* menu */}
                {menuData?.navlink.map(
                  (ele: IMainNavLink, index: React.Key) => {
                    return (
                      <li
                        key={index}
                        onClick={() => {
                          ele.subLink.length > 0 && handleOpenSubMenu(ele.maNavLink);
                        }}
                        className={clsx(
                          'py-2 border-b border-solid border-white pl-8',
                        )}
                      >
                        <div
                          className={clsx({
                            'flex gap-4 items-center': ele.subLink.length > 0,
                          })}
                        >
                          <MenuLink content={ele.tenNavLink} link={ele.url} />
                          {ele.subLink.length > 0 && (
                            <CaretDownFilled
                              className={clsx(
                                'text-white transition-all duration-300',
                                {
                                  'rotate-180': openSubMenu === ele.maNavLink,
                                },
                              )}
                            />
                          )}
                        </div>

                        {/* submenu */}
                        {openSubMenu === ele.maNavLink && (
                          <ul>
                            {ele.subLink.length > 0 &&
                              ele.subLink.map(
                                (subLink: ISubNavLink, i: React.Key) => {
                                  return (
                                    <li
                                      key={i}
                                      className="border-t border-dotted border-white first-of-type:mt-2 first-of-type:pt-2"
                                    >
                                      <MenuLink
                                        content={subLink.tenSubLink}
                                        link={subLink.url}
                                      />
                                    </li>
                                  );
                                },
                              )}
                          </ul>
                        )}
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
          }
        </div>
      </Wrapper>
    </div>
  );
};

export default MainHeader;
