import{_ as l,r as a,c as n,a as t,b as s,d as o,o as p}from"./app-DNnGmCsN.js";const r={},c=s("h1",{id:"rtl",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rtl"},[s("span",null,"rtl")])],-1),i=o(`<p>此插件会在配置的语言上设置 rtl 方向。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-rtl@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">rtlPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-rtl&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    rtlPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 配置项</span></span>
<span class="line"><span style="color:#9CDCFE;">      locales:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;/ar/&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3><ul><li>类型：<code>string[]</code></li><li>默认值：<code>[&#39;/&#39;]</code></li><li>详情： 开启 RTL 布局的多语言路径。</li></ul><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>selector</span></a></h3><ul><li><p>类型：<code>SelectorOptions</code></p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> SelectorOptions</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  [</span><span style="color:#9CDCFE;">element</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">]: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#9CDCFE;">attrs</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">]: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>默认值：<code>{ &#39;html&#39;: { dir: &#39;rtl&#39; } }</code></p></li><li><p>详情：</p><p>开启 RTL 的选择器。</p><p>默认设置意味着在 RTL 多语言中，<code>html</code> 元素的 <code>dir</code> 属性将被设置为 <code>rtl</code>。</p></li></ul>`,9);function d(D,m){const e=a("NpmBadge");return p(),n("div",null,[c,t(e,{package:"@vuepress/plugin-rtl"}),i])}const y=l(r,[["render",d],["__file","rtl.html.vue"]]),u=JSON.parse('{"path":"/zh/plugins/rtl.html","title":"rtl","lang":"zh-CN","frontmatter":{"description":"rtl","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/rtl.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/rtl.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"rtl"}],["meta",{"property":"og:description","content":"rtl"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-01T15:26:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-01T15:26:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"rtl\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-01T15:26:40.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]},{"level":3,"title":"selector","slug":"selector","link":"#selector","children":[]}]}],"git":{"updatedTime":1706801200000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/plugins/rtl.md"}');export{y as comp,u as data};
