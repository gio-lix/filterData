import {FC, useState} from "react"
import {GetServerSideProps, NextPage} from "next";
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import SearchFilter from "../components/SearchFilters";
import Property from "../components/Property";
import Image from "next/image";
import svg from '../public/noresult.svg'
import {getApi} from "./api/fetchApi";
import {baseUrl} from '../util'

const Search: NextPage = ({properties}: any) => {
    console.log(properties)
    const [search, setSearch] = useState<boolean>(false);
    const router = useRouter()
    console.log('router.query.purpes', router.query.purpose)
    return (
     <Layout>
         <div  className='w-full '>
            <p onClick={() => setSearch(!search)} className='text-center cursor-pointer w-full py-5 bg-gray-100 font-bold '>Search Property By Filter</p>
         </div>
         {search && <SearchFilter /> }
         <p>
             properties {router.query.purpose}
         </p>
         <div   className='grid grid-cols-3 gap-6 w-full  '>
             {properties?.map((property: any) => <Property property={property} key={property.id} />)}
         </div>
         <div>
             {properties?.length === 0 && (
                 <div className='flex justify-center items-center h-96'>
                     <div>
                         <Image src={svg} width={150} height={150} alt='logo'/>
                         <p className='text-gray-400 text-2xl'>No Result Found</p>
                     </div>
                 </div>
             )}
         </div>
     </Layout>
  )
}
export default Search
export const getServerSideProps: GetServerSideProps = async ({query}: any) => {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
    const data = await getApi.FetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
    return {
        props: {
            properties: data?.hits,
        }
    }
}