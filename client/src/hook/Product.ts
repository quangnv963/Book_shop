import { getAll, getOne } from '../api/products'
import { useQuery } from 'react-query'

export const useProductQuery = (page:any) => {
    const { data, ...rest } = useQuery({
        queryKey: ['PRODUCTS_KEY'],
        queryFn: async () => (await getAll(page)),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    })
    return { data, ...rest }
}

export const useOneProductQuery = (productId?:any) => {
    const { data, ...rest } = useQuery({
        queryKey: ['PRODUCTS_KEY', productId],
        queryFn: async () => (await getOne(productId)),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    })
    return { data, ...rest }
}