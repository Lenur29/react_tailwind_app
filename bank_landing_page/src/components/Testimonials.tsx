import { feedback } from "../constants";
import { Feedback } from "./Feedback";

export const Testimonials = () => {
  return (
    <section className='relative flex flex-col justify-center items-center py-6 sm:py-16' id='clients'>
      <div className='absolute z-0 w-[60%] h-[80%] -right-1/2 rounded-full blue-gradient' />

      <div className='relative z-10 w-full flex flex-col justify-between items-center mb-6 sm:mb-16 md:flex-row'>
        <h2 className='font-semibold w-full text-white text-40 mb-6 xs:text-48'>
          What people are <br /> saying about us
        </h2>
        <div className='w-full mt-6 md:mt-0'>
          <p className='text-dimWhite text-18 leading-15 max-w-[450px]'>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className='w-full grid grid-cols-1 grid-rows-3 gap-y-[30px] sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 sm:gap-x-5 md:gap-x-[30px'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
