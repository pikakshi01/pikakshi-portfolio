import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { fontFamily: { sans: ['Inter','system-ui','sans-serif'], display: ['Space Grotesk','Inter','system-ui','sans-serif'] }, colors: { ink:'#0B0D10', panel:'#111419', line:'#272B33', violet:'#8B5CF6' } } }, plugins: [] }
export default config
