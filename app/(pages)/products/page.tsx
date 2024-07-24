import Header from '@/app/components/Header';
import Head from 'next/head';

const Products: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Products - Seoulutioners</title>
      </Head>
      <main>
        <Header />
        <div>Products</div>
      </main>
    </div>
  );
};

export default Products;
