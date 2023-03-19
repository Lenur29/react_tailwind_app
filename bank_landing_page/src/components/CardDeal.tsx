import { cardDeal } from "../assets";
import { Button } from "./Button";

export const CardDeal = () => {
  return (
    <section className='flex flex-col md:flex-row py-6 sm:py-16'>
      <div className='flex-1 flex flex-col justify-center items-start'>
        <h2 className='font-semibold w-full text-white text-40 mb-6 xs:text-48'>
          Find a better card deal <br /> in few easy steps.
        </h2>
        <p className='text-dimWhite text-18 leading-15 max-w-[500px] mb-12'>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>

      <div className='relative flex-1 flex justify-center items-center mt-10 md:mt-0 md:mr-10'>
        <img src={cardDeal} alt='card' className='w-full h-full z-10' />
      </div>
    </section>
  );
};
