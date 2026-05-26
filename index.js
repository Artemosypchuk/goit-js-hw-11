import{a as y,S as g,i as f}from"./assets/vendor-YwtLADBh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h="55943354-aedacad3df1b2c8419ab26500",b="https://pixabay.com/api/",L=async t=>(await y.get(b,{params:{key:h,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data;let c=null;const a=document.querySelector(".loader");function w(t,o){const s=t.map(({webformatURL:n,largeImageURL:e,tags:r,likes:i,views:d,comments:m,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${n}" alt="${r}" />
          </a>
          <div class="info-container">
            <p class="info-item"><b>Likes</b> <br>${i}</p>
            <p class="info-item"><b>Views</b> <br>${d}</p>
            <p class="info-item"><b>Comments</b> <br>${m}</p>
            <p class="info-item"><b>Downloads</b> <br>${p}</p>
          </div>
        </li>
      `).join("");o.innerHTML=s,c?c.refresh():c=new g(".gallery a",{captionsData:"alt",captionDelay:250})}function S(t){t.innerHTML=""}function E(){a&&a.classList.remove("is-hidden")}function q(){a&&a.classList.add("is-hidden")}function v(){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function P(t){f.error({title:"Error",message:t||"Something went wrong. Please try again later.",position:"topRight"})}const l=document.querySelector(".form"),u=document.querySelector(".gallery");l.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget.elements["search-text"].value.trim();if(o!==""){S(u),E();try{const s=await L(o);if(s.hits.length===0){v();return}w(s.hits,u)}catch(s){console.error(s),P(s.message)}finally{q(),l.reset()}}});
//# sourceMappingURL=index.js.map
