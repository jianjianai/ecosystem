import{_ as d,r as l,c as u,a as n,b as s,e,w as a,d as p,o as m}from"./app-DNnGmCsN.js";const y={},D=s("h1",{id:"built-in-components",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#built-in-components"},[s("span",null,"Built-in Components")])],-1),h={id:"badge",tabindex:"-1"},v={class:"header-anchor",href:"#badge"},C=p(`<ul><li><p>Props:</p><ul><li>type <ul><li>Type: <code>&#39;tip&#39; | &#39;warning&#39; | &#39;danger&#39;</code></li><li>Default: <code>&#39;tip&#39;</code></li></ul></li><li>text <ul><li>Type: <code>string</code></li><li>Default: <code>&#39;&#39;</code></li></ul></li><li>vertical <ul><li>Type: <code>&#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39; | undefined</code></li><li>Default: <code>undefined</code></li></ul></li></ul></li><li><p>Example:</p></li></ul><p><strong>Input</strong></p><div class="language-markdown" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">Badge</span><span style="color:#9CDCFE;"> type</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;tip&quot;</span><span style="color:#9CDCFE;"> text</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;v2&quot;</span><span style="color:#9CDCFE;"> vertical</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;top&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">Badge</span><span style="color:#9CDCFE;"> type</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;warning&quot;</span><span style="color:#9CDCFE;"> text</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;v2&quot;</span><span style="color:#9CDCFE;"> vertical</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;middle&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">Badge</span><span style="color:#9CDCFE;"> type</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;danger&quot;</span><span style="color:#9CDCFE;"> text</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;v2&quot;</span><span style="color:#9CDCFE;"> vertical</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;bottom&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>Output</strong></p>`,4),g=p(`<h2 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup"><span>CodeGroup</span></a></h2><ul><li><p>Details:</p><p>Wrapper of the <a href="#codegroupitem">CodeGroupItem</a> components.</p></li></ul><h2 id="codegroupitem" tabindex="-1"><a class="header-anchor" href="#codegroupitem"><span>CodeGroupItem</span></a></h2><ul><li><p>Props:</p><ul><li>title <ul><li>Type: <code>string</code></li><li>Required: <code>true</code></li></ul></li><li>active <ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul></li></ul></li><li><p>Details:</p><p>This component must be placed inside a <a href="#codegroup">CodeGroup</a> component.</p><p>Use the <code>active</code> prop to set the initial active item, or the first item will be activated by default.</p></li><li><p>Example:</p></li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">CodeGroup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">CodeGroupItem</span><span style="color:#9CDCFE;"> title</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;pnpm&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#D4D4D4;">pnpm install</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">CodeGroupItem</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">CodeGroupItem</span><span style="color:#9CDCFE;"> title</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;yarn&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#D4D4D4;">yarn install</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">CodeGroupItem</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">CodeGroupItem</span><span style="color:#9CDCFE;"> title</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;npm&quot;</span><span style="color:#9CDCFE;"> active</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#D4D4D4;">npm install</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">CodeGroupItem</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">CodeGroup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,7),b=s("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"pnpm"),s("span",{style:{color:"#CE9178"}}," install")]),e(`
`),s("span",{class:"line"})])])],-1),_=s("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"yarn"),s("span",{style:{color:"#CE9178"}}," install")]),e(`
`),s("span",{class:"line"})])])],-1),E=s("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"npm"),s("span",{style:{color:"#CE9178"}}," install")]),e(`
`),s("span",{class:"line"})])])],-1),f={class:"custom-container warning"},k=s("p",{class:"custom-container-title"},"WARNING",-1),x=s("p",null,[e("You must add an empty line between the starting tag of "),s("code",null,"<CodeGroupItem>"),e(" and the code fence, otherwise the code fence will not be parsed correctly by Markdown.")],-1),q=s("p",null,"All content must be valid Markdown first, and then a Vue SFC.",-1),G=s("p",null,[e("Learn more: "),s("a",{href:"https://v2.vuepress.vuejs.org/advanced/cookbook/markdown-and-vue-sfc.html",target:"_blank",rel:"noopener noreferrer"},"Cookbook > Markdown and Vue SFC")],-1);function B(F,w){const c=l("NpmBadge"),t=l("Badge"),o=l("CodeGroupItem"),i=l("CodeGroup"),r=l("RouteLink");return m(),u("div",null,[D,n(c,{package:"@vuepress/theme-default"}),s("h2",h,[s("a",v,[s("span",null,[e("Badge "),n(t,{text:"badge"})])])]),C,s("ul",null,[s("li",null,[e("VuePress - "),n(t,{type:"tip",text:"v2",vertical:"top"})]),s("li",null,[e("VuePress - "),n(t,{type:"warning",text:"v2",vertical:"middle"})]),s("li",null,[e("VuePress - "),n(t,{type:"danger",text:"v2",vertical:"bottom"})])]),g,n(i,null,{default:a(()=>[n(o,{title:"pnpm"},{default:a(()=>[b]),_:1}),n(o,{title:"yarn"},{default:a(()=>[_]),_:1}),n(o,{title:"npm",active:""},{default:a(()=>[E]),_:1})]),_:1}),s("div",f,[k,x,q,G,s("p",null,[e("Alternatively, you can use the "),n(r,{to:"/themes/default/markdown.html#custom-containers"},{default:a(()=>[e("custom containers")]),_:1}),e(".")])])])}const I=d(y,[["render",B],["__file","components.html.vue"]]),P=JSON.parse('{"path":"/themes/default/components.html","title":"Built-in Components","lang":"en-US","frontmatter":{"description":"Built-in Components","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/themes/default/components.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/themes/default/components.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Built-in Components"}],["meta",{"property":"og:description","content":"Built-in Components"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-30T14:33:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-30T14:33:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Built-in Components\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-30T14:33:01.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Badge","slug":"badge","link":"#badge","children":[]},{"level":2,"title":"CodeGroup","slug":"codegroup","link":"#codegroup","children":[]},{"level":2,"title":"CodeGroupItem","slug":"codegroupitem","link":"#codegroupitem","children":[]}],"git":{"updatedTime":1706625181000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"themes/default/components.md"}');export{I as comp,P as data};
