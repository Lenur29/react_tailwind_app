import { arrowUp } from "../assets";

export const GetStartedButton = () => {
  return (
    <div className='flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 duration-700 hover:scale-125 will-change-transform'>
      <div className='flex flex-col justify-center items-center bg-primary w-full h-full rounded-full'>
        <button className='flex flex-col items-center justify-center text-left w-full h-full p-0 m-0 bg-transparent border-0 rounded-full text-white'>
          <div className='flex flex-col justify-center items-start'>
            <div className='flex justify-center items-center'>
              <span className='font-medium text-18 text-gradient leading-13 mr-2'>Get</span>
              <img src={arrowUp} className='w-[23px] h-[23px]' alt='arrow' />
            </div>
            <span className='font-medium text-18 leading-13 text-gradient'>Started</span>
          </div>
        </button>
      </div>
    </div>
  );
};
