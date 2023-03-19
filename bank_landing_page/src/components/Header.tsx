import { close, logo, menu } from '../assets';
import { navItems } from '../constants';
import { MaxWidthContainer } from './MaxWidthContainer';

export const Header = () => {
  return (
    <header className='flex justify-center items-center px-6 sm:px-16'>
      <MaxWidthContainer>
        <nav className='w-full flex justify-between items-center py-6 md:py-[30px]'>
          <img src={logo} alt="bank logo" className='w-[118px] h-8' />
          
          <ul className='list-none hidden sm:flex sm:justify-end sm:items-center sm:flex-1'>
            {navItems.map((item) => (
              <li key={item.id} className='text-16 text-white cursor-pointer mr-14 last:mr-0'>
                <a href={`#${item.id}`}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className='flex justify-center items-center sm:hidden'>
            <a href='#menu'>
              <img src={menu} className='w-7 h-7 object-contain' alt='menu' />
            </a>

            <div className='flex p-6 bg-black-gradient absolute top-0 left-0 right-0 z-10 duration-300 -translate-y-full target:translate-y-0' id='menu'>
              <ul className='list-none flex flex-col justify-center'>
                {navItems.map((item) => (
                  <li key={item.id} className='text-16 text-white cursor-pointer mb-5 last:mb-0'>
                    <a href={`#${item.id}`}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <a href='#' className='absolute top-6 right-6 z-10'>
                <img src={close} className='w-4 h-4 object-contain' alt='close'/>
              </a>
            </div>
          </div>
        </nav>
      </MaxWidthContainer>
    </header>
  );
};
