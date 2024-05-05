import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // darkMode: "class",
    extend: {
      gridTemplateColumns: {
        desktop: "250px 1fr",
        mobile: "1fr",
      },
      width: {
        card: "600px",
      },
    },
  },
  plugins: [],
};
export default config;
