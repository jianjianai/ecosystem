import{_ as o,r as n,c as i,a,b as s,e,w as l,d as r,o as c}from"./app-DNnGmCsN.js";const d={},u=s("h1",{id:"git",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#git"},[s("span",null,"git")])],-1),D=s("p",null,"该插件会收集你的页面的 Git 信息，包括创建和更新时间、贡献者等。",-1),h=r(`<p>该插件主要用于开发主题，大部分情况下你不需要直接使用它。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-git@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">gitPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-git&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    gitPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="git-仓库" tabindex="-1"><a class="header-anchor" href="#git-仓库"><span>Git 仓库</span></a></h2><p>该插件要求你的项目在 <a href="https://git-scm.com/book/en/Git-Basics-Getting-a-Git-Repository" target="_blank" rel="noopener noreferrer">Git 仓库</a> 下，这样它才能从提交历史记录中收集信息。</p><p>在构建站点时，你应该确保所有的提交记录是可以获取到的。举例来说， CI 工作流通常会在克隆你的仓库时添加 <a href="https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt" target="_blank" rel="noopener noreferrer">--depth 1</a> 参数来避免拉取全部的提交记录，因此你需要禁用这个功能，以便该插件在 CI 可以中正常使用。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>该插件会显著降低准备数据的速度，特别是在你的页面数量很多的时候。你可以考虑在 <code>dev</code> 模式下禁用该插件来获取更好的开发体验。</p></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="createdtime" tabindex="-1"><a class="header-anchor" href="#createdtime"><span>createdTime</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>是否收集页面的创建时间。</p></li></ul><h3 id="updatedtime" tabindex="-1"><a class="header-anchor" href="#updatedtime"><span>updatedTime</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>是否收集页面的更新时间。</p></li></ul><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors"><span>contributors</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>是否收集页面的贡献者。</p></li></ul><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2><h3 id="gitinclude" tabindex="-1"><a class="header-anchor" href="#gitinclude"><span>gitInclude</span></a></h3><ul><li><p>类型： <code>string[]</code></p></li><li><p>详情：</p><p>文件相对路径组成的数组，该数组中的文件会在计算页面数据时被包含在内。</p></li><li><p>示例：</p></li></ul><div class="language-markdown" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">gitInclude</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">relative/path/to/file1</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">relative/path/to/file2</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="页面数据" tabindex="-1"><a class="header-anchor" href="#页面数据"><span>页面数据</span></a></h2><p>该插件会向页面数据中添加一个 <code>git</code> 字段。</p><p>在使用该插件后，可以在页面数据中获取该插件收集到的 Git 信息：</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">GitPluginPageData</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-git&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">usePageData</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> page</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePageData</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">GitPluginPageData</span><span style="color:#D4D4D4;">&gt;()</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="git-createdtime" tabindex="-1"><a class="header-anchor" href="#git-createdtime"><span>git.createdTime</span></a></h3><ul><li><p>类型： <code>number</code></p></li><li><p>详情：</p><p>页面第一次提交的 Unix 毫秒时间戳。</p><p>该属性将取当前页面及 <a href="#gitinclude">gitInclude</a> 中所列文件的第一次提交的时间戳的最小值。</p></li></ul><h3 id="git-updatedtime" tabindex="-1"><a class="header-anchor" href="#git-updatedtime"><span>git.updatedTime</span></a></h3><ul><li><p>类型： <code>number</code></p></li><li><p>详情：</p><p>页面最后一次提交的 Unix 毫秒时间戳。</p><p>该属性将取当前页面及 <a href="#gitinclude">gitInclude</a> 中所列文件的最后一次提交的时间戳的最大值。</p></li></ul><h3 id="git-contributors" tabindex="-1"><a class="header-anchor" href="#git-contributors"><span>git.contributors</span></a></h3><ul><li>类型： <code>GitContributor[]</code></li></ul><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> GitContributor</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#9CDCFE;">  email</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#9CDCFE;">  commits</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><ul><li><p>详情：</p><p>页面的贡献者信息。</p><p>该属性将会包含 <a href="#gitinclude">gitInclude</a> 所列文件的贡献者。</p></li></ul>`,31);function g(m,y){const p=n("NpmBadge"),t=n("RouteLink");return c(),i("div",null,[u,a(p,{package:"@vuepress/plugin-git"}),D,s("p",null,[e("默认主题的 "),a(t,{to:"/zh/themes/default/config.html#lastupdated"},{default:l(()=>[e("lastUpdated")]),_:1}),e(" 和 "),a(t,{to:"/zh/themes/default/config.html#contributors"},{default:l(()=>[e("contributors")]),_:1}),e(" 就是由该插件支持的。")]),h])}const f=o(d,[["render",g],["__file","git.html.vue"]]),b=JSON.parse('{"path":"/zh/plugins/git.html","title":"git","lang":"zh-CN","frontmatter":{"description":"git","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/git.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/git.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"git"}],["meta",{"property":"og:description","content":"git"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-21T05:33:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-21T05:33:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-21T05:33:46.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"Git 仓库","slug":"git-仓库","link":"#git-仓库","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"createdTime","slug":"createdtime","link":"#createdtime","children":[]},{"level":3,"title":"updatedTime","slug":"updatedtime","link":"#updatedtime","children":[]},{"level":3,"title":"contributors","slug":"contributors","link":"#contributors","children":[]}]},{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[{"level":3,"title":"gitInclude","slug":"gitinclude","link":"#gitinclude","children":[]}]},{"level":2,"title":"页面数据","slug":"页面数据","link":"#页面数据","children":[{"level":3,"title":"git.createdTime","slug":"git-createdtime","link":"#git-createdtime","children":[]},{"level":3,"title":"git.updatedTime","slug":"git-updatedtime","link":"#git-updatedtime","children":[]},{"level":3,"title":"git.contributors","slug":"git-contributors","link":"#git-contributors","children":[]}]}],"git":{"updatedTime":1708493626000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"zh/plugins/git.md"}');export{f as comp,b as data};
