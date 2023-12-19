import { ICate } from "../types";
import instance from "./instance";
import { AxiosResponse } from 'axios'


export const getAllCate = async () => {
    try {
        const response: AxiosResponse<ICate[]> = await instance.get('/categories')
        return response.data || []
    } catch (error) {
        console.log('FETCH_categories_ERROR', error)
    }
}

export const getOneCate  = async (id: number) => {
    try {
        const response: AxiosResponse<ICate> = await instance.get(`/categories/${id}`)
        return response.data || {}
    } catch (error) {
        console.log('FETCH_PRODUCT_ERROR', error)
    }
}
export const addCate  = async (product: ICate) => {
    try {
        const response: AxiosResponse<ICate> = await instance.post('/categories', product)
        return response.data || {}
    } catch (error) {
        console.log('ADD_categories_ERROR', error)
    }
}
export const editCate  = async (product: ICate) => {
    try {
        const response: AxiosResponse<ICate> = await instance.patch('/categories/' + product._id, product)
        return response.data || {}
    } catch (error) {
        console.log('PATCH_categories_ERROR', error)
    }
}
export const deleteCate  = async (id: number) => {
    try {
        const response: AxiosResponse<ICate> = await instance.delete('/categories/' + id)
        return response.data || {}
    } catch (error) {
        console.log('PATCH_categories_ERROR', error)
    }
}