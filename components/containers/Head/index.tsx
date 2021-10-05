// import { DefaultSeo } from 'next-seo'
import NextHead from 'next/head'
import { FC } from 'react'

// import config from '@config/seo.json'

const Head: FC = () => (
  <>
    {/* <DefaultSeo {...config} /> */}
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <link
        rel="preload"
        href="/fonts/louis_george_caf/Louis George Cafe Italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/louis_george_caf/Louis George Cafe.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/louis_george_caf/Louis George Cafe Bold Italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/louis_george_caf/Louis George Cafe Bold.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/louis_george_caf/Louis George Cafe Light Italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/louis_george_caf/Louis George Cafe Light.ttf"
        as="font"
        crossOrigin=""
      />
    </NextHead>
  </>
)

export default Head
