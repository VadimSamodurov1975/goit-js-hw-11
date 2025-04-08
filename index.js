import{a as p,S as m,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const y="https://pixabay.com/api/",g="49633368-6da3d74b0c3b6468a6c14afef";async function v(s){try{return(await p.get(y,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Error fetching images:",t),new Error("Failed to fetch images")}}let L=new m(".gallery a",{captionsData:"alt",captionDelay:250});const l=document.querySelector(".gallery");function w(s){const t=s.map(r=>`
      <li class="gallery-item">
            <a class="gallery-link" href = '${r.largeImageURL}'> 
                <img class="gallery-image" src = '${r.webformatURL}' alt = '${r.tags}' width = '360'>
            </a>
            <div class = 'info'>
                <div class='descr'><h3>Likes</h3><p>${r.likes}</p></div>
                <div class='descr'><h3>Views</h3><p>${r.views}</p></div>
                <div class='descr'><h3>Comments</h3><p> ${r.comments}</p></div>
                <div class='descr'><h3>Downloads</h3><p>${r.downloads}</p></div>
            </div>
       </li>`).join("");l.innerHTML=t,L.refresh()}function d(){l.innerHTML=""}const u=document.querySelector(".loader");function b(){u.classList.remove("hidden")}function f(){u.classList.add("hidden")}f();const h=document.querySelector(".form"),c=h.querySelector("input");d();h.addEventListener("submit",async s=>{s.preventDefault(),d();const t=c.value.trim();if(t){b();try{const r=await v(t);r.hits.length?w(r.hits):n.show({message:"Sorry, there are no images matching your search query. Please try again! ",position:"center",color:"red"})}catch{n.show({message:"Failed to fetch images. Please try again later.",position:"center",color:"red"})}f(),c.value=""}});
//# sourceMappingURL=index.js.map
