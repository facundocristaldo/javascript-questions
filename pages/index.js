import Head from "next/head";
import Link from "next/link";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function Home() {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
      <title>Javascript Questions</title>
    </Head>
    <div>A starting point</div>
    <Link href="/questions">Go to Questions</Link>
    </>
  )
}
