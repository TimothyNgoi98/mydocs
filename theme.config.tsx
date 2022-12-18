import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: { link: 'https://github.com/TimothyNgoi98' },
  docsRepositoryBase: 'https://github.com/TimothyNgoi98/mydocs',
  logo: (
    <>
    <span style={{ marginLeft: '.4em', fontWeight: 700 }}>HomeGround &nbsp;</span>
    <span>
      Tim's Docs
    </span>
  </>
  ),
  footer: {
    text: `Timothy Ngoi's Docs`,
  },
}

export default config
