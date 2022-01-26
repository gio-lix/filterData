import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {getApi} from "./api/fetchApi";
import Property from "../components/Property";
import Layout from "../components/Layout";
import {baseUrl} from '../util'

const Home: NextPage = ({propertiesForSale, propertiesForRent}: any) => {
    const images = [
        {
            purpose: "RENT A HOME",
            title1: "Rent Home For",
            title2: "Everyone",
            desc1: "Expore Appartment Villas",
            desc2: "And more",
            buttonText: "Explore Rating",
            linkName: "/search?purpose=for-rent",
            imageUrl: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        },
        {
            purpose: "BUY A HOME",
            title1: "Find, Buy & Own Your",
            title2: "Dream Home",
            desc1: " Explore from Apartments, land, builder floors",
            desc2: "villas and more",
            buttonText: "Explore Rating",
            linkName: "/search?purpose=for-sale",
            imageUrl: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        }
    ]

    return (
        <Layout>
            <div className='flex flex-col items-center px-20'>
                <div className='flex w-auto h-auto  my-5'>
                    <Image src={images[0]?.imageUrl} width={350} height={250} className='' alt={images[0]?.title1}/>
                    <div className='flex justify-center text-gray-600 flex-col p-1 w-60'>
                        <h5>{images[0]?.purpose}</h5>
                        <h3 className='font-semibold text-gray-800 my-3'>{images[0]?.title1}</h3>
                        {/*<h3>{el.title2}</h3>*/}
                        <p>{images[0]?.desc1}</p>
                        {/*<p>{el.desc2}</p>*/}
                        <p className='w-36 h-7 flex justify-center items-center border-2  border-gray-600'>{images[0]?.buttonText}</p>
                    </div>
                </div>
                <section className='grid grid-cols-3 gap-4 w-full '>
                    {propertiesForRent?.map((item: any) => (
                        <Property property={item} key={item.id}/>
                    ))}
                </section>
                <div className='flex w-auto h-auto my-5'>
                    <Image src={images[1]?.imageUrl} width={350} height={250} className='' alt={images[1]?.title1}/>
                    <div className='flex justify-center text-gray-600 flex-col p-1 w-60'>
                        <h5>{images[1]?.purpose}</h5>
                        <h3 className='font-semibold text-gray-800 my-3'>{images[1]?.title1}</h3>
                        {/*<h3>{el.title2}</h3>*/}
                        <p>{images[1]?.desc1}</p>
                        {/*<p>{el.desc2}</p>*/}
                        <p className='w-36 h-7 flex justify-center items-center border-2  border-gray-600'>{images[0]?.buttonText}</p>
                    </div>
                </div>
                <section className='grid grid-cols-3 gap-6 w-full  '>
                    {propertiesForSale?.map((item: any) => (
                        <Property property={item} key={item.id}/>
                    ))}
                </section>
            </div>
        </Layout>
    )
}

export default Home
export const getStaticProps = async () => {
    const propertyForSale: any = await getApi.FetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
    const propertyForRent: any = await getApi.FetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

    return {
        props: {
            propertiesForSale: propertyForSale?.hits,
            propertiesForRent: propertyForRent?.hits
        }
    }
}