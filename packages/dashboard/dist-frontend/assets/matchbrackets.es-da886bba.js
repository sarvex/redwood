<<<<<<<< HEAD:packages/dashboard/dist-frontend/assets/matchbrackets.es-da886bba.js
import{a as T}from"./codemirror.es-4f994ac1.js";import"./index-7c0b5e55.js";var j=Object.defineProperty,g=(k,B)=>j(k,"name",{value:B,configurable:!0});function E(k,B){return B.forEach(function(s){s&&typeof s!="string"&&!Array.isArray(s)&&Object.keys(s).forEach(function(v){if(v!=="default"&&!(v in k)){var o=Object.getOwnPropertyDescriptor(s,v);Object.defineProperty(k,v,o.get?o:{enumerable:!0,get:function(){return s[v]}})}})}),Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}g(E,"_mergeNamespaces");var O={exports:{}};(function(k,B){(function(s){s(T.exports)})(function(s){var v=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),o=s.Pos,m={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function L(t){return t&&t.bracketRegex||/[(){}[\]]/}g(L,"bracketRegex");function A(t,r,e){var c=t.getLineHandle(r.line),n=r.ch-1,l=e&&e.afterCursor;l==null&&(l=/(^| )cm-fat-cursor($| )/.test(t.getWrapperElement().className));var f=L(e),u=!l&&n>=0&&f.test(c.text.charAt(n))&&m[c.text.charAt(n)]||f.test(c.text.charAt(n+1))&&m[c.text.charAt(++n)];if(!u)return null;var a=u.charAt(1)==">"?1:-1;if(e&&e.strict&&a>0!=(n==r.ch))return null;var p=t.getTokenTypeAt(o(r.line,n+1)),i=H(t,o(r.line,n+(a>0?1:0)),a,p,e);return i==null?null:{from:o(r.line,n),to:i&&i.pos,match:i&&i.ch==u.charAt(0),forward:a>0}}g(A,"findMatchingBracket");function H(t,r,e,c,n){for(var l=n&&n.maxScanLineLength||1e4,f=n&&n.maxScanLines||1e3,u=[],a=L(n),p=e>0?Math.min(r.line+f,t.lastLine()+1):Math.max(t.firstLine()-1,r.line-f),i=r.line;i!=p;i+=e){var h=t.getLine(i);if(h){var d=e>0?0:h.length-1,S=e>0?h.length:-1;if(!(h.length>l))for(i==r.line&&(d=r.ch-(e<0?1:0));d!=S;d+=e){var b=h.charAt(d);if(a.test(b)&&(c===void 0||(t.getTokenTypeAt(o(i,d+1))||"")==(c||""))){var M=m[b];if(M&&M.charAt(1)==">"==e>0)u.push(b);else if(u.length)u.pop();else return{pos:o(i,d),ch:b}}}}}return i-e==(e>0?t.lastLine():t.firstLine())?!1:null}g(H,"scanForBracket");function _(t,r,e){for(var c=t.state.matchBrackets.maxHighlightLineLength||1e3,n=e&&e.highlightNonMatching,l=[],f=t.listSelections(),u=0;u<f.length;u++){var a=f[u].empty()&&A(t,f[u].head,e);if(a&&(a.match||n!==!1)&&t.getLine(a.from.line).length<=c){var p=a.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";l.push(t.markText(a.from,o(a.from.line,a.from.ch+1),{className:p})),a.to&&t.getLine(a.to.line).length<=c&&l.push(t.markText(a.to,o(a.to.line,a.to.ch+1),{className:p}))}}if(l.length){v&&t.state.focused&&t.focus();var i=g(function(){t.operation(function(){for(var h=0;h<l.length;h++)l[h].clear()})},"clear");if(r)setTimeout(i,800);else return i}}g(_,"matchBrackets");function x(t){t.operation(function(){t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null),t.state.matchBrackets.currentlyHighlighted=_(t,!1,t.state.matchBrackets)})}g(x,"doMatchBrackets");function y(t){t.state.matchBrackets&&t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null)}g(y,"clearHighlighted"),s.defineOption("matchBrackets",!1,function(t,r,e){e&&e!=s.Init&&(t.off("cursorActivity",x),t.off("focus",x),t.off("blur",y),y(t)),r&&(t.state.matchBrackets=typeof r=="object"?r:{},t.on("cursorActivity",x),t.on("focus",x),t.on("blur",y))}),s.defineExtension("matchBrackets",function(){_(this,!0)}),s.defineExtension("findMatchingBracket",function(t,r,e){return(e||typeof r=="boolean")&&(e?(e.strict=r,r=e):r=r?{strict:!0}:null),A(this,t,r)}),s.defineExtension("scanForBracket",function(t,r,e,c){return H(this,t,r,e,c)})})})();var P=O.exports,R=E({__proto__:null,default:P},[O.exports]);export{O as a,R as m};
========
import{a as T}from"./codemirror.es-d13531ff.js";import"./index-0903160a.js";var j=Object.defineProperty,g=(k,B)=>j(k,"name",{value:B,configurable:!0});function E(k,B){return B.forEach(function(s){s&&typeof s!="string"&&!Array.isArray(s)&&Object.keys(s).forEach(function(v){if(v!=="default"&&!(v in k)){var o=Object.getOwnPropertyDescriptor(s,v);Object.defineProperty(k,v,o.get?o:{enumerable:!0,get:function(){return s[v]}})}})}),Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}g(E,"_mergeNamespaces");var O={exports:{}};(function(k,B){(function(s){s(T.exports)})(function(s){var v=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),o=s.Pos,m={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function L(t){return t&&t.bracketRegex||/[(){}[\]]/}g(L,"bracketRegex");function A(t,r,e){var c=t.getLineHandle(r.line),n=r.ch-1,l=e&&e.afterCursor;l==null&&(l=/(^| )cm-fat-cursor($| )/.test(t.getWrapperElement().className));var f=L(e),u=!l&&n>=0&&f.test(c.text.charAt(n))&&m[c.text.charAt(n)]||f.test(c.text.charAt(n+1))&&m[c.text.charAt(++n)];if(!u)return null;var a=u.charAt(1)==">"?1:-1;if(e&&e.strict&&a>0!=(n==r.ch))return null;var p=t.getTokenTypeAt(o(r.line,n+1)),i=H(t,o(r.line,n+(a>0?1:0)),a,p,e);return i==null?null:{from:o(r.line,n),to:i&&i.pos,match:i&&i.ch==u.charAt(0),forward:a>0}}g(A,"findMatchingBracket");function H(t,r,e,c,n){for(var l=n&&n.maxScanLineLength||1e4,f=n&&n.maxScanLines||1e3,u=[],a=L(n),p=e>0?Math.min(r.line+f,t.lastLine()+1):Math.max(t.firstLine()-1,r.line-f),i=r.line;i!=p;i+=e){var h=t.getLine(i);if(h){var d=e>0?0:h.length-1,S=e>0?h.length:-1;if(!(h.length>l))for(i==r.line&&(d=r.ch-(e<0?1:0));d!=S;d+=e){var b=h.charAt(d);if(a.test(b)&&(c===void 0||(t.getTokenTypeAt(o(i,d+1))||"")==(c||""))){var M=m[b];if(M&&M.charAt(1)==">"==e>0)u.push(b);else if(u.length)u.pop();else return{pos:o(i,d),ch:b}}}}}return i-e==(e>0?t.lastLine():t.firstLine())?!1:null}g(H,"scanForBracket");function _(t,r,e){for(var c=t.state.matchBrackets.maxHighlightLineLength||1e3,n=e&&e.highlightNonMatching,l=[],f=t.listSelections(),u=0;u<f.length;u++){var a=f[u].empty()&&A(t,f[u].head,e);if(a&&(a.match||n!==!1)&&t.getLine(a.from.line).length<=c){var p=a.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";l.push(t.markText(a.from,o(a.from.line,a.from.ch+1),{className:p})),a.to&&t.getLine(a.to.line).length<=c&&l.push(t.markText(a.to,o(a.to.line,a.to.ch+1),{className:p}))}}if(l.length){v&&t.state.focused&&t.focus();var i=g(function(){t.operation(function(){for(var h=0;h<l.length;h++)l[h].clear()})},"clear");if(r)setTimeout(i,800);else return i}}g(_,"matchBrackets");function x(t){t.operation(function(){t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null),t.state.matchBrackets.currentlyHighlighted=_(t,!1,t.state.matchBrackets)})}g(x,"doMatchBrackets");function y(t){t.state.matchBrackets&&t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null)}g(y,"clearHighlighted"),s.defineOption("matchBrackets",!1,function(t,r,e){e&&e!=s.Init&&(t.off("cursorActivity",x),t.off("focus",x),t.off("blur",y),y(t)),r&&(t.state.matchBrackets=typeof r=="object"?r:{},t.on("cursorActivity",x),t.on("focus",x),t.on("blur",y))}),s.defineExtension("matchBrackets",function(){_(this,!0)}),s.defineExtension("findMatchingBracket",function(t,r,e){return(e||typeof r=="boolean")&&(e?(e.strict=r,r=e):r=r?{strict:!0}:null),A(this,t,r)}),s.defineExtension("scanForBracket",function(t,r,e,c){return H(this,t,r,e,c)})})})();var P=O.exports,R=E({__proto__:null,default:P},[O.exports]);export{O as a,R as m};
>>>>>>>> origin/jgmw-experiment-otel-framework:packages/dashboard/dist-frontend/assets/matchbrackets.es-6eb86ab3.js
