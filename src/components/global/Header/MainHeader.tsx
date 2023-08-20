import { Wrapper } from '@/components/shared';
import MenuLink from './partials/MenuLink';
import clsx from 'clsx';
import styles from './partials/MainHeader.module.scss';
import Image from 'next/image';
type ChildMenuType = Omit<MenuDataType, 'child'>;

export type MenuDataType = {
  link: string;
  title: string;
  child: ChildMenuType[];
};

type SubCategoryType = {
  maDanhMucNho: string;
  tenDanhMucNho: string;
  icon: string;
};

export type MainCategoryType = {
  maDanhMucChinh: string;
  tenDanhMuc: string;
  icon: string;
  subcategories: SubCategoryType[];
};

type MainHeaderProps = {
  content: {
    menuData: MenuDataType[];
    categoriesData: MainCategoryType[];
  };
};

const MainHeader = ({ content }: MainHeaderProps) => {
  return (
    <div className="bg-orange-600">
      <Wrapper className="!py-0">
        <div className={clsx(styles.mainMenu)}>
          {/* desktop menu */}
          <ul className=" items-center md:hidden lg:flex">
            {/* categories */}
            <li
              className={clsx(
                'w-[300px] text-white text-[18px] font-medium bg-black text-center',
                styles.categoryItem,
              )}
            >
              <h5>Tất Cả Sản Phẩm</h5>
              {/* print main categories */}
              <ul className={clsx(styles.mainCategoryBox)}>
                {content.categoriesData.map(
                  (ele: MainCategoryType, index: number) => {
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
                            (subCategory: SubCategoryType, key: number) => {
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
                                  <span>{subCategory.tenDanhMucNho}</span>
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
            {content?.menuData.map((menu: MenuDataType, index: number) => {
              return (
                <li className={clsx(styles.mainMenuItem)} key={index}>
                  <MenuLink link={menu?.link} content={menu.title} />
                  {menu.child.length > 0 && (
                    <ul className={clsx(styles.subContentBox)}>
                      {menu?.child?.map((subMenu: ChildMenuType, i: number) => {
                        return (
                          <li className={clsx(styles.subMenuItem)} key={i}>
                            <MenuLink
                              link={subMenu?.link}
                              content={subMenu?.title}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          {/* mobile menu */}
        </div>
      </Wrapper>
    </div>
  );
};

export default MainHeader;
