import twitter from './assets/twitter.png'
function Footer(){
    return(
        <>
        <hr className="h-px border-0 bg-gray-700"></hr>
        <div className="flex items-center justify-between flex-wrap mt-4 mb-10">
            <div className='flex items-center ml-7 mt-2 mb-2'>
                <a className='text-white' href='/'>writings.dev</a>
                <a className="text-white ml-2 p-1 bg-blue-400 rounded">by @kamrify</a>
            </div>
            <div className='flex items-end justify-end mr-7'>
            <p className="text-white p-1 bg-blue-400 rounded flex items-center">
                <img src={twitter} alt="twitter icon" className="w-8 mr-2" />
                follow @writingsdev
            </p>
            </div>
        </div>
        </>
    );
}

export default Footer