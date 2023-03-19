import { features } from "../constants";
import { Button } from "./Button";
import { Feature} from "./Feature";

export const Responsibilities = () => {
  return (
    <section className='flex flex-col md:flex-row py-6 sm:py-16' id='features'>
      <div className='flex flex-col justify-center items-start flex-1'>
        <h2 className='font-semibold w-full text-white text-40 mb-6 xs:text-48'>You do the business, <br /> we'll handle the money.</h2>
        <p className='text-dimWhite text-18 leading-15 max-w-[570px] mb-12'>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button />
      </div>

      <div className='relative flex flex-col justify-center items-start flex-1 ml-0 mt-10 md:ml-10 md:mt-0'>
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};
