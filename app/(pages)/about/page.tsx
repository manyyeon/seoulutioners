import Header from "@/app/components/Header";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About Us - My Company</title>
      </Head>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl">About Us</h2>
        <p>Information about our company.</p>
      </main>
    </div>
  );
};

export default About;
