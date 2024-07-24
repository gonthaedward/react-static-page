import menu from './assets/menu.png'
import grid from './assets/grid.png'
import kokagenu from './assets/kokage.png'
function Body(){
    return(
        <>
        <hr className="h-px border-0 bg-gray-700"></hr>
        <div className='flex items-center ml-7 mt-2'>
            <img src={grid} className='w-4 h-4 mr-1'></img>
            <img src={menu} className='w-3 h-3 ml-1'></img>
            <div className='flex items-center w-full text-gray-400'>
            <p className='text-sm ml-10 italic'>JavaScript</p>
            <p className='text-sm ml-10 italic'>DevOps</p>
            <p className='text-sm ml-10 italic'>Cloud</p>
            <p className='text-sm ml-10 italic'>Terraform</p>
            <p className='text-sm ml-10 italic'>Architecture</p>
            <p className='text-sm ml-10 italic'>Scalability</p>
            <p className='text-sm ml-10 italic'>Explainers</p>
            </div>
        </div>
        <div className='flex items-center ml-7 mt-5 mr-10 text-gray-400'>
            <div className='grid grid-cols-3 gap-20' w-full max-w-4xl>
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <img src={kokagenu} className='w-80 h-40 object-cover'></img>
                    <div className='pt-2 bg-white text-xl font-bold'>
                        Kokagenu
                    </div>
                    <div className='bg-white text-justify mt-1 flex-wrap'>
                        Lorem
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <img src={kokagenu} className='w-80 h-40 object-cover'></img>
                    <div className='pt-2 bg-white text-xl font-bold'>
                        Kokagenu
                    </div>
                    <div className='bg-white text-justify mt-1 flex-wrap'>
                        Lorem
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <img src={kokagenu} className='w-80 h-40 object-cover'></img>
                    <div className='pt-2 bg-white text-xl font-bold'>
                        Kokagenu
                    </div>
                    <div className='bg-white text-justify mt-1 flex-wrap'>
                        Lorem
                    </div>
                </div>
            </div>
                        
        </div>
        <div className='flex items-center ml-7 mt-5 mr-10 text-gray-400'>
            <div className='grid grid-cols-3 gap-20' w-full max-w-4xl>
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <img src={kokagenu} className='w-80 h-40 object-cover'></img>
                    <div className='pt-2 bg-white text-xl font-bold'>
                        Kokagenu
                    </div>
                    <div className='bg-white text-justify mt-1 flex-wrap'>
                        Lorem
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <img src={kokagenu} className='w-80 h-40 object-cover'></img>
                    <div className='pt-2 bg-white text-xl font-bold'>
                        Kokagenu
                    </div>
                    <div className='bg-white text-justify mt-1 flex-wrap'>
                        Lorem
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <img src={kokagenu} className='w-80 h-40 object-cover'></img>
                    <div className='pt-2 bg-white text-xl font-bold'>
                        Kokagenu
                    </div>
                    <div className='bg-white text-justify mt-1 flex-wrap'>
                        Lorem
                    </div>
                </div>
            </div>
                        
        </div>
        <div className='flex items-center ml-7 mt-5 mr-10 text-gray-400'>
            <div className='grid grid-cols-3 gap-20' w-full max-w-4xl>
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <img src={kokagenu} className='w-80 h-40 object-cover'></img>
                    <div className='pt-2 bg-white text-xl font-bold'>
                        Kokagenu
                    </div>
                    <div className='bg-white text-justify mt-1 flex-wrap'>
                        Lorem
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <img src={kokagenu} className='w-80 h-40 object-cover'></img>
                    <div className='pt-2 bg-white text-xl font-bold'>
                        Kokagenu
                    </div>
                    <div className='bg-white text-justify mt-1 flex-wrap'>
                        Lorem
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <img src={kokagenu} className='w-80 h-40 object-cover'></img>
                    <div className='pt-2 bg-white text-xl font-bold'>
                        Kokagenu
                    </div>
                    <div className='bg-white text-justify mt-1 flex-wrap'>
                        Lorem
                    </div>
                </div>
            </div>      
        </div>
        <div className='mt-10 mb-10 ml-7 text-white italic'>
            <div className='text-center justify-center pagination'>
                <a href="#"className='p-2'>Previous</a>
                <a href="#"className='p-2'>1</a>
                <a href="#"className='p-2 border-t-2 border-red-400 text-red-400 active'>2</a>
                <a href="#"className='p-2'>3</a>
                <a href="#"className='p-2'>4</a>
                <a href="#"className='p-2'>5</a>
                <a href="#"className='p-2'>Next</a>
            </div>
        </div>
        </>
    );
}

export default Body