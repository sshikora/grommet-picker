(this["webpackJsonpgrommet-picker"]=this["webpackJsonpgrommet-picker"]||[]).push([[0],{44:function(e,t,a){e.exports=a(57)},49:function(e,t,a){},50:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=(a(49),a(50),a(22)),s=a(23),l=a(39),m=a(37),u=a(66),d=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e.onSelectSingle=function(t){return e.setState({date:t})},e.onSelectRange=function(t){var a=e.state,n=a.date,r=a.dates,i=a.previousSelectedDate;if(r){var o=r[0].map((function(e){return new Date(e)})),c=new Date(i),s=new Date(t);s.getTime()<c.getTime()?s.getTime()<o[0].getTime()?e.setState({dates:[[t,r[0][1]]]}):s.getTime()>o[0].getTime()&&e.setState({dates:[[r[0][0],t]]}):s.getTime()>c.getTime()&&(s.getTime()>o[1].getTime()?e.setState({dates:[[r[0][0],t]]}):s.getTime()<o[1].getTime()&&e.setState({dates:[[t,r[0][1]]]}))}else if(n){var l=new Date(n),m=new Date(t);l.getTime()<m.getTime()?e.setState({date:void 0,dates:[[n,t]]}):l.getTime()>m.getTime()&&e.setState({date:void 0,dates:[[t,n]]})}else e.setState({date:t});e.setState({previousSelectedDate:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.date,a=e.dates;return r.a.createElement(u.a,{a11yTitle:"Calendar Date 1",date:t,dates:a,onSelect:this.onSelectRange})}}]),a}(n.Component),g=a(38),v=a(65);var f=function(){var e=r.a.useState("medium"),t=Object(g.a)(e,2),a=t[0],n=t[1];return r.a.createElement(v.a,{options:["small","medium","large"],value:a,onChange:function(e){var t=e.option;return n(t)}})};var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.26095d0e.chunk.js.map