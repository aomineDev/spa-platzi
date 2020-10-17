(()=>{"use strict";const n=function(){return window.location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"},a="https://rickandmortyapi.com/api/character/",t=async function(n){const t=n?`${a}${n}`:a;try{return(await window.fetch(t)).json()}catch(n){console.error(n)}},e=function(){return'\n    <div class="Error404">\n      <h2>Error 404</h2>\n    </div>\n  '},r={"/":async function(){const{results:n}=await t();let a="";return n.forEach((n=>{a+=function({id:n,name:a,image:t}){return`\n    <article class="Character-item">\n      <a href="/spa-platzi/#/${n}">\n        <img src="${t}" alt="${a}"/>\n        <h2>${a}</h2>\n      </a>\n    </article>\n  `}(n)})),`\n    <div class="Characters">\n      ${a}\n    </div>\n  `},"/:id":async function(){const a=n(),e=await t(a);return`\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="${e.image}" alt="${e.name}"/>\n        <h2>${e.name}</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Episodes: ${e.episode.length}</h3>\n        <h3>Status: ${e.status}</h3>\n        <h3>Species: ${e.species}</h3>\n        <h3>Gender: ${e.gender}</h3>\n        <h3>Origin: ${e.origin.name}</h3>\n        <h3>Last Location: ${e.location.name}</h3>\n      </article>\n    </div>\n  `},"/contact":()=>"Contact"},c=async function(){const a=document.getElementById("header")||null,t=document.getElementById("content")||null;a.innerHTML='\n    <div class="Header-main">\n      <div class="Header-logo">\n        <h1><a href="/spa-platzi/#">100tifi.co</a></h1>\n      </div>\n      <div class="Header-nav">\n        <a href="/spa-platzi/#/about">About</a>\n      </div>\n    </div>\n  ';const c=function(n){return n.length<=3?"/"===n?n:"/:id":"/"+n}(n()),i=r[c]||e;t.innerHTML=await i()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();