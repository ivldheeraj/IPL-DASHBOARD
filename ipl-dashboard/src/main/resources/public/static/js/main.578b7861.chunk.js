(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));c(1);var a=c(4),n=(c(32),c(0)),s=function(e){var t=e.teamName,c=e.match;if(!c)return null;var s=c.team1===t?c.team2:c.team1,r="/teams/".concat(s),i=t===c.matchWinner;return Object(n.jsxs)("div",{className:i?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"vs",children:"vs"}),Object(n.jsx)("h1",{children:Object(n.jsx)(a.b,{to:r,children:s})}),Object(n.jsxs)("h2",{className:"match-date",children:[" ",c.date]}),Object(n.jsx)("h3",{className:"match-venue",children:c.venue}),Object(n.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(n.jsxs)("div",{className:"additional-detail",children:[Object(n.jsx)("h3",{children:"First Innings"}),Object(n.jsx)("p",{children:c.team1}),Object(n.jsx)("h3",{children:"Second Innings"}),Object(n.jsx)("p",{children:c.team2}),Object(n.jsx)("h3",{children:"Man of the Match"}),Object(n.jsx)("p",{children:c.playerOfMatch}),Object(n.jsx)("h3",{children:"Umpires"}),Object(n.jsxs)("p",{children:[c.umpire1,", ",c.umpire2]})]})]})}},,,,,,,function(e,t,c){"use strict";(function(e){c.d(t,"a",(function(){return d}));var a=c(8),n=c.n(a),s=c(10),r=c(11),i=c(1),j=c(2),l=c(4),m=c(13),h=c(22),o=(c(40),c(23)),u=c(0),d=function(){var t=Object(i.useState)({matches:[]}),c=Object(r.a)(t,2),a=c[0],d=c[1],b=Object(j.f)().teamName;return Object(i.useEffect)((function(){(function(){var t=Object(s.a)(n.a.mark((function t(){var c,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.REACT_APP_API_ROOT_URL,"/team/").concat(b));case 2:return c=t.sent,t.next=5,c.json();case 5:a=t.sent,d(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[b]),a&&a.teamName?Object(u.jsxs)("div",{className:"TeamPage",children:[Object(u.jsx)("div",{className:"team-name-section",children:Object(u.jsx)("h1",{className:"team-name",children:a.teamName})}),Object(u.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(u.jsx)(o.PieChart,{data:[{title:"Losses",value:a.totalMatches-a.totalWins,color:"#a34d5d"},{title:"Wins",value:a.totalWins,color:"#4da375"}]})]}),Object(u.jsxs)("div",{className:"match-detail-section",children:[Object(u.jsx)("h3",{children:"Latest Matches"}),Object(u.jsx)(m.a,{teamName:a.teamName,match:a.matches[0]})]}),a.matches.slice(1).map((function(e){return Object(u.jsx)(h.a,{teamName:a.teamName,match:e},e.id)})),Object(u.jsx)("div",{className:"more-link",children:Object(u.jsx)(l.b,{to:"/teams/".concat(b,"/matches/").concat("2020"),children:"More >"})})]}):Object(u.jsx)("h1",{children:" Team Not Found"})}}).call(this,c(30))},,function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));c(1);var a=c(4),n=(c(39),c(0)),s=function(e){var t=e.match,c=e.teamName;if(!t)return null;var s=t.team1===c?t.team2:t.team1,r="/teams/".concat(s),i=c===t.matchWinner;return Object(n.jsxs)("div",{className:i?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(n.jsx)("span",{className:"vs",children:"vs"}),Object(n.jsxs)("h1",{children:[" ",Object(n.jsx)(a.b,{to:r,children:s})]}),Object(n.jsxs)("p",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result]})]})}},,,,,,function(e,t,c){},function(e,t,c){},,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(19),r=c.n(s),i=(c(28),c(29),c(20)),j=c(4),l=c(2),m=c(8),h=c.n(m),o=c(10),u=c(11),d=c(13),b=(c(41),c(42),c(0)),O=function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(b.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})},x=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(l.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(b.jsxs)("div",{className:"MatchPage",children:[Object(b.jsxs)("div",{className:"year-selector",children:[Object(b.jsx)("h3",{children:"Select Year"}),Object(b.jsx)(O,{teamName:r})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),c.map((function(e){return Object(b.jsx)(d.a,{teamName:r,match:e},e.id)}))]})]})},f=(c(43),function(e){var t=e.teamName;return Object(b.jsx)("div",{className:"TeamTile",children:Object(b.jsx)("h1",{children:Object(b.jsx)(j.b,{to:"/teams/".concat(t),children:t})})})}),v=(c(44),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)("div",{className:"HomePage",children:[Object(b.jsx)("div",{className:"Header-section",children:Object(b.jsx)("h1",{className:"app-name",children:"IPL Dashboard"})}),Object(b.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(b.jsx)(f,{teamName:e.teamName},e.id)}))})]})});var p=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(j.a,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/teams/:teamName/matches/:year",children:Object(b.jsx)(x,{})}),Object(b.jsx)(l.a,{path:"/teams/:teamName",children:Object(b.jsx)(i.a,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(v,{})})]})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),N()}],[[45,1,2]]]);
//# sourceMappingURL=main.578b7861.chunk.js.map