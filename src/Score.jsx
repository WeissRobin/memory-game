const Score = ({ curr, best }) => {
    return (
        <div className='text-base text-left pl-3 py-5 md:text-center md:p-10 lg:pt-14 text-white font-semibold'>
            <p>Score: {curr}</p>
            <p>Best score: {best}</p>
        </div>
    )
}

export default Score