import 'isomorphic-unfetch'
import Document, { Head, Main, NextScript } from 'next/document'
import './_document.css'


export default class AppDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
