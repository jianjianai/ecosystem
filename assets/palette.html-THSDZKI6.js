import{_ as o,r as n,o as i,c,a as l,b as s,d as e,e as t}from"./app-Du56uP9N.js";const r={},d=s("h1",{id:"palette",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#palette"},[s("span",null,"palette")])],-1),y=t(`<p>为你的主题提供调色板功能。</p><p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p><p>对于主题作者，该插件可以帮助你提供用户自定义样式的能力。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-palette@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">palettePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-palette&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    palettePlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="调色板和样式" tabindex="-1"><a class="header-anchor" href="#调色板和样式"><span>调色板和样式</span></a></h2><p>该插件会提供一个 <code>@vuepress/plugin-palette/palette</code> （调色板文件）和一个 <code>@vuepress/plugin-palette/style</code> （样式文件），用于在你的主题样式中引入。</p>`,8),u={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer"},h={href:"https://sass-lang.com/documentation/variables",target:"_blank",rel:"noopener noreferrer"},D={href:"http://lesscss.org/features/#variables-feature",target:"_blank",rel:"noopener noreferrer"},m={href:"https://stylus-lang.com/docs/variables.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>样式文件用于覆盖默认样式或添加额外样式，因此它一般会在你主题样式的末尾引入。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>在你的主题中使用该插件，假设你使用 SASS 作为 CSS 预处理器：</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // ...</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span><span style="color:#DCDCAA;">palettePlugin</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">preset:</span><span style="color:#CE9178;"> &#39;sass&#39;</span><span style="color:#D4D4D4;"> })],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="使用调色板" tabindex="-1"><a class="header-anchor" href="#使用调色板"><span>使用调色板</span></a></h3><p>在你主题需要使用对应变量的地方引入该插件的调色板文件，比如在 <code>Layout.vue</code> 中：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">h1</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;palette-title&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">你好，调色板！</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">h1</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;scss&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;">/* 从该插件的调色板中引入变量 */</span></span>
<span class="line"><span style="color:#C586C0;">@import</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-palette/palette&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/* 设置变量的默认值 */</span></span>
<span class="line"><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#569CD6;"> !default</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/* 在你的样式中使用变量 */</span></span>
<span class="line"><span style="color:#D7BA7D;">.palette-title</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  color</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，用户就可以在 <code>.vuepress/styles/palette.scss</code> 中自定义变量：</p><div class="language-scss" data-ext="scss" data-title="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">green</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="使用样式" tabindex="-1"><a class="header-anchor" href="#使用样式"><span>使用样式</span></a></h3><p>在你主题的样式之后引入该插件的样式文件，比如在 <code>clientConfigFile</code> 中：</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// 引入你主题本身的样式文件</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#CE9178;"> &#39;path/to/your/theme/style&#39;</span></span>
<span class="line"><span style="color:#6A9955;">// 引入该插件的样式文件</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-palette/style&#39;</span></span>
<span class="line"></span></code></pre></div><p>然后，用户就可以在 <code>.vuepress/styles/index.scss</code> 中添加额外样式，并可以覆盖你主题本身的样式：</p><div class="language-scss" data-ext="scss" data-title="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">h1</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  font-size</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2.5rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="preset" tabindex="-1"><a class="header-anchor" href="#preset"><span>preset</span></a></h3><ul><li><p>类型： <code>&#39;css&#39; | &#39;sass&#39; | &#39;less&#39; | &#39;stylus&#39;</code></p></li><li><p>默认值： <code>&#39;css&#39;</code></p></li><li><p>详情：</p><p>设置其他选项的预设。</p><p>如果你没有对该插件进行进阶定制化的需要，建议只设置该配置项并忽略其他选项。</p></li></ul><h3 id="userpalettefile" tabindex="-1"><a class="header-anchor" href="#userpalettefile"><span>userPaletteFile</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;.vuepress/styles/palette.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/palette.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/palette.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/palette.styl&#39;</code></li></ul></li><li><p>详情：</p><p>用户调色板文件的路径，是针对源文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>该文件用于用户定义样式变量，建议保持默认值作为约定的文件路径。</p></li></ul><h3 id="temppalettefile" tabindex="-1"><a class="header-anchor" href="#temppalettefile"><span>tempPaletteFile</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;styles/palette.css&#39;</code></li><li>sass: <code>&#39;styles/palette.scss&#39;</code></li><li>less: <code>&#39;styles/palette.less&#39;</code></li><li>stylus: <code>&#39;styles/palette.styl&#39;</code></li></ul></li><li><p>详情：</p><p>生成的调色板临时文件的路径，是针对临时文件文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>你应该使用 <code>&#39;@vuepress/plugin-palette/palette&#39;</code> 别名来引入调色板文件，因此在绝大多数情况下你不需要修改该配置项。</p></li></ul><h3 id="userstylefile" tabindex="-1"><a class="header-anchor" href="#userstylefile"><span>userStyleFile</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;.vuepress/styles/index.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/index.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/index.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/index.styl&#39;</code></li></ul></li><li><p>详情：</p><p>用户样式文件的路径，是针对源文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>该文件用于用户覆盖默认样式和添加额外样式，建议保持默认值作为约定的文件路径。</p></li></ul><h3 id="tempstylefile" tabindex="-1"><a class="header-anchor" href="#tempstylefile"><span>tempStyleFile</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;styles/index.css&#39;</code></li><li>sass: <code>&#39;styles/index.scss&#39;</code></li><li>less: <code>&#39;styles/index.less&#39;</code></li><li>stylus: <code>&#39;styles/index.styl&#39;</code></li></ul></li><li><p>详情：</p><p>生成的样式临时文件的路径，是针对临时文件文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>你应该使用 <code>&#39;@vuepress/plugin-palette/style&#39;</code> 别名来引入样式文件，因此在绝大多数情况下你不需要修改该配置项。</p></li></ul><h3 id="importcode" tabindex="-1"><a class="header-anchor" href="#importcode"><span>importCode</span></a></h3><ul><li><p>类型： <code>(filePath: string) =&gt; string</code></p></li><li><p>默认值：</p><ul><li>css: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>sass: <code>(filePath) =&gt; \`@forward &#39;file:///\${filePath}&#39;;\\n\`</code></li><li>less: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>stylus: <code>(filePath) =&gt; \`@require &#39;\${filePath}&#39;;\\n\`</code></li></ul></li><li><p>详情：</p><p>用于生成引入代码的函数。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>该配置项用于生成 <a href="#temppalettefile">tempPaletteFile</a> 和 <a href="#tempstylefile">tempStyleFile</a> ，在绝大多数情况下你不需要修改该配置项。</p></li></ul>`,27);function v(f,C){const p=n("NpmBadge"),a=n("ExternalLinkIcon");return i(),c("div",null,[d,l(p,{package:"@vuepress/plugin-palette"}),y,s("p",null,[e("调色板文件用于定义样式变量，因此它一般会在你主题样式的开头引入。举例来说，用户可以在调色板中定义 "),s("a",u,[e("CSS 变量"),l(a)]),e(" 、 "),s("a",h,[e("SASS 变量"),l(a)]),e(" 、 "),s("a",D,[e("LESS 变量"),l(a)]),e(" 或 "),s("a",m,[e("Stylus 变量"),l(a)]),e(" ，然后你可以在你的主题样式中使用这些变量。")]),g])}const x=o(r,[["render",v],["__file","palette.html.vue"]]),E=JSON.parse('{"path":"/zh/plugins/palette.html","title":"palette","lang":"zh-CN","frontmatter":{"description":"palette","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/plugins/palette.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/zh/plugins/palette.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"palette"}],["meta",{"property":"og:description","content":"palette"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-30T09:08:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-30T09:08:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"palette\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-30T09:08:43.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"调色板和样式","slug":"调色板和样式","link":"#调色板和样式","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"使用调色板","slug":"使用调色板","link":"#使用调色板","children":[]},{"level":3,"title":"使用样式","slug":"使用样式","link":"#使用样式","children":[]}]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"preset","slug":"preset","link":"#preset","children":[]},{"level":3,"title":"userPaletteFile","slug":"userpalettefile","link":"#userpalettefile","children":[]},{"level":3,"title":"tempPaletteFile","slug":"temppalettefile","link":"#temppalettefile","children":[]},{"level":3,"title":"userStyleFile","slug":"userstylefile","link":"#userstylefile","children":[]},{"level":3,"title":"tempStyleFile","slug":"tempstylefile","link":"#tempstylefile","children":[]},{"level":3,"title":"importCode","slug":"importcode","link":"#importcode","children":[]}]}],"git":{"updatedTime":1706605723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/plugins/palette.md"}');export{x as comp,E as data};
