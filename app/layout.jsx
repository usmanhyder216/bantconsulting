import './globals.css'

export const metadata = {
  title: 'B&T Consulting | Elevating IT Solutions',
  description: 'B&T Consulting provides top-tier IT consulting and digital transformation strategies for large businesses and IT firms.',
  icons: {
    icon: '/images/fav.png', // Change this to your custom path (e.g., '/favicon.ico' or '/my-logo.png' in the /public folder)
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

