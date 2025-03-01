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
            50: "#F8F2FA",
            60: "#DFC2E7",
            70: "#9E99E7",
            90: "#9432AC",
            100: "#7b0299",
            200: "#5F1272",
          },
        },
        system: {
          red: {
            base: "#DE350B",
            light: "#FAE9EA",
            lightHover: "#F5D2D3",
            dark: "#980C0C",
          },
          orange: {
            alert: "#E98305",
            dark: "#AD5700",
            lightHover: "#FAE2C7",
          },
          green: {
            normal: "#28A138",
            dark: "#2D7738",
            light: "#EBF5EC",
            lightHover: "#D7EAD9",
          },
          blue: {
            base: "#0172CA",
            light: "#E8F4FD",
            lightHover: "#D0E9FB",
            dark: "#005AA3",
          },
          pink: {
            light: "#FFF2E2",
          },
        },
        graph: {
          progress1: {
            DEFAULT: "#FFB200",
            light: "#FFF5CC",
          },
          progress2: {
            DEFAULT: "#4339F2",
            light: "#DAD7FE",
          },
          progress3: {
            DEFAULT: "#02A0FC",
            light: "#CCF8FE",
          },
          progress4: {
            DEFAULT: "#E98305",
            light: "#FAE2C7",
          },
          progress5: {
            DEFAULT: "#28A138",
            light: "#D7EAD9",
          },
          progress6: {
            DEFAULT: "#FF3A29",
            light: "#FFE5D3",
          },
          progress7: {
            DEFAULT: "#a508ae",
            light: "#bd58cf",
          },
          bar1: {
            DEFAULT: "#34B53A",
          },
          bar2: {
            DEFAULT: "#02A0FC",
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
