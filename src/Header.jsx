import './Header.css'

function Header(){
    return(
        <>
            <header>
                <nav className="flex items-center justify-between flex-wrap bg-very-dark-blue p-6">
                    <div className='flex items-center flex-shrink-0 mr-6 bg-red-100'>
                        KODOK
                    </div>
                    {/* below is for menu dropdown when mobile */}
                    <div className='block lg:hidden text-white'>
                        <button>Menu</button>
                    </div>
                    {/* below is for menu when on web and menu dropdown when mobile */}
                    <div className='w-full block flex-grow justify-end lg:flex lg:items-center lg:w-auto text-white'>
                        <div className='text-sm lg:flex-grow flex justify-end'>
                            <a href="home" className='mr-4'>Categories</a>
                            <a href="articles" className='mr-4'>Articles</a>
                            <a href="about" className='mr-4'>About</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header