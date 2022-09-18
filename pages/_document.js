import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { siteSettings } from "../config/site-setting";
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {

    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === "ar" || locale === "he" ? "rtl" : "ltr";
    return (
      <Html>
        
        <Head>
          <link rel="icon" type="image/png" href={siteSettings.logo.url}/>
          <meta name="next-head-count" content="19" />
          <meta name="robots" content="index, follow" />
        </Head>
       
        <body dir={dir}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}