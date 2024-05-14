import{_ as p,r as e,c as o,a,b as s,e as n,w as i,d as r,o as c}from"./app-DNnGmCsN.js";const d={},u=s("h1",{id:"sass-palette",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sass-palette"},[s("span",null,"sass-palette")])],-1),m=s("code",null,"@vuepress/plugin-palette",-1),y=r(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>You must invoke <code>useSassPalettePlugin</code> function during plugin initialization to use this plugin.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-sass-palette@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="Your plugin or theme entry"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useSassPalettePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress-plugin-sass-palette&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">PluginFunction</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> yourPlugin</span><span style="color:#D4D4D4;"> =</span></span>
<span class="line"><span style="color:#D4D4D4;">  (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">PluginFunction</span><span style="color:#569CD6;"> =&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">    useSassPalettePlugin</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#6A9955;">      // plugin options</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">      // your plugin api</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function D(g,h){const t=e("NpmBadge"),l=e("RouteLink");return c(),o("div",null,[u,a(t,{package:"@vuepress/plugin-sass-palette"}),s("p",null,[n("This plugin is mainly facing plugin and theme developers, it is more powerful than "),a(l,{to:"/plugins/palette.html"},{default:i(()=>[m]),_:1}),n(".")]),y])}const C=p(d,[["render",D],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/plugins/sass-palette/","title":"sass-palette","lang":"en-US","frontmatter":{"description":"sass-palette","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/sass-palette/"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/sass-palette/"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"sass-palette"}],["meta",{"property":"og:description","content":"sass-palette"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T14:54:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T14:54:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sass-palette\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-06T14:54:39.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"git":{"updatedTime":1715007279000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/sass-palette/README.md"}');export{C as comp,_ as data};
