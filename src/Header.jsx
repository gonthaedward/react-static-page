import './Header.css'
import homeIcon from './assets/web-icon.png'



function Header(){
    return(
        <>
            <header>
                <nav className="flex items-center justify-between flex-wrap p-6">
                    <div className='flex items-center flex-shrink-0'>
                        <a className='text-white' href='/'>writings.dev</a>
                    </div>
                    {/* below is for menu dropdown when mobile */}
                    {/* <div className='block lg:hidden text-white'>
                        <button>Menu</button>
                    </div> */}
                    {/* below is for menu when on web and menu dropdown when mobile */}
                    <div className='w-full block flex-grow justify-end lg:flex lg:items-center lg:w-auto text-white'>
                        <div className='text-sm lg:flex-grow flex justify-end'>
                            <a href="categories" className='mr-4'>categories</a>
                            <a href="articles" className='mr-4'>articles</a>
                            <a href="about" className='mr-4'>about</a>
                        </div>
                    </div>
                </nav>
                <div className="w-full block flex-grow text-white">
                    <div className="flex justify-center items-center">
                        <img src={homeIcon} className='w-36 h-36'></img>
                    </div>      
                    <div className="flex flex-col justify-center items-center">
                        <h1 className= 'font-sans italic text-5xl text-red-400 mb-2'>Writings for Developers</h1>
                        <h2 className='font-sans text-lg'>Curated collection of articles for busy Developers</h2>
                    </div>
                    <div className="flex justify-center items-center">
                    </div>
                </div>
            </header>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}

export default Header