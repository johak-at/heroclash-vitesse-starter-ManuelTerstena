// vite.config.ts
import path from "path";
import { defineConfig } from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/vite/dist/node/index.js";
import Preview from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/vite-plugin-vue-component-preview/out/index.js";
import Vue from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Pages from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/vite-plugin-pages/dist/index.mjs";
import generateSitemap from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/vite-plugin-pwa/dist/index.mjs";
import VueI18n from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/@intlify/vite-plugin-vue-i18n/lib/index.mjs";
import Inspect from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/vite-plugin-inspect/dist/index.mjs";
import LinkAttributes from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/markdown-it-link-attributes/index.js";
import Unocss from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/unocss/dist/vite.mjs";
import Shiki from "file:///C:/Users/manue/OneDrive/Desktop/Schule/4BHK/SWP/vue_todolist-ManuelTerstena-master/heroclash-vitesse-starter-ManuelTerstena/node_modules/markdown-it-shiki/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\manue\\OneDrive\\Desktop\\Schule\\4BHK\\SWP\\vue_todolist-ManuelTerstena-master\\heroclash-vitesse-starter-ManuelTerstena";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    Preview(),
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true
    }),
    Pages({
      extensions: ["vue", "md"]
    }),
    Layouts(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core"
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/store"
      ],
      vueTemplate: true
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts"
    }),
    Unocss(),
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: {
            light: "vitesse-light",
            dark: "vitesse-dark"
          }
        });
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
      }
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Vitesse",
        short_name: "Vitesse",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    Inspect()
  ],
  test: {
    include: ["test/**/*.test.ts"],
    environment: "jsdom",
    deps: {
      inline: ["@vue", "@vueuse", "vue-demi"]
    }
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    onFinished() {
      generateSitemap();
    }
  },
  ssr: {
    noExternal: ["workbox-window", /vue-i18n/]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtYW51ZVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFNjaHVsZVxcXFw0QkhLXFxcXFNXUFxcXFx2dWVfdG9kb2xpc3QtTWFudWVsVGVyc3RlbmEtbWFzdGVyXFxcXGhlcm9jbGFzaC12aXRlc3NlLXN0YXJ0ZXItTWFudWVsVGVyc3RlbmFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG1hbnVlXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcU2NodWxlXFxcXDRCSEtcXFxcU1dQXFxcXHZ1ZV90b2RvbGlzdC1NYW51ZWxUZXJzdGVuYS1tYXN0ZXJcXFxcaGVyb2NsYXNoLXZpdGVzc2Utc3RhcnRlci1NYW51ZWxUZXJzdGVuYVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbWFudWUvT25lRHJpdmUvRGVza3RvcC9TY2h1bGUvNEJISy9TV1AvdnVlX3RvZG9saXN0LU1hbnVlbFRlcnN0ZW5hLW1hc3Rlci9oZXJvY2xhc2gtdml0ZXNzZS1zdGFydGVyLU1hbnVlbFRlcnN0ZW5hL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IFByZXZpZXcgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWNvbXBvbmVudC1wcmV2aWV3J1xyXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xyXG5pbXBvcnQgZ2VuZXJhdGVTaXRlbWFwIGZyb20gJ3ZpdGUtc3NnLXNpdGVtYXAnXHJcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAndml0ZS1wbHVnaW4tdnVlLW1hcmtkb3duJ1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5pbXBvcnQgVnVlSTE4biBmcm9tICdAaW50bGlmeS92aXRlLXBsdWdpbi12dWUtaTE4bidcclxuaW1wb3J0IEluc3BlY3QgZnJvbSAndml0ZS1wbHVnaW4taW5zcGVjdCdcclxuaW1wb3J0IExpbmtBdHRyaWJ1dGVzIGZyb20gJ21hcmtkb3duLWl0LWxpbmstYXR0cmlidXRlcydcclxuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcclxuaW1wb3J0IFNoaWtpIGZyb20gJ21hcmtkb3duLWl0LXNoaWtpJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnfi8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHBsdWdpbnM6IFtcclxuICAgIFByZXZpZXcoKSxcclxuXHJcbiAgICBWdWUoe1xyXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXHJcbiAgICAgIHJlYWN0aXZpdHlUcmFuc2Zvcm06IHRydWUsXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaGFubm9lcnUvdml0ZS1wbHVnaW4tcGFnZXNcclxuICAgIFBhZ2VzKHtcclxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huQ2FtcGlvbkpyL3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXHJcbiAgICBMYXlvdXRzKCksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgICAndnVlLWkxOG4nLFxyXG4gICAgICAgICd2dWUvbWFjcm9zJyxcclxuICAgICAgICAnQHZ1ZXVzZS9oZWFkJyxcclxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcclxuICAgICAgXSxcclxuICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJyxcclxuICAgICAgZGlyczogW1xyXG4gICAgICAgICdzcmMvY29tcG9zYWJsZXMnLFxyXG4gICAgICAgICdzcmMvc3RvcmUnLFxyXG4gICAgICBdLFxyXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIC8vIGFsbG93IGF1dG8gbG9hZCBtYXJrZG93biBjb21wb25lbnRzIHVuZGVyIGAuL3NyYy9jb21wb25lbnRzL2BcclxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcclxuICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxyXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxyXG4gICAgICBkdHM6ICdzcmMvY29tcG9uZW50cy5kLnRzJyxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcclxuICAgIC8vIHNlZSB1bm9jc3MuY29uZmlnLnRzIGZvciBjb25maWdcclxuICAgIFVub2NzcygpLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi12dWUtbWFya2Rvd25cclxuICAgIC8vIERvbid0IG5lZWQgdGhpcz8gVHJ5IHZpdGVzc2UtbGl0ZTogaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGVzc2UtbGl0ZVxyXG4gICAgTWFya2Rvd24oe1xyXG4gICAgICB3cmFwcGVyQ2xhc3NlczogJ3Byb3NlIHByb3NlLXNtIG0tYXV0byB0ZXh0LWxlZnQnLFxyXG4gICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgbWFya2Rvd25JdFNldHVwKG1kKSB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9wcmlzbWpzLmNvbS9cclxuICAgICAgICBtZC51c2UoU2hpa2ksIHtcclxuICAgICAgICAgIHRoZW1lOiB7XHJcbiAgICAgICAgICAgIGxpZ2h0OiAndml0ZXNzZS1saWdodCcsXHJcbiAgICAgICAgICAgIGRhcms6ICd2aXRlc3NlLWRhcmsnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1kLnVzZShMaW5rQXR0cmlidXRlcywge1xyXG4gICAgICAgICAgbWF0Y2hlcjogKGxpbms6IHN0cmluZykgPT4gL15odHRwcz86XFwvXFwvLy50ZXN0KGxpbmspLFxyXG4gICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcclxuICAgICAgICAgICAgcmVsOiAnbm9vcGVuZXInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ3NhZmFyaS1waW5uZWQtdGFiLnN2ZyddLFxyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIG5hbWU6ICdWaXRlc3NlJyxcclxuICAgICAgICBzaG9ydF9uYW1lOiAnVml0ZXNzZScsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy92aXRlLXBsdWdpbi12dWUtaTE4blxyXG4gICAgVnVlSTE4bih7XHJcbiAgICAgIHJ1bnRpbWVPbmx5OiB0cnVlLFxyXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXHJcbiAgICAgIGluY2x1ZGU6IFtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbG9jYWxlcy8qKicpXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1pbnNwZWN0XHJcbiAgICAvLyBWaXNpdCBodHRwOi8vbG9jYWxob3N0OjMzMzMvX19pbnNwZWN0LyB0byBzZWUgdGhlIGluc3BlY3RvclxyXG4gICAgSW5zcGVjdCgpLFxyXG4gIF0sXHJcblxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlc3QtZGV2L3ZpdGVzdFxyXG4gIHRlc3Q6IHtcclxuICAgIGluY2x1ZGU6IFsndGVzdC8qKi8qLnRlc3QudHMnXSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgZGVwczoge1xyXG4gICAgICBpbmxpbmU6IFsnQHZ1ZScsICdAdnVldXNlJywgJ3Z1ZS1kZW1pJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXNzZ1xyXG4gIHNzZ09wdGlvbnM6IHtcclxuICAgIHNjcmlwdDogJ2FzeW5jJyxcclxuICAgIGZvcm1hdHRpbmc6ICdtaW5pZnknLFxyXG4gICAgb25GaW5pc2hlZCgpIHsgZ2VuZXJhdGVTaXRlbWFwKCkgfSxcclxuICB9LFxyXG5cclxuICBzc3I6IHtcclxuICAgIC8vIFRPRE86IHdvcmthcm91bmQgdW50aWwgdGhleSBzdXBwb3J0IG5hdGl2ZSBFU01cclxuICAgIG5vRXh0ZXJuYWw6IFsnd29ya2JveC13aW5kb3cnLCAvdnVlLWkxOG4vXSxcclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVqQixPQUFPLFVBQVU7QUFDeGtCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sYUFBYTtBQUNw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
