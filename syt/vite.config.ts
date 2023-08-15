import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
import path from 'path';
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'src')
    }
  },
  // 配置跨域代理
  server:{
    proxy:{
      '/api':{
        target:'http://syt.atguigu.cn',
        changeOrigin:true
      }
    }
  }
})
