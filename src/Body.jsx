import menu from './assets/menu.png'
import grid from './assets/grid.png'
function Body(){
    return(
        <>
        <hr className="h-px border-0 bg-gray-700"></hr>
        <div className='flex items-center ml-24 mt-2'>
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
        <div className='flex items-center ml-24 mt-2 text-gray-400'>
            starting of the post
        </div>
        </>
    );
}

export default Body