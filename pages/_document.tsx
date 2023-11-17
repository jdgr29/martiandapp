import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/img/share.png`}
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@MMMC_NFT" /> */}
        {/* <meta name="twitter:creator" content="@luk3ark" /> */}
        {/* <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/img/share.png`}
        /> */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
