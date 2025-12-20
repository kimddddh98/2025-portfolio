import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import ThemeButton from '@/components/common/themeButton'
import { cookies } from 'next/headers'
import Script from 'next/script'
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })
const pretendard = localFont({
  src: [
    {
      path: '../fonts/Pretendard-Light.woff2',
      weight: '300',
    },
    {
      path: '../fonts/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../fonts/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../fonts/Pretendard-SemiBold.woff2',
      weight: '600',
    },
    { path: '../fonts/Pretendard-Bold.woff2', weight: '700' },
    {
      path: '../fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
})

const nosifer = localFont({
  src: [
    {
      path: '../fonts/Nosifer-Regular.ttf',
      weight: '700',
    },
  ],
  variable: '--font-nosifer',
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'portfolio',
  description: '프론트엔드 개발자 김동현 포트폴리오 입니다.',
  verification: {
    google: 'ObxVVpU8VNAHH6XlCAMBG0jF8ASsmoMfWK7d99yUBEY',
  },
  keywords: [
    '프론트엔드 개발자',
    'Frontend Developer',
    'Next.js',
    '프론트엔드 개발자 포트폴리오',
  ],
  openGraph: {
    title: '김동현 - Frontend Developer',
    description: '프론트엔드 개발자 포트폴리오',
    url: 'https://2025-portfolio-nu-one.vercel.app/',
    siteName: '김동현 portfolio',
    // images: ["/og-image.png"],
    type: 'website',
  },
}

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal?: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')?.value
  const isDark = theme === 'dark'
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={!theme ? '' : `${isDark ? 'dark' : ''}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  if (!${theme} && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                    document.cookie = "theme=dark; path=/; max-age=31536000";
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-YEQDW092NX`}
          strategy="afterInteractive"
        />

        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YEQDW092NX');
          `}
        </Script>
      </head>
      <body className={`${pretendard.variable} ${nosifer.variable}`}>
        <ThemeButton theme={theme} />
        {children}
        {modal}
      </body>
    </html>
  )
}
