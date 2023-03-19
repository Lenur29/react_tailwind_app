import { appStore, bill, googlePlay } from "../assets";

export const Bills = () => {
  return (
    <section className='flex flex-col-reverse py-6 sm:py-16 md:flex-row' id='product'>
      <div className='relative flex-1 flex justify-center items-center mt-10 md:mt-0 md:mr-10'>
        <img src={bill} alt='bill' className='relative w-full h-full z-10' />

        <div className='absolute z-10 -left-1/2 top-0 w-1/2 h-1/2 rounded-full white-gradient' />
        <div className='absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink-gradient' />
      </div>

      <div className='flex-1 flex flex-col justify-center items-start'>
        <h2 className='font-semibold w-full text-white text-40 mb-6 xs:text-48'>Easily control your <br />  billing & invoicing.</h2>
        <p className='text-dimWhite text-18 leading-15 max-w-[470px] mb-6 sm:mb-10'>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className='flex flex-wrap'>
          <a href='#product'>
            <img src={appStore} alt='app store' className='w-[128px] h-[42px] mr-5' />
          </a>
          <a href='#product'>
            <img src={googlePlay} alt='google play' className='w-[128px] h-[42px]' />
          </a>
        </div>
      </div>
    </section>
  );
};
