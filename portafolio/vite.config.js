import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //para usar remoto, cambiar localhost por la ip deseada
    host: 'localhost', // Asegura que escuche en la red
    port: 5173, // Usa este puerto (puedes cambiarlo si quieres)
    strictPort: true,
  },
});
