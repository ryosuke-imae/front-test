webpackJsonp([0],{"/HCd":function(s,e){},"8Hz6":function(s,e){},MiMN:function(s,e){},NHnr:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n("7+uW"),r={render:function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"app"}},[s._m(0),s._v(" "),n("h2",[s._v("▼ 復習したい章を選んでください ▼")]),s._v(" "),n("nav",{staticClass:"navMenu"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/lesson01"}},[s._v("01章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson02"}},[s._v("02章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson03"}},[s._v("03章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson04"}},[s._v("04章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson05"}},[s._v("05章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson06"}},[s._v("06章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson07"}},[s._v("07章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson08"}},[s._v("08章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson09"}},[s._v("09章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson10"}},[s._v("10章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson11"}},[s._v("11章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson12"}},[s._v("12章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson13"}},[s._v("13章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson14"}},[s._v("14章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson15"}},[s._v("15章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson16"}},[s._v("16章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson17"}},[s._v("17章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson18"}},[s._v("18章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson19"}},[s._v("19章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson20"}},[s._v("20章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson21"}},[s._v("21章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson22"}},[s._v("22章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson23"}},[s._v("23章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson24"}},[s._v("24章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson25"}},[s._v("25章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson26"}},[s._v("26章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson27"}},[s._v("27章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson28"}},[s._v("28章")])],1),s._v(" "),n("li",[n("router-link",{attrs:{to:"/lesson29"}},[s._v("29章")])],1)])]),s._v(" "),n("router-view")],1)},staticRenderFns:[function(){var s=this.$createElement,e=this._self._c||s;return e("h1",[e("span",[this._v("FRONT END")]),this._v(" "),e("span",[this._v("COMPREHENSION")]),this._v(" "),e("span",[this._v("TEST")])])}]};var i=n("VU/8")({name:"App"},r,!1,function(s){n("ewB3")},null,null).exports,o=n("/ocq"),a={render:function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("div",{staticClass:"quizContent",attrs:{id:"lesson01"}},[s.completed?s._e():n("div",[n("section",{staticClass:"questionArea"},[n("h3",[s._v("Question."+s._s(s.questionIndex+1))]),s._v(" "),n("h4",[s._v(s._s(s.currentQuestion.question))]),s._v(" "),n("ul",{staticClass:"answerList"},s._l(s.currentQuestion.answers,function(e,t){return n("li",{on:{click:function(e){return s.addAnswer(t)}}},[s._v(s._s(e))])}),0)])]),s._v(" "),s.completed?n("div",{staticClass:"resultArea"},[n("h3",[s._v("Result")]),s._v(" "),s._l(this.questions,function(e,t){return n("section",[n("h4",[s._v(s._s(t+1)+"."+s._s(e.question))]),s._v(" "),n("ul",s._l(e.answers,function(e){return n("li",[s._v(s._s(e))])}),0),s._v(" "),e.answer==s.answers[t]?n("p",{staticClass:"correct"},[s._v("正解!!")]):n("div",{staticClass:"incorrect"},[n("p",[s._v("不正解...")]),s._v(" "),n("p",[s._v("正解は「"+s._s(e.answers[e.answer])+"」でした。")])])])})],2):s._e()])},staticRenderFns:[]};var u=n("VU/8")({name:"lesson01",data:function(){return{answers:[],questionIndex:0,questions:[{question:"フロントエンドエンジニアとは、どんな人を指しますか？",answers:["主にユーザーの目に触れる部分(View)を作るエンジニア","サーバやネットワークの設計・構築をするエンジニア","機械が動く仕組み（メカニズム）を設計するエンジニア"],answer:0},{question:"フロントエンドとして、web制作において必須のコーディングスキルはどれでしょう。",answers:["Java、swift","HTML、CSS、Javascript","Python"],answer:1}]}},methods:{addAnswer:function(s){this.answers.push(s),this.completed||this.questionIndex++}},computed:{currentQuestion:function(){return this.questions[this.questionIndex]},completed:function(){return this.questions.length==this.answers.length}}},a,!1,function(s){n("8Hz6")},null,null).exports,l={render:function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("div",{staticClass:"quizContent",attrs:{id:"lesson02"}},[s.completed?s._e():n("div",[n("section",{staticClass:"questionArea"},[n("h3",[s._v("Question."+s._s(s.questionIndex+1))]),s._v(" "),n("h4",[s._v(s._s(s.currentQuestion.question))]),s._v(" "),n("ul",{staticClass:"answerList"},s._l(s.currentQuestion.answers,function(e,t){return n("li",{on:{click:function(e){return s.addAnswer(t)}}},[s._v(s._s(e))])}),0)])]),s._v(" "),s.completed?n("div",{staticClass:"resultArea"},[n("h3",[s._v("Result")]),s._v(" "),s._l(this.questions,function(e,t){return n("section",[n("h4",[s._v(s._s(t+1)+"."+s._s(e.question))]),s._v(" "),n("ul",s._l(e.answers,function(e){return n("li",[s._v(s._s(e))])}),0),s._v(" "),e.answer==s.answers[t]?n("p",{staticClass:"correct"},[s._v("正解!!")]):n("div",{staticClass:"incorrect"},[n("p",[s._v("不正解...")]),s._v(" "),n("p",[s._v("正解は「"+s._s(e.answers[e.answer])+"」でした。")])])])})],2):s._e()])},staticRenderFns:[]};var c=n("VU/8")({name:"lesson02",data:function(){return{answers:[],questionIndex:0,questions:[{question:"HTMLは何の略称でしょう。",answers:["Hyper Text Markup Language","Hyper Text Markdown Language","Hyper Text Wakeup Language"],answer:0},{question:"「このドキュメントはHTMLである」ことを宣言してください。",answers:["<html lang=en>","<html lang=ja>","<!DOCTYPE html>"],answer:2},{question:"metaタグに記述してはいけないものを選んでください。",answers:["文字コードの指定","文章のタイトル(サイトの名前)","ブラウザに表示される文書の本体"],answer:2},{question:"「要素（elements）」とは何を指す言葉でしょうか。",answers:["「タグとその中身」","「HTML」","「CSS」"],answer:0},{question:"「linkタグ」は、どういった役割を持つタグか。",answers:["リンクをはる、リンクの出発点・到達点を指定する","リンクする外部リソースを指定する","文書のヘッダ情報を表す"],answer:1},{question:"「id属性」と「class属性」のうち、同じ属性値を設定する事ができないのはどちらか。",answers:["id属性","class属性","どちらも設定できない"],answer:0},{question:"セクションに関わるタグで誤った説明をしているものを選んでください。",answers:["<nav>はナビゲーションであることを示す","<section>は一つのセクションであることを示す","<article>は余談・補足情報であることを示す"],answer:2},{question:"リストを表すタグのうち、「順序が関わらないリスト」を作成する際に使用するタグはなにか。",answers:["dl","ol","ul"],answer:2},{question:"フォームで「ラジオボタン」を作成する際に使用するタグと、その属性及び属性値を選んでください。",answers:["<input style=radio>","<input type=radio>","<div class=radio>"],answer:1},{question:"「imgタグ」で画像を表示する際、Webで表示できる画像形式を答えなさい。",answers:["jpg、psd、pdf","jpg、png、gif","jpg、tiff、ai"],answer:1},{question:"要素には「ブロック要素」と「インライン要素」がありますが、「span」タグはこのうちどちらか。",answers:["ブロック要素","インライン要素"],answer:1},{question:"CSSを構成する3つの値はどれでしょう。",answers:["プロパティ、セレクタ、値","タグ、セレクタ、スタイル","プロパティ、ID、class"],answer:0},{question:"ボックスモデルのうち、「内容領域」の幅と高さを指定するプロパティを答えなさい。",answers:["padding、margin","width、height","background-size、border"],answer:0},{question:"ボックスモデルのは「内容領域」と３つの周辺領域で構成されています。３つの周辺領域を答えなさい。",answers:["position、top、left","width、height、display","padding、border、margin"],answer:2},{question:"「文字のサイズ」を指定したい時に使用するプロパティはなにか。",answers:["size","font-size","font-weight"],answer:1},{question:"ある要素の「背景色」を赤と指定したい時のCSSの指定を記述しなさい。",answers:["background-size","background-color","color"],answer:1},{question:"「position」プロパティにはボックスの配置方法として「相対位置」と「絶対位置」の指定方法があります。「絶対位置」で指定する際はどの値を記述すべきでしょうか。",answers:["absolute","relative","static"],answer:0},{question:"「color」プロパティは、ある部分の色を指定するプロパティです。なんの色を指定するプロパティか。",answers:["文字","背景","border"],answer:0},{question:"「display: none」が指定された要素は、ブラウザ上ではどのように表示されるか。",answers:["表示","非表示","親要素に準ずる"],answer:1},{question:"「<div class=text></div>」の「class属性」に対してスタイルを適用したい時のセレクタを記述しなさい。",answers:["#text","text",".text"],answer:2}]}},methods:{addAnswer:function(s){this.answers.push(s),this.completed||this.questionIndex++}},computed:{currentQuestion:function(){return this.questions[this.questionIndex]},completed:function(){return this.questions.length==this.answers.length}}},l,!1,function(s){n("uRv0")},null,null).exports,_={render:function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("div",{staticClass:"quizContent",attrs:{id:"lesson03"}},[s.completed?s._e():n("div",[n("section",{staticClass:"questionArea"},[n("h3",[s._v("Question."+s._s(s.questionIndex+1))]),s._v(" "),n("h4",[s._v(s._s(s.currentQuestion.question))]),s._v(" "),n("ul",{staticClass:"answerList"},s._l(s.currentQuestion.answers,function(e,t){return n("li",{on:{click:function(e){return s.addAnswer(t)}}},[s._v(s._s(e))])}),0)])]),s._v(" "),s.completed?n("div",{staticClass:"resultArea"},[n("h3",[s._v("Result")]),s._v(" "),s._l(this.questions,function(e,t){return n("section",[n("h4",[s._v(s._s(t+1)+"."+s._s(e.question))]),s._v(" "),n("ul",s._l(e.answers,function(e){return n("li",[s._v(s._s(e))])}),0),s._v(" "),e.answer==s.answers[t]?n("p",{staticClass:"correct"},[s._v("正解!!")]):n("div",{staticClass:"incorrect"},[n("p",[s._v("不正解...")]),s._v(" "),n("p",[s._v("正解は「"+s._s(e.answers[e.answer])+"」でした。")])])])})],2):s._e()])},staticRenderFns:[]};var v=n("VU/8")({name:"lesson03",data:function(){return{answers:[],questionIndex:0,questions:[{question:"見出しの要素について正しい内容を選択してください。",answers:["<h1>は一番大きな見出し、<h5>が一番小さな見出しになる","<h1>はブロック要素である","<h1>はインライン要素である"],answer:1},{question:"段落を表すタグはどれでしょうか。",answers:["<p>","<div>","<br>"],answer:0},{question:"HTMLのコメントアウトを選んでください。",answers:["/*〜*/","\x3c!-- --\x3e","//"],answer:1},{question:"<a>要素にリンクの飛先を指定する際、正しい記述方法を選んでください。",answers:["<a link = リンク先のurl >","<a style = リンク先のurl >","<a href = リンク先のurl >"],answer:2},{question:"<img>要素について正しい説明を選んでください。",answers:["終了タグが要らない","ブロック要素である","開始タグが要らない"],answer:0},{question:"リストに関して正しい説明を選んでください",answers:["<li>要素はインライン要素である","<ul>の子要素は<li>以外使用できない","<li>の子要素に<ol>は使用できない"],answer:1},{question:"要素に全体を囲む赤色のボーダー(枠線)をつけたいです。正しい記述を選択してください。",answers:["border:5px red;","border:5px solid red;","border:dashed red;"],answer:1},{question:"paddingで左20px、上40px、右20px、下30pxの余白をつけてください。",answers:["padding:20px 40px 20px 30px;","padding:40px 30px 20px 20px","padding:40px 20px 30px 20px;"],answer:2},{question:"marginで上下20px、左右60pxの余白をつけてください。",answers:["margin:20px 60px;","margin:60px 20px;","margin:20px 20px 60px;"],answer:0},{question:"<h1>と<p>に同じCSSを指定してください",answers:["h1 p{プロパティ:値;}","h1,p{プロパティ:値;}","h1+p{プロパティ:値;}"],answer:1}]}},methods:{addAnswer:function(s){this.answers.push(s),this.completed||this.questionIndex++}},computed:{currentQuestion:function(){return this.questions[this.questionIndex]},completed:function(){return this.questions.length==this.answers.length}}},_,!1,function(s){n("MiMN")},null,null).exports,d={render:function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("div",{staticClass:"quizContent",attrs:{id:"lesson01"}},[s.completed?s._e():n("div",[n("section",{staticClass:"questionArea"},[n("h3",[s._v("Question."+s._s(s.questionIndex+1))]),s._v(" "),n("h4",[s._v(s._s(s.currentQuestion.question))]),s._v(" "),n("ul",{staticClass:"answerList"},s._l(s.currentQuestion.answers,function(e,t){return n("li",{on:{click:function(e){return s.addAnswer(t)}}},[s._v(s._s(e))])}),0)])]),s._v(" "),s.completed?n("div",{staticClass:"resultArea"},[n("h3",[s._v("Result")]),s._v(" "),s._l(this.questions,function(e,t){return n("section",[n("h4",[s._v(s._s(t+1)+"."+s._s(e.question))]),s._v(" "),n("ul",s._l(e.answers,function(e){return n("li",[s._v(s._s(e))])}),0),s._v(" "),e.answer==s.answers[t]?n("p",{staticClass:"correct"},[s._v("正解!!")]):n("div",{staticClass:"incorrect"},[n("p",[s._v("不正解...")]),s._v(" "),n("p",[s._v("正解は「"+s._s(e.answers[e.answer])+"」でした。")])])])})],2):s._e()])},staticRenderFns:[]};var w=n("VU/8")({name:"lesson01",data:function(){return{answers:[],questionIndex:0,questions:[{question:"reset.cssについて正しい説明を選んでください。",answers:["ブラウザ毎に異なるCSSをリセットするためのCSS","HTMLで最後に読み込む必要があるCSS","古いブラウザに対応させるためのCSS"],answer:0},{question:"floatについて誤った説明を選んでください。",answers:["要素を浮かせて回り込ませるプロパティ","使用する場合は必ずclearプロパティで解除する必要がある","要素を中央に寄せるプロパティ"],answer:2},{question:"clearfixについて正しい説明を選んでください。",answers:["擬似要素を用いてclearプロパティを使用する手法","float解除用のプロパティ","ブラウザに搭載された標準機能"],answer:0},{question:"position:absoluteの説明で正しいものを選びなさい。",answers:["絶対位置への配置。スクロールしても位置が固定されたままになる","絶対位置への配置。親要素にpositionプロパティでstatic以外の値を指定した場合に表示される位置が基準位置となる","相対位置への配置。元の位置が基準位置となる"],answer:1},{question:"box-sizing:border-boxの説明で正しいものを選びなさい。",answers:["ボックスサイズの算出方法。paddingとborderの幅を要素の幅と高さに含める","ボックスサイズの算出方法。paddingとmarginの幅を要素の幅と高さに含める","ボックスサイズの算出方法。borderの幅を要素の幅と高さに含める"],answer:0},{question:":first-child擬似クラスについての説明で正しいものを選びなさい。",answers:["兄弟要素のグループの中でその種類の最初の要素への指定","最初に現れる子要素への指定","親要素への指定"],answer:1},{question:":first-child擬似クラスと:first-of-type擬似クラスの違いについて正しいものを選びなさい。",answers:["対応しているブラウザが異なる","囲んでいる要素のなかでの順番の数え方が異なる","特に違いはない"],answer:1},{question:":nth-child擬似クラスで偶数を指定する際の記述で誤ったものを選びなさい。",answers:["nth-child(2n)","nth-child(even)","nth-child(odd)"],answer:2}]}},methods:{addAnswer:function(s){this.answers.push(s),this.completed||this.questionIndex++}},computed:{currentQuestion:function(){return this.questions[this.questionIndex]},completed:function(){return this.questions.length==this.answers.length}}},d,!1,function(s){n("/HCd")},null,null).exports;t.a.use(o.a);var p=new o.a({routes:[{path:"/lesson01",name:"Lesson01",component:u},{path:"/lesson02",name:"Lesson02",component:c},{path:"/lesson03",name:"Lesson03",component:v},{path:"/lesson04",name:"Lesson04",component:w}]});t.a.config.productionTip=!1,new t.a({el:"#app",router:p,components:{App:i},template:"<App/>"})},ewB3:function(s,e){},uRv0:function(s,e){}},["NHnr"]);
//# sourceMappingURL=app.22ee28585542b062f112.js.map