import{_ as i,r as a,o as p,c,a as e,b as n,d as s,e as t}from"./app-Du56uP9N.js";const r={},d=n("h1",{id:"external-link-icon",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#external-link-icon"},[n("span",null,"external-link-icon")])],-1),h=t(`<p>This plugin has been integrated into the default theme.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-external-link-icon@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">externalLinkIconPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-external-link-icon&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    externalLinkIconPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3><ul><li><p>Type: <code>Record&lt;string, { openInNewWindow: string }&gt;</code></p></li><li><p>Details:</p><p>The a11y text of the external link icon in different locales.</p><p>If this option is not specified, it will fallback to default text.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    externalLinkIconPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">          openInNewWindow:</span><span style="color:#CE9178;"> &#39;open in new window&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">          openInNewWindow:</span><span style="color:#CE9178;"> &#39;在新窗口打开&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),u={href:"https://vuejs.press/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},D=t(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2><h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon"><span>externalLinkIcon</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Whether to append an external link icon to external links in current page.</p></li></ul><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2><p>You can customize the style of the external link icon via CSS variables:</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --external-link-icon-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#aaa</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2><h3 id="externallinkicon-1" tabindex="-1"><a class="header-anchor" href="#externallinkicon-1"><span>ExternalLinkIcon</span></a></h3><ul><li><p>Details:</p><p>This plugin will register a <code>&lt;ExternalLinkIcon /&gt;</code> component globally, and you can use it without any props.</p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This component is mainly used for theme development. You don&#39;t need to use it directly in most cases.</p></div>`,10);function y(m,x){const o=a("NpmBadge"),l=a("ExternalLinkIcon");return p(),c("div",null,[d,e(o,{package:"@vuepress/plugin-external-link-icon"}),n("p",null,[s("This plugin will add an icon to the external link in your markdown content, i.e. "),e(l)]),h,n("ul",null,[n("li",null,[s("Also see: "),n("ul",null,[n("li",null,[n("a",u,[s("Guide > I18n"),e(l)])])])])]),D])}const g=i(r,[["render",y],["__file","external-link-icon.html.vue"]]),v=JSON.parse('{"path":"/plugins/external-link-icon.html","title":"external-link-icon","lang":"en-US","frontmatter":{"description":"external-link-icon","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/plugins/external-link-icon.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/plugins/external-link-icon.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"external-link-icon"}],["meta",{"property":"og:description","content":"external-link-icon"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-21T05:33:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-21T05:33:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"external-link-icon\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-21T05:33:46.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]}]},{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[{"level":3,"title":"externalLinkIcon","slug":"externallinkicon","link":"#externallinkicon","children":[]}]},{"level":2,"title":"Styles","slug":"styles","link":"#styles","children":[]},{"level":2,"title":"Components","slug":"components","link":"#components","children":[{"level":3,"title":"ExternalLinkIcon","slug":"externallinkicon-1","link":"#externallinkicon-1","children":[]}]}],"git":{"updatedTime":1708493626000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"plugins/external-link-icon.md"}');export{g as comp,v as data};
