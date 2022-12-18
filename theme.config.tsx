import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
    <span className="mr-2 font-extrabold hidden md:inline">HomeGround</span>
    <span className="text-gray-600 font-normal hidden md:inline">
      Tim's Personal Docs
    </span>
  </>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
