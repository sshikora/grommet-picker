(this["webpackJsonpgrommet-picker"]=this["webpackJsonpgrommet-picker"]||[]).push([[0],{47:function(e,t,a){e.exports=a(60)},52:function(e,t,a){},53:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=(a(52),a(53),a(24)),l=a(25),s=a(41),m=a(39),u=a(73),d=a(72),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e.onSelectSingle=function(t){return e.setState({date:t})},e.onSelectRange=function(t){var a=e.state,n=a.date,r=a.dates,i=a.previousSelectedDate;if(r){var o=r[0].map((function(e){return new Date(e)})),c=new Date(i),l=new Date(t);l.getTime()<c.getTime()?l.getTime()<o[0].getTime()?e.setState({dates:[[t,r[0][1]]]}):l.getTime()>o[0].getTime()&&e.setState({dates:[[r[0][0],t]]}):l.getTime()>c.getTime()&&(l.getTime()>o[1].getTime()?e.setState({dates:[[r[0][0],t]]}):l.getTime()<o[1].getTime()&&e.setState({dates:[[t,r[0][1]]]}))}else if(n){var s=new Date(n),m=new Date(t);s.getTime()<m.getTime()?e.setState({date:void 0,dates:[[n,t]]}):s.getTime()>m.getTime()&&e.setState({date:void 0,dates:[[t,n]]})}else e.setState({date:t});e.setState({previousSelectedDate:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.date,a=e.dates,n="";t&&(n=new Date(t).toLocaleDateString("en-US"));return r.a.createElement("div",null,r.a.createElement(u.a,{placeholder:"date",value:n}),r.a.createElement(d.a,{a11yTitle:"Calendar Date 1",date:t,dates:a,onSelect:this.onSelectSingle}))}}]),a}(n.Component),v=a(40),S=a(70);var p=function(){var e=r.a.useState("medium"),t=Object(v.a)(e,2),a=t[0],n=t[1];return r.a.createElement(S.a,{options:["small","medium","large"],value:a,onChange:function(e){var t=e.option;return n(t)}})};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.efbb4e40.chunk.js.map