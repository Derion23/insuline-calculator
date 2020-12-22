(this["webpackJsonpinsulin-calculator"]=this["webpackJsonpinsulin-calculator"]||[]).push([[0],{36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(21),l=a(3),u=a(4),s=a(1),d=a(2),m=a(12);a(5);function g(e){var t=e.id,a=e.type,n=void 0===a?"text":a,c=e.name,i=void 0===c?"":c,o=e.value,l=void 0===o?"":o,u=e.onChange,s=void 0===u?"":u,d=e.description,m=void 0===d?"":d,g=e.placeholder,b=void 0===g?"":g,f=e.unit,h=void 0===f?"":f;return r.a.createElement("div",null,r.a.createElement("label",null,m),r.a.createElement("br",null),r.a.createElement("input",{type:n,autoComplete:"off",id:t,name:i,placeholder:b,value:l,onChange:""===s?function(){return 0}:function(e){return s(e)}}),r.a.createElement("label",null,h))}function b(e){var t=e.setBloodSugar,a=e.setDayTimeChoice,n=e.setTargetBloodSugar,c=e.setCorrectionFactor,i=e.setCarbohydrateFactor,o=e.bloodSugar,l=e.dayTimeChoice,u=e.targetBloodSugar,s=e.correctionFactor,d=e.carbohydrateFactor,m=e.refreshPage;return r.a.createElement("div",{className:"space-around"},r.a.createElement(g,{name:"BloodSugar",type:"number",value:o.toString(),description:"Blutzucker",unit:"mg/dl",onChange:function(e){return t(e.target.value)}}),r.a.createElement("p",{className:"center-elements day-time-choice-buttons"},r.a.createElement("button",{className:"automatic-day-time-choice-button \n                    ".concat("automatic"===l&&"active-button"),onClick:function(){a("automatic"),m()}},"Automatic"),r.a.createElement("button",{className:"morning-day-time-choice-button \n                    ".concat("morning"===l&&"active-button"),onClick:function(){a("morning"),m()}},"Morgens"),r.a.createElement("button",{className:"midday-day-time-choice-button \n                    ".concat("midday"===l&&"active-button"),onClick:function(){a("midday"),m()}},"Mittags"),r.a.createElement("button",{className:"evening-day-time-choice-button \n                    ".concat("evening"===l&&"active-button"),onClick:function(){a("evening"),m()}},"Abends")),r.a.createElement(g,{name:"TargetBloodSugar",type:"number",value:u,description:"Blutzucker Zielwert",unit:"mg/dl",onChange:function(e){return n(e.target.value)}}),r.a.createElement(g,{name:"CorrectionFactor",type:"number",value:s,description:"Korrektur-Faktor",unit:"mg/dl",onChange:function(e){return c(e.target.value)}}),r.a.createElement(g,{name:"CarbohydrateFactor",type:"number",value:d,description:"KE-Faktor",onChange:function(e){return i(e.target.value)}}))}function f(e){var t=e.suggestionText,a=e.handleSuggestionClick;return r.a.createElement("li",{onClick:function(){return a(t)}},t)}function h(e){var t=e.allSuggestions,a=e.searchingText,n=e.handleSuggestionClick,c=e.hideSuggestionList,i=""===a?[]:t.filter((function(e){return e.slice(0,a.length).toLowerCase()===a.toLowerCase()}));return r.a.createElement("div",null,0!==i.length&&r.a.createElement("ul",{className:"suggestion-list"},r.a.createElement("button",{className:"hide-suggestion-list-button",onClick:function(){return c()}}),i.map((function(e){return r.a.createElement(f,{key:Math.random(),suggestionText:e,handleSuggestionClick:n})}))))}function S(e){var t=e.id,a=e.isPer100gSlideActive,n=void 0===a||a,c=e.per100gSlide,i=void 0===c?{}:c,o=e.perPieceSlide,l=void 0===o?{}:o,u=e.foodNameSuggestionsForPer100gSlide,s=e.foodNameSuggestionsForPerPieceSlide,d=e.handleIsIntermealChange,m=e.handlePer100gSlideValueChange,b=e.handlePerPieceSlideValueChange,f=e.deleteFoodItem,S=e.handleSuggestionClick,p=e.handleSlideChange,v=e.hideSuggestionList,E=r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"intermeal-checkbox"},r.a.createElement("input",{type:"checkbox",checked:i.isIntermeal,onChange:function(){return d(t,1)}})," ZM?"),r.a.createElement(g,{id:"".concat(t,"-per100gSlideName"),name:"name",description:"Name",value:i.name,onChange:function(e){return m(e)}}),i.shouldDisplaySuggestions&&r.a.createElement(h,{allSuggestions:u,searchingText:i.name,handleSuggestionClick:function(e){return S(e,t,!0)},hideSuggestionList:function(){return v(t,!0)}}),r.a.createElement(g,{id:"".concat(t,"-grams"),name:"grams",type:"number",description:"Gramm",value:i.grams,onChange:function(e){return m(e)}}),r.a.createElement(g,{id:"".concat(t,"-carbohydratesPer100Grams"),name:"carbohydratesPer100Grams",type:"number",description:"Kohlenhydrate pro 100g",value:i.carbohydratesPer100Grams,onChange:function(e){return m(e)}}),"number"===typeof i.KE&&r.a.createElement("label",{className:"food-item-ke-label"},"".concat(i.KE," KE"))),O=r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"intermeal-checkbox"},r.a.createElement("input",{type:"checkbox",checked:l.isIntermeal,onChange:function(){return d(t,2)}})," ZM?"),r.a.createElement(g,{id:"".concat(t,"-perPieceSlideName"),name:"name",description:"Name",value:l.name,onChange:function(e){return b(e)}}),l.shouldDisplaySuggestions&&r.a.createElement(h,{allSuggestions:s,searchingText:l.name,handleSuggestionClick:function(e){return S(e,t,!1)},hideSuggestionList:function(){return v(t,!1)}}),r.a.createElement(g,{id:"".concat(t,"-numberOfPieces"),name:"numberOfPieces",type:"number",description:"Anzahl",value:l.numberOfPieces,onChange:function(e){return b(e)}}),r.a.createElement(g,{id:"".concat(t,"-carbohydratesPerPiece"),name:"carbohydratesPerPiece",type:"number",description:"Kohlenhydrate pro St\xfcck",value:l.carbohydratesPerPiece,onChange:function(e){return b(e)}}),"number"===typeof l.KE&&r.a.createElement("label",{className:"food-item-ke-label"},"".concat(l.KE," KE")));return r.a.createElement("div",null,r.a.createElement("p",{className:"center-elements"},r.a.createElement("button",{className:"per-100g-button ".concat(n&&"active-button"),onClick:function(){return p(t,!0)}},"pro 100g"),r.a.createElement("button",{className:"per-piece-button ".concat(!n&&"active-button"),onClick:function(){return p(t,!1)}},"pro St\xfcck")),r.a.createElement("div",{className:"space-around"},r.a.createElement("button",{className:"delete-food-item-button",onClick:function(){return f(t)}}),n?E:O),r.a.createElement("hr",null))}function p(e){var t=e.foodItems,a=void 0===t?[]:t,n=e.foodNameSuggestionsForPer100gSlide,c=void 0===n?[]:n,i=e.foodNameSuggestionsForPerPieceSlide,o=void 0===i?[]:i,l=e.addNewFoodItem,u=e.handleIsIntermealChange,s=e.handlePer100gSlideValueChange,d=e.handlePerPieceSlideValueChange,m=e.deleteFoodItem,g=e.handleSuggestionClick,b=e.handleSlideChange,f=e.hideSuggestionList;return r.a.createElement("div",null,r.a.createElement("h3",null,"Elemente"),a.map((function(e){return r.a.createElement(S,{key:e.key,id:e.id,isPer100gSlideActive:e.isPer100gSlideActive,per100gSlide:e.per100gSlide,perPieceSlide:e.perPieceSlide,foodNameSuggestionsForPer100gSlide:c,foodNameSuggestionsForPerPieceSlide:o,handleIsIntermealChange:u,handlePer100gSlideValueChange:s,handlePerPieceSlideValueChange:d,deleteFoodItem:m,handleSuggestionClick:g,handleSlideChange:b,hideSuggestionList:f})})),r.a.createElement("p",null,r.a.createElement("button",{className:"add-new-food-item-button",onClick:function(){return l()}})))}function v(e){var t=e.totalIE,a=e.totalMainMealKE,n=e.totalIntermealKE,c=e.totalKE,i=e.totalCorrectionInsulin,o=e.outputRef;return r.a.createElement("div",{ref:o},""===t||null==t||t<=0?"":r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"space-around"},r.a.createElement("p",{className:"output"},"Hauptmahlzeit-KE : ",a," KE ",r.a.createElement("br",null),"Zwischenmahlzeit-KE : ",n," KE ",r.a.createElement("br",null),"Gesamt-KE: ",c," KE ",r.a.createElement("br",null),r.a.createElement("br",null),"Korrektur-Insulin: ",i," IE  ",r.a.createElement("br",null),r.a.createElement("span",{style:{fontWeight:"bold"}}," Gesamt-Insulin: ",t," IE ")))))}function E(e,t){var a="insulin-calculator-"+e,r=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),c=Object(d.a)(r,2),i=c[0],o=c[1];return Object(n.useEffect)((function(){null!=i&&localStorage.setItem(a,JSON.stringify(i))}),[i]),[i,o]}var O="insulin-calculator-",y="";function P(){var e=E("dayTimeChoice","automatic"),t=Object(d.a)(e,2),a=t[0],c=t[1],i=E("lastSavedData",{foodItems:[]}),g=Object(d.a)(i,2),f=g[0],h=g[1],S=E("foodNameSuggestions-per100gSlide",[]),P=Object(d.a)(S,2),j=P[0],C=P[1],I=E("foodNameSuggestions-perPieceSlide",[]),N=Object(d.a)(I,2),k=N[0],F=N[1],K=Object(n.useState)(""),w=Object(d.a)(K,2),B=w[0],M=w[1],D=E("".concat(Se(),"-targetBloodSugar")),T=Object(d.a)(D,2),A=T[0],L=T[1],G=E("".concat(Se(),"-correctionFactor")),x=Object(d.a)(G,2),V=x[0],J=x[1],R=E("".concat(Se(),"-carbohydrateFactor")),z=Object(d.a)(R,2),Z=z[0],H=z[1],W=E("foodItems",[]),U=Object(d.a)(W,2),q=U[0],Q=U[1],X=Object(n.useState)(""),Y=Object(d.a)(X,2),$=Y[0],_=Y[1],ee=Object(n.useState)(""),te=Object(d.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(""),ce=Object(d.a)(re,2),ie=ce[0],oe=ce[1],le=Object(n.useState)(""),ue=Object(d.a)(le,2),se=ue[0],de=ue[1],me=Object(n.useState)(""),ge=Object(d.a)(me,2),be=ge[0],fe=ge[1],he=Object(n.useRef)();function Se(){return"automatic"===a?Ee():a}function pe(){window.location.reload()}function ve(e){return"string"!==typeof e?"":"".concat(e[0].toUpperCase()).concat(e.slice(1))}function Ee(){var e=(new Date).toLocaleTimeString().split(":"),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Pe(a)+Pe(n)/60;return r<=11.5?"morning":r<=16?"midday":"evening"}function Oe(e){var t=e.target,a=t.name,n=t.value,r=e.target.id;if("string"===typeof r&&(r=Pe(r=r.split("-")[0])),"-"!==n[n.length-1]){var c=q.map((function(e){var t;if(r!==e.id)return e;if("name"===a){var c=document.getElementById("".concat(r,"-per100gSlideName")).getBoundingClientRect().y,i=.4*window.innerHeight;m.animateScroll.scrollMore(c-i);var o="".concat(O,"foodItem-").concat(n.toLowerCase(),"-carbohydratesPer100Grams"),d=localStorage.getItem(o);if(null!=d){var g,b=JSON.parse(d),f=Object(s.a)(Object(s.a)({},e.per100gSlide),{},(g={},Object(l.a)(g,a,n),Object(l.a)(g,"shouldDisplaySuggestions",!1),Object(l.a)(g,"carbohydratesPer100Grams",b),g));return Object(s.a)(Object(s.a)({},e),{},{per100gSlide:f})}}var h=""!==e.per100gSlide.name&&null!=e.per100gSlide.name&&"."!==e.per100gSlide.name[0];if("carbohydratesPer100Grams"===a&&h){var S="".concat(O,"foodItem-").concat(e.per100gSlide.name.toLowerCase(),"-carbohydratesPer100Grams"),p=ve(e.per100gSlide.name.toLowerCase());""!==n?(localStorage.setItem(S,JSON.stringify(n)),function(e){var t=e;Array.isArray(e)||(t=[e]),0!==(t=t.filter((function(e){return!j.some((function(t){return e===t}))}))).length&&(t=[].concat(Object(u.a)(j),Object(u.a)(t)),C(t))}(p)):(localStorage.removeItem(S),function(e){for(var t,a=0;a<j.length;a++)if(e===j[a]){t=a;break}if(null!=t){var n=Object(u.a)(j);n.splice(t,1),C(n)}}(p))}var v="name"===a,E=Object(s.a)(Object(s.a)({},e.per100gSlide),{},(t={},Object(l.a)(t,a,n),Object(l.a)(t,"shouldDisplaySuggestions",v),t));return Object(s.a)(Object(s.a)({},e),{},{per100gSlide:E})}));Q(c)}}function ye(e){var t=e.target,a=t.name,n=t.value,r=e.target.id;if("string"===typeof r&&(r=Pe(r=r.split("-")[0])),"-"!==n[n.length-1]){var c=q.map((function(e){var t;if(r!==e.id)return e;if("name"===a){var c=document.getElementById("".concat(r,"-per100gSlideName")).getBoundingClientRect().y,i=.4*window.innerHeight;m.animateScroll.scrollMore(c-i);var o="".concat(O,"foodItem-").concat(n.toLowerCase(),"-carbohydratesPerPiece"),d=localStorage.getItem(o);if(null!=d){var g,b=JSON.parse(d),f=Object(s.a)(Object(s.a)({},e.perPieceSlide),{},(g={},Object(l.a)(g,a,n),Object(l.a)(g,"shouldDisplaySuggestions",!1),Object(l.a)(g,"carbohydratesPerPiece",b),g));return Object(s.a)(Object(s.a)({},e),{},{perPieceSlide:f})}}var h=""!==e.perPieceSlide.name&&null!=e.perPieceSlide.name&&"."!==e.perPieceSlide.name[0];if("carbohydratesPerPiece"===a&&h){var S="".concat(O,"foodItem-").concat(e.perPieceSlide.name.toLowerCase(),"-carbohydratesPerPiece"),p=ve(e.perPieceSlide.name.toLowerCase());""!==n?(localStorage.setItem(S,JSON.stringify(n)),function(e){var t=e;Array.isArray(e)||(t=[e]),0!==(t=t.filter((function(e){return!k.some((function(t){return e===t}))}))).length&&(t=[].concat(Object(u.a)(k),Object(u.a)(t)),F(t))}(p)):(localStorage.removeItem(S),function(e){for(var t,a=0;a<k.length;a++)if(e===k[a]){t=a;break}if(null!=t){var n=Object(u.a)(k);n.splice(t,1),F(n)}}(p))}var v="name"===a,E=Object(s.a)(Object(s.a)({},e.perPieceSlide),{},(t={},Object(l.a)(t,a,n),Object(l.a)(t,"shouldDisplaySuggestions",v),t));return Object(s.a)(Object(s.a)({},e),{},{perPieceSlide:E})}));Q(c)}}function Pe(e){if("number"===typeof e)return e;if("string"!==typeof e)return-1;var t=e.slice();t=t.replace(",",".");var a=parseFloat(t);return Number.isNaN(a)?-1:a}function je(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a="ein oder mehrere Werte sind nicht g\xfcltig";function n(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.every((function(e){return-1!==Pe(e)}))}function r(e){if(e.isPer100gSlideActive){var r=e.per100gSlide.grams,c=e.per100gSlide.carbohydratesPer100Grams;return n(r,c)?Pe(r)*(Pe(c)/100)/10:(t&&alert(a),0)}var i=e.perPieceSlide.numberOfPieces,o=e.perPieceSlide.carbohydratesPerPiece;return n(i,o)?Pe(i)*Pe(o)/10:(t&&alert(a),0)}function c(e,r,c){return n(e,r,c)?(Pe(e)-Pe(r))/Pe(c):(""!==e&&t&&alert(a),0)}var i=c(B,A,V);oe(Math.round(10*i)/10);var l,u=0,d=0,m=[],g=Object(o.a)(q);try{for(g.s();!(l=g.n()).done;){var b=l.value,f=r(b);u+=f,m.push(f),b.isPer100gSlideActive?d+=b.per100gSlide.isIntermeal?f:0:d+=b.perPieceSlide.isIntermeal?f:0}}catch(p){g.e(p)}finally{g.f()}ne(Math.round(10*u)/10),de(Math.round(10*d)/10),fe(Math.round(10*(u-d))/10);var h=q.map((function(e,t){var a=Math.round(10*m[t])/10;return e.isPer100gSlideActive?Object(s.a)(Object(s.a)({},e),{},{per100gSlide:Object(s.a)(Object(s.a)({},e.per100gSlide),{},{KE:a})}):Object(s.a)(Object(s.a)({},e),{},{perPieceSlide:Object(s.a)(Object(s.a)({},e.perPieceSlide),{},{KE:a})})}));if(Q(h),!n(Z))return t&&alert(a),-1;var S=u*Pe(Z);S+=i,S=Math.round(10*S)/10,_(S),e&&setTimeout((function(){he.current.scrollIntoView({smooth:!0})}),5)}return Object(n.useEffect)((function(){y=Ee(),setInterval((function(){y!==Ee()&&pe()}),6e4)}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Insulin Rechner"),r.a.createElement("p",null,r.a.createElement("button",{className:"clear-data-button space-around",onClick:function(){Q([]),_(0)}},"Daten l\xf6schen"),r.a.createElement("button",{className:"load-data-button",onClick:function(){if(null!=f){var e=f.foodItems;Q(e),setTimeout((function(){je(!1,!1)}),100)}}},"Daten laden")),r.a.createElement("hr",{className:"destop-hr new-section-hr"}),r.a.createElement(b,{setBloodSugar:M,setDayTimeChoice:c,setTargetBloodSugar:L,setCorrectionFactor:J,setCarbohydrateFactor:H,bloodSugar:B,dayTimeChoice:a,targetBloodSugar:A,correctionFactor:V,carbohydrateFactor:Z,refreshPage:pe}),r.a.createElement("hr",{className:"destop-hr new-section-hr"}),r.a.createElement(p,{foodItems:q,foodNameSuggestionsForPer100gSlide:j,foodNameSuggestionsForPerPieceSlide:k,addNewFoodItem:function(){var e=Math.random(),t=[].concat(Object(u.a)(q),[{key:Math.random(),id:e,isPer100gSlideActive:!0,per100gSlide:{name:"",grams:"",carbohydratesPer100Grams:"",KE:"",isIntermeal:!1,shouldDisplaySuggestions:!0},perPieceSlide:{name:"",numberOfPieces:"",carbohydratesPerPiece:"",KE:"",isIntermeal:!1,shouldDisplaySuggestions:!0}}]);Q(t),setTimeout((function(){m.animateScroll.scrollMore(255)}),100)},handleIsIntermealChange:function(e,t){var a=q.map((function(a){if(e===a.id){if(1===t){var n=Object(s.a)(Object(s.a)({},a.per100gSlide),{},{isIntermeal:!a.per100gSlide.isIntermeal});return Object(s.a)(Object(s.a)({},a),{},{per100gSlide:n})}var r=Object(s.a)(Object(s.a)({},a.perPieceSlide),{},{isIntermeal:!a.perPieceSlide.isIntermeal});return Object(s.a)(Object(s.a)({},a),{},{perPieceSlide:r})}return a}));Q(a)},handlePer100gSlideValueChange:Oe,handlePerPieceSlideValueChange:ye,deleteFoodItem:function(e){for(var t,a=0;a<q.length;a++)if(e===q[a].id){t=a;break}var n=Object(u.a)(q);n.splice(t,1),Q(n)},handleSuggestionClick:function(e,t,a){a?document.getElementById("".concat(t,"-grams")).focus():document.getElementById("".concat(t,"-numberOfPieces")).focus();var n={target:{name:"name",value:e,id:t}};a?Oe(n):ye(n)},handleSlideChange:function(e,t){var a=q.map((function(a){return e===a.id?Object(s.a)(Object(s.a)({},a),{},{isPer100gSlideActive:t}):a}));Q(a)},hideSuggestionList:function(e,t){var a=q.map((function(a){if(e===a.id){var n=Object(s.a)(Object(s.a)({},a.per100gSlide),{},{shouldDisplaySuggestions:!1}),r=Object(s.a)(Object(s.a)({},a.perPieceSlide),{},{shouldDisplaySuggestions:!1});return t?Object(s.a)(Object(s.a)({},a),{},{per100gSlide:n}):Object(s.a)(Object(s.a)({},a),{},{perPieceSlide:r})}return a}));Q(a)}}),r.a.createElement("p",{style:{marginBottom:"20px"}},r.a.createElement("button",{className:"save-data-button space-around",onClick:function(){h({foodItems:q})}},"Daten speichen"),r.a.createElement("button",{className:"calculateIE-button",onClick:je},"Berechne IE")),r.a.createElement(v,{totalIE:$,totalMainMealKE:be,totalIntermealKE:se,totalKE:ae,totalCorrectionInsulin:ie,outputRef:he}))}i.a.render(r.a.createElement(P,null),document.getElementById("root"))},5:function(e,t,a){}},[[36,1,2]]]);
//# sourceMappingURL=main.5662eff1.chunk.js.map