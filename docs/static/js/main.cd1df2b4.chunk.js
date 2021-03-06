(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),s=(a(16),a(2)),i=a(3),c=a(6),d=a(4),u=a(1),h=a(5),v=(a(17),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"finished",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"Word",style:{color:this.props.code.color}},this.props.code.word)}}]),t}(n.Component)),m=[{color:"#FF0000",word:"RED",value:0},{color:"#FF6600",word:"ORANGE",value:1},{color:"#FFFF00",word:"YELLOW",value:2},{color:"#00FF00",word:"GREEN",value:3},{color:"#0000FF",word:"BLUE",value:4},{color:"#AA00FF",word:"PURPLE",value:5}],p=[m[2],m[1],m[5],m[3],m[0],m[4]],w=m,k=new Audio("./button.wav"),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){k.play(),this.props.onClick&&this.props.onClick(this.props.color.value)}},{key:"render",value:function(){return r.a.createElement("button",{className:"ColorButton"+(this.props.unselected?" unselected":""),style:{backgroundColor:this.props.color.color},onClick:this.handleClick})}}]),t}(n.Component),C=new Audio("./button.wav"),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){C.play(),this.props.onClick&&this.props.onClick(this.props.color.value)}},{key:"render",value:function(){return r.a.createElement("button",{className:"WordButton"+(this.props.unselected?" unselected":""),onClick:this.handleClick},this.props.color.word)}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleButtonClick=a.handleButtonClick.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleButtonClick",value:function(e){this.props.onValueChanged&&this.props.onValueChanged(e)}},{key:"render",value:function(){var e=this,t=w.map(function(t){var a=null!=e.props.value&&e.props.value!==t.value;return e.props.isColor?r.a.createElement(b,{color:t,unselected:a,onClick:e.handleButtonClick}):r.a.createElement(f,{color:t,unselected:a,onClick:e.handleButtonClick})});return r.a.createElement("div",{className:"Code"},r.a.createElement("div",{className:"TerminalTitle"},"From Terminal ",this.props.from),t)}}]),t}(n.Component),j=a(9),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={remaining:null},a.intervalHandle=null,a.tick=a.tick.bind(Object(u.a)(a)),a.start=a.start.bind(Object(u.a)(a)),a.ended=a.ended.bind(Object(u.a)(a)),a.start(),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"start",value:function(){this.startTime=1e3*Math.floor(Date.now()/1e3/this.props.seconds)*this.props.seconds,this.intervalHandle=setInterval(this.tick,50)}},{key:"ended",value:function(){clearInterval(this.intervalHandle),this.props.timerEnded&&this.props.timerEnded(),this.start()}},{key:"tick",value:function(){var e=this.getRemaining();this.setState({remaining:e}),e<=0&&this.ended()}},{key:"getRemaining",value:function(){var e=Date.now()-this.startTime;return this.props.seconds-e/1e3}},{key:"addBar",value:function(e,t){var a="TimerSegment"+(e>=t?" unselected":"");return r.a.createElement("div",{className:a})}},{key:"render",value:function(){var e=this,t=Math.round(this.state.remaining),a=Object(j.a)(Array(30).keys()).map(function(a){return e.addBar(a,t)});return r.a.createElement("div",{className:"TimerBar"},a)}}]),t}(n.Component),E=new Audio("./chord.wav"),g=new Audio("./tada.wav"),V=function(e){function t(e){var a;Object(s.a)(this,t);var n=(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).getSeed(),r=a.getCodes(n),o=window.location.hash.substr(1),l=parseInt(o);return(isNaN(l)||l>3||l<1)&&(l=Math.floor(3*Math.random())+1),a.state={terminal:l,codes:r,seed:n,selectedColorValue:null,selectedWordValue:null,isCorrect:!1},a.handleColorSelected=a.handleColorSelected.bind(Object(u.a)(a)),a.handleWordSelected=a.handleWordSelected.bind(Object(u.a)(a)),a.timerEnded=a.timerEnded.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getSeed",value:function(){return Math.floor(Date.now()/3e4)}},{key:"getCodes",value:function(e){return[{},{color:p[this.wrapValue2(e+0)].color,word:p[this.wrapValue2(e+1)].word},{color:p[this.wrapValue2(e+2)].color,word:p[this.wrapValue2(e+3)].word},{color:p[this.wrapValue2(e+4)].color,word:p[this.wrapValue2(e+5)].word}]}},{key:"getAnswer",value:function(e,t){var a=this.wrapValue(e+1),n=this.wrapValue(e-1);return{colorFrom:a,wordFrom:n,color:t[a].color,word:t[n].word}}},{key:"wrapValue",value:function(e){return e<1?3:e>3?1:e}},{key:"wrapValue2",value:function(e){return e%6}},{key:"handleColorSelected",value:function(e){this.setState({selectedColorValue:e}),this.checkAnswer(e,this.state.selectedWordValue)}},{key:"handleWordSelected",value:function(e){this.setState({selectedWordValue:e}),this.checkAnswer(this.state.selectedColorValue,e)}},{key:"checkAnswer",value:function(e,t){var a=this.getAnswer(this.state.terminal,this.state.codes);if(console.log(a,this.state),null!=e&&null!=t){var n=m[t].word,r=m[e].color;a.word===n&&a.color===r?(this.setState({isCorrect:!0}),g.play()):this.resetSelections(!0)}}},{key:"resetSelections",value:function(e){this.setState({selectedColorValue:null,selectedWordValue:null,isCorrect:!1}),e&&E.play()}},{key:"timerEnded",value:function(){var e=this.getSeed(),t=this.getCodes(e);this.setState({codes:t,seed:e});var a=null!=this.state.selectedColorValue||null!=this.state.selectedWordValue;this.resetSelections(a)}},{key:"render",value:function(){var e=this.state.codes[this.state.terminal],t=this.getAnswer(this.state.terminal,this.state.codes),a=r.a.createElement("div",{class:"Success"},"Access Granted");return this.state.isCorrect||(a=r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{isColor:!0,from:t.colorFrom,value:this.state.selectedColorValue,onValueChanged:this.handleColorSelected}),r.a.createElement(O,{isColor:!1,from:t.wordFrom,value:this.state.selectedWordValue,onValueChanged:this.handleWordSelected}))),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"TerminalTitle"},"Terminal ",this.state.terminal),r.a.createElement(v,{code:e}),r.a.createElement(y,{seconds:"30",timerEnded:this.timerEnded}),a)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.cd1df2b4.chunk.js.map