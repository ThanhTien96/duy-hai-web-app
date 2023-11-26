import React from 'react';
import { ProductCard } from '@/components/global';
import TitleSection from '@/components/global/TitleSection';
import { IProduct } from '@/@types/product';
import { IMainCategory, ISubCategory } from '@/@types/global';
import { Empty } from 'antd';



export type ProductSectionProps = {
  data?: IProduct[];
  title?: React.ReactNode;
  subCategories?: ISubCategory[];
};

const ProductSection = ({ data, title, subCategories }: ProductSectionProps) => {
  return (
    <div>
      {/* Z */}
      <TitleSection childTitle={subCategories} title={title} />
      <div className="grid grid-cols-12 max-xs:gap-2 md:gap-4 lg:gap-8">
        {/* map products */}
        {data && Array.isArray(data) && data.length > 0 ?
          data.map((ele: any) => {
            return (
              <div
                key={ele.maSanPham}
                className="max-xs:col-span-6 md:col-span-4 lg:col-span-3"
              >
                <ProductCard
                  title={ele.tenSanPham}
                  discountPrice={ele.giaGiam}
                  price={ele.giaGoc}
                  image={ele?.hinhAnh[0]?.hinhAnh}
                />
              </div>
            );
          })
          : (<div className='col-span-12'><Empty description="Không Có Sản Phẩm" /></div>)
        }
      </div>
    </div>
  );
};

export default ProductSection;
