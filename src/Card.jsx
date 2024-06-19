import { useState } from "react";

const Card = ({ name, sprite, status }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
      if (clicked === true) {
          status(true);
          setClicked(false);
      } else {
          setClicked(true);
          status(false);
      }
  }

    return (
        <div className='p-2 sm:w-40 bg-zinc-700 rounded-md sm:p-4 hover:bg-zinc-500 cursor-pointer' onClick={handleClick}>
          <img className='m-auto' src={sprite} alt={name + 'image'} />
          <p className='text-xs sm:text- font-mono text-yellow-100 uppercase font-semibold'>{name}</p>
        </div>
    )
}

export default Card