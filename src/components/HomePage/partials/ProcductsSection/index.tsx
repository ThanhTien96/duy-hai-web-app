import React from 'react';
import { ProductCard } from '@/components/global';
import TitleSection from '@/components/global/TitleSection';


const dataSection = [
  {
    maDanhMucNho: '3d310a34-eef5-4271-ab49-9540335d91ea',
    tenDanhMucNho: 'echo',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABa0lEQVQ4y+3UMWtUQRQF4I8gi0pIEUQMBIsUKiIpUoSgEBZLt0tlKShW6w/QViyCPyBVirRBCCks1CpNwEKLiIJgJQoqMYgRDIsmaU4xTPZlt7HzwjB3Zu45c+89bx7/0EbRajg7OSzJSOGfxnhGbedzYWnjaNdJjFRBlzDZh/RCRXgOy9hBr4nwJzoB3qgIr+BsUf5TfMDWcSXvBfQF1woCmMB0/MVk/HhQD+EHruMz7laCXcwlXazi2zCEb1L2Km5jrDg7g1vBrB2n8nSaDO8wg+2su5l72e9gH5vZn+qn8ifcj7qX84lM4QnuBfALs5hPPDxIIkdU3kmp6/gY8ByWAliIYGU/X+BUMh1NTLskbuE93kaQXTzEb7wM+UE1JnETr9KaI6+p2wd0gL/4Xu3t4lnOFpoEGsPXBtKmcWfQ214uMlgZQLYxzM+iXQCuBtRE2O1HcKJav8bzPK0WHsXfx5/Mvfjb/hscAupMbDTSWCY3AAAAAElFTkSuQmCC',
    maDanhMucChinh: '2f5518c8-0126-4ae8-824b-550f2b17c5a6',
  },
  {
    maDanhMucNho: '4a8f9498-fbd0-4a3b-b295-6cc2e0dddcda',
    tenDanhMucNho: 'mitsubishi',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABa0lEQVQ4y+3UMWtUQRQF4I8gi0pIEUQMBIsUKiIpUoSgEBZLt0tlKShW6w/QViyCPyBVirRBCCks1CpNwEKLiIJgJQoqMYgRDIsmaU4xTPZlt7HzwjB3Zu45c+89bx7/0EbRajg7OSzJSOGfxnhGbedzYWnjaNdJjFRBlzDZh/RCRXgOy9hBr4nwJzoB3qgIr+BsUf5TfMDWcSXvBfQF1woCmMB0/MVk/HhQD+EHruMz7laCXcwlXazi2zCEb1L2Km5jrDg7g1vBrB2n8nSaDO8wg+2su5l72e9gH5vZn+qn8ifcj7qX84lM4QnuBfALs5hPPDxIIkdU3kmp6/gY8ByWAliIYGU/X+BUMh1NTLskbuE93kaQXTzEb7wM+UE1JnETr9KaI6+p2wd0gL/4Xu3t4lnOFpoEGsPXBtKmcWfQ214uMlgZQLYxzM+iXQCuBtRE2O1HcKJav8bzPK0WHsXfx5/Mvfjb/hscAupMbDTSWCY3AAAAAElFTkSuQmCC',
    maDanhMucChinh: '2f5518c8-0126-4ae8-824b-550f2b17c5a6',
  },
  {
    maDanhMucNho: '7a9b293d-bc84-4dd5-8f35-db04037af8e6',
    tenDanhMucNho: 'maruyama',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABa0lEQVQ4y+3UMWtUQRQF4I8gi0pIEUQMBIsUKiIpUoSgEBZLt0tlKShW6w/QViyCPyBVirRBCCks1CpNwEKLiIJgJQoqMYgRDIsmaU4xTPZlt7HzwjB3Zu45c+89bx7/0EbRajg7OSzJSOGfxnhGbedzYWnjaNdJjFRBlzDZh/RCRXgOy9hBr4nwJzoB3qgIr+BsUf5TfMDWcSXvBfQF1woCmMB0/MVk/HhQD+EHruMz7laCXcwlXazi2zCEb1L2Km5jrDg7g1vBrB2n8nSaDO8wg+2su5l72e9gH5vZn+qn8ifcj7qX84lM4QnuBfALs5hPPDxIIkdU3kmp6/gY8ByWAliIYGU/X+BUMh1NTLskbuE93kaQXTzEb7wM+UE1JnETr9KaI6+p2wd0gL/4Xu3t4lnOFpoEGsPXBtKmcWfQ214uMlgZQLYxzM+iXQCuBtRE2O1HcKJav8bzPK0WHsXfx5/Mvfjb/hscAupMbDTSWCY3AAAAAElFTkSuQmCC',
    maDanhMucChinh: '2f5518c8-0126-4ae8-824b-550f2b17c5a6',
  },
  {
    maDanhMucNho: 'c4332e46-c89b-4ecb-a37c-57afe891778c',
    tenDanhMucNho: 'kawasaki',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABa0lEQVQ4y+3UMWtUQRQF4I8gi0pIEUQMBIsUKiIpUoSgEBZLt0tlKShW6w/QViyCPyBVirRBCCks1CpNwEKLiIJgJQoqMYgRDIsmaU4xTPZlt7HzwjB3Zu45c+89bx7/0EbRajg7OSzJSOGfxnhGbedzYWnjaNdJjFRBlzDZh/RCRXgOy9hBr4nwJzoB3qgIr+BsUf5TfMDWcSXvBfQF1woCmMB0/MVk/HhQD+EHruMz7laCXcwlXazi2zCEb1L2Km5jrDg7g1vBrB2n8nSaDO8wg+2su5l72e9gH5vZn+qn8ifcj7qX84lM4QnuBfALs5hPPDxIIkdU3kmp6/gY8ByWAliIYGU/X+BUMh1NTLskbuE93kaQXTzEb7wM+UE1JnETr9KaI6+p2wd0gL/4Xu3t4lnOFpoEGsPXBtKmcWfQ214uMlgZQLYxzM+iXQCuBtRE2O1HcKJav8bzPK0WHsXfx5/Mvfjb/hscAupMbDTSWCY3AAAAAElFTkSuQmCC',
    maDanhMucChinh: '2f5518c8-0126-4ae8-824b-550f2b17c5a6',
  },
  {
    maDanhMucNho: 'c7b1538f-c916-46c5-9af3-9c81a9e46b02',
    tenDanhMucNho: 'kavi',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABa0lEQVQ4y+3UMWtUQRQF4I8gi0pIEUQMBIsUKiIpUoSgEBZLt0tlKShW6w/QViyCPyBVirRBCCks1CpNwEKLiIJgJQoqMYgRDIsmaU4xTPZlt7HzwjB3Zu45c+89bx7/0EbRajg7OSzJSOGfxnhGbedzYWnjaNdJjFRBlzDZh/RCRXgOy9hBr4nwJzoB3qgIr+BsUf5TfMDWcSXvBfQF1woCmMB0/MVk/HhQD+EHruMz7laCXcwlXazi2zCEb1L2Km5jrDg7g1vBrB2n8nSaDO8wg+2su5l72e9gH5vZn+qn8ifcj7qX84lM4QnuBfALs5hPPDxIIkdU3kmp6/gY8ByWAliIYGU/X+BUMh1NTLskbuE93kaQXTzEb7wM+UE1JnETr9KaI6+p2wd0gL/4Xu3t4lnOFpoEGsPXBtKmcWfQ214uMlgZQLYxzM+iXQCuBtRE2O1HcKJav8bzPK0WHsXfx5/Mvfjb/hscAupMbDTSWCY3AAAAAElFTkSuQmCC',
    maDanhMucChinh: '2f5518c8-0126-4ae8-824b-550f2b17c5a6',
  },
  {
    maDanhMucNho: 'ced43aa1-2dea-4d57-b28a-ed81bd6d0c19',
    tenDanhMucNho: 'stihl',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABa0lEQVQ4y+3UMWtUQRQF4I8gi0pIEUQMBIsUKiIpUoSgEBZLt0tlKShW6w/QViyCPyBVirRBCCks1CpNwEKLiIJgJQoqMYgRDIsmaU4xTPZlt7HzwjB3Zu45c+89bx7/0EbRajg7OSzJSOGfxnhGbedzYWnjaNdJjFRBlzDZh/RCRXgOy9hBr4nwJzoB3qgIr+BsUf5TfMDWcSXvBfQF1woCmMB0/MVk/HhQD+EHruMz7laCXcwlXazi2zCEb1L2Km5jrDg7g1vBrB2n8nSaDO8wg+2su5l72e9gH5vZn+qn8ifcj7qX84lM4QnuBfALs5hPPDxIIkdU3kmp6/gY8ByWAliIYGU/X+BUMh1NTLskbuE93kaQXTzEb7wM+UE1JnETr9KaI6+p2wd0gL/4Xu3t4lnOFpoEGsPXBtKmcWfQ214uMlgZQLYxzM+iXQCuBtRE2O1HcKJav8bzPK0WHsXfx5/Mvfjb/hscAupMbDTSWCY3AAAAAElFTkSuQmCC',
    maDanhMucChinh: '2f5518c8-0126-4ae8-824b-550f2b17c5a6',
  },
  {
    maDanhMucNho: 'd6ebfb68-b9a6-4dbe-a3c0-cd1ea1afa63a',
    tenDanhMucNho: 'robin',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABa0lEQVQ4y+3UMWtUQRQF4I8gi0pIEUQMBIsUKiIpUoSgEBZLt0tlKShW6w/QViyCPyBVirRBCCks1CpNwEKLiIJgJQoqMYgRDIsmaU4xTPZlt7HzwjB3Zu45c+89bx7/0EbRajg7OSzJSOGfxnhGbedzYWnjaNdJjFRBlzDZh/RCRXgOy9hBr4nwJzoB3qgIr+BsUf5TfMDWcSXvBfQF1woCmMB0/MVk/HhQD+EHruMz7laCXcwlXazi2zCEb1L2Km5jrDg7g1vBrB2n8nSaDO8wg+2su5l72e9gH5vZn+qn8ifcj7qX84lM4QnuBfALs5hPPDxIIkdU3kmp6/gY8ByWAliIYGU/X+BUMh1NTLskbuE93kaQXTzEb7wM+UE1JnETr9KaI6+p2wd0gL/4Xu3t4lnOFpoEGsPXBtKmcWfQ214uMlgZQLYxzM+iXQCuBtRE2O1HcKJav8bzPK0WHsXfx5/Mvfjb/hscAupMbDTSWCY3AAAAAElFTkSuQmCC',
    maDanhMucChinh: '2f5518c8-0126-4ae8-824b-550f2b17c5a6',
  },
];

export type ProductSectionProps = {
  data?: any[];
};

const ProductSection = ({ data }: ProductSectionProps) => {
  return (
    <div>
      {/* Z */}
      <TitleSection title='Máy Cưa' childTitle={dataSection} />
      <div className="grid grid-cols-12 max-xs:gap-2 md:gap-4 lg:gap-8">
        {/* map products */}
        {data &&
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
          })}
      </div>
    </div>
  );
};

export default ProductSection;
