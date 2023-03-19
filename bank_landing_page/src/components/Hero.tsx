import { discount, robot, firstCard, secondCard, thirdCard } from '../assets';
import { GetStartedButton } from './GetStartedButton';
import { MaxWidthContainer } from './MaxWidthContainer';

export const Hero = () => {
  return (
    <div className='flex justify-center items-center'>
      <MaxWidthContainer>
        <section className='flex flex-col py-6 sm:py-16 lg:flex-row' id='home'>
          <div className='flex flex-col justify-center items-start flex-1 px-6 sm:px-16 xl:px-0'>
            <div className='flex items-center px-4 py-1.5 mb-3 bg-discount-gradient rounded-[10px]'>
              <img src={discount} alt='discount' className='w-8 h-8 object-contain mr-4' />
              <p className='text-dimWhite text-18 leading-15'>
                <span className='text-white'>20%</span> DISCOUNT FOR {' '}
                <span className='text-white'>1 MONTH</span> ACCOUNT
              </p>
            </div>

            <div className='flex justify-between items-center w-full'>
              <h1 className='flex-1 font-semibold text-white text-52 leading-[75px] ss:text-72 ss:leading-14'>
                The Next
                <br /> {' '}
                <span className='text-gradient'>Generation</span> {' '}
              </h1>
              <div className='hidden flex justify-center items-center ss:block'>
                <GetStartedButton />
              </div>
            </div>
            
            <h1 className='w-full font-semibold text-white text-52 leading-[75px] mb-5 ss:text-72 ss:leading-14 md:mb-10'>
              Payment Method.
            </h1>
            <p className='text-dimWhite text-18 leading-17 max-w-[480px] mb-5 lg:mb-0'>
              Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
            </p>
          </div>

          <div className='relative flex justify-center items-center flex-1 mb-4 ss:mb-0'>
            <img src={robot} alt='robot image' className='w-full h-full relative z-10' />
            <div className='absolute left-1/2 -translate-x-[60%] bottom-[37%] w-[50%] h-[50%]'>
              <img src={thirdCard} className='absolute top-1/2 left-1/2 -translate-x-[50%] w-full animate-card slide-third-card' />
              <img src={secondCard} className='absolute top-1/2 left-1/2 -translate-x-[50%] w-full animate-card slide-second-card' />
              <img src={firstCard} className='absolute top-1/2 left-1/2 -translate-x-[50%] w-full' />
            </div>
            <div className='absolute z-0 w-[50%] h-[35%] top-0 pink-gradient' />
            <div className='absolute z-0 w-[50%] h-[50%] bottom-40 blue-gradient' />
          </div>

          <div className='flex justify-center items-center ss:hidden'>
            <GetStartedButton />
          </div>
        </section>
      </MaxWidthContainer>
    </div>
  );
};
