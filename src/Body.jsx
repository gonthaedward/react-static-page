import menu from './assets/menu.png'
import grid from './assets/grid.png'
function Body(){
    return(
        <>
        <hr className="h-px border-0 bg-gray-700"></hr>
        <div className='flex items-center ml-6 mt-2'>
            <img src={grid} className='w-4 h-4 m-1'></img>
            <img src={menu} className='w-3 h-3 m-1'></img>
            <div className='flex items-center justify-center w-full text-gray-400'>
            <p className='ml-7 italic'>JavaScript</p>
            <p className='ml-7 italic'>DevOps</p>
            <p className='ml-7 italic'>Cloud</p>
            <p className='ml-7 italic'>Terraform</p>
            <p className='ml-7 italic'>Architecture</p>
            <p className='ml-7 italic'>Scalability</p>
            <p className='ml-7 italic'>Explainers</p>
            </div>
        </div>
        </>
    );
}

export default Body