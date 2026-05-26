import{a as p,i as y,S as g}from"./assets/vendor-YwtLADBh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="55943354-aedacad3df1b2c8419ab26500",b="https://pixabay.com/api/",L=async o=>{try{return(await p.get(b,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw console.error("Помилка під час завантаження зображень:",r),r}};let n=null;function S(o,r){if(r.innerHTML="",o.length===0){y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:i,views:d,comments:f,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${a}" alt="${t}" />
          </a>
          <div class="info-container">
            <p class="info-item"><b>Likes</b> <br>${i}</p>
            <p class="info-item"><b>Views</b> <br>${d}</p>
            <p class="info-item"><b>Comments</b> <br>${f}</p>
            <p class="info-item"><b>Downloads</b> <br>${m}</p>
          </div>
        </li>
      `).join("");r.innerHTML=s,n?n.refresh():n=new g(".gallery a",{captionsData:"alt",captionDelay:250})}const c=document.querySelector(".form"),l=document.querySelector(".gallery"),u=document.querySelector(".loader");c.addEventListener("submit",async o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(r!==""){l.innerHTML="",u.classList.remove("is-hidden");try{const s=await L(r);S(s.hits,l)}catch(s){console.error("Сталася помилка під час запиту:",s)}finally{u.classList.add("is-hidden"),c.reset()}}});
//# sourceMappingURL=index.js.map
