import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd())

  const KOMMO_URL = `${env.VITE_KOMMO_DOMAIN}`
  const KOMMO_TOKEN = `${env.VITE_KOMMO_TOKEN}`

  return defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      cors: true,
      allowedHosts: true,
      proxy: {
        '/aaa': {
          target: KOMMO_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/aaa/, ''),
          headers: {
            accept: 'application/json',
            authorization: `Bearer ${KOMMO_TOKEN}`,
          },
        },
      },
    },
  })
}
