import{_ as p,r as t,c as i,b as s,a as e,w as a,e as n,d as o,o as c}from"./app-DNnGmCsN.js";const r={},d=o('<h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1><h2 id="plugin-options" tabindex="-1"><a class="header-anchor" href="#plugin-options"><span>Plugin Options</span></a></h2><h3 id="getinfo" tabindex="-1"><a class="header-anchor" href="#getinfo"><span>getInfo</span></a></h3>',3),u=s("li",null,[s("p",null,[n("Type: "),s("code",null,"(page: Page) => Record<string, unknown>")])],-1),y=s("li",null,[s("p",null,"Required: No")],-1),D=s("p",null,"Reference:",-1),g=s("li",null,[s("p",null,"Details:"),s("p",null,"Function getting article info."),s("p",null,"Article info will be injected in route meta so that they will be available later in client composables.")],-1),m=s("h3",{id:"filter",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#filter"},[s("span",null,"filter")])],-1),v=s("li",null,[s("p",null,[n("Type: "),s("code",null,"(page: Page) => boolean")])],-1),h=s("li",null,[s("p",null,[n("Default: "),s("code",null,"(page) => Boolean(page.filePathRelative) && !page.frontmatter.home")])],-1),C=s("p",null,"Reference:",-1),b=s("li",null,[s("p",null,"Details:"),s("p",null,"Page filter, determine whether a page should be included."),s("p",null,"By default, all the pages generated from Markdown files but not homepage will be included as articles.")],-1),f=s("h3",{id:"category",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#category"},[s("span",null,"category")])],-1),E=s("li",null,[n("Type: "),s("code",null,"BlogCategoryOptions[]")],-1),B=s("li",null,"Required: No",-1),A=s("li",null,[n("Details: Blog category config, see "),s("a",{href:"#blog-category-config"},"Blog Category Config")],-1),_=s("h3",{id:"type",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#type"},[s("span",null,"type")])],-1),x=s("li",null,[n("Type: "),s("code",null,"BlogTypeOptions[]")],-1),k=s("li",null,"Required: No",-1),F=s("li",null,[n("Details: Blog type config, see "),s("a",{href:"#blog-type-config"},"Blog Type Config")],-1),w=s("h3",{id:"slugify",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#slugify"},[s("span",null,"slugify")])],-1),T=s("ul",null,[s("li",null,[n("Type: "),s("code",null,"(name: string) => string")]),s("li",null,[n("Default: "),s("code",null,`(name) => name.replace(/ _/g, '-').replace(/[:?*|\\\\/<>]/g, "").toLowerCase()`)]),s("li",null,"Details: Slugify function, used to convert key name which they are register in routes.")],-1),R=s("h3",{id:"excerpt",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#excerpt"},[s("span",null,"excerpt")])],-1),P=s("li",null,[n("Type: "),s("code",null,"boolean")],-1),I=s("li",null,[n("Default: "),s("code",null,"true")],-1),q=s("li",null,"Details: Whether generate excerpt for page.",-1),G=s("h3",{id:"excerptseparator",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#excerptseparator"},[s("span",null,"excerptSeparator")])],-1),S=s("li",null,[n("Type: "),s("code",null,"string")],-1),j=s("li",null,[n("Default: "),s("code",null,"<!-- more -->")],-1),N=s("li",null,"Details: Separator used to split excerpt from page content.",-1),L=s("h3",{id:"excerptlength",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#excerptlength"},[s("span",null,"excerptLength")])],-1),O=s("li",null,[s("p",null,[n("Type: "),s("code",null,"number")])],-1),z=s("li",null,[s("p",null,[n("Default: "),s("code",null,"300")])],-1),V=s("p",null,"Reference:",-1),U=s("li",null,[s("p",null,"Details:"),s("p",null,"Length of excerpt when auto generating."),s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,"Excerpt length will be the minimal possible length reaching this value."),s("p",null,[n("You can set it to "),s("code",null,"0"),n(" to disable auto excerpt generation.")])])],-1),M=s("h3",{id:"excerptfilter",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#excerptfilter"},[s("span",null,"excerptFilter")])],-1),W=s("li",null,[s("p",null,[n("Type: "),s("code",null,"(page: Page) => boolean")])],-1),Y=s("li",null,[s("p",null,[n("Default: "),s("code",null,"filter"),n(" option")])],-1),Z=s("p",null,"Reference:",-1),J=s("li",null,[s("p",null,"Details:"),s("p",null,"Page filter, determine whether the plugin should generate excerpt for it."),s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,[n("You should use this to skip pages that you don't need to generate excerpt for. E.g.: If users set "),s("code",null,"excerpt"),n(" or "),s("code",null,"description"),n(" in frontmatter, you may want to use them directly.")])])],-1),H=s("h3",{id:"iscustomelement",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#iscustomelement"},[s("span",null,"isCustomElement")])],-1),K=s("li",null,[s("p",null,[n("Type: "),s("code",null,"(tagName: string) => boolean")])],-1),Q=s("li",null,[s("p",null,[n("Default: "),s("code",null,"() => false")])],-1),X=s("p",null,"Reference:",-1),$=s("li",null,[s("p",null,"Details:"),s("p",null,"Tags which is considered as custom elements."),s("p",null,"This is used to determine whether a tag is a custom element since all unknown tags are removed in excerpt.")],-1),ss=o(`<h3 id="metascope" tabindex="-1"><a class="header-anchor" href="#metascope"><span>metaScope</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&quot;_blog&quot;</code></p></li><li><p>Details:</p><p>Key used when injecting info to route meta.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Setting to an empty key will inject to route meta directly instead of a field.</p></div></li></ul><h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload"><span>hotReload</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: Whether using <code>--debug</code> flag</p></li><li><p>Details:</p><p>Whether enable hotReload in devServer.</p><div class="custom-container tip"><p class="custom-container-title">To theme developers</p><p>It&#39;s disabled by default because it does have performance impact in sites with a lot of categories and types. And it can slow down hotReload speed when editing Markdown.</p><p>If users are adding or organizing your categories or tags, you may tell them to enable this, for the rest it&#39;s better to keep it disabled.</p><p>Also, you can try to detect number of pages in users project and decide whether to enable it.</p></div></li></ul><h2 id="blog-category-config" tabindex="-1"><a class="header-anchor" href="#blog-category-config"><span>Blog Category Config</span></a></h2><p>Blog category config should be an array, while each item is controlling a &quot;category&quot; rule.</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> BlogCategoryOptions</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Unique category name</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  key</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Function getting category from page</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  getter</span><span style="color:#D4D4D4;">: (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> string</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * A custom function to sort the pages</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  sorter</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">pageA</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">pageB</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Path pattern of page to be registered</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> \`:key\` will be replaced by the &quot;slugify&quot; result of the original key</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> \`/:key/\`</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  path</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Page layout name</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> &#39;</span><span style="color:#9CDCFE;">Layout</span><span style="color:#9CDCFE;">&#39;</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  layout</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Frontmatter</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  frontmatter</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">localePath</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Item page path pattern or custom function to be registered</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> When filling in a string, \`:key\` and \`:name\` will be replaced by the &quot;slugify&quot; result of the original key and name</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> \`/:key/:name/\`</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  itemPath</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | ((</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> string</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Item page layout name</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> &#39;</span><span style="color:#9CDCFE;">Layout</span><span style="color:#9CDCFE;">&#39;</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  itemLayout</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Items Frontmatter</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  itemFrontmatter</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">localePath</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blog-type-config" tabindex="-1"><a class="header-anchor" href="#blog-type-config"><span>Blog Type Config</span></a></h2><p>Blog type config should be an array, while each item is controlling a &quot;type&quot; rule.</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> BlogTypeOptions</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Unique type name</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  key</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * A filter function to determine whether a page should be the type</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  filter</span><span style="color:#D4D4D4;">: (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * A custom function to sort the pages</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  sorter</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">pageA</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">pageB</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Page path to be registered</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> &#39;</span><span style="color:#9CDCFE;">/:key/</span><span style="color:#9CDCFE;">&#39;</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  path</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Layout name</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> &#39;</span><span style="color:#9CDCFE;">Layout</span><span style="color:#9CDCFE;">&#39;</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  layout</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Frontmatter</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  frontmatter</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">localePath</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api"><span>Composition API</span></a></h2><p>You can import the following API from <code>@vuepress/plugin-blog/client</code>.</p><ul><li><p>Blog category</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> useBlogCategory</span><span style="color:#D4D4D4;">: &lt;</span></span>
<span class="line"><span style="color:#4EC9B0;">  T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">&gt;(</span></span>
<span class="line"><span style="color:#9CDCFE;">  key</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> ComputedRef</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">BlogCategoryData</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span></code></pre></div><p>Argument <code>key</code> should be the category unique key.</p><p>If no key is passed, the plugin will try to use the key in current path.</p></li><li><p>Blog category</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> useBlogType</span><span style="color:#D4D4D4;">: &lt;</span></span>
<span class="line"><span style="color:#4EC9B0;">  T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">&gt;(</span></span>
<span class="line"><span style="color:#9CDCFE;">  key</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> ComputedRef</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">BlogTypeData</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span></code></pre></div><p>Argument <code>key</code> should be the type unique key.</p><p>If no key is passed, the plugin will try to use the key in current path.</p></li></ul><p>Returning values are:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> Article</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;&gt; {</span></span>
<span class="line"><span style="color:#6A9955;">  /** Article path */</span></span>
<span class="line"><span style="color:#9CDCFE;">  path</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">  /** Article info */</span></span>
<span class="line"><span style="color:#9CDCFE;">  info</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">T</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> BlogCategoryData</span><span style="color:#D4D4D4;">&lt;</span></span>
<span class="line"><span style="color:#4EC9B0;">  T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">&gt; {</span></span>
<span class="line"><span style="color:#6A9955;">  /** Category path */</span></span>
<span class="line"><span style="color:#9CDCFE;">  path</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Only available when current route matches an item path</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  currentItems</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">Article</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt;[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /** Category map */</span></span>
<span class="line"><span style="color:#9CDCFE;">  map</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#6A9955;">    /** Unique key under current category */</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">]: {</span></span>
<span class="line"><span style="color:#6A9955;">      /** Category path of the key */</span></span>
<span class="line"><span style="color:#9CDCFE;">      path</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">      /** Category items of the key */</span></span>
<span class="line"><span style="color:#9CDCFE;">      items</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Article</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt;[]</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> BlogTypeData</span><span style="color:#D4D4D4;">&lt;</span></span>
<span class="line"><span style="color:#4EC9B0;">  T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">&gt; {</span></span>
<span class="line"><span style="color:#6A9955;">  /** Type path */</span></span>
<span class="line"><span style="color:#9CDCFE;">  path</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /** Items under current type */</span></span>
<span class="line"><span style="color:#9CDCFE;">  items</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Article</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt;[]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function ns(ls,es){const l=t("RouteLink");return c(),i("div",null,[d,s("ul",null,[u,y,s("li",null,[D,s("ul",null,[s("li",null,[e(l,{to:"/plugins/blog/guide.html#gathering-info"},{default:a(()=>[n("Guide → Gathering Info")]),_:1})])])]),g]),m,s("ul",null,[v,h,s("li",null,[C,s("ul",null,[s("li",null,[e(l,{to:"/plugins/blog/guide.html#collecting-articles"},{default:a(()=>[n("Guide → Collecting Articles")]),_:1})])])]),b]),f,s("ul",null,[E,B,s("li",null,[n("Reference: "),s("ul",null,[s("li",null,[e(l,{to:"/plugins/blog/guide.html#customizing-categories-and-types"},{default:a(()=>[n("Guide → Customizing Categories and Types")]),_:1})])])]),A]),_,s("ul",null,[x,k,s("li",null,[n("Reference: "),s("ul",null,[s("li",null,[e(l,{to:"/plugins/blog/guide.html#customizing-categories-and-types"},{default:a(()=>[n("Guide → Customizing Categories and Types")]),_:1})])])]),F]),w,T,R,s("ul",null,[P,I,s("li",null,[n("Reference: "),s("ul",null,[s("li",null,[e(l,{to:"/plugins/blog/guide.html#generating-excerpt"},{default:a(()=>[n("Guide → Generating Excerpt")]),_:1})])])]),q]),G,s("ul",null,[S,j,s("li",null,[n("Reference: "),s("ul",null,[s("li",null,[e(l,{to:"/plugins/blog/guide.html#generating-excerpt"},{default:a(()=>[n("Guide → Generating Excerpt")]),_:1})])])]),N]),L,s("ul",null,[O,z,s("li",null,[V,s("ul",null,[s("li",null,[e(l,{to:"/plugins/blog/guide.html#generating-excerpt"},{default:a(()=>[n("Guide → Generating Excerpt")]),_:1})])])]),U]),M,s("ul",null,[W,Y,s("li",null,[Z,s("ul",null,[s("li",null,[e(l,{to:"/plugins/blog/guide.html#generating-excerpt"},{default:a(()=>[n("Guide → Generating Excerpt")]),_:1})])])]),J]),H,s("ul",null,[K,Q,s("li",null,[X,s("ul",null,[s("li",null,[e(l,{to:"/plugins/blog/guide.html#generating-excerpt"},{default:a(()=>[n("Guide → Generating Excerpt")]),_:1})])])]),$]),ss])}const os=p(r,[["render",ns],["__file","config.html.vue"]]),ps=JSON.parse('{"path":"/plugins/blog/config.html","title":"Config","lang":"en-US","frontmatter":{"description":"Config Plugin Options getInfo Type: (page: Page) => Record<string, unknown> Required: No Reference: Details: Function getting article info. Article info will be injected in rout...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/blog/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/blog/config.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Config"}],["meta",{"property":"og:description","content":"Config Plugin Options getInfo Type: (page: Page) => Record<string, unknown> Required: No Reference: Details: Function getting article info. Article info will be injected in rout..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T09:34:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-05T09:34:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-05T09:34:12.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Plugin Options","slug":"plugin-options","link":"#plugin-options","children":[{"level":3,"title":"getInfo","slug":"getinfo","link":"#getinfo","children":[]},{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"category","slug":"category","link":"#category","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]},{"level":3,"title":"slugify","slug":"slugify","link":"#slugify","children":[]},{"level":3,"title":"excerpt","slug":"excerpt","link":"#excerpt","children":[]},{"level":3,"title":"excerptSeparator","slug":"excerptseparator","link":"#excerptseparator","children":[]},{"level":3,"title":"excerptLength","slug":"excerptlength","link":"#excerptlength","children":[]},{"level":3,"title":"excerptFilter","slug":"excerptfilter","link":"#excerptfilter","children":[]},{"level":3,"title":"isCustomElement","slug":"iscustomelement","link":"#iscustomelement","children":[]},{"level":3,"title":"metaScope","slug":"metascope","link":"#metascope","children":[]},{"level":3,"title":"hotReload","slug":"hotreload","link":"#hotreload","children":[]}]},{"level":2,"title":"Blog Category Config","slug":"blog-category-config","link":"#blog-category-config","children":[]},{"level":2,"title":"Blog Type Config","slug":"blog-type-config","link":"#blog-type-config","children":[]},{"level":2,"title":"Composition API","slug":"composition-api","link":"#composition-api","children":[]}],"git":{"updatedTime":1707125652000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/blog/config.md"}');export{os as comp,ps as data};
