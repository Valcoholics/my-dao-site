import Head from 'next/head'
import { ENV } from 'utils/env'

const defaultTitle = ENV.SITE_TITLE || ''
const defaultDescription = ENV.SITE_DESCRIPTION || ''
const defaultOGURL = ENV.WEBSITE_URL || ''
const defaultOGImage = `https://hkzmq6akhweeabrxhijjq2oxlyzwgrhv5j6anakmfd5hxn4tunca.arweave.net/OrLIeAo9iEAGNzoSmGnXXjNjRPXqfAaBTCj6e7eTo0Q`
const favicon = '/favicon.png'

type SeoProps = {
  title?: string
  description?: string
  url?: string
  ogImage?: string
}

export function Seo({ title, description, url, ogImage }: SeoProps) {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <title>{title ? `${defaultTitle} | ${title}` : defaultTitle}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description || defaultDescription} />
      <link rel='icon' type='image/png' sizes='24x24' href={favicon} />
      <meta property='og:url' content={url || defaultOGURL} />
      <meta property='og:title' content={title || ''} />
      <meta property='og:description' content={description || defaultDescription} />
      <meta name='twitter:creator' content={`@${ENV.TWITTER_HANDLE}`} />
      <meta name='twitter:site' content={url || defaultOGURL} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={ogImage || defaultOGImage} />
      <meta property='og:image' content={ogImage || defaultOGImage} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
    </Head>
  )
}
