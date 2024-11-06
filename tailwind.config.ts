import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
 content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
  extend: {
   colors: {
    'bg-primary': '#0D0E0F',
    'bg-secondary': '#1A1A1A',
    'bg-tertiary': '#222222',
    announce: '#181818',
    accent: '#d2ac53',
    'accent-bright': '#FCC000',
    'accent-tr': '#d2ac5344',
    'btn-bg': '#000',
    'btn-border': '#D9D9D9',
    'txt-primary': '#fff',
    'txt-secondary': '#A6A6A6',
    border: '#222222',
    divider: '#EAEAEA',
    'img-bg': '#EEEEEE',
    icon: '#898989',
    backdrop: '#1a1a1a75',
    'backdrop-dark': '#1a1a1ad3',
    'slate-tr': '#94a3b849',
    quant: '#464646',
    'var-home-border': '#CCCCCC',
    'var-home-btn': '#454545',
    'var-bg': '#1e1e1e',
    'var-bg-dark': '#0a0a0a',
    'var-bg-sec': '#2b2b2b',
   },
   fontFamily: {
    smooch: ['var(--font-smooch)', 'sans-serif'],
   },
   backgroundImage: {
    'window-banner': 'url("/logo-bw-bg.jpg")',
    'com-bg': 'url("/hall-window-bw.jpg")',
    robot: 'url("/img/robotpaint-tr.png")',
    blog: 'url("/dark.png")',
    'feat-gradient':
     'linear-gradient(to bottom, rgba(26,26,26,0) 0%, rgba(26,26,26,0.18) 8%,rgba(26,26,26,0.24) 12%, rgba(26,26,26,0.30) 16% ,rgba(26,26,26,0.38) 24%,rgba(26,26,26,0.52) 38%,rgba(26,26,26,0.64) 54%,rgba(26,26,26,0.79) 68%,rgba(26,26,26,0.8) 69%,rgba(26,26,26,0.95) 84%,rgba(26,26,26,1) 100%);',
   },
   height: {
    app: 'var(--app-height)',
    main: 'var(--main-sect-height)',
    grid: 'var(--grid-img-height)',
    stack: 'var(--stack-img-height)',
    'mb-grid': 'var(--mb-grid-img-h)',
    'mb-stack': 'var(--mb-stack-img-h)',
   },
   width: {
    'mb-img-w': 'var(--mb-img-width)',
   },
   transitionTimingFunction: {
    'cubic-custom': 'cubic-bezier(0.33, 1, 0.68, 1)',
   },
  },
  screens: {
   'md-lg': '975px',
   ...defaultTheme.screens,
  },
 },
 plugins: [require('@tailwindcss/typography')],
}
export default config
