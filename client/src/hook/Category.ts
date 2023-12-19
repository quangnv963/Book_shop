import { getAllCate, getOneCate } from '../api/category'
import { useQuery } from 'react-query'

export const useCateQuery = (cateId?: number) => {
    const { data, ...rest } = useQuery({
        queryKey: cateId ? ['CATEGORY_KEY', cateId] : ['CATEGORIES_KEY'],
        queryFn: async () => (cateId ? await getOneCate(cateId) : await getAllCate()),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    })
    return { data, ...rest }
}