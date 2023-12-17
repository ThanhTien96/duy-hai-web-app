import { IOrderPayload } from '@/@types/order';
import { PAGE_SIZE, apiPaths } from '@/constants';
import { http } from '@/http';

class PageService {
  static async fetchBanner() {
    return await http({
      url: apiPaths.banner,
      method: 'GET',
    });
  }

  // youtube post
  static async fetchYoutubePost() {
    return await http({
      url: apiPaths.youtubePost,
      method: 'GET',
    });
  }

  // main category
  static async fetchMainCategory(withProduct?: { withProduct: boolean }) {
    return await http({
      url: apiPaths.mainCategory,
      method: 'GET',
      params: {
        withProduct: withProduct?.withProduct,
      },
    });
  }

  // sub categories
  static async fetchSubCategories(filter?: {mainCategoryId?: string, withProduct?: boolean}) {
    return await http({
      url: apiPaths.subCategories,
      method: "GET",
      params: {
        mainCategoryId: filter?.mainCategoryId,
        withProduct: filter?.withProduct,
      }
    })
  }

  // fetch sub category detail
  static async fetchSubCategoryDetail(id?: string, filter?: {page?: number, perPage?: number}) {
    return await http({
      url: apiPaths.subCategory,
      method: "GET",
      params: {
        maDanhMucNho: id,
        page: filter?.page, 
        perPage: filter?.perPage
      }
    })
  }

  // menu
  static async fetchMenu() {
    return await http({
      url: apiPaths.menu,
      method: 'GET',
    });
  }

  // product
  static async fetchAllProduct(filter?: { [key: string]: any }) {
    return await http({
      url: apiPaths.product,
      method: 'GET',
      params: {
        filter,
      },
    });
  }
  // product with pagination and subcategory type
  static async fetchProductPagination(
    { page, perPage = PAGE_SIZE.product }: { page: number; perPage?: number },
    filter?: { subCategoryId?: string; mainCategoryId?: string },
  ) {
    return http({
      url: apiPaths.productPagination,
      method: 'GET',
      params: {
        soTrang: page,
        soPhanTu: perPage,
        maDanhMucNho: filter ? filter?.subCategoryId : '',
        maDanhMucChinh: filter ? filter.mainCategoryId : '',
      },
    });
  }

  // fetch product with subcategory
  static async fetchProductWithCategory(subCate: string, signal?: AbortSignal) {
    return await http({
      url: apiPaths.productWithSubCategory,
      method: "GET",
      params: {
        maDanhMucNho: subCate,
      },
      signal,
    })
  }

  // product detail
  static async fetchProductDetail(id: string) {
    return await http({
      url: apiPaths.productDetail,
      method: 'GET',
      params: {
        maSanPham: id,
      },
    });
  }

  // news
  static async fetchAllNews({
    page,
    perPage = PAGE_SIZE.news,
  }: {
    page: number;
    perPage?: number;
  }) {
    return await http({
      url: apiPaths.news,
      method: 'GET',
      params: {
        page,
        perPage,
      },
    });
  }

  // fetch news detail
  static async fetchNewsDetail(id: string) {
    return http({
      url: apiPaths.newsDetail,
      method: "GET",
      params: {
        maTinTuc: id
      }
    })
  }

  /** ORDER PRODUCT */
  static async orderProduct(payload: IOrderPayload, signal?: AbortSignal) {
    return await http({
      url: apiPaths.orderProduct,
      method: 'POST',
      data: payload,
      signal
    })
  }

  // get footer
  static async fetchFooter() {
    return await http({
      url: apiPaths.footer,
      method: "GET",
    })
  }

  // get about page content
  static async fetchAboutPage() {
    return await http({
      url: apiPaths.about,
      method: "GET",
    })
  }
}

export { PageService };
