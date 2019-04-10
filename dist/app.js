(function(a){"function"==typeof define&&define.amd?define("app",a):a()})(function(){'use strict';const a=a=>`
    <article>
      <h2>${a.title}</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <a href="/">Read more</a>
    </article>
  `,b=a=>`Hello ${a}!`,c=(c,a)=>c*a,d=document.querySelector("main");let e=[1,2,3,4,5,6,7,8,9];e=e.map(b=>c(b,2));const f=((c,a)=>c+a)(10,98);console.log(b("thomas"),f,e),d.innerHTML+=`<h1>${b("thomas")}</h1>`,d.innerHTML+=`10 + 98 = ${f}`,d.innerHTML+=`<br/>array values doubled<br/><ul></ul>`,e.map(b=>{d.querySelector("ul").innerHTML+=`<li>${b}</li>`}),d.innerHTML+=(a=>!!(a&&"true"===a))("true")?"<p>to boolean works</p>":"<p>blah</p>";[{title:"this is title one"},{title:"this is title two"},{title:"this is title three"}].map(b=>d.innerHTML+=a(b))});
