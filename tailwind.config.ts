import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      colors: {
        fontPrimary: '#333333',
        fontSecondary: '#58656F',
        fontTertiary: '#b6b3b3',
        bgPrimary: '#f5f5f5',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '64px',
      },
      fontSize: {
        '5xl': ['3.5rem', '4rem'],
        '4xl': ['2.5rem', '3.5rem'],
        '3xl': ['2rem', '3.25rem'],
        '2xl': ['1.5rem', '2.25rem'],
        xl: ['1.125rem', '1.5rem'],
        lg: ['1rem', '1.375rem'],
        base: ['0.875rem', '1.25rem'],
        sm: ['0.75rem', '1.125rem'],
        xs: ['0.625rem', '1rem'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
} satisfies Config
