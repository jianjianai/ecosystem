import{_ as o,r as a,o as i,c as r,a as l,b as s,d as e,e as n}from"./app-Du56uP9N.js";const c={},d=s("h1",{id:"palette",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#palette"},[s("span",null,"palette")])],-1),u=n(`<p>Provide palette support for your theme.</p><p>This plugin is mainly used to develop themes, and has been integrated into the default theme. You won&#39;t need to use it directly in most cases.</p><p>For theme authors, this plugin will help you to provide styles customization for users.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-palette@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">palettePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-palette&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    palettePlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="palette-and-style" tabindex="-1"><a class="header-anchor" href="#palette-and-style"><span>Palette and Style</span></a></h2><p>This plugin will provide a <code>@vuepress/plugin-palette/palette</code> (palette file) and a <code>@vuepress/plugin-palette/style</code> (style file) to be imported in your theme styles.</p>`,8),y={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer"},h={href:"https://sass-lang.com/documentation/variables",target:"_blank",rel:"noopener noreferrer"},m={href:"http://lesscss.org/features/#variables-feature",target:"_blank",rel:"noopener noreferrer"},f={href:"https://stylus-lang.com/docs/variables.html",target:"_blank",rel:"noopener noreferrer"},D=n(`<p>The style file is used for overriding the default styles or adding extra styles, so it&#39;s likely to be imported at the end of your theme styles.</p><h2 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h2><p>Use this plugin in your theme, assuming you are using SASS:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // ...</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span><span style="color:#DCDCAA;">palettePlugin</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">preset:</span><span style="color:#CE9178;"> &#39;sass&#39;</span><span style="color:#D4D4D4;"> })],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="usage-of-palette" tabindex="-1"><a class="header-anchor" href="#usage-of-palette"><span>Usage of Palette</span></a></h3><p>Import the plugin&#39;s palette file where your theme needs to use the corresponding variables, such as in the <code>Layout.vue</code> file:</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">h1</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;palette-title&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Hello, Palette!</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">h1</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;scss&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;">/* import variables from the plugin&#39;s palette file */</span></span>
<span class="line"><span style="color:#C586C0;">@import</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-palette/palette&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/* set default value for variables */</span></span>
<span class="line"><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#569CD6;"> !default</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/* use variables in your styles */</span></span>
<span class="line"><span style="color:#D7BA7D;">.palette-title</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  color</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then users can customize variables in <code>.vuepress/styles/palette.scss</code>:</p><div class="language-scss" data-ext="scss" data-title="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">green</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="usage-of-style" tabindex="-1"><a class="header-anchor" href="#usage-of-style"><span>Usage of Style</span></a></h3><p>Import the plugin&#39;s style file after your theme&#39;s styles, for example, in the <code>clientConfigFile</code>:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// import your theme&#39;s style file</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#CE9178;"> &#39;path/to/your/theme/style&#39;</span></span>
<span class="line"><span style="color:#6A9955;">// import the plugin&#39;s style file</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-palette/style&#39;</span></span>
<span class="line"></span></code></pre></div><p>Then users can add extra styles in <code>.vuepress/styles/index.scss</code> and override the default styles of your theme:</p><div class="language-scss" data-ext="scss" data-title="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">h1</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  font-size</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2.5rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="preset" tabindex="-1"><a class="header-anchor" href="#preset"><span>preset</span></a></h3><ul><li><p>Type: <code>&#39;css&#39; | &#39;sass&#39; | &#39;less&#39; | &#39;stylus&#39;</code></p></li><li><p>Default: <code>&#39;css&#39;</code></p></li><li><p>Details:</p><p>Set preset for other options.</p><p>If you don&#39;t need advanced customization of the plugin, it&#39;s recommended to only set this option and omit other options.</p></li></ul><h3 id="userpalettefile" tabindex="-1"><a class="header-anchor" href="#userpalettefile"><span>userPaletteFile</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li>css: <code>&#39;.vuepress/styles/palette.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/palette.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/palette.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/palette.styl&#39;</code></li></ul></li><li><p>Details:</p><p>File path of the user palette file, relative to source directory.</p><p>The default value depends on the <a href="#preset">preset</a> option.</p><p>The file is where users define style variables, and it&#39;s recommended to keep the default file path as a convention.</p></li></ul><h3 id="temppalettefile" tabindex="-1"><a class="header-anchor" href="#temppalettefile"><span>tempPaletteFile</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li>css: <code>&#39;styles/palette.css&#39;</code></li><li>sass: <code>&#39;styles/palette.scss&#39;</code></li><li>less: <code>&#39;styles/palette.less&#39;</code></li><li>stylus: <code>&#39;styles/palette.styl&#39;</code></li></ul></li><li><p>Details:</p><p>File path of the generated palette temp file, relative to temp directory.</p><p>The default value depends on the <a href="#preset">preset</a> option.</p><p>You should import the palette file via <code>&#39;@vuepress/plugin-palette/palette&#39;</code> alias, so you don&#39;t need to change this option in most cases.</p></li></ul><h3 id="userstylefile" tabindex="-1"><a class="header-anchor" href="#userstylefile"><span>userStyleFile</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li>css: <code>&#39;.vuepress/styles/index.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/index.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/index.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/index.styl&#39;</code></li></ul></li><li><p>Details:</p><p>File path of the user style file, relative to source directory.</p><p>The default value depends on the <a href="#preset">preset</a> option.</p><p>The file is where users override default styles or add extra styles, and it&#39;s recommended to keep the default file path as a convention.</p></li></ul><h3 id="tempstylefile" tabindex="-1"><a class="header-anchor" href="#tempstylefile"><span>tempStyleFile</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li>css: <code>&#39;styles/index.css&#39;</code></li><li>sass: <code>&#39;styles/index.scss&#39;</code></li><li>less: <code>&#39;styles/index.less&#39;</code></li><li>stylus: <code>&#39;styles/index.styl&#39;</code></li></ul></li><li><p>Details:</p><p>File path of the generated style temp file, relative to temp directory.</p><p>The default value depends on the <a href="#preset">preset</a> option.</p><p>You should import the style file via <code>&#39;@vuepress/plugin-palette/style&#39;</code> alias, so you don&#39;t need to change this option in most cases.</p></li></ul><h3 id="importcode" tabindex="-1"><a class="header-anchor" href="#importcode"><span>importCode</span></a></h3><ul><li><p>Type: <code>(filePath: string) =&gt; string</code></p></li><li><p>Default:</p><ul><li>css: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>sass: <code>(filePath) =&gt; \`@forward &#39;file:///\${filePath}&#39;;\\n\`</code></li><li>less: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>stylus: <code>(filePath) =&gt; \`@require &#39;\${filePath}&#39;;\\n\`</code></li></ul></li><li><p>Details:</p><p>Function to generate import code.</p><p>The default value depends on the <a href="#preset">preset</a> option.</p><p>This option is used for generating <a href="#temppalettefile">tempPaletteFile</a> and <a href="#tempstylefile">tempStyleFile</a>, and you don&#39;t need to change this option in most cases.</p></li></ul>`,27);function g(v,C){const p=a("NpmBadge"),t=a("ExternalLinkIcon");return i(),r("div",null,[d,l(p,{package:"@vuepress/plugin-palette"}),u,s("p",null,[e("The palette file is used for defining style variables, so it's likely to be imported at the beginning of your theme styles. For example, users can define "),s("a",y,[e("CSS variables"),l(t)]),e(", "),s("a",h,[e("SASS variables"),l(t)]),e(", "),s("a",m,[e("LESS variables"),l(t)]),e(" or "),s("a",f,[e("Stylus variables"),l(t)]),e(" in the palette, and then you can use those variables in your theme styles.")]),D])}const x=o(c,[["render",g],["__file","palette.html.vue"]]),E=JSON.parse('{"path":"/plugins/palette.html","title":"palette","lang":"en-US","frontmatter":{"description":"palette","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/plugins/palette.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/plugins/palette.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"palette"}],["meta",{"property":"og:description","content":"palette"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-30T09:08:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-30T09:08:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"palette\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-30T09:08:43.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Palette and Style","slug":"palette-and-style","link":"#palette-and-style","children":[]},{"level":2,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[{"level":3,"title":"Usage of Palette","slug":"usage-of-palette","link":"#usage-of-palette","children":[]},{"level":3,"title":"Usage of Style","slug":"usage-of-style","link":"#usage-of-style","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"preset","slug":"preset","link":"#preset","children":[]},{"level":3,"title":"userPaletteFile","slug":"userpalettefile","link":"#userpalettefile","children":[]},{"level":3,"title":"tempPaletteFile","slug":"temppalettefile","link":"#temppalettefile","children":[]},{"level":3,"title":"userStyleFile","slug":"userstylefile","link":"#userstylefile","children":[]},{"level":3,"title":"tempStyleFile","slug":"tempstylefile","link":"#tempstylefile","children":[]},{"level":3,"title":"importCode","slug":"importcode","link":"#importcode","children":[]}]}],"git":{"updatedTime":1706605723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/palette.md"}');export{x as comp,E as data};
