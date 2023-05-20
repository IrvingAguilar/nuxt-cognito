import { defineNuxtModule, addTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options, nuxt) {
    nuxt.hook('tailwindcss:resolvedConfig', (config) => {
      addTemplate({
        filename: 'tailwind.config.cjs', // gets prepended by .nuxt/
        getContents: () => `module.exports = ${JSON.stringify(config)}`,
        write: true
      })
    })
  }
})
