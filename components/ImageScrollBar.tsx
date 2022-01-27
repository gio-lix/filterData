import {FC, useContext, useState} from "react"
import Image from "next/image";
import {AiOutlineLeft} from "react-icons/ai";
import {AiOutlineRight} from "react-icons/ai";
import {FaBath, FaBed} from "react-icons/fa";
import millify from "millify";
import {BsGridFill} from "react-icons/bs";



interface IImageScrollBar {
    data: any
}


const ImageScrollBar: FC<IImageScrollBar> = ({data}) => {
    const [count, setCount] = useState<number>(0);
    console.log(data)
    const clickLeft = () => {
        if  (count === 0) {
           setCount(data.length - 1)
            return
        }
        setCount(count - 1)
    }
    const clickRight = () => {
        if (count === data.length - 1) {
            setCount(0)
            return
        }
        setCount(count + 1)
    }
    return (
          < >
              <div className=' flex h-auto  justify-center '>
                  <div className='relative w-3/6 h-auto mt-10 '>
                      <Image  src={data[count]?.url} width={800} height={500} layout='responsive'   className='absolute' alt='res'/>
                      <div className='absolute z-20  top-0 flex justify-between items-center  h-full w-full px-3'>
                          <button className='bg-black h-10 w-10 bg-opacity-50 flex justify-center items-center' onClick={clickLeft} > <AiOutlineLeft className='text-white text-2xl'/>  </button>
                          <button className='bg-black h-10 w-10 bg-opacity-50 flex justify-center items-center' onClick={clickRight} > <AiOutlineRight className='text-white text-2xl'/> </button>
                      </div>
                  </div>

              </div>
          </>

  )
}
export default ImageScrollBar