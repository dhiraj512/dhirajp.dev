import type { Metadata } from 'next'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/dashboard/themeProvider'
import NavBar from '@/components/dashboard/navbar'
import PageLayout from '@/components/dashboard/pageLayout'
import { poppins } from '@/lib/fonts'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    template: '%s | Dhiraj',
    default: 'Dhiraj',
  },
  description: 'Dhiraj Pandey\'s personal website',
  metadataBase: new URL('https://dhirajp.vercel.app/'),
  generator: 'Next.js',
  applicationName: 'Dhiraj\'s Website',
  creator: 'Dhiraj Pandey',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js', 'React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vercel',
    'IoT', 'Electronics', 'Electrical', 'Electrical Engineering', 'Engineering'
  ],
  authors:
    [{ name: 'dhiraj', url: 'https://dhirajp.vercel.app' },
    { name: 'dhiraj', url: 'https://github.com/dhiraj512' },
    { name: 'dhiraj', url: 'https://twitter.com/dhiraj_512' }],
}

const GTM_ID = 'G-CK2G1Z8MRW';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className={cn(poppins.className, "bg-background text-foreground selection:bg-primary selection:text-primary-foreground")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem disableTransitionOnChange >
          <NavBar />
          <PageLayout>
            {children}
          </PageLayout>
        </ThemeProvider>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  )
}
