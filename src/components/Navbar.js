import reactLogo from '../logo.svg';

function Navbar() { 
    return(
        <nav className='flex flex-col  md:flex-row md:justify-between items-center bg-gray-800 px-8 py-4'>
            <div className='flex items-center'>
                <img src={reactLogo} alt="logo" width="100px"/>
                <h1 className='font-bold text-2xl tracking-wider text-cyan-400'>ReactFacts</h1>
            </div>
            <div>
                <p className='text-white font-semibold'>React Course - Project 1</p>
            </div>
        </nav>
    );
 }

 export default Navbar;