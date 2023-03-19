import {
  Header,
  Bills,
  CardDeal,
  Responsibilities,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero
} from './components';
import { MaxWidthContainer } from './components';

export const App = () => {
  return (
    <div className='bg-primary overflow-hidden'>
      <Header />
      <Hero />
      <div className='flex justify-center items-start px-6 sm:px-16'>
        <MaxWidthContainer>
          <Stats />
          <Responsibilities />
          <Bills />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </MaxWidthContainer>
      </div>
    </div>
  );
};
