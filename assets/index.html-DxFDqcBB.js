import{_ as p,r as e,c as o,a,b as s,e as n,w as r,d as c,o as i}from"./app-DNnGmCsN.js";const d={},u=s("h1",{id:"sass-palette",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sass-palette"},[s("span",null,"sass-palette")])],-1),m=s("code",null,"@vuepress/plugin-palette",-1),y=c(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>你必须在插件初始化期间调用 <code>useSassPalettePlugin</code> 函数来使用此插件。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-sass-palette@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="你的插件或主题入口"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useSassPalettePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress-plugin-sass-palette&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">PluginFunction</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> yourPlugin</span><span style="color:#D4D4D4;"> =</span></span>
<span class="line"><span style="color:#D4D4D4;">  (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">PluginFunction</span><span style="color:#569CD6;"> =&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">    useSassPalettePlugin</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#6A9955;">      // 插件选项</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">      // 你的插件 API</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function D(h,v){const t=e("NpmBadge"),l=e("RouteLink");return i(),o("div",null,[u,a(t,{package:"@vuepress/plugin-sass-palette"}),s("p",null,[n("这个插件主要面向插件和主题开发者，相比 "),a(l,{to:"/zh/plugins/palette.html"},{default:r(()=>[m]),_:1}),n(" 更加强大。")]),y])}const g=p(d,[["render",D],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/zh/plugins/sass-palette/","title":"sass-palette","lang":"zh-CN","frontmatter":{"description":"sass-palette","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/sass-palette/"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/sass-palette/"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"sass-palette"}],["meta",{"property":"og:description","content":"sass-palette"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-06T14:54:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T14:54:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sass-palette\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-06T14:54:39.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"updatedTime":1715007279000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/plugins/sass-palette/README.md"}');export{g as comp,_ as data};
