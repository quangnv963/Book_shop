import { IProduct } from "../types";
import instance from "./instance";
import { AxiosResponse } from 'axios'


export const getAll = async (pages?:any) => {
    try {
        const response: AxiosResponse<IProduct[]> = await instance.get('/products',{
            params:{
                page:pages
            }
        })
        return response.data || []
    } catch (error) {
        return false
    }
}
export const getCount = async () => {
    try {
        const response = await instance.get('/products/count')
        return response.data.count || []
    } catch (error) {
        console.log('FETCH_PRODUCTS_ERROR', error)
    }
}

export const getOne = async (id: number) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.get(`/products/${id}`)
        return response.data || {}
    } catch (error) {
        console.log('FETCH_PRODUCT_ERROR', error)
    }
}
export const addProduct = async (product: IProduct) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.post('/products', product)
        return response.data || {}
    } catch (error) {
        console.log('ADD_PRODUCTS_ERROR', error)
    }
}
export const editProduct = async (product: IProduct) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.patch('/products/' + product._id, product)
        return response.data || {}
    } catch (error) {
        console.log('PATCH_PRODUCTS_ERROR', error)
    }
}
export const deleteProduct = async (id: number) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.delete('/products/' + id)
        return response.data || {}
    } catch (error) {
        console.log('PATCH_PRODUCTS_ERROR', error)
    }
}