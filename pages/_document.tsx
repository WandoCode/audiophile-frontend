import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Audiophile siteweb to discover and buy hight quality audio gears"
        />
        <link
          rel="shortcut icon"
          href="./src/assets/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
