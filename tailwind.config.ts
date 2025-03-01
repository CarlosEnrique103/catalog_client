import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Catalog/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: {
          black20: "rgba(0, 0, 0, 0.2)",
          black50: "rgba(0, 0, 0, 0.5)",
          black0: "rgba(0, 0, 0, 0)",
          white20: "rgba(255, 255, 255, 0.2)",
        },
        neutrals: {
          white: "#FFFFFF",
          black: "#000000",
          charcoal: "#2A2F2D",
        },
        grey: {
          50: "#f8f9fa",
          60: "#E1E2E9",
          70: "#E2E6EB",
          80: "#C2C8CC",
          90: "#87929D",
          100: "#68737D",
          200: "#49545C",
          300: "#2F3941",
        },
        primary: {
          purple: {
            default: "#fa4003",
            50: "#f46f47",
            60: "#e89f0f",
            70: "#ea7325",
            90: "#fa4003",
          },
        },
      },
      backgroundImage: {
        "gradient-violet":
          "linear-gradient(90deg, #9432AC 3.31%, #C692D3 100%)",
        "gradient-og-am": "linear-gradient(90deg, #E68D47 0%, #F2DB50 100%)",
      },
      boxShadow: {
        "primary-button":
          "0px 0px 64px 0px #9432AC52, 0px 10px 20px 0px #DFC2E733 inset",
      },
      screens: {
        xxs: "350px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        xm: "890px",
        md: "1030px",
        lg: "1285px",
        xlg: "1450px",
        xxl: "1700px",
      },
    },
  },
  plugins: [heroui()],
};
export default config;
