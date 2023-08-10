(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=e(o);fetch(o.href,l)}})();class g{constructor(t,e,s,o){this.pos=t,this.radius=e,this.color=s,this.velocity=o}update(t){(this.pos.x<=this.radius||this.pos.x>=800-this.radius)&&(this.velocity.x=-this.velocity.x),(this.pos.y<=this.radius||this.pos.y>=800-this.radius)&&(this.velocity.y=-this.velocity.y),this.color="rgba(255, 0, 0, "+Math.abs(this.velocity.x)/150+")",this.pos.x+=this.velocity.x*t,this.pos.y+=this.velocity.y*t}render(t){t.beginPath(),t.arc(this.pos.x,this.pos.y,this.radius,0,2*Math.PI),t.fillStyle=this.color,t.strokeStyle=this.color,t.fill(),t.stroke()}}const c=800,n=10,u=(i,t)=>()=>Math.floor(i+Math.random()*t),d=u(2*n,c-2*n),h=u(-150,150),x=(i,t)=>{const e=i.x-t.x,s=i.y-t.y;return Math.sqrt(e*e+s*s)},m=(i,t)=>x(i.pos,t.pos)<=i.radius+t.radius,C=i=>i.pos.x<=n||i.pos.x>=c-n||i.pos.y<=n||i.pos.y>=c-n,y=["black","silver","maroon","red","purple","fuchsia","green","lime","olive","navy","blue","teal","aqua"],b=()=>y[u(0,y.length-1)()],P=document.getElementById("c"),f=P.getContext("2d"),r=[];function M(i=10){for(let t=0;t<i;++t){let e,s=!1,o=10;do{if(s=!1,e=new g({x:d(),y:d()},n,b(),{x:h(),y:h()}),C(e))s=!0;else for(let l=0;l<r.length;l++)if(m(r[l],e)){s=!0;break}o--}while(s&&o);r.push(e)}}let p=0;function v(i){const t=(i-p)/1e3;p=i,f.clearRect(0,0,c,c);for(let e=0;e<r.length;++e)for(let s=e+1;s<r.length;++s)if(m(r[e],r[s])){const o=structuredClone(r[e].velocity);r[e].velocity.x=r[s].velocity.x,r[e].velocity.y=r[s].velocity.y,r[s].velocity.x=o.x,r[s].velocity.y=o.y}for(let e=0;e<r.length;++e)r[e].update(t);for(let e=0;e<r.length;++e)r[e].render(f);requestAnimationFrame(v)}function O(){M(50),requestAnimationFrame(v)}O();