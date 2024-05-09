import{_ as r,r as n,o as d,c as i,b as e,d as t,a as s,w as o,e as l}from"./app-Du56uP9N.js";const h={},g=e("h1",{id:"指南",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#指南"},[e("span",null,"指南")])],-1),D=e("code",null,"<head>",-1),y={href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.w3.org/TR/json-ld-api/",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="开箱即用" tabindex="-1"><a class="header-anchor" href="#开箱即用"><span>开箱即用</span></a></h2><p>插件开箱即用，在不做任何配置的情况下，会尽可能通过页面内容，提取对应的信息补全 OGP 与 JSON-LD 所需的必要标签。</p><p>默认情况下，插件会读取站点配置、主题配置与页面的 frontmatter 来尽可能自动生成。诸如站点名称，页面标题，页面类型，写作日期，最后更新日期，文章标签均会自动生成。</p><h3 id="默认的-ogp-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-ogp-生成逻辑"><span>默认的 OGP 生成逻辑</span></a></h3><table><thead><tr><th style="text-align:center;">属性名称</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>og:url</code></td><td style="text-align:center;"><code>options.hostname</code> + <code>path</code></td></tr><tr><td style="text-align:center;"><code>og:site_name</code></td><td style="text-align:center;"><code>siteConfig.title</code></td></tr><tr><td style="text-align:center;"><code>og:title</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>og:description</code></td><td style="text-align:center;"><code>page.frontmatter.description</code> || 自动生成 (当插件选项中的 <code>autoDescription</code> 为 <code>true</code> 时)</td></tr><tr><td style="text-align:center;"><code>og:type</code></td><td style="text-align:center;"><code>&quot;article&quot;</code></td></tr><tr><td style="text-align:center;"><code>og:image</code></td><td style="text-align:center;"><code>page.frontmatter.banner</code> || <code>page.frontmatter.cover</code> || 页面的第一张图片|| 插件选项的 <code>fallbackImage</code></td></tr><tr><td style="text-align:center;"><code>og:updated_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>og:locale</code></td><td style="text-align:center;"><code>page.lang</code></td></tr><tr><td style="text-align:center;"><code>og:locale:alternate</code></td><td style="text-align:center;"><code>siteData.locales</code> 包含的其他语言</td></tr><tr><td style="text-align:center;"><code>twitter:card</code></td><td style="text-align:center;"><code>&quot;summary_large_image&quot;</code> (仅在找到图片时)</td></tr><tr><td style="text-align:center;"><code>twitter:image:alt</code></td><td style="text-align:center;"><code>page.title</code> (仅在找到图片时)</td></tr><tr><td style="text-align:center;"><code>article:author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>options.author</code></td></tr><tr><td style="text-align:center;"><code>article:tag</code></td><td style="text-align:center;"><code>page.frontmatter.tags</code> || <code>page.frontmatter.tag</code></td></tr><tr><td style="text-align:center;"><code>article:published_time</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>article:modified_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr></tbody></table><h3 id="默认的-json-ld-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-json-ld-生成逻辑"><span>默认的 JSON-LD 生成逻辑</span></a></h3><table><thead><tr><th style="text-align:center;">属性名</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>@context</code></td><td style="text-align:center;"><code>&quot;https://schema.org&quot;</code></td></tr><tr><td style="text-align:center;"><code>@type</code></td><td style="text-align:center;"><code>&quot;NewsArticle&quot;</code></td></tr><tr><td style="text-align:center;"><code>headline</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>image</code></td><td style="text-align:center;">页面中的图片|| <code>options.hostname</code> + <code>page.frontmatter.image</code></td></tr><tr><td style="text-align:center;"><code>datePublished</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>dateModified</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>options.author</code></td></tr></tbody></table><h2 id="直接添加-head-标签" tabindex="-1"><a class="header-anchor" href="#直接添加-head-标签"><span>直接添加 head 标签</span></a></h2><p>你可以在页面的 frontmatter 中配置 <code>head</code> 选项，自主添加特定标签到页面 <code>&lt;head&gt;</code> 以增强 SEO。</p><p>如:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">head</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - - </span><span style="color:#CE9178;">meta</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">keywords</span></span>
<span class="line"><span style="color:#569CD6;">      content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">SEO plugin</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre></div><p>会自动注入 <code>&lt;meta name=&quot;keywords&quot; content=&quot;SEO plugin&quot; /&gt;</code>。</p><h2 id="自定义生成过程" tabindex="-1"><a class="header-anchor" href="#自定义生成过程"><span>自定义生成过程</span></a></h2><p>本插件也支持你完全控制生成逻辑。</p><h3 id="页面类型" tabindex="-1"><a class="header-anchor" href="#页面类型"><span>页面类型</span></a></h3><p>对于大多数页面，基本只有文章和网页两种类型，所以插件提供了 <code>isArticle</code> 选项让你提供辨别文章的逻辑。</p><p>选项接受一个 <code>(page: Page) =&gt; boolean</code> 格式的函数，默认情况下从 Markdown 文件生成的非主页页面都会被视为文章。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果某个网页的确符合图书、音乐之类的“冷门”类型，你可以通过设置下方三个选项处理它们。</p></div><h3 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp"><span>OGP</span></a></h3><p>你可以使用插件选项的 <code>ogp</code> 传入一个函数来按照你的需要修改默认 OGP 对象并返回。</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> ogp</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#6A9955;">  /** 插件推断的 OGP 信息 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  ogp</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">SeoContent</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">  /** 页面对象 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  page</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">  /** VuePress App */</span></span>
<span class="line"><span style="color:#9CDCFE;">  app</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">App</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">SeoContent</span></span>
<span class="line"></span></code></pre></div>`,21),x=l(`<p>比如你在使用某个第三方主题，并按照主题要求为每篇文章在 Front Matter 中设置了 <code>banner</code>，那你可以传入这样的 <code>ogp</code>:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">seoPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  ogp</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">ogp</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>
<span class="line"><span style="color:#D4D4D4;">    ...</span><span style="color:#9CDCFE;">ogp</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;og:image&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#9CDCFE;"> page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">banner</span><span style="color:#D4D4D4;"> || </span><span style="color:#9CDCFE;">ogp</span><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">&#39;og:image&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre></div><h3 id="json-ld" tabindex="-1"><a class="header-anchor" href="#json-ld"><span>JSON-LD</span></a></h3><p>同 OGP，你可以使用插件选项的 <code>jsonLd</code> 传入一个函数来按照你的需要修改默认 JSON-LD 对象并返回。</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> jsonLd</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#6A9955;">  /** 由插件推断出的 JSON-LD 对象 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  jsonLD</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">ArticleSchema</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">BlogPostingSchema</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">WebPageSchema</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">  /** 页面对象 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  page</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">  /** VuePress App */</span></span>
<span class="line"><span style="color:#9CDCFE;">  app</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">App</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">ArticleSchema</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">BlogPostingSchema</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">WebPageSchema</span></span>
<span class="line"></span></code></pre></div><h2 id="规范链接" tabindex="-1"><a class="header-anchor" href="#规范链接"><span>规范链接</span></a></h2><p>如果你将内容部署到不同的站点，或不同 URL 下的相同内容，你可能需要设置 <code>canonical</code> 选项为你的页面提供 “规范链接”。 你可以设置一个字符串，这样它会附加在页面路由链接之前，或者添加一个自定义函数 <code>(page: Page) =&gt; string | null</code> 返回规范链接。</p><div class="custom-container tip"><p class="custom-container-title">例子</p><p>如果你的站点部署在 <code>example.com</code> 的 docs 文件夹下，但同时在下列网址中可用:</p><ul><li><code>http://example.com/docs/xxx</code></li><li><code>https://example.com/docs/xxx</code></li><li><code>http://www.example.com/docs/xxx</code></li><li><code>https://www.example.com/docs/xxx</code> (首选)</li></ul><p>要让搜索引擎结果始终是首选，你可能需要将 <code>canonical</code> 设置为 <code>https://www.example.com/docs/</code>，以便搜索引擎知道首选第四个 URL 作为索引结果。</p></div><h3 id="自定义-head-标签" tabindex="-1"><a class="header-anchor" href="#自定义-head-标签"><span>自定义 head 标签</span></a></h3><p>有些时候你可能需要符合其他协议或按照其他搜索引擎提供的格式提供对应的 SEO 标签，此时你可以使用 <code>customHead</code> 选项，其类型为:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> customHead</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#6A9955;">  /** head 标签配置 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  head</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">HeadConfig</span><span style="color:#D4D4D4;">[],</span></span>
<span class="line"><span style="color:#6A9955;">  /** 页面对象 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  page</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">  /** VuePress App */</span></span>
<span class="line"><span style="color:#9CDCFE;">  app</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">App</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"></span></code></pre></div><p>你应该直接修改传入的 <code>head</code> 参数。</p><h2 id="seo-介绍" tabindex="-1"><a class="header-anchor" href="#seo-介绍"><span>SEO 介绍</span></a></h2><p>搜索引擎优化 (<strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization)，是一种透过了解搜索引擎的运作规则来调整网站，以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。 所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。</p><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2>`,15),C={href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"},_=e("strong",null,"O",-1),f=e("strong",null,"G",-1),E=e("strong",null,"Pr",-1),k=e("p",null,[t("本插件完美支持该协议，会自动生成符合该协议的 "),e("code",null,"<meta>"),t(" 标签。")],-1),b={href:"https://www.w3.org/TR/json-ld-api/",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"本插件会为文章类页面生成 NewsArticle 类标签。",-1),O={href:"https://www.w3.org/TR/rdfa-primer/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://schema.org/",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,"结构标记的 Schema 定义站点",-1),A=e("h2",{id:"相关工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关工具"},[e("span",null,"相关工具")])],-1),w={href:"https://search.google.com/test/rich-results",target:"_blank",rel:"noopener noreferrer"};function L(F,j){const a=n("ExternalLinkIcon"),p=n("RouteLink"),c=n("ProjectLink");return d(),i("div",null,[g,e("p",null,[t("本插件会通过向网站 "),D,t(" 注入标签，让你的网站完全支持 "),e("a",y,[t("开放内容协议 OGP"),s(a)]),t(" 和 "),e("a",u,[t("JSON-LD 1.1"),s(a)]),t("，以全面增强站点的搜索引擎优化性。")]),m,e("p",null,[t("详细的参数结构详见 "),s(p,{to:"/zh/plugins/seo/config.html"},{default:o(()=>[t("配置")]),_:1}),t("。")]),x,e("ul",null,[e("li",null,[e("p",null,[e("a",C,[t("开放内容协议 OGP"),s(a)]),t(" ("),_,t("pen "),f,t("raph "),E,t("otocal)")]),k]),e("li",null,[e("p",null,[e("a",b,[t("JSON-LD 1.1"),s(a)])]),v]),e("li",null,[e("p",null,[e("a",O,[t("RDFa 1.1"),s(a)])]),e("p",null,[t("RDFa 主要标记 HTML 结构。这是插件无法支持的内容，"),s(c,{type:"theme",name:"hope",path:"/zh/"},{default:o(()=>[t("vuepress-theme-hope")]),_:1}),t(" 使用了这一功能通过了谷歌的富媒体结构测试。你可以考虑搭配使用。")])]),e("li",null,[e("p",null,[e("a",P,[t("Schema.Org"),s(a)])]),S])]),A,e("p",null,[t("你可以使用 "),e("a",w,[t("Google 富媒体结构测试工具"),s(a)]),t(" 测试本站点。")])])}const B=r(h,[["render",L],["__file","guide.html.vue"]]),G=JSON.parse('{"path":"/zh/plugins/seo/guide.html","title":"指南","lang":"zh-CN","frontmatter":{"description":"指南 本插件会通过向网站 <head> 注入标签，让你的网站完全支持 开放内容协议 OGP 和 JSON-LD 1.1，以全面增强站点的搜索引擎优化性。 开箱即用 插件开箱即用，在不做任何配置的情况下，会尽可能通过页面内容，提取对应的信息补全 OGP 与 JSON-LD 所需的必要标签。 默认情况下，插件会读取站点配置、主题配置与页面的 frontma...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/plugins/seo/guide.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/zh/plugins/seo/guide.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"指南"}],["meta",{"property":"og:description","content":"指南 本插件会通过向网站 <head> 注入标签，让你的网站完全支持 开放内容协议 OGP 和 JSON-LD 1.1，以全面增强站点的搜索引擎优化性。 开箱即用 插件开箱即用，在不做任何配置的情况下，会尽可能通过页面内容，提取对应的信息补全 OGP 与 JSON-LD 所需的必要标签。 默认情况下，插件会读取站点配置、主题配置与页面的 frontma..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-10T14:51:27.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-10T14:51:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-10T14:51:27.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"开箱即用","slug":"开箱即用","link":"#开箱即用","children":[{"level":3,"title":"默认的 OGP 生成逻辑","slug":"默认的-ogp-生成逻辑","link":"#默认的-ogp-生成逻辑","children":[]},{"level":3,"title":"默认的 JSON-LD 生成逻辑","slug":"默认的-json-ld-生成逻辑","link":"#默认的-json-ld-生成逻辑","children":[]}]},{"level":2,"title":"直接添加 head 标签","slug":"直接添加-head-标签","link":"#直接添加-head-标签","children":[]},{"level":2,"title":"自定义生成过程","slug":"自定义生成过程","link":"#自定义生成过程","children":[{"level":3,"title":"页面类型","slug":"页面类型","link":"#页面类型","children":[]},{"level":3,"title":"OGP","slug":"ogp","link":"#ogp","children":[]},{"level":3,"title":"JSON-LD","slug":"json-ld","link":"#json-ld","children":[]}]},{"level":2,"title":"规范链接","slug":"规范链接","link":"#规范链接","children":[{"level":3,"title":"自定义 head 标签","slug":"自定义-head-标签","link":"#自定义-head-标签","children":[]}]},{"level":2,"title":"SEO 介绍","slug":"seo-介绍","link":"#seo-介绍","children":[]},{"level":2,"title":"相关文档","slug":"相关文档","link":"#相关文档","children":[]},{"level":2,"title":"相关工具","slug":"相关工具","link":"#相关工具","children":[]}],"git":{"updatedTime":1710082287000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"autoDesc":true,"filePathRelative":"zh/plugins/seo/guide.md"}');export{B as comp,G as data};
