import {FC} from "react"
import Link from 'next/link';
import Image from 'next/image';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import house from '../public/house.jpg'
import {bool} from "prop-types";

interface IProperty {
    property: {
        externalID: string,
        coverPhoto: any
        price: number
        rentFrequency: string
        rooms: number
        title: string
        baths: number
        area: number
        agency: any
        isVerified: any
    }
}

const Property: FC<IProperty> = ({
                                     property: {
                                         externalID,
                                         price,
                                         coverPhoto,
                                         rentFrequency,
                                         rooms,
                                         baths,
                                         area,
                                         agency,
                                         isVerified,
                                         title
                                     }
                                 }) => {
    return (
        <div className=''>
            <Link href={`/property/${externalID}`} passHref>
                <div className=' w-full flex flex-col p-1'>
                    <div>
                        <Image  src={coverPhoto ? coverPhoto.url : house}  width={450} height={250}  alt='house'/>
                    </div>
                    <div className='flex items-center space-x-3 my-3'>
                        <GoVerified className='text-green-500' />
                        <h4 className='ml-5 font-bold'>AED</h4>
                        <p className=' '>
                            {millify(price)}{rentFrequency && `/${rentFrequency}`}
                        </p>
                        <div>
                            <Image src={agency?.logo?.url } width={70} height={35} alt='logo' />
                        </div>
                    </div>
                    <div className='flex space-x-3/5 bg-red-400 my-3'>
                        <p>{rooms} </p>
                        <FaBed className='text-blue-400' />
                        <span>|</span>
                        <p className='px-1'> {baths} </p>
                        <FaBath className='text-blue-400' />
                        <span>|</span>
                        <p className='px-1'>{millify(area)}</p> sqft
                        <span>
                            <BsGridFill className='text-blue-400' />
                        </span>
                    </div>
                    <p >{title.length > 30 ? `${title.substring(0, 30)}...`: title}</p>
                </div>
            </Link>
        </div>
    )
}
export default Property