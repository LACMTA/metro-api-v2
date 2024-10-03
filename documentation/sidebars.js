/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // document ID
      label: 'Getting started', // sidebar label
    },
    {
      type: 'doc',
      id: 'docs',
      label: 'Documentation Site'
    }
  ],
  openApiSidebar: [
    {
      type: "category",
      label: "Metro",
      link: {
        type: "generated-index",
        title: "Metro API",
        description:
          "The Metro API is a RESTful API that provides access to the Metro Transit system in Los Angeles County. The API provides access to real-time bus and rail information, as well as schedules and route information. The API is free to use and does not require an API key. The API is provided by the Los Angeles County Metropolitan Transportation Authority (Metro). ",
        slug: "/api"
      },
      // @ts-ignore
      items: require("./docs/api/sidebar.js")
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
