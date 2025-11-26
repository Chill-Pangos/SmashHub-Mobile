/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Base colors matching web version (oklch converted to hex)
        background: "#fafafa",
        foreground: "#1a1a1a",

        // Card
        card: "#ffffff",
        "card-foreground": "#1a1a1a",

        // Popover
        popover: "#ffffff",
        "popover-foreground": "#1a1a1a",

        // Primary - Orange/Amber theme
        primary: {
          DEFAULT: "#e89b3c",
          foreground: "#ffffff",
          50: "#fef9f2",
          100: "#fef3e5",
          200: "#fce4c2",
          300: "#fad49f",
          400: "#f6b559",
          500: "#e89b3c",
          600: "#d88320",
          700: "#b56b18",
          800: "#925517",
          900: "#774616",
        },

        // Secondary
        secondary: {
          DEFAULT: "#efefef",
          foreground: "#1a1a1a",
        },

        // Muted
        muted: {
          DEFAULT: "#e1e1e1",
          foreground: "#737373",
        },

        // Accent - Same as primary for consistency
        accent: {
          DEFAULT: "#e89b3c",
          foreground: "#ffffff",
        },

        // Destructive
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },

        // Border & Input
        border: "#efefef",
        input: "#f5f5f5",
        ring: "#e89b3c",

        // Chart colors
        chart: {
          1: "#e89b3c",
          2: "#3b82f6",
          3: "#8b5cf6",
          4: "#10b981",
          5: "#f59e0b",
        },

        // Sidebar
        sidebar: {
          DEFAULT: "#f8f8f8",
          foreground: "#1a1a1a",
          primary: "#e89b3c",
          "primary-foreground": "#ffffff",
          accent: "#efefef",
          "accent-foreground": "#1a1a1a",
          border: "#efefef",
          ring: "#e89b3c",
        },

        // Status colors for badges
        status: {
          success: "#10b981",
          warning: "#f59e0b",
          error: "#dc2626",
          info: "#3b82f6",
        },
      },
      borderRadius: {
        sm: "0.375rem", // 6px
        md: "0.5rem", // 8px
        lg: "0.75rem", // 12px
        xl: "1rem", // 16px
        "2xl": "1.25rem", // 20px
      },
      fontFamily: {
        sans: ["System"],
        mono: ["Courier"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
