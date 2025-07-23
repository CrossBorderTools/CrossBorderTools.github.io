import { CodeTabs } from "C:/D/github/16621275149/16621275149.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/D/github/16621275149/16621275149.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/D/github/16621275149/16621275149.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
