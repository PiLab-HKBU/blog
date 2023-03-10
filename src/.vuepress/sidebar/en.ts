import {sidebar} from "vuepress-theme-hope";

export const enSidebar = sidebar({
    "/": [
        "",
        {
            icon: "note",
            text: "Article",
            prefix: "article/",
            link: "article/",
            children: "structure",
        },
        "intro",
        "slides",
    ],
});
