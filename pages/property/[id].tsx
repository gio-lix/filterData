import React from 'react';
import {NextPage} from "next";
import {getApi} from "../api/fetchApi";
import {baseUrl} from '../../util'
import Layout from "../../components/Layout";
import ImageScrollBar from "../../components/ImageScrollBar";
import {BsGridFill} from "react-icons/bs";
import millify from "millify";
import {FaBath, FaBed} from "react-icons/fa";

const PropertyDetails: NextPage = ({propertyDetails}: any) => {
    console.log('propertyDetails', propertyDetails)
    const {photos} = propertyDetails

    return (
        <Layout>
            {photos && <ImageScrollBar data={photos}/>}
            <div className='flex flex-col items-center'>
                <div className='flex space-x-3  my-3'>
                    <p>{propertyDetails.rooms} </p>
                    <FaBed className='text-blue-400'/>
                    <span>|</span>
                    <p className='px-1'> {propertyDetails.baths} </p>
                    <FaBath className='text-blue-400'/>
                    <span>|</span>
                    <p className='px-1'>{millify(propertyDetails.area)}</p> sqft
                    <span>
                      <BsGridFill className='text-blue-400'/>
                  </span>
                </div>
                <p className='font-semibold'>{propertyDetails.title}</p>
                <p className='text-gray-400 indent-8 w-5/6'>{propertyDetails.description}</p>
                <div className=' flex relative text-gray-600 w-5/6 mt-5'>
                    <h2 className='uppercase text-green-700'>Type</h2>
                    <div className='absolute flex justify-center w-full'>
                        <p className='font-bold text-gray-800'>{propertyDetails.type}</p>
                    </div>
                </div>
                <div className=' flex relative text-gray-600 w-5/6 mt-1'>
                    <h2 className='uppercase text-green-700'>purpose</h2>
                    <div className='absolute flex justify-center w-full'>
                        <p className='font-bold text-gray-800'>{propertyDetails.purpose}</p>
                    </div>
                </div>
                {propertyDetails.furnishingStatus && (
                    <div className=' flex relative text-gray-600 w-5/6 mt-1'>
                        <h2 className='uppercase text-green-700'>NG status</h2>
                        <div className='absolute flex justify-center w-full'>
                            <p className='font-bold text-gray-800'>{propertyDetails.furnishingStatus}</p>
                        </div>
                    </div>
                )}
                <div className=' w-full w-5/6 my-2'>
                    {propertyDetails.amenities?.length && (
                        <div >
                            <h4 className="uppercase text-green-700">Amenities</h4>
                            <div className='text-blue-400 flex flex-wrap  whitespace-nowrap'>
                                {propertyDetails.amenities?.map((e: any) => (
                                    <p className='bg-blue-100 p-1 font-semibold mr-3 my-1' key={e.text}>{e.text}</p>
                                )) }
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </Layout>
    );
};

export default PropertyDetails;

export const getServerSideProps = async ({params: {id}}: any) => {
    const data = await getApi.FetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data,
        },
    };
}
