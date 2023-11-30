import { PAGE_SIZE, apiPaths } from "@/constants";
import { http } from "@/http";

class PageService {
    static async fetchBanner() {
        return await http({
            url: apiPaths.banner,
            method: "GET",
        })
    }

    // youtube post
    static async fetchYoutubePost() {
        return await http({
            url: apiPaths.youtubePost,
            method: "GET",
        })
    }

    // main category
    static async fetchMainCategory(withProduct?: {withProduct: boolean}) {
        return await http({
            url: apiPaths.mainCategory,
            method: "GET",
            params: {
                withProduct: withProduct?.withProduct
            }
        })
    }

    // menu
    static async fetchMenu() {
        return await http({
            url: apiPaths.menu,
            method: "GET"
        })
    }

    // product
    static async fetchAllProduct(filter?: {[key: string]: any}) {
        return await http({
            url: apiPaths.product,
            method: 'GET',
            params: {
                filter
            }
        })
    }

    // product detail
    static async fetchProductDetail(id: string) {
        return await http({
            url: apiPaths.productDetail,
            method: "GET",
            params: {
                maSanPham: id
            }
        })
    }

    // news
    static async fetchAllNews({page, perPage = PAGE_SIZE.news}: {page: number, perPage: number}){
        return await http({
            url: apiPaths.news,
            method: "GET",
            params: {
                page,
                perPage
            }
        })
    }
}

export {
    PageService
}