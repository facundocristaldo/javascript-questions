import Head from "next/head";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function Home() {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
      <title>Javascript Questions</title>
    </Head>
    <div>A starting point</div>
    </>
  )
}
