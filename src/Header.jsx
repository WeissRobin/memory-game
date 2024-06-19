const Header = () => {
    return (
        <div className='text-center px-5 py-7 md:p-12 lg:p-16'>
            <div className='flex-1 m-auto'>
                <h1 className='text-3xl md:text-5xl py-3 pb-10 font-opensans font-semibold text-yellow-200'>
                    <span className='font-pokemon text-yellow-400 lg:text-6xl'>Pokémon </span> 
                    Memory Card Game</h1>
                <p className='text-base text-yellow-200 lg:text-xl'>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
        </div>
    )
}

export default Header 