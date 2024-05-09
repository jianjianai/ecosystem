import{_ as e,o as t,c as l,e as s}from"./app-Du56uP9N.js";const i={},a=s('<h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>Identifier for palette, used to avoid duplicate registration.</p><h3 id="config-1" tabindex="-1"><a class="header-anchor" href="#config-1"><span>config</span></a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>`.vuepress/styles/${id}-palette.scss`</code></li></ul><p>User config file path, relative to source dir.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is the file where user set style variables.</p><p>The default filename is starting with ID above.</p></div><h3 id="defaultconfig" tabindex="-1"><a class="header-anchor" href="#defaultconfig"><span>defaultConfig</span></a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;@vuepress/plugin-sass-palette/styles/default/config.scss&quot;</code></li></ul><p>Default config file path, should be absolute path.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is the file you should use to provide default values with <code>!default</code>.</p></div><h3 id="palette" tabindex="-1"><a class="header-anchor" href="#palette"><span>palette</span></a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>`.vuepress/styles/${id}-palette.scss`</code></li></ul><p>User palette file path, relative to source dir.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is the file where user control injected CSS variables. All the variables will be converted in to kebab-case and injected.</p><p>The default filename is starting with ID above.</p></div><h3 id="defaultpalette" tabindex="-1"><a class="header-anchor" href="#defaultpalette"><span>defaultPalette</span></a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;@vuepress/plugin-sass-palette/styles/default/palette.scss&quot;</code></li></ul><p>Default palette file path, should be absolute path.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is the file you should use to provide default CSS variables with <code>!default</code>. All the variable will be converted in to kebab-case and injected.</p></div><h3 id="generator" tabindex="-1"><a class="header-anchor" href="#generator"><span>generator</span></a></h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Custom generator, used to generate derivative values with the above config.</p><p>E.g.: You may want to provide a <code>$theme-color-light</code> based on <code>$theme-color</code>.</p><h3 id="style" tabindex="-1"><a class="header-anchor" href="#style"><span>style</span></a></h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>User style file path, relative to source dir.</p><h2 id="alias" tabindex="-1"><a class="header-anchor" href="#alias"><span>Alias</span></a></h2><p>Available alias are:</p><ul><li>config: <code>@sass-palette/${id}-config</code> (based on <code>id</code>)</li><li>palette: <code>@sass-palette/${id}-palette</code> (based on <code>id</code>)</li><li>style: <code>@sass-palette/${id}-style</code> (only available when <code>style</code> option is set)</li><li>helper: <code>@sass-palette/helper</code></li></ul>',31),o=[a];function n(r,c){return t(),l("div",null,o)}const d=e(i,[["render",n],["__file","config.html.vue"]]),u=JSON.parse('{"path":"/plugins/sass-palette/config.html","title":"Config","lang":"en-US","frontmatter":{"description":"Config Options id Type: string Required: Yes Identifier for palette, used to avoid duplicate registration. config Type: string Default: `.vuepress/styles/${id}-palette.scss` Use...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/plugins/sass-palette/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/plugins/sass-palette/config.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Config"}],["meta",{"property":"og:description","content":"Config Options id Type: string Required: Yes Identifier for palette, used to avoid duplicate registration. config Type: string Default: `.vuepress/styles/${id}-palette.scss` Use..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T14:54:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T14:54:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-06T14:54:39.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"config","slug":"config-1","link":"#config-1","children":[]},{"level":3,"title":"defaultConfig","slug":"defaultconfig","link":"#defaultconfig","children":[]},{"level":3,"title":"palette","slug":"palette","link":"#palette","children":[]},{"level":3,"title":"defaultPalette","slug":"defaultpalette","link":"#defaultpalette","children":[]},{"level":3,"title":"generator","slug":"generator","link":"#generator","children":[]},{"level":3,"title":"style","slug":"style","link":"#style","children":[]}]},{"level":2,"title":"Alias","slug":"alias","link":"#alias","children":[]}],"git":{"updatedTime":1715007279000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/sass-palette/config.md"}');export{d as comp,u as data};
