/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(6deg, #17ffd3 0%, #23e3ee 100%)",
        "custom-gradient-reverse":
          "linear-gradient(6deg, #23e3ee 0%, #17ffd3 100%)",
      },
      bgfloat: {
        "bg-float": "background-image:./assets/blue-dot.png",
      },
    },
  },
  plugins: [require("daisyui")],
};
