import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

export const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center pt-6 pb-[30px] sm:pt-16' id='footer'>
      <div className='flex flex-col justify-center items-start mb-8 w-full md:flex-row'>
        <div className='flex-1 flex flex-col justify-start'>
          <img src={logo} alt='bank logo' className='w-[266px] h-[72px] object-contain mb-[30px]' />

          <p className='text-dimWhite text-18 leading-15 max-w-[312px]'>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className='flex-[1.5] flex justify-between flex-wrap mt-10 md:mt-0 w-full'>
          {footerLinks.map((footerLink) => (
            <div className='flex flex-col my-4 min-w-[150px] ss:my-0' key={footerLink.title}>
              <h4 className='font-medium text-18 leading-15 text-white mb-6'>
                {footerLink.title}
              </h4>
              <ul>
                {footerLink.links.map((link) => (
                  <li key={link.name} className='text-16 leading-15 text-dimWhite mb-4 last:mb-0 hover:text-secondary'>
                    <a href='#footer'>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex flex-col justify-between items-center pt-[30px] border-t border-t-[#3f3e45] sm:flex-row'>
        <p className='font-normal text-18 leading-15 text-white text-center mb-6 sm:mb-0'>
          2021 HooBank. All Rights Reserved.
        </p>

        <div className='flex flex-row'>
          {socialMedia.map((social) => (
            <a
              href={social.link}
              target="_blank"
              className='w-[21px] h-[21px] object-contain cursor-pointer mr-6 last:mr-0'
              key={social.id}
            >
              <img
                src={social.icon}
                alt={social.id}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
