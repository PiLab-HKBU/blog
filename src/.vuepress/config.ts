import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import theme from "./theme.js";

export default defineUserConfig({
    base: "/blog/",
    locales: {
        "/": {
            lang: "en-US",
            title: "HKBU HCI-RecSys Group Blog",
            description: "HKBU HCI-RecSys Group Blog",
        },
        // "/zh/": {
        //   lang: "zh-CN",
        //   title: "香港浸会大学HCI-RecSys团队博客",
        //   description: "香港浸会大学HCI-RecSys团队博客",
        // },
    },
    plugins: [
        googleAnalyticsPlugin({
            // options
            id: 'G-KL3YV8M0Z6',
        }),
        searchProPlugin({
            // 索引全部内容
            indexContent: true,
            // 为分类和标签添加索引
            // customFields: [
            //     {
            //         getter: (page) => page.frontmatter.category,
            //         formatter: {
            //             "/": "Category: $content",
            //         },
            //     },
            //     {
            //         getter: (page) => page.frontmatter.tag,
            //         formatter: {
            //             "/": "Tag: $content",
            //         },
            //     },
            // ],
        }),
    ],

    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
});
