import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title:'Pikakshi Saroha — Cybersecurity', description:'Personal technical portfolio of Pikakshi Saroha, a B.Tech CSE student specializing in Cybersecurity.' }
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
