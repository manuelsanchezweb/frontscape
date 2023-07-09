import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import vercel from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
  site: 'https://www.my-site.dev',
  compressHTML: true,
  output: 'static',
  adapter: vercel(),
  integrations: [
    starlight({
      title: '🌅 FrontScape',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },
      social: {
        github: 'https://github.com/orgs/manuelsanchezweb/repositories',
      },
      sidebar: [
        {
          label: 'FrontScape',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Qué es esta página',
              link: '/basics/introduction/',
            },
          ],
        },
        {
          label: 'Tecnologías',
          autogenerate: {
            directory: 'technologies',
          },
        },
        {
          label: 'Frameworks',
          autogenerate: {
            directory: 'frameworks',
          },
        },
      ],
    }),
  
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
})
