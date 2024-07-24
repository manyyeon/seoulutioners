import Header from '@/app/components/Header';
import Head from 'next/head';
import Image from 'next/image';

const Products: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Products - SOLA</title>
      </Head>
      <Header />

      <main className='h-full pt-24 py-10'>
        <div className='w-full flex justify-center'>
          <Image
            src={'/assets/images/banner-product.png'}
            width={1920}
            height={300}
            alt='SOLA'
            className='w-full h-auto'
          />
        </div>

        <div className='px-8'>
          <div className='flex flex-col gap-8 '>
            <h2 className='text-6xl my-8 text-gold'>BASALT</h2>
            <div className='flex gap-16 justify-evenly'>
              <Image src={'/assets/images/basalt/basalt-lamp-1.jpeg'} width={300} height={300} alt='basalt-lamp' />
              <div className='flex flex-col'>
                <h3 className='text-4xl my-8 text-gold'>Basalt Pendant Lamp</h3>
                <p className='text-white'>
                  Transform your living space with the modern elegance of our Contemporary Basalt Pendant Lamp. Crafted
                  from natural basalt stone, this pendant lamp adds a unique and stylish touch to any room with its
                  textured surface and warm, inviting glow.
                </p>
                <div className='text-white mt-8'>SIZE: 18 x 8 x 8 inches</div>
                <div className='text-white mt-8 text-xl text-amber-100'>$199.99</div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-8'>
            <h2 className='text-6xl my-8 text-gold'>MARBLE</h2>
            <div className='flex gap-16 justify-evenly'>
              <div className='flex flex-col'>
                <h3 className='text-4xl my-8 text-gold'>Marble Table Lamp</h3>
                <p className='text-white'>
                  Illuminate your space with sophistication and style using our Elegant Marble Table Lamp. Crafted with
                  a luxurious marble base that showcases stunning natural veining, each lamp is a unique work of art.
                  The smooth, rounded edges of the marble create a modern yet timeless aesthetic, making it a perfect
                  addition to any room.
                </p>
                <div className='text-white mt-8'>SIZE: 20 x 8 x 14 inches</div>
                <div className='text-white mt-8 text-xl text-amber-100'>$129.99</div>
              </div>
              <Image src={'/assets/images/marble/marble.jpeg'} width={300} height={300} alt='basalt-lamp' />
            </div>
          </div>

          <div className='flex flex-col gap-8'>
            <h2 className='text-6xl my-8 text-gold'>GRANITE</h2>

            <div className='flex gap-16 justify-evenly'>
              <Image src={'/assets/images/granite/granite.jpeg'} width={300} height={300} alt='basalt-lamp' />

              <div className='flex flex-col'>
                <h3 className='text-4xl my-8 text-gold'>Outdoor Carved Granite Lamp</h3>
                <p className='text-white'>
                  Elevate your outdoor space with the striking elegance of our Outdoor Carved Granite Lamp. This
                  beautifully crafted lamp features intricate carvings that create stunning light patterns, adding a
                  touch of artistry and sophistication to your garden, patio, or pathway.
                </p>
                <div className='text-white mt-8'>SIZE: 18 x 8 x 8 inches </div>
                <div className='text-white mt-8 text-xl text-amber-100'>$149.99</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
