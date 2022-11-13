import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';
import Script from "next/script";
import Layout from '@/components/business/Layout/Layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }></Script>

      <h1>First Post</h1>
      <h2>
        <Link href="/old">Back to home</Link>
      </h2>

      <Image
        src="/images/profile.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </Layout>
  )
}
