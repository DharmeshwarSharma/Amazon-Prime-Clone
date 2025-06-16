// /** @type {import('tailwindcss').Config} */
// const defaultConfig = require("shadcn/ui/tailwind.config")

// module.exports = {
//   ...defaultConfig,
//   content: [
//     ...defaultConfig.content,
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     ...defaultConfig.theme,
//     extend: {
//       ...defaultConfig.theme.extend,
//       colors: {
//         ...defaultConfig.theme.extend.colors,
//         "prime-dark": "#0F171E",
//         "prime-orange": "#F5C518",
//         "prime-blue": "#00A8E1",
//         "prime-gold": "#FFD700",
//         "prime-light-gray": "#E1E1E1",
//         "prime-white": "#FFFFFF",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//       },
//       backdropBlur: {
//         xs: "2px",
//       },
//     },
//   },
//   plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "prime-dark": "#0F171E",
        "prime-orange": "#F5C518",
        "prime-blue": "#00A8E1",
        "prime-gold": "#FFD700",
        "prime-light-gray": "#E1E1E1",
        "prime-white": "#FFFFFF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
