import{_ as r,M as d,p as c,q as p,R as e,N as t,t as s,V as n,a1 as o}from"./framework-df68bd24.js";const u="/assets/dog-b30bf605.jpeg",v="/assets/dog2-2c7aea54.jpeg",b={},h=e("h1",{id:"vuepress-plugin-tabs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-plugin-tabs","aria-hidden":"true"},"#"),s(" vuepress-plugin-tabs")],-1),m={href:"https://www.npmjs.com/package/@snippetors/vuepress-plugin-tabs",target:"_blank",rel:"noopener noreferrer"},g=e("img",{src:"https://badgen.net/npm/v/@snippetors/vuepress-plugin-tabs",alt:"npm"},null,-1),f={href:"https://www.npmjs.com/package/@snippetors/vuepress-plugin-tabs",target:"_blank",rel:"noopener noreferrer"},k=e("img",{src:"https://badgen.net/npm/dt/@snippetors/vuepress-plugin-tabs",alt:"downloads"},null,-1),y={href:"https://github.com/Snippetors/snippets/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer"},_=e("img",{src:"https://badgen.net/github/license/Snippetors/snippets",alt:"license"},null,-1),x={href:"https://github.com/superbiger/vuepress-plugin-tabs",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,[e("mark",null,"VuePress is evolving rapidly, and there's no stable version yet. This plugin is only tested with VuePress version 2.0.0-beta.60")],-1),T=e("h2",{id:"install",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#"),s(" Install")],-1),j={href:"https://github.com/vuepress/vuepress-next",target:"_blank",rel:"noopener noreferrer"},q=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @snippetors/vuepress-plugin-tabs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
<span class="token keyword">import</span> tabsPlugin <span class="token keyword">from</span> <span class="token string">&#39;@snippetors/vuepress-plugin-tabs&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">tabsPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th style="text-align:left;">Option</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Accepted Values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">events</td><td style="text-align:left;">events to dispatch when the component is updated</td><td style="text-align:left;">Array[String]</td><td style="text-align:left;">-</td><td style="text-align:left;"><code>[]</code></td></tr></tbody></table><p>There is only one possible option, <code>events</code>, which is an array of event names. When this component is updated, these events will be dispatched.</p><p>For a setting like</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@snippetors/vuepress-plugin-tabs&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;event1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;event2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>these events will be dispatched like</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&quot;event1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&quot;event2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can add listeners to the events to get notified when the component is updated.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;event1&quot;</span><span class="token punctuation">,</span> callbackOfEvent1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: tabs [tabs attributes..]

::: tab tab1 [tab attributes..]

content 1

:::

::: tab tab2 [tab attributes..]

content 2

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tabs-attributes" tabindex="-1"><a class="header-anchor" href="#tabs-attributes" aria-hidden="true">#</a> Tabs Attributes</h3><table><thead><tr><th style="text-align:left;">Attribute</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Accepted Values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">type of Tab</td><td style="text-align:left;">String</td><td style="text-align:left;">card/border-card</td><td style="text-align:left;">border-card</td></tr><tr><td style="text-align:left;">tab-position</td><td style="text-align:left;">position of tabs</td><td style="text-align:left;">String</td><td style="text-align:left;">top/right/bottom/left</td><td style="text-align:left;">top</td></tr><tr><td style="text-align:left;">stretch</td><td style="text-align:left;">whether width of tab automatically fits its container</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr></tbody></table><h3 id="tab-attributes" tabindex="-1"><a class="header-anchor" href="#tab-attributes" aria-hidden="true">#</a> Tab Attributes</h3><table><thead><tr><th style="text-align:left;">Attribute</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Accepted Values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">label</td><td style="text-align:left;">title of the tab</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">eager</td><td style="text-align:left;">whether the tab is eagerly rendered</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr></tbody></table><p><strong>Note: The tab attribute <code>eager</code> has to be decleared as the last element</strong></p><h2 id="preview" tabindex="-1"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h2><h3 id="demo-1" tabindex="-1"><a class="header-anchor" href="#demo-1" aria-hidden="true">#</a> Demo 1</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: tabs

::: tab tab 1

content 1

:::

::: tab tab 2

content 2

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),V=e("p",null,"content 1",-1),A=e("p",null,"content 2",-1),D=o(`<h3 id="demo-2" tabindex="-1"><a class="header-anchor" href="#demo-2" aria-hidden="true">#</a> Demo 2</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: tabs type:card tab-position:bottom

::: tab A

content 1

:::

::: tab a tab with eager in its name

Note that this content won&#39;t be eagerly loaded since the word <span class="token code-snippet code keyword">\`eager\`</span> will be treated as a part of the tab name

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),E=e("p",null,"content 1",-1),N=e("p",null,[s("Note that this content won't be eagerly loaded since the word "),e("code",null,"eager"),s(" will be treated as a part of the tab name")],-1),P=e("p",null,[e("img",{src:u,alt:"Dog"})],-1),S=o(`<h3 id="demo-3" tabindex="-1"><a class="header-anchor" href="#demo-3" aria-hidden="true">#</a> Demo 3</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: tabs tab-position:left

::: tab A

content 1

:::

::: tab B eager

eagerly loaded content

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),B=e("p",null,"content 1",-1),I=e("p",null,"This photo will be eagerly loaded",-1),L=e("p",null,[e("img",{src:v,alt:"Dog2"})],-1);function C(O,F){const i=d("ExternalLinkIcon"),a=d("Tab"),l=d("Tabs");return c(),p("div",null,[h,e("p",null,[e("a",m,[g,t(i)]),e("a",f,[k,t(i)]),e("a",y,[_,t(i)])]),e("p",null,[s("This plugin is inspired by "),e("a",x,[s("vuepress-plugin-element-tabs"),t(i)]),s(", but for Vue 3.x and VuePress 2.x")]),w,T,e("blockquote",null,[e("p",null,[s("This plugin requries "),e("a",j,[s("VuePress>=2.0.0"),t(i)])])]),q,t(l,{events:[]},{default:n(()=>[t(a,{label:"tab 1"},{default:n(()=>[V]),_:1}),t(a,{label:"tab 2"},{default:n(()=>[A]),_:1})]),_:1}),D,t(l,{type:"card","tab-position":"bottom",events:[]},{default:n(()=>[t(a,{label:"A"},{default:n(()=>[E]),_:1}),t(a,{label:"a tab with eager in its name"},{default:n(()=>[N,P]),_:1})]),_:1}),S,t(l,{"tab-position":"left",events:[]},{default:n(()=>[t(a,{label:"A"},{default:n(()=>[B]),_:1}),t(a,{label:"B",eager:""},{default:n(()=>[I,L]),_:1})]),_:1})])}const R=r(b,[["render",C],["__file","vuepress-plugin-tabs.html.vue"]]);export{R as default};
