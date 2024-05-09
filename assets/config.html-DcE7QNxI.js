import{_ as t,r as i,o as c,c as r,b as s,d as l,a as n,w as o,e}from"./app-Du56uP9N.js";const d={},D=e('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h2><h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>部署的域名，例如 <code>https://example.com</code></p></li></ul><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>',5),u=s("li",null,[s("p",null,[l("类型： "),s("code",null,"{ [path: string]: Partial<DefaultThemeLocaleData> }")])],-1),h=s("li",null,[s("p",null,[l("默认值： "),s("code",null,"{}")])],-1),m=s("p",null,"详情：",-1),v=s("p",null,"多语言支持的各个语言 locales 。",-1),y=s("p",null,[l("所有在 "),s("a",{href:"#locale-%E9%85%8D%E7%BD%AE"},"Locale 配置"),l(" 章节内的配置项都可以在 locales 中使用。")],-1),b={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#locales",target:"_blank",rel:"noopener noreferrer"},C=s("code",null,"locales",-1),g=s("p",null,"参考：",-1),f={href:"https://v2.vuepress.vuejs.org/zh/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},_=e('<h2 id="locale-配置" tabindex="-1"><a class="header-anchor" href="#locale-配置"><span>Locale 配置</span></a></h2><p>该章节内的配置项可以作为一般配置使用，也可以使用在 <a href="#locales">locales</a> 内。</p><h3 id="colormode" tabindex="-1"><a class="header-anchor" href="#colormode"><span>colorMode</span></a></h3>',3),E=s("li",null,[s("p",null,[l("类型： "),s("code",null,"'auto' | 'light' | 'dark'")])],-1),k=s("li",null,[s("p",null,[l("默认值： "),s("code",null,"'auto'")])],-1),x=s("p",null,"详情：",-1),F=s("p",null,"默认颜色模式。",-1),A=s("code",null,"'auto'",-1),L={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",target:"_blank",rel:"noopener noreferrer"},z=s("li",null,[s("p",null,"参考："),s("ul",null,[s("li",null,[s("a",{href:"#colormodeswitch"},"默认主题 > 配置 > colorModeSwitch")])])],-1),R=s("h3",{id:"colormodeswitch",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#colormodeswitch"},[s("span",null,"colorModeSwitch")])],-1),S=e("<li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>是否启用切换颜色模式的功能。</p><p>如果设置为 <code>true</code> ，将会在导航栏展示一个切换颜色模式的按钮。</p></li>",3),w=s("p",null,"参考：",-1),N=s("li",null,[s("a",{href:"#colormode"},"默认主题 > 配置 > colorMode")],-1),P=e(`<h3 id="home" tabindex="-1"><a class="header-anchor" href="#home"><span>home</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>/</code></p></li><li><p>详情：</p><p>首页的路径。</p><p>它将被用于：</p><ul><li>导航栏中 Logo 的链接</li><li>404 页面的 <em>返回首页</em> 链接</li></ul></li></ul><h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar"><span>navbar</span></a></h3><ul><li><p>类型： <code>false | (NavbarItem | NavbarGroup | string)[]</code></p></li><li><p>默认值： <code>[]</code></p></li><li><p>详情：</p><p>导航栏配置。</p><p>设置为 <code>false</code> 可以禁用导航栏。</p><p>为了配置导航栏元素，你可以将其设置为 <em>导航栏数组</em> ，其中的每个元素是 <code>NavbarItem</code> 对象、 <code>NavbarGroup</code> 对象、或者字符串：</p><ul><li><code>NavbarItem</code> 对象应该有一个 <code>text</code> 字段和一个 <code>link</code> 字段，还有一个可选的 <code>activeMatch</code> 字段。</li><li><code>NavbarGroup</code> 对象应该有一个 <code>text</code> 字段和一个 <code>children</code> 字段。 <code>children</code> 字段同样是一个 <em>导航栏数组</em> 。</li><li>字符串应为目标页面文件的路径。它将会被转换为 <code>NavbarItem</code> 对象，将页面标题作为 <code>text</code> ，将页面路由路径作为 <code>link</code> 。</li></ul></li><li><p>示例 1：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">    navbar:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#6A9955;">      // NavbarItem</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        text:</span><span style="color:#CE9178;"> &#39;Foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        link:</span><span style="color:#CE9178;"> &#39;/foo/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#6A9955;">      // NavbarGroup</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        text:</span><span style="color:#CE9178;"> &#39;Group&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        children:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;/group/foo.md&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;/group/bar.md&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#6A9955;">      // 字符串 - 页面文件路径</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;/bar/README.md&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例 2：</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">    navbar:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#6A9955;">      // 嵌套 Group - 最大深度为 2</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        text:</span><span style="color:#CE9178;"> &#39;Group&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        children:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">          {</span></span>
<span class="line"><span style="color:#9CDCFE;">            text:</span><span style="color:#CE9178;"> &#39;SubGroup&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            children:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;/group/sub/foo.md&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;/group/sub/bar.md&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#6A9955;">      // 控制元素何时被激活</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        text:</span><span style="color:#CE9178;"> &#39;Group 2&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        children:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">          {</span></span>
<span class="line"><span style="color:#9CDCFE;">            text:</span><span style="color:#CE9178;"> &#39;Always active&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            link:</span><span style="color:#CE9178;"> &#39;/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">            // 该元素将一直处于激活状态</span></span>
<span class="line"><span style="color:#9CDCFE;">            activeMatch:</span><span style="color:#CE9178;"> &#39;/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#D4D4D4;">          {</span></span>
<span class="line"><span style="color:#9CDCFE;">            text:</span><span style="color:#CE9178;"> &#39;Active on /foo/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            link:</span><span style="color:#CE9178;"> &#39;/not-foo/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">            // 该元素在当前路由路径是 /foo/ 开头时激活</span></span>
<span class="line"><span style="color:#6A9955;">            // 支持正则表达式</span></span>
<span class="line"><span style="color:#9CDCFE;">            activeMatch:</span><span style="color:#CE9178;"> &#39;^/foo/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logo" tabindex="-1"><a class="header-anchor" href="#logo"><span>logo</span></a></h3><ul><li><p>类型： <code>null | string</code></p></li><li><p>详情：</p><p>Logo 图片的 URL。</p><p>Logo 图片将会显示在导航栏的左端。</p><p>设置为 <code>null</code> 可以禁用 Logo 。</p></li><li><p>示例：</p></li></ul><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">    // Public 文件路径</span></span>
<span class="line"><span style="color:#9CDCFE;">    logo:</span><span style="color:#CE9178;"> &#39;/images/hero.png&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">    // URL</span></span>
<span class="line"><span style="color:#9CDCFE;">    logo:</span><span style="color:#CE9178;"> &#39;https://vuejs.org/images/logo.png&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div>`,10),T={href:"https://v2.vuepress.vuejs.org/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},j=e(`<h3 id="logodark" tabindex="-1"><a class="header-anchor" href="#logodark"><span>logoDark</span></a></h3><ul><li><p>类型： <code>null | string</code></p></li><li><p>详情：</p><p>在夜间模式中使用的 Logo 图片的 URL。</p><p>如果你想在夜间模式中使用不同的 Logo 图片，就可以使用该配置项。</p><p>设置为 <code>null</code> 可以在夜间模式下禁用 Logo 。忽略该配置项将会在夜间模式中使用 <a href="#logo">logo</a> 配置。</p></li><li><p>参考：</p><ul><li><a href="#logo">默认主题 &gt; 配置 &gt; logo</a></li><li><a href="#colormode">默认主题 &gt; 配置 &gt; colorMode</a></li></ul></li></ul><h3 id="logoalt" tabindex="-1"><a class="header-anchor" href="#logoalt"><span>logoAlt</span></a></h3><ul><li><p>类型：<code>null | string</code></p></li><li><p>详情：</p><p>指定 Logo 图片的替代文字。</p><p>当未指定时，将默认与站点标题相同。</p></li></ul><h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo"><span>repo</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>项目仓库的 URL。</p><p>它将被用作 <em>仓库链接</em> 的链接。<em>仓库链接</em> 将会显示为导航栏的最后一个元素。</p></li></ul><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">    // 如果你按照 \`organization/repository\` 的格式设置它</span></span>
<span class="line"><span style="color:#6A9955;">    // 我们会将它作为一个 GitHub 仓库</span></span>
<span class="line"><span style="color:#9CDCFE;">    repo:</span><span style="color:#CE9178;"> &#39;vuejs/vuepress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">    // 你也可以直接将它设置为一个 URL</span></span>
<span class="line"><span style="color:#9CDCFE;">    repo:</span><span style="color:#CE9178;"> &#39;https://gitlab.com/foo/bar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar"><span>sidebar</span></a></h3>`,8),M=s("li",null,[s("p",null,[l("类型： "),s("code",null,"false | 'auto' | SidebarConfigArray | SidebarConfigObject")])],-1),G=s("li",null,[s("p",null,[l("默认值： "),s("code",null,"'auto'")])],-1),B=s("p",null,"详情：",-1),I=s("p",null,"侧边栏配置。",-1),U=e("<p>设置为 <code>false</code> 可以禁用侧边栏。</p><p>如果你设置为 <code>&#39;auto&#39;</code>，侧边栏会根据页面标题自动生成。</p><p>为了手动配置侧边栏元素，你可以将其设置为 <em>侧边栏数组</em> ，其中的每个元素是一个 <code>SidebarItem</code> 对象或者一个字符串：</p><ul><li><code>SidebarItem</code> 对象应该有一个 <code>text</code> 字段，有一个可选的 <code>link</code> 字段、一个可选的 <code>children</code> 字段和一个可选的 <code>collapsible</code> 字段。 <code>children</code> 字段同样是一个 <em>侧边栏数组</em> 。 <code>collapsible</code> 字段来控制它是否可折叠。</li><li>字符串应为目标页面文件的路径。它将会被转换为 <code>SidebarItem</code> 对象，将页面标题作为 <code>text</code> ，将页面路由路径作为 <code>link</code> ，并根据页面小标题自动生成 <code>children</code> 。</li></ul><p>如果你想在不同子路径中使用不同的侧边栏，你可以将该配置项设置为 <em>侧边栏对象</em> ：</p><ul><li>Key 为路径前缀。</li><li>Value 为 <em>侧边栏数组</em> 或 <code>&quot;heading&quot;</code> 以自动为相应路径生成基于标题的侧边栏。</li></ul>",6),V=s("li",null,[s("p",null,"示例 1：")],-1),H=e(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">    // 侧边栏数组</span></span>
<span class="line"><span style="color:#6A9955;">    // 所有页面会使用相同的侧边栏</span></span>
<span class="line"><span style="color:#9CDCFE;">    sidebar:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#6A9955;">      // SidebarItem</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        text:</span><span style="color:#CE9178;"> &#39;Foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        link:</span><span style="color:#CE9178;"> &#39;/foo/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        children:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#6A9955;">          // SidebarItem</span></span>
<span class="line"><span style="color:#D4D4D4;">          {</span></span>
<span class="line"><span style="color:#9CDCFE;">            text:</span><span style="color:#CE9178;"> &#39;github&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            link:</span><span style="color:#CE9178;"> &#39;https://github.com&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">            children:</span><span style="color:#D4D4D4;"> [],</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#6A9955;">          // 字符串 - 页面文件路径</span></span>
<span class="line"><span style="color:#CE9178;">          &#39;/foo/bar.md&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#6A9955;">      // 字符串 - 页面文件路径</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;/bar/README.md&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例 2：</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">    // 侧边栏对象</span></span>
<span class="line"><span style="color:#6A9955;">    // 不同子路径下的页面会使用不同的侧边栏</span></span>
<span class="line"><span style="color:#9CDCFE;">    sidebar:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;/guide/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#9CDCFE;">          text:</span><span style="color:#CE9178;"> &#39;Guide&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          children:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;/guide/introduction.md&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;/guide/getting-started.md&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      ],</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;/reference/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#CE9178;"> &#39;heading&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例 3：</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">    // 可折叠的侧边栏</span></span>
<span class="line"><span style="color:#9CDCFE;">    sidebar:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;/reference/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#9CDCFE;">          text:</span><span style="color:#CE9178;"> &#39;VuePress Reference&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          collapsible:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          children:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;/reference/cli.md&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;/reference/config.md&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#9CDCFE;">          text:</span><span style="color:#CE9178;"> &#39;Bundlers Reference&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          collapsible:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">          children:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#CE9178;">            &#39;/reference/bundler/vite.md&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">            &#39;/reference/bundler/webpack.md&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">          ],</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      ],</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sidebardepth" tabindex="-1"><a class="header-anchor" href="#sidebardepth"><span>sidebarDepth</span></a></h3>`,6),O=s("li",null,[s("p",null,[l("类型： "),s("code",null,"number")])],-1),Z=s("li",null,[s("p",null,[l("默认值： "),s("code",null,"2")])],-1),q=e("<p>详情：</p><p>设置根据页面标题自动生成的侧边栏的最大深度。</p><ul><li>设为 <code>0</code> 来禁用所有级别的页面标题。</li><li>设为 <code>1</code> 来包含 <code>&lt;h2&gt;</code> 标题。</li><li>设为 <code>2</code> 来包含 <code>&lt;h2&gt;</code> 和 <code>&lt;h3&gt;</code> 标题。</li><li>...</li></ul>",3),J={href:"https://v2.vuepress.vuejs.org/zh/config.html#markdown-headers",target:"_blank",rel:"noopener noreferrer"},K=s("p",null,[l("由于 "),s("code",null,"markdown.headers.level"),l(" 的默认值是 "),s("code",null,"[2, 3]"),l(" ，因此 "),s("code",null,"sidebarDepth"),l(" 的默认最大值是 "),s("code",null,"2"),l(" 。")],-1),W=s("h3",{id:"editlink",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#editlink"},[s("span",null,"editLink")])],-1),Q=s("li",null,[s("p",null,[l("类型： "),s("code",null,"boolean")])],-1),X=s("li",null,[s("p",null,[l("默认值： "),s("code",null,"true")])],-1),Y=s("p",null,"详情：",-1),$=s("p",null,[l("是否启用 "),s("em",null,"编辑此页"),l(" 链接。")],-1),ss=e(`<h3 id="editlinkpattern" tabindex="-1"><a class="header-anchor" href="#editlinkpattern"><span>editLinkPattern</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p><em>编辑此页</em> 链接的 Pattern 。</p><p>它将会用于生成 <em>编辑此页</em> 的链接。</p><p>如果你不设置该选项，则会根据 <a href="#docsrepo">docsRepo</a> 配置项来推断 Pattern 。但是如果你的文档仓库没有托管在常用的平台上，比如 GitHub 、 GitLab 、 Bitbucket 、 Gitee 等，那么你必须设置该选项才能使 <em>编辑此页</em> 链接正常工作。</p></li><li><p>用法：</p><table><thead><tr><th>Pattern</th><th>描述</th></tr></thead><tbody><tr><td><code>:repo</code></td><td>文档仓库 URL ，即 <a href="#docsrepo">docsRepo</a></td></tr><tr><td><code>:branch</code></td><td>文档仓库分支 ，即 <a href="#docsbranch">docsBranch</a></td></tr><tr><td><code>:path</code></td><td>页面源文件的路径，即 <a href="#docsdir">docsDir</a> 拼接上页面文件的相对路径</td></tr></tbody></table></li><li><p>示例：</p></li></ul><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">    docsRepo:</span><span style="color:#CE9178;"> &#39;https://gitlab.com/owner/name&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    docsBranch:</span><span style="color:#CE9178;"> &#39;master&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    docsDir:</span><span style="color:#CE9178;"> &#39;docs&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    editLinkPattern:</span><span style="color:#CE9178;"> &#39;:repo/-/edit/:branch/:path&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>则会生成类似于 <code>&#39;https://gitlab.com/owner/name/-/edit/master/docs/path/to/file.md&#39;</code> 的链接。</p><h3 id="docsrepo" tabindex="-1"><a class="header-anchor" href="#docsrepo"><span>docsRepo</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>文档源文件的仓库 URL 。</p><p>它将会用于生成 <em>编辑此页</em> 的链接。</p><p>如果你不设置该选项，则默认会使用 <a href="#repo">repo</a> 配置项。但是如果你的文档源文件是在一个不同的仓库内，你就需要设置该配置项了。</p></li></ul><h3 id="docsbranch" tabindex="-1"><a class="header-anchor" href="#docsbranch"><span>docsBranch</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;main&#39;</code></p></li><li><p>详情：</p><p>文档源文件的仓库分支。</p><p>它将会用于生成 <em>编辑此页</em> 的链接。</p></li></ul><h3 id="docsdir" tabindex="-1"><a class="header-anchor" href="#docsdir"><span>docsDir</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;&#39;</code></p></li><li><p>详情：</p><p>文档源文件存放在仓库中的目录名。</p><p>它将会用于生成 <em>编辑此页</em> 的链接。</p></li></ul><h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated"><span>lastUpdated</span></a></h3>`,11),ls=s("li",null,[s("p",null,[l("类型： "),s("code",null,"boolean")])],-1),ns=s("li",null,[s("p",null,[l("默认值： "),s("code",null,"true")])],-1),es=s("p",null,"详情：",-1),as=s("p",null,[l("是否启用 "),s("em",null,"最近更新时间戳"),l(" 。")],-1),os=s("code",null,"false",-1),ps=s("h3",{id:"contributors",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#contributors"},[s("span",null,"contributors")])],-1),is=s("li",null,[s("p",null,[l("类型： "),s("code",null,"boolean")])],-1),ts=s("li",null,[s("p",null,[l("默认值： "),s("code",null,"true")])],-1),cs=s("p",null,"详情：",-1),rs=s("p",null,[l("是否启用 "),s("em",null,"贡献者列表"),l(" 。")],-1),ds=s("code",null,"false",-1);function Ds(us,hs){const p=i("ExternalLinkIcon"),a=i("RouteLink");return c(),r("div",null,[D,s("ul",null,[u,h,s("li",null,[m,v,y,s("p",null,[l("该配置项仅能在默认主题内生效，注意不要和 "),s("a",b,[l("站点配置"),n(p)]),l(" 中的 "),C,l(" 混淆。")])]),s("li",null,[g,s("ul",null,[s("li",null,[s("a",f,[l("指南 > 多语言支持"),n(p)])])])])]),_,s("ul",null,[E,k,s("li",null,[x,F,s("p",null,[l("如果设置为 "),A,l(" ，则会根据 "),s("a",L,[l("prefers-color-scheme"),n(p)]),l(" 自动设置初始颜色模式。")])]),z]),R,s("ul",null,[S,s("li",null,[w,s("ul",null,[N,s("li",null,[n(a,{to:"/zh/themes/default/locale.html#togglecolormode"},{default:o(()=>[l("默认主题 > 语言配置 > toggleColorMode")]),_:1})])])])]),P,s("ul",null,[s("li",null,[l("参考： "),s("ul",null,[s("li",null,[s("a",T,[l("指南 > 静态资源 > Public 文件"),n(p)])])])])]),j,s("ul",null,[M,G,s("li",null,[B,I,s("p",null,[l("你可以通过页面的 "),n(a,{to:"/zh/themes/default/frontmatter.html#sidebar"},{default:o(()=>[l("sidebar")]),_:1}),l(" frontmatter 来覆盖这个全局配置。")]),U]),V]),H,s("ul",null,[O,Z,s("li",null,[q,s("p",null,[l("最大值取决于你通过 "),s("a",J,[l("markdown.headers.level"),n(p)]),l(" 提取了哪些级别的标题。")]),K,s("p",null,[l("你可以通过页面的 "),n(a,{to:"/zh/themes/default/frontmatter.html#sidebardepth"},{default:o(()=>[l("sidebarDepth")]),_:1}),l(" frontmatter 来覆盖这个全局配置。")])])]),W,s("ul",null,[Q,X,s("li",null,[Y,$,s("p",null,[l("你可以通过页面的 "),n(a,{to:"/zh/themes/default/frontmatter.html#editlink"},{default:o(()=>[l("editLink")]),_:1}),l(" frontmatter 来覆盖这个全局配置。")])])]),ss,s("ul",null,[ls,ns,s("li",null,[es,as,s("p",null,[l("你可以通过页面的 "),n(a,{to:"/zh/themes/default/frontmatter.html#lastupdated"},{default:o(()=>[l("lastUpdated")]),_:1}),l(" frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了 "),os,l(" ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。")])])]),ps,s("ul",null,[is,ts,s("li",null,[cs,rs,s("p",null,[l("你可以通过页面的 "),n(a,{to:"/zh/themes/default/frontmatter.html#contributors"},{default:o(()=>[l("contributors")]),_:1}),l(" frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了 "),ds,l(" ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。")])])])])}const vs=t(d,[["render",Ds],["__file","config.html.vue"]]),ys=JSON.parse('{"path":"/zh/themes/default/config.html","title":"配置","lang":"zh-CN","frontmatter":{"description":"配置 基础配置 hostname 类型： string 详情： 部署的域名，例如 https://example.com locales 类型： { [path: string]: Partial<DefaultThemeLocaleData> } 默认值： {} 详情： 多语言支持的各个语言 locales 。 所有在 Locale 配置 章节内的配...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/themes/default/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/zh/themes/default/config.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"配置"}],["meta",{"property":"og:description","content":"配置 基础配置 hostname 类型： string 详情： 部署的域名，例如 https://example.com locales 类型： { [path: string]: Partial<DefaultThemeLocaleData> } 默认值： {} 详情： 多语言支持的各个语言 locales 。 所有在 Locale 配置 章节内的配..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-31T20:49:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-31T20:49:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-31T20:49:08.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"基础配置","slug":"基础配置","link":"#基础配置","children":[{"level":3,"title":"hostname","slug":"hostname","link":"#hostname","children":[]},{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]}]},{"level":2,"title":"Locale 配置","slug":"locale-配置","link":"#locale-配置","children":[{"level":3,"title":"colorMode","slug":"colormode","link":"#colormode","children":[]},{"level":3,"title":"colorModeSwitch","slug":"colormodeswitch","link":"#colormodeswitch","children":[]},{"level":3,"title":"home","slug":"home","link":"#home","children":[]},{"level":3,"title":"navbar","slug":"navbar","link":"#navbar","children":[]},{"level":3,"title":"logo","slug":"logo","link":"#logo","children":[]},{"level":3,"title":"logoDark","slug":"logodark","link":"#logodark","children":[]},{"level":3,"title":"logoAlt","slug":"logoalt","link":"#logoalt","children":[]},{"level":3,"title":"repo","slug":"repo","link":"#repo","children":[]},{"level":3,"title":"sidebar","slug":"sidebar","link":"#sidebar","children":[]},{"level":3,"title":"sidebarDepth","slug":"sidebardepth","link":"#sidebardepth","children":[]},{"level":3,"title":"editLink","slug":"editlink","link":"#editlink","children":[]},{"level":3,"title":"editLinkPattern","slug":"editlinkpattern","link":"#editlinkpattern","children":[]},{"level":3,"title":"docsRepo","slug":"docsrepo","link":"#docsrepo","children":[]},{"level":3,"title":"docsBranch","slug":"docsbranch","link":"#docsbranch","children":[]},{"level":3,"title":"docsDir","slug":"docsdir","link":"#docsdir","children":[]},{"level":3,"title":"lastUpdated","slug":"lastupdated","link":"#lastupdated","children":[]},{"level":3,"title":"contributors","slug":"contributors","link":"#contributors","children":[]}]}],"git":{"updatedTime":1706734148000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":7}]},"autoDesc":true,"filePathRelative":"zh/themes/default/config.md"}');export{vs as comp,ys as data};
