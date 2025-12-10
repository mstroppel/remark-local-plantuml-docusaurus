
import {themes as prismThemes} from 'prism-react-renderer';
const localPlantUML = require("@mstroppel/remark-local-plantuml");
import rehypeRaw from 'rehype-raw';
const rehypeRawOptions = {
  passThrough: [
    "mdxjsEsm",
    "mdxJsxTextElement",
    "mdxTextExpression",
    "mdxJsxFlowElement",
  ],
};

const config = {
  title: 'remark-local-plantuml-docusaurus',
  favicon: 'img/favicon.ico',

  url: 'http://localhost',
  baseUrl: '/',

  organizationName: 'mstroppel', // Usually your GitHub org/user name.
  projectName: 'remark-local-plantuml-docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          showLastUpdateTime: true,
          routeBasePath: "/",
          rehypePlugins: [[rehypeRaw, rehypeRawOptions]],
          remarkPlugins: [localPlantUML],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'remark-local-plantuml Docusaurus Test Page',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
