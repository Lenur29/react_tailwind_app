import { Button } from "./Button";

export const CTA = () => {
  return (
    <section className='flex flex-col justify-center items-center mb-6 mt-10 py-4 px-6 sm:px-16 sm:py-12 sm:my-16 sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow'>
      <div className='flex flex-col flex-1 mb-6 sm:mb-0'>
        <h2 className='font-semibold w-full text-white text-40 mb-6 xs:text-48'>
          Let’s try our service now!
        </h2>
        <p className='text-dimWhite text-18 leading-15 max-w-[445px]'>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      <Button styles='' />
    </section>
  );
};
