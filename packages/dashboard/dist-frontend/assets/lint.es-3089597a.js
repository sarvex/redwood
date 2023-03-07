import{C as h}from"./codemirror.es-c15afe25.js";import{p as C,a as S,G as T,v as E,C as I,s as Q,N as U,E as q,K as G,b as V,c as k,o as A,L as W,U as _,d as x,e as K,f as H,h as O,i as Y,j as $,k as M,P as j,l as F,m as z}from"./index-b59381b0.js";import{R as w,P as f}from"./Range.es-3e45690c.js";var B=Object.defineProperty,p=(n,i)=>B(n,"name",{value:i,configurable:!0});const J=[W,_,x,K,H,O,Y,$,M,j,F,z];function N(n,i,s,o,t){const a=Q.filter(e=>!(e===U||e===q||o&&e===G));return s&&Array.prototype.push.apply(a,s),t&&Array.prototype.push.apply(a,J),E(n,i,a).filter(e=>{if(e.message.includes("Unknown directive")&&e.nodes){const l=e.nodes[0];if(l&&l.kind===V.DIRECTIVE){const u=l.name.value;if(u==="arguments"||u==="argumentDefinitions")return!1}}return!0})}p(N,"validateWithCustomRules");const d={Error:"Error",Warning:"Warning",Information:"Information",Hint:"Hint"},v={[d.Error]:1,[d.Warning]:2,[d.Information]:3,[d.Hint]:4},m=p((n,i)=>{if(!n)throw new Error(i)},"invariant");function D(n,i=null,s,o,t){var a,r;let e=null,l="";t&&(l=typeof t=="string"?t:t.reduce((c,g)=>c+C(g)+`

`,""));const u=l?`${n}

${l}`:n;try{e=S(u)}catch(c){if(c instanceof T){const g=b((r=(a=c.locations)===null||a===void 0?void 0:a[0])!==null&&r!==void 0?r:{line:0,column:0},u);return[{severity:v.Error,message:c.message,source:"GraphQL: Syntax",range:g}]}throw c}return L(e,i,s,o)}p(D,"getDiagnostics");function L(n,i=null,s,o){if(!i)return[];const t=N(i,n,s,o).flatMap(r=>R(r,v.Error,"Validation")),a=E(i,n,[k]).flatMap(r=>R(r,v.Warning,"Deprecation"));return t.concat(a)}p(L,"validateQuery");function R(n,i,s){if(!n.nodes)return[];const o=[];return n.nodes.forEach((t,a)=>{const r=t.kind!=="Variable"&&"name"in t&&t.name!==void 0?t.name:"variable"in t&&t.variable!==void 0?t.variable:t;if(r){m(n.locations,"GraphQL validation error requires locations.");const e=n.locations[a],l=P(r),u=e.column+(l.end-l.start);o.push({source:`GraphQL: ${s}`,message:n.message,severity:i,range:new w(new f(e.line-1,e.column-1),new f(e.line-1,u))})}}),o}p(R,"annotations");function b(n,i){const s=A(),o=s.startState(),t=i.split(`
`);m(t.length>=n.line,"Query text must have more lines than where the error happened");let a=null;for(let u=0;u<n.line;u++)for(a=new I(t[u]);!a.eol()&&s.token(a,o)!=="invalidchar";);m(a,"Expected Parser stream to be available.");const r=n.line-1,e=a.getStartOfToken(),l=a.getCurrentPosition();return new w(new f(r,e),new f(r,l))}p(b,"getRange");function P(n){const s=n.loc;return m(s,"Expected ASTNode to have a location."),s}p(P,"getLocation");const y=["error","warning","information","hint"],X={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};h.registerHelper("lint","graphql",(n,i)=>{const{schema:s,validationRules:o,externalFragments:t}=i;return D(n,s,o,void 0,t).map(e=>({message:e.message,severity:e.severity?y[e.severity-1]:y[0],type:e.source?X[e.source]:void 0,from:h.Pos(e.range.start.line,e.range.start.character),to:h.Pos(e.range.end.line,e.range.end.character)}))});
