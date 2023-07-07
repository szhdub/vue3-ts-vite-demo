import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    /** 是否开启 HTTPS */
    https: false,
    /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
    host: true, // host: "0.0.0.0"
    /** 端口号 */
    port: 1234,
    /** 是否自动打开浏览器 */
    open: true,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出 */
    strictPort: false,
    /** 接口代理 */
    proxy: {
      "/api/v1": {
        target: "https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212/api/v1",
        ws: true,
        /** 是否允许跨域 */
        changeOrigin: true,
        rewrite: (path) => path.replace("/api/v1", "")
      }
    }
  },
  build: {
    /** 消除打包大小超过 500kb 警告 */
    chunkSizeWarningLimit: 2000,
    /** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
    minify: "terser",
    /** 在打包代码时移除 console.log、debugger 和 注释 */
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
        pure_funcs: ["console.log"]
      },
      format: {
        /** 删除注释 */
        comments: false
      }
    },
    /** 打包后静态资源目录 */
    assetsDir: "assets"
  },
  /** Vite 插件 */
  plugins: [vue(),
  createSvgIconsPlugin({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // Specify symbolId format
    symbolId: 'icon-[dir]-[name]',
  })
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
    }
  }
})
