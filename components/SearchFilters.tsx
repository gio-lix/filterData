import {FC, useState} from "react"
import {useRouter} from "next/router";
import {filterData, getFilterValues} from '../util/filterData'


const SearchFilter = () => {
    const [filter, setFilter] = useState<object[]>(filterData);
    const router = useRouter()

    const searchProperty = (filterValue: any) => {
        const path = router.pathname
        const {query} = router

        const values = getFilterValues(filterValue)

        values.forEach((item) => {
            if (item.value && filterValue?.[item.name]) {
                console.log(item.value ,'<<<<','>>>', filterValue?.[item.name])
                query[item.name] = item.value
            }
        })
        router.push({pathname: path, query})
    }

    return (
     <>
        <div className='grid grid-cols-5 text-black grid-flow-row gap-x-4 gap-y-2 px-5 my-6'>
            {filter?.map((filter: any) => (
                <div key={filter.id} className='bg-red-100 border border-gray-400'>
                    <select
                        className='w-full h-10 bg-gray-50'
                        name='search'
                        onChange={(e) => searchProperty({[filter.queryName]: e.target.value})}>
                        <option   value={filter.placeholder}>{filter.placeholder}</option>
                            {filter?.items?.map((item: any) => (
                                <option  value={item.value} key={item.value} >{item.name}</option>
                            ))}
                    </select>
                </div>
            ))}
        </div>
     </>
  )
}
export default SearchFilter