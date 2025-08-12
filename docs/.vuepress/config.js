import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/vuepress','/ai_agent/'],
    sidebar:{
      '/ai_agent':[
        'index',
        {
          text: 'Coze',
          link: 'coze/',
          prefix: 'coze/',
          children:[
            'workflow',
            'prompt',
            'plugin',
            'knowledge_base'
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
})
