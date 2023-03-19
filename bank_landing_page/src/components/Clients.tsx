import { clients } from "../constants";

export const Clients = () => {
  return (
    <section className='flex justify-center items-center mt-4 md:mt-9'>
      <div className='flex justify-center items-center flex-wrap w-full'>
        {clients.map((client) => (
          <div key={client.id} className='flex-1 flex justify-center items-center min-w-[120px] sm:min-w-[192px]'>
            <img src={client.logo} alt='client logo' className='w-[100px] sm:w-[192px] object-contain hover:' />
          </div>
        ))}
      </div>
    </section>
  );
};
