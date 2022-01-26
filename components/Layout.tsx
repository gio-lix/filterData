import {FC} from "react"
import Head from "next/head";
import Header from "./Header";

interface ILayout {
    title?: string
    keywords?: string
    description?: string
}

const Layout: FC<ILayout> = ({children, description, keywords, title}) => {
    return (
        <>
            <head>
                <title>{title}</title>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
            </head>
            <Header/>
            <div>
                {children}
            </div>
            <footer>
                <div className='w-full h-36 flex justify-center items-center'>
                    <p>state, inc</p>
                </div>
            </footer>
        </>
    )
}
export default Layout
Layout.defaultProps = {
    title: 'Shop',
    keywords: 'Shop',
    description: 'Shopping'
}