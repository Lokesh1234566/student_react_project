import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser", // Now that Terser is installed, this will work
    terserOptions: {
      compress: {
        drop_console: true, // Removes console logs in production
      },
    },
  },
  server: {
    port: 3000, // Optional: Change server port if needed
    open: true, // Optional: Open browser automatically
  },
});
