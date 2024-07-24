import Header from '@/app/components/Header';
import Head from 'next/head';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About Us - SOLA</title>
      </Head>
      <Header />
      <main className='flex flex-col gap-8 bg-black h-full py-10 pt-24'>
        <div className='w-full flex justify-center'>
          <Image
            src={'/assets/images/banner-sola.png'}
            width={1920}
            height={300}
            alt='SOLA'
            className='w-full h-auto'
          />
        </div>
        <div className='px-4 md:px-8'>
          <div className='mb-16 md:mb-32'>
            <h2 className='text-4xl md:text-6xl my-4 md:my-8 text-gold'>VISION</h2>
            <p className='text-lg md:text-2xl whitespace-pre-wrap text-white'>
              {`To be the leading creator of culturally inspired lighting solutions\n that preserve heritage and illuminate the beauty of tradition in modern living spaces worldwide.`}
            </p>
          </div>
          <div className='mb-16 md:mb-32'>
            <h2 className='text-4xl md:text-6xl my-4 md:my-8 text-gold content-center'>ABOUT US</h2>
            <div className='flex flex-col md:flex-row mb-8 content-center'>
              <p className='text-lg md:text-2xl text-white md:mr-8 mb-4 md:mb-0'>{`At SOLA, we believe in the power of light to illuminate not just spaces but also the rich heritage and traditions that shape our world. We are a passionate team dedicated to preserving cultural heritage through innovative and beautifully crafted lighting solutions.`}</p>
              <Image src={'/assets/images/logo.png'} width={240} height={100} alt='SOLA' className='mx-auto md:mx-0' />
            </div>
          </div>

          <div className='mb-16 md:mb-32'>
            <h2 className='text-4xl md:text-6xl my-4 md:my-8 text-gold'>MISSION</h2>
            <p className='text-lg md:text-2xl whitespace-pre-wrap text-white'>
              {`We aim to.. 

1) Preserve Cultural Heritage 
2) Promote Sustainable Craftmanship 
3) Foster Artisan Communities 
4) Deliver Excellence 
5) To become a global company `}
            </p>
          </div>
          <div>
            <h2 className='text-4xl md:text-6xl my-4 md:my-8 text-gold'>CONTACT US</h2>
            <div className='flex flex-col gap-2'>
              <p className='text-lg md:text-2xl whitespace-pre-wrap text-white'>{`For more information, please contact us at `}</p>
              <div className='flex items-center gap-2'>
                <Image src={'/assets/icons/phone.svg'} alt='phone' width={32} height={32} />
                <p className='text-lg md:text-2xl whitespace-pre-wrap text-white'>{`(031) 2981005`}</p>
              </div>
              <div className='flex items-center gap-2'>
                <Image src={'/assets/icons/address.svg'} alt='address' width={32} height={32} />
                <p className='text-lg md:text-2xl whitespace-pre-wrap text-white'>
                  {`Jl. Raya Kalirungkut, Kali Rungkut, Kec. Rungkut, Surabaya, Jawa Timur 60293`}
                </p>
              </div>

              <div className='flex items-center gap-2'>
                <Image src={'/assets/icons/email.svg'} alt='email' width={32} height={32} />
                <p className='text-lg md:text-2xl whitespace-pre-wrap text-white'>{`sola.luxury@gmail.com`}</p>
              </div>

              <div className='flex items-center gap-2'>
                <Image src={'/assets/icons/instagram.svg'} alt='instagram' width={32} height={32} />
                <p className='text-lg md:text-2xl whitespace-pre-wrap text-white'>{`@sola.global`}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
