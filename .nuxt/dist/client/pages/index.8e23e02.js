(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(t,e,r){var content=r(188);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("2285945e",content,!0,{sourceMap:!1})},185:function(t,e,r){t.exports=r.p+"img/cnn.be9cd04.png"},186:function(t,e,r){t.exports=r.p+"img/fox_news.b598fc3.png"},187:function(t,e,r){"use strict";var n=r(182);r.n(n).a},188:function(t,e,r){(e=r(48)(!1)).push([t.i,".article-headline[data-v-2198bd4c]{font-weight:700;font-size:1.1em;padding-bottom:5px}.article-date[data-v-2198bd4c]{font-style:italic;font-size:.8em;color:#777;padding-bottom:10px}",""]),t.exports=e},189:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"image is-32x32 news-source-logo-container",staticStyle:{margin:"0px auto","margin-bottom":"15px"}},[e("img",{staticClass:"is-rounded",attrs:{src:r(185)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"image is-32x32 news-source-logo-container",staticStyle:{margin:"0px auto","margin-bottom":"15px"}},[e("img",{staticClass:"is-rounded",attrs:{src:r(186)}})])}],l={props:{article:{type:Object,required:!0},left:{type:Boolean,default:!0}},methods:{prettyDate:function(t){return new Date(t).toLocaleDateString()}}},c=(r(187),r(23)),o={components:{Article:Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"article-headline"},[r("a",{attrs:{href:t.article.url,target:"_blank"}},[t._v(t._s(t.article.title))])]),t._v(" "),r("div",{staticClass:"article-date"},[t._v(t._s(t.prettyDate(t.article.publishedAt)))]),t._v(" "),r("a",{attrs:{href:t.article.url,target:"_blank"}},[r("img",{staticStyle:{width:"100%"},attrs:{src:t.article.urlToImage}})])])}),[],!1,null,"2198bd4c",null).exports},props:{articleLeft:{type:Object,required:!0},articleRight:{type:Object,required:!0}}},d={components:{CompareArticles:Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"columns box",staticStyle:{"margin-bottom":"50px",padding:"15px"}},[r("div",{staticClass:"column"},[t._m(0),t._v(" "),r("Article",{key:t.articleLeft.url,attrs:{article:t.articleLeft,left:!0}})],1),t._v(" "),r("div",{staticClass:"column"},[t._m(1),t._v(" "),r("Article",{key:t.articleRight.url,attrs:{article:t.articleRight,left:!1}})],1)])}),n,!1,null,null,null).exports},data:function(){return{left:null,right:null,articles:null,screenWidth:null}},methods:{getNews:function(){var t=this;this.$axios.get("polarination.json").then((function(e){t.left=e.data.left.articles,t.right=e.data.right.articles,t.articles=e.data}))}},mounted:function(){var t=this;this.screenWidth=window.innerWidth,this.getNews(),window.addEventListener("resize",(function(e){t.screenWidth=window.innerWidth}))}},f=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.articles?r("div",t._l(t.left,(function(e,n){return r("compare-articles",{key:"compare-article-"+n,attrs:{"article-left":t.left[n],"article-right":t.right[n]}})})),1):t._e()])}),[],!1,null,null,null);e.default=f.exports}}]);