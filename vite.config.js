import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

//   root: "src" means hocceh src er moddeh index.html ke dhore nibe jodi index.html ti root e thakto tahole ar ei root:"src" likhah lagto na
  root: "src",
});
