import Header from '@/app/components/Header';
import Head from 'next/head';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About Us - Seoulutioners</title>
      </Head>
      <Header />
      <main className='p-4 bg-black h-full mx-4 px-8'>
        <div>
          <h2 className='text-6xl my-8 text-gold'>Vision</h2>
          <p className='text-2xl whitespace-pre-wrap text-white'>
            {`To be the leading creator of culturally inspired lighting solutions\n that preserve heritage and illuminate the beauty of tradition in modern living spaces worldwide.`}
          </p>
        </div>
        <div>
          <h2 className='text-6xl my-8 text-gold content-center'>About Us</h2>
          <div className='flex mb-8 content-center'>
            <p className='text-2xl text-white mr-8'>{`At Seoulutioners, we believe in the power of light to illuminate not just spaces but also the rich heritage and traditions that shape our world. We are a passionate team dedicated to preserving cultural heritage through innovative and beautifully crafted lighting solutions.`}</p>
            <Image src={'/assets/images/logo-icon.png'} width={400} height={400} alt='seoulutioners' />
          </div>
        </div>

        <h2 className='text-6xl my-8 text-gold'>Mission</h2>
        <p className='text-2xl whitespace-pre-wrap text-white'>
          {`We aim to.. 

1)  Preserve Cultural Heritage 
2) Promote Sustainable Craftmanship 
3) Foster Artisan Communities 
4) Deliver Excellence 
5) To become a global company `}
        </p>
      </main>
    </div>
  );
};

export default About;
