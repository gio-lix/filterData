import {FC, useState} from "react"
import {FiMenu} from "react-icons/fi";
import Link from 'next/link'
import {BsSearch} from "react-icons/bs";
import {FcHome, FcKey} from "react-icons/fc";
import {FcAbout} from "react-icons/fc";
import {FiKey} from "react-icons/fi";

interface IHeader {

}
const Header: FC<IHeader> = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
     <>
      <header className='h-14 px-20 flex items-center justify-between border-b border-gray-500'>
          <p>title</p>
          <div className='relative'>
              <button className='absolute z-20' onClick={handleMenu}><FiMenu /></button>
              {menu && (
                  <>
                      <div onClick={() => setMenu(false)} className='fixed z-10 w-full h-full  top-0 left-0'>  </div>
                      <div className='w-44 h-auto  bg-white border border-gray-400 py-1 absolute z-20 top-5 right-0'>
                          <nav>
                              <ul className='w-full'>
                                  <li  className='w-full py-1 hover:bg-indigo-50 cursor-pointer px-3'>
                                      <Link href='/'>
                                          <a  className='flex items-center space-x-2'> <span><FcHome/></span>  <p>Home</p>  </a>
                                      </Link>
                                  </li>
                                  <li  className='w-full py-1 hover:bg-indigo-50 cursor-pointer px-3'>
                                      <Link href='/search'>
                                          <a  className='flex items-center space-x-2'> <span><BsSearch/></span>  <p>Search</p> </a>
                                      </Link>
                                  </li>
                                  <li  className='w-full py-1 hover:bg-indigo-50 cursor-pointer px-3'>
                                      <Link href='/search?purpose=for-sale'>
                                          <a className='flex items-center space-x-2'> <span><FcAbout/></span>  <p>Buy Property</p></a>
                                      </Link>
                                  </li>
                                  <li  className='w-full py-1 hover:bg-indigo-50 cursor-pointer px-3'>
                                      <Link href='/search?purpose=for-rent'>
                                          <a className='flex items-center space-x-2'> <span><FcKey/></span>  <p>Rent Property</p> </a>
                                      </Link>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                  </>
              )}
          </div>

      </header>
     </>
  )
}
export default Header