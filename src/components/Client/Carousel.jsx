
import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Component({ list }) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={2000}>
        {list.map((item, index) => {
            return (
                <Link className='w-full' to={item.link}>
                  <img className='overflow-fill w-[100%]' key={index} src={item.banner} alt="..." />
                </Link>
            )
        })}
      </Carousel>
    </div>
  );
}
