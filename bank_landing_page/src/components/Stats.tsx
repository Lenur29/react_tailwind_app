import { stats } from "../constants";

export const Stats = () => {
  return (
    <section className='flex flex-col justify-center items-start flex-wrap gap-4 my-6 xs:flex-row sm:my-20'>
      {stats.map((stat) => (
        <div key={stat.id} className='flex justify-center items-center flex-1'>
          <h4 className='font-semibold text-30 text-white leading-14 xs:test-40 xs:leading-13'>{stat.value}</h4>
          <p className='text-14 text-gradient uppercase leading-14 ml-6 xs:test-20 xs:leading-13'>{stat.title}</p>
        </div>
      ))}
    </section>
  );
};
