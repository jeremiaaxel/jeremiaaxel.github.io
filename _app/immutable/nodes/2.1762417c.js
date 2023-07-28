var He=Object.defineProperty;var Le=(s,e,t)=>e in s?He(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var R=(s,e,t)=>(Le(s,typeof e!="symbol"?e+"":e,t),t);import{s as Q,n as q,f as ge,b as _e,h as ve}from"../chunks/scheduler.0c51b399.js";import{S as Z,i as K,g as _,s as C,m as P,h as v,j as b,c as E,f as p,n as D,y as te,k as g,a as j,x as u,o as A,z as le,d as B,p as Me,b as Oe,t as H,e as ke,r as G,u as J,A as be,v as U,w as W,B as Ne,C as Se,D as Re}from"../chunks/index.9a5d68cb.js";function L(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}class qe{constructor(){R(this,"type");R(this,"name");R(this,"description");R(this,"tasks");R(this,"techStacks");R(this,"tags");R(this,"organization");R(this,"url");this.type="",this.name="",this.description="",this.tasks=[],this.techStacks=[],this.tags=[],this.organization="",this.url=""}containsSkills(e){return this.techStacks.filter(t=>e.includes(t)).length>0}}const Ge={name:"Jeremia Axel",description:"I am a software engineer, strongly on backend side.",links:[{name:"github",icon:"https://img.icons8.com/ios/50/github--v1.png",url:"https://github.com/jeremiaaxel"},{name:"linkedin",icon:"https://img.icons8.com/ios/50/linkedin.png",url:"https://www.linkedin.com/in/jeremia-axel-0b0b0a1b4/"},{name:"email",icon:"https://img.icons8.com/ios/50/new-post--v1.png",url:"mailto:jeremiaaxelb+myweb@gmail.com"},{name:"resume",icon:"https://img.icons8.com/ios/50/resume.png",url:"https://drive.google.com/file/d/1iMutL8PZkIxA2HhF6g0pR7NVZhwUqEMr/view?usp=sharing"}]},Je=[{type:"personal",name:"This Website",description:"The website you are seeing right now.",tasks:[{name:"Sort Projects Type",description:"Show projects ordered by priority list: internship, school, personal"},{name:'"Dynamic" Skills',description:"Skills in the Skills section are retrieved from dedicated definition of skills and tech stacks in the projects section. So I don't have to write multiple times."}],techStacks:["Svelte","Typescript","TailwindCSS","Git"],tags:["frontend"]},{type:"internship",name:"Software Engineer Intern",organization:"Suitmedia",description:"Enhanced an internal administration website made to score companies based on the items issued within the website.",tasks:[{name:"Upgraded Role Based Access Control",description:"Upgraded role based access control from 2 roles into 5 roles with each specialized permissions (e.g. role that only able to issue item but not edit, role that only able to edit, role that can do both)."},{name:"Developed Item Approval System",description:'Developed two-tier item approval system: "to be approved", and "approved" or "rejected". Only approved items are calculated in the scoring.'},{name:"Updated The Scoring Calculation",description:"Each item has different score and multiplier based on the category and sub-category. And the multiplier used also different if there is any item in certain categories. Yes, it's complicated!"},{name:"Refactored Some Part of the Code Base",description:"Maintainability is important! Refactored some of the functions and classes for the better maintainability, such as extracting repeatable logics into functions or putting constant items into list for easier change/scalability."}],techStacks:[".NET","Microsoft SQL","Vue.js","Javascript","jQuery","Bootstrap","Git","C#"],tags:["fullstack","backend"]},{type:"volunteering",name:"Frontend Developer/Vice Head of Website Division",organization:"Wisuda Juli 2021",description:"Developed a website made to appreciate the ITB's July 2021 graduates.",tasks:[{name:"Organize Frontend Team",description:"Organized a team of five for the frontend part from developing the UI/UX to develop the website."},{name:"Message for The Graduates",description:"Developed a one-direction messaging frontend for the public to give message to the graduates."},{name:"Initialized The Frontend Codebase",description:"Set up custom scaffolding for the codebase, although never used React and Typescript before."}],techStacks:["React.js","Sass","Typescript","Git"],tags:["frontend","manager"]},{type:"volunteering",name:"StatsBot",url:"https://github.com/thieleju/statsbot/pull/15",description:"A Discord bot that shows statistics to a Discord server. A contribution to open source project as part of Hacktoberfest 2022.",tasks:[{name:"Show Chess Leaderboard",description:"Develop a feature to show the chess leaderboard by fetching chess.com's API and format the data."}],techStacks:["Discord.js","Javascript","Git"],tags:["open source contributor"]},{type:"school",name:"Smart Room Air Conditioner ",description:"An Internet-of-Things (IoT) project that monitors and controls the air condition in a room. This system consists of an embedded component, a website, and a machine learning module.",tasks:[{name:"Item Selection Component",description:"Developed a multi-option single-item selection component that hits an API on selection change (Frontend)."},{name:"Realtime Application State",description:"Developed websocket API to exchange real-time state of the application between the backend and the frontend (Fullstack)."},{name:"Implemented ML Model",description:"Implemented a TimeSeriesKMeans machine learning model to determine the air quality (Machine Learning). Also integrate the model by saving the trained model to file and using the model in the backend to determine the current condition."},{name:"Developed Initial Data Aggregation Pipeline",description:"Developed a data pipeline from MQTT to PySpark aggregator to get current average value of the sensors."}],techStacks:["Vue.js","TailwindCSS","Typescript","Python","FastAPI","InfluxDB","sklearn","Docker","PySpark","MQTT","ESP32","WebSocket","Git"],tags:["fullstack","machine learning","data engineer"]}],Ue=[{name:"Python",description:"Python is my programming-mother-tongue. Simple project? use python. Complex project? use python."},{name:"C#",description:"Is this Java or C#? I don't know. I use C# for my internship project."},{name:"Git",description:"Git is my middle name. I use git in every project I do. Github is my best friend."},{name:"Docker",description:"Rarely use docker, but I know how to use it. docker compose up, docker compose down :)"},{name:"Linux",description:"Linux is my daily driver. My friend brought me down this rabbit hole. From Arch, to Fedora, now Pop!_OS."},{name:"SQL",description:"SELECT money FROM wallet WHERE name='Jeremia'; money 0.00. Gib job pls."}],fe={profile:Ge,projects:Je,technologies:Ue};function We(s){return s.reduce((t,l)=>(t[l.type]?t[l.type].push(l):t={...t,[l.type]:[l]},t),{})}function Qe(s){const e=s.map(l=>l.techStacks);return[...new Set(e.flat())]}function Ze(s){return s.map(e=>e.name)}function ce(s){return s.join(", ")}function ye(s,e,t){const l=s.slice();return l[1]=e[t],l}function Ke(s){let e=s[0].name+"",t;return{c(){t=P(e)},l(l){t=D(l,e)},m(l,n){j(l,t,n)},p(l,n){n&1&&e!==(e=l[0].name+"")&&A(t,e)},d(l){l&&p(t)}}}function Xe(s){let e,t=s[0].name+"",l,n;return{c(){e=_("a"),l=P(t),this.h()},l(i){e=v(i,"A",{class:!0,href:!0});var h=b(e);l=D(h,t),h.forEach(p),this.h()},h(){g(e,"class","link"),g(e,"href",n=s[0].url)},m(i,h){j(i,e,h),u(e,l)},p(i,h){h&1&&t!==(t=i[0].name+"")&&A(l,t),h&1&&n!==(n=i[0].url)&&g(e,"href",n)},d(i){i&&p(e)}}}function we(s){let e,t=s[0].organization+"",l;return{c(){e=P("@ "),l=P(t)},l(n){e=D(n,"@ "),l=D(n,t)},m(n,i){j(n,e,i),j(n,l,i)},p(n,i){i&1&&t!==(t=n[0].organization+"")&&A(l,t)},d(n){n&&(p(e),p(l))}}}function Ce(s){let e,t,l=s[1].name+"",n,i,h,f=s[1].description+"",a,d;return{c(){e=_("li"),t=_("p"),n=P(l),i=C(),h=_("p"),a=P(f),d=C(),this.h()},l(o){e=v(o,"LI",{class:!0});var c=b(e);t=v(c,"P",{class:!0});var r=b(t);n=D(r,l),r.forEach(p),i=E(c),h=v(c,"P",{class:!0});var m=b(h);a=D(m,f),m.forEach(p),d=E(c),c.forEach(p),this.h()},h(){g(t,"class","task-name inline font-medium"),g(h,"class","task-desc ps-5"),g(e,"class","")},m(o,c){j(o,e,c),u(e,t),u(t,n),u(e,i),u(e,h),u(h,a),u(e,d)},p(o,c){c&1&&l!==(l=o[1].name+"")&&A(n,l),c&1&&f!==(f=o[1].description+"")&&A(a,f)},d(o){o&&p(e)}}}function Ye(s){let e,t,l,n,i,h=s[0].description+"",f,a,d,o,c,r,m="Tech Stack(s):",y,S,I=ce(s[0].techStacks.sort(Ee))+"",M,x,k,O,z="Tag(s):",X,Y,ne=ce(s[0].tags)+"",se;function de(w,$){return w[0].url?Xe:Ke}let oe=de(s),N=oe(s),V=s[0].organization&&we(s),ee=L(s[0].tasks),F=[];for(let w=0;w<ee.length;w+=1)F[w]=Ce(ye(s,ee,w));return{c(){e=_("section"),t=_("h1"),N.c(),l=C(),V&&V.c(),n=C(),i=_("p"),f=P(h),a=C(),d=_("ol");for(let w=0;w<F.length;w+=1)F[w].c();o=C(),c=_("div"),r=_("div"),r.textContent=m,y=C(),S=_("p"),M=P(I),x=C(),k=_("div"),O=_("div"),O.textContent=z,X=C(),Y=_("p"),se=P(ne),this.h()},l(w){e=v(w,"SECTION",{class:!0});var $=b(e);t=v($,"H1",{class:!0});var T=b(t);N.l(T),l=E(T),V&&V.l(T),T.forEach(p),n=E($),i=v($,"P",{});var ie=b(i);f=D(ie,h),ie.forEach(p),a=E($),d=v($,"OL",{class:!0});var ue=b(d);for(let he=0;he<F.length;he+=1)F[he].l(ue);ue.forEach(p),o=E($),c=v($,"DIV",{class:!0});var ae=b(c);r=v(ae,"DIV",{class:!0,["data-svelte-h"]:!0}),te(r)!=="svelte-scqv3j"&&(r.textContent=m),y=E(ae),S=v(ae,"P",{});var pe=b(S);M=D(pe,I),pe.forEach(p),ae.forEach(p),x=E($),k=v($,"DIV",{class:!0});var re=b(k);O=v(re,"DIV",{class:!0,["data-svelte-h"]:!0}),te(O)!=="svelte-1ivdupd"&&(O.textContent=z),X=E(re),Y=v(re,"P",{class:!0});var me=b(Y);se=D(me,ne),me.forEach(p),re.forEach(p),$.forEach(p),this.h()},h(){g(t,"class","text-xl font-medium"),g(d,"class","list-decimal list-inside flex flex-col"),g(r,"class","text-lg font-medium"),g(c,"class","tech-stack"),g(O,"class","text-lg font-medium"),g(Y,"class","capitalize"),g(k,"class","tags"),g(e,"class","project")},m(w,$){j(w,e,$),u(e,t),N.m(t,null),u(t,l),V&&V.m(t,null),u(e,n),u(e,i),u(i,f),u(e,a),u(e,d);for(let T=0;T<F.length;T+=1)F[T]&&F[T].m(d,null);u(e,o),u(e,c),u(c,r),u(c,y),u(c,S),u(S,M),u(e,x),u(e,k),u(k,O),u(k,X),u(k,Y),u(Y,se)},p(w,[$]){if(oe===(oe=de(w))&&N?N.p(w,$):(N.d(1),N=oe(w),N&&(N.c(),N.m(t,l))),w[0].organization?V?V.p(w,$):(V=we(w),V.c(),V.m(t,null)):V&&(V.d(1),V=null),$&1&&h!==(h=w[0].description+"")&&A(f,h),$&1){ee=L(w[0].tasks);let T;for(T=0;T<ee.length;T+=1){const ie=ye(w,ee,T);F[T]?F[T].p(ie,$):(F[T]=Ce(ie),F[T].c(),F[T].m(d,null))}for(;T<F.length;T+=1)F[T].d(1);F.length=ee.length}$&1&&I!==(I=ce(w[0].techStacks.sort(Ee))+"")&&A(M,I),$&1&&ne!==(ne=ce(w[0].tags)+"")&&A(se,ne)},i:q,o:q,d(w){w&&p(e),N.d(),V&&V.d(),le(F,w)}}}const Ee=(s,e)=>s.toLowerCase().localeCompare(e.toLowerCase());function et(s,e,t){let{data:l}=e;return s.$$set=n=>{"data"in n&&t(0,l=n.data)},[l]}class tt extends Z{constructor(e){super(),K(this,e,et,Ye,Q,{data:0})}}function je(s,e,t){const l=s.slice();return l[6]=e[t],l}function Ie(s,e,t){const l=s.slice();return l[9]=e[t],l}function lt(s){let e,t=s[6]+"",l,n,i,h,f=L(s[2][s[6]]),a=[];for(let o=0;o<f.length;o+=1)a[o]=Te(Ie(s,f,o));const d=o=>H(a[o],1,1,()=>{a[o]=null});return{c(){e=_("h3"),l=P(t),n=C();for(let o=0;o<a.length;o+=1)a[o].c();i=ke(),this.h()},l(o){e=v(o,"H3",{class:!0});var c=b(e);l=D(c,t),c.forEach(p),n=E(o);for(let r=0;r<a.length;r+=1)a[r].l(o);i=ke(),this.h()},h(){g(e,"class","text-xl capitalize")},m(o,c){j(o,e,c),u(e,l),j(o,n,c);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(o,c);j(o,i,c),h=!0},p(o,c){if(c&7){f=L(o[2][o[6]]);let r;for(r=0;r<f.length;r+=1){const m=Ie(o,f,r);a[r]?(a[r].p(m,c),B(a[r],1)):(a[r]=Te(m),a[r].c(),B(a[r],1),a[r].m(i.parentNode,i))}for(Me(),r=f.length;r<a.length;r+=1)d(r);Oe()}},i(o){if(!h){for(let c=0;c<f.length;c+=1)B(a[c]);h=!0}},o(o){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)H(a[c]);h=!1},d(o){o&&(p(e),p(n),p(i)),le(a,o)}}}function Te(s){let e,t,l,n;return t=new tt({props:{data:s[9]}}),{c(){e=_("div"),G(t.$$.fragment),l=C(),this.h()},l(i){e=v(i,"DIV",{class:!0});var h=b(e);J(t.$$.fragment,h),l=E(h),h.forEach(p),this.h()},h(){g(e,"class","project-item flex flex-col my-2"),be(e,"hidden",!s[0].includes(s[9]))},m(i,h){j(i,e,h),U(t,e,null),u(e,l),n=!0},p(i,h){(!n||h&7)&&be(e,"hidden",!i[0].includes(i[9]))},i(i){n||(B(t.$$.fragment,i),n=!0)},o(i){H(t.$$.fragment,i),n=!1},d(i){i&&p(e),W(t)}}}function $e(s){let e,t,l,n=s[2][s[6]]&&lt(s);return{c(){e=_("div"),n&&n.c(),t=C(),this.h()},l(i){e=v(i,"DIV",{class:!0});var h=b(e);n&&n.l(h),t=E(h),h.forEach(p),this.h()},h(){g(e,"class","project-type")},m(i,h){j(i,e,h),n&&n.m(e,null),u(e,t),l=!0},p(i,h){i[2][i[6]]&&n.p(i,h)},i(i){l||(B(n),l=!0)},o(i){H(n),l=!1},d(i){i&&p(e),n&&n.d()}}}function nt(s){let e,t,l="Projects",n,i,h,f=L(s[1]),a=[];for(let o=0;o<f.length;o+=1)a[o]=$e(je(s,f,o));const d=o=>H(a[o],1,1,()=>{a[o]=null});return{c(){e=_("section"),t=_("h3"),t.textContent=l,n=C(),i=_("div");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=v(o,"SECTION",{id:!0});var c=b(e);t=v(c,"H3",{class:!0,["data-svelte-h"]:!0}),te(t)!=="svelte-12c8jpq"&&(t.textContent=l),n=E(c),i=v(c,"DIV",{class:!0});var r=b(i);for(let m=0;m<a.length;m+=1)a[m].l(r);r.forEach(p),c.forEach(p),this.h()},h(){g(t,"class","text-3xl"),g(i,"class","flex flex-col space-y-2"),g(e,"id","projects")},m(o,c){j(o,e,c),u(e,t),u(e,n),u(e,i);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(i,null);h=!0},p(o,[c]){if(c&7){f=L(o[1]);let r;for(r=0;r<f.length;r+=1){const m=je(o,f,r);a[r]?(a[r].p(m,c),B(a[r],1)):(a[r]=$e(m),a[r].c(),B(a[r],1),a[r].m(i,null))}for(Me(),r=f.length;r<a.length;r+=1)d(r);Oe()}},i(o){if(!h){for(let c=0;c<f.length;c+=1)B(a[c]);h=!0}},o(o){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)H(a[c]);h=!1},d(o){o&&p(e),le(a,o)}}}function it(s,e,t){let{data:l}=e,{priorities:n=["internship","school","personal"]}=e,{skillsFilter:i=new Set}=e;const h=[...new Set(n)];let f;const a=We(l);return s.$$set=d=>{"data"in d&&t(3,l=d.data),"priorities"in d&&t(4,n=d.priorities),"skillsFilter"in d&&t(5,i=d.skillsFilter)},s.$$.update=()=>{s.$$.dirty&40&&t(0,f=i.size==0?l:l.filter(d=>d.containsSkills([...i])))},[f,h,a,l,n,i]}class st extends Z{constructor(e){super(),K(this,e,it,nt,Q,{data:3,priorities:4,skillsFilter:5})}}function Pe(s,e,t){const l=s.slice();return l[1]=e[t],l}function ot(s){let e=s[1].name+"",t;return{c(){t=P(e)},l(l){t=D(l,e)},m(l,n){j(l,t,n)},p(l,n){n&1&&e!==(e=l[1].name+"")&&A(t,e)},d(l){l&&p(t)}}}function at(s){let e,t,l;return{c(){e=_("img"),this.h()},l(n){e=v(n,"IMG",{width:!0,height:!0,src:!0,alt:!0}),this.h()},h(){g(e,"width","25"),g(e,"height","25"),ge(e.src,t=s[1].icon)||g(e,"src",t),g(e,"alt",l=s[1].iconAlt)},m(n,i){j(n,e,i)},p(n,i){i&1&&!ge(e.src,t=n[1].icon)&&g(e,"src",t),i&1&&l!==(l=n[1].iconAlt)&&g(e,"alt",l)},d(n){n&&p(e)}}}function De(s){let e,t,l;function n(f,a){return f[1].icon?at:ot}let i=n(s),h=i(s);return{c(){e=_("a"),h.c(),t=C(),this.h()},l(f){e=v(f,"A",{class:!0,href:!0,target:!0});var a=b(e);h.l(a),t=E(a),a.forEach(p),this.h()},h(){g(e,"class","mx-2 link"),g(e,"href",l=s[1].url),g(e,"target","_blank")},m(f,a){j(f,e,a),h.m(e,null),u(e,t)},p(f,a){i===(i=n(f))&&h?h.p(f,a):(h.d(1),h=i(f),h&&(h.c(),h.m(e,t))),a&1&&l!==(l=f[1].url)&&g(e,"href",l)},d(f){f&&p(e),h.d()}}}function rt(s){let e,t,l=s[0].name+"",n,i,h,f=s[0].description+"",a,d,o,c=L(s[0].links),r=[];for(let m=0;m<c.length;m+=1)r[m]=De(Pe(s,c,m));return{c(){e=_("section"),t=_("h1"),n=P(l),i=C(),h=_("p"),a=P(f),d=C(),o=_("section");for(let m=0;m<r.length;m+=1)r[m].c();this.h()},l(m){e=v(m,"SECTION",{id:!0});var y=b(e);t=v(y,"H1",{class:!0});var S=b(t);n=D(S,l),S.forEach(p),i=E(y),h=v(y,"P",{});var I=b(h);a=D(I,f),I.forEach(p),d=E(y),o=v(y,"SECTION",{class:!0});var M=b(o);for(let x=0;x<r.length;x+=1)r[x].l(M);M.forEach(p),y.forEach(p),this.h()},h(){g(t,"class","text-2xl"),g(o,"class","links flex flex-row"),g(e,"id","profile flex flex-col")},m(m,y){j(m,e,y),u(e,t),u(t,n),u(e,i),u(e,h),u(h,a),u(e,d),u(e,o);for(let S=0;S<r.length;S+=1)r[S]&&r[S].m(o,null)},p(m,[y]){if(y&1&&l!==(l=m[0].name+"")&&A(n,l),y&1&&f!==(f=m[0].description+"")&&A(a,f),y&1){c=L(m[0].links);let S;for(S=0;S<c.length;S+=1){const I=Pe(m,c,S);r[S]?r[S].p(I,y):(r[S]=De(I),r[S].c(),r[S].m(o,null))}for(;S<r.length;S+=1)r[S].d(1);r.length=c.length}},i:q,o:q,d(m){m&&p(e),le(r,m)}}}function ct(s,e,t){let{data:l}=e;return l.links.forEach(n=>{if(n.icon){let i=n.icon.lastIndexOf("/");n.iconAlt=n.icon.substring(i+1)}}),s.$$set=n=>{"data"in n&&t(0,l=n.data)},[l]}class ht extends Z{constructor(e){super(),K(this,e,ct,rt,Q,{data:0})}}function ft(s){let e,t,l=s[0].title+"",n,i,h,f=s[0].detail+"",a;return{c(){e=_("div"),t=_("p"),n=P(l),i=C(),h=_("p"),a=P(f),this.h()},l(d){e=v(d,"DIV",{class:!0,role:!0});var o=b(e);t=v(o,"P",{class:!0});var c=b(t);n=D(c,l),c.forEach(p),i=E(o),h=v(o,"P",{class:!0});var r=b(h);a=D(r,f),r.forEach(p),o.forEach(p),this.h()},h(){g(t,"class","font-bold"),g(h,"class","text-sm"),g(e,"class","bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"),g(e,"role","alert")},m(d,o){j(d,e,o),u(e,t),u(t,n),u(e,i),u(e,h),u(h,a)},p(d,o){o&1&&l!==(l=d[0].title+"")&&A(n,l),o&1&&f!==(f=d[0].detail+"")&&A(a,f)},d(d){d&&p(e)}}}function dt(s){let e,t,l,n='<svg class="fill-current h-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"></path></svg>',i,h,f,a=s[0].title+"",d,o,c=s[0].detail&&Ae(s);return{c(){e=_("div"),t=_("div"),l=_("div"),l.innerHTML=n,i=C(),h=_("div"),f=_("p"),d=P(a),o=C(),c&&c.c(),this.h()},l(r){e=v(r,"DIV",{class:!0,role:!0});var m=b(e);t=v(m,"DIV",{class:!0});var y=b(t);l=v(y,"DIV",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-1i8ynoq"&&(l.innerHTML=n),i=E(y),h=v(y,"DIV",{});var S=b(h);f=v(S,"P",{class:!0});var I=b(f);d=D(I,a),I.forEach(p),o=E(S),c&&c.l(S),S.forEach(p),y.forEach(p),m.forEach(p),this.h()},h(){g(l,"class","py-1"),g(f,"class","font-bold"),g(t,"class","flex"),g(e,"class","bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"),g(e,"role","alert")},m(r,m){j(r,e,m),u(e,t),u(t,l),u(t,i),u(t,h),u(h,f),u(f,d),u(h,o),c&&c.m(h,null)},p(r,m){m&1&&a!==(a=r[0].title+"")&&A(d,a),r[0].detail?c?c.p(r,m):(c=Ae(r),c.c(),c.m(h,null)):c&&(c.d(1),c=null)},d(r){r&&p(e),c&&c.d()}}}function Ae(s){let e,t=s[0].detail+"",l;return{c(){e=_("p"),l=P(t),this.h()},l(n){e=v(n,"P",{class:!0});var i=b(e);l=D(i,t),i.forEach(p),this.h()},h(){g(e,"class","text-sm")},m(n,i){j(n,e,i),u(e,l)},p(n,i){i&1&&t!==(t=n[0].detail+"")&&A(l,t)},d(n){n&&p(e)}}}function ut(s){let e;function t(i,h){if(i[1]==="top_accent_border")return dt;if(i[1]==="banner")return ft}let l=t(s),n=l&&l(s);return{c(){e=_("section"),n&&n.c(),this.h()},l(i){e=v(i,"SECTION",{class:!0});var h=b(e);n&&n.l(h),h.forEach(p),this.h()},h(){g(e,"class","notification my-2")},m(i,h){j(i,e,h),n&&n.m(e,null)},p(i,[h]){l===(l=t(i))&&n?n.p(i,h):(n&&n.d(1),n=l&&l(i),n&&(n.c(),n.m(e,null)))},i:q,o:q,d(i){i&&p(e),n&&n.d()}}}function pt(s,e,t){let{data:l}=e,{type:n="top_accent_border"}=e;return s.$$set=i=>{"data"in i&&t(0,l=i.data),"type"in i&&t(1,n=i.type)},[l,n]}class Be extends Z{constructor(e){super(),K(this,e,pt,ut,Q,{data:0,type:1})}}function Fe(s,e,t){const l=s.slice();return l[5]=e[t],l[7]=t,l}function ze(s){let e,t=s[5]+"",l,n,i,h;function f(){return s[4](s[7])}return{c(){e=_("button"),l=P(t),this.h()},l(a){e=v(a,"BUTTON",{class:!0});var d=b(e);l=D(d,t),d.forEach(p),this.h()},h(){g(e,"class",n="mx-2 rounded-full px-2 py-1 "+(s[0].values.has(s[7])?"bg-blue-400":"bg-blue-200"))},m(a,d){j(a,e,d),u(e,l),i||(h=Ne(e,"click",f),i=!0)},p(a,d){s=a,d&2&&t!==(t=s[5]+"")&&A(l,t),d&1&&n!==(n="mx-2 rounded-full px-2 py-1 "+(s[0].values.has(s[7])?"bg-blue-400":"bg-blue-200"))&&g(e,"class",n)},d(a){a&&p(e),i=!1,h()}}}function mt(s){let e,t,l="Skills",n,i,h,f;i=new Be({props:{data:s[2],type:"banner"}});let a=L(s[1]),d=[];for(let o=0;o<a.length;o+=1)d[o]=ze(Fe(s,a,o));return{c(){e=_("section"),t=_("h3"),t.textContent=l,n=C(),G(i.$$.fragment),h=C();for(let o=0;o<d.length;o+=1)d[o].c();this.h()},l(o){e=v(o,"SECTION",{id:!0});var c=b(e);t=v(c,"H3",{class:!0,["data-svelte-h"]:!0}),te(t)!=="svelte-1lvqutj"&&(t.textContent=l),n=E(c),J(i.$$.fragment,c),h=E(c);for(let r=0;r<d.length;r+=1)d[r].l(c);c.forEach(p),this.h()},h(){g(t,"class","text-2xl"),g(e,"id","skills")},m(o,c){j(o,e,c),u(e,t),u(e,n),U(i,e,null),u(e,h);for(let r=0;r<d.length;r+=1)d[r]&&d[r].m(e,null);f=!0},p(o,[c]){if(c&11){a=L(o[1]);let r;for(r=0;r<a.length;r+=1){const m=Fe(o,a,r);d[r]?d[r].p(m,c):(d[r]=ze(m),d[r].c(),d[r].m(e,null))}for(;r<d.length;r+=1)d[r].d(1);d.length=a.length}},i(o){f||(B(i.$$.fragment,o),f=!0)},o(o){H(i.$$.fragment,o),f=!1},d(o){o&&p(e),W(i),le(d,o)}}}function gt(s,e,t){let{data:l}=e,{skillsClicked:n={latestClick:-1,values:new Set}}=e;const i={title:"",detail:"Click on the skills to filter the projects (OR filters)"};function h(a){n.values.has(a)?n.values.delete(a):n.values.add(a),t(0,n.latestClick=a,n)}const f=a=>h(a);return s.$$set=a=>{"data"in a&&t(1,l=a.data),"skillsClicked"in a&&t(0,n=a.skillsClicked)},[n,l,i,h,f]}class _t extends Z{constructor(e){super(),K(this,e,gt,mt,Q,{data:1,skillsClicked:0})}}function Ve(s,e,t){const l=s.slice();return l[1]=e[t],l}function xe(s){let e,t,l=s[1].name+"",n,i,h,f=s[1].description+"",a,d;return{c(){e=_("div"),t=_("h3"),n=P(l),i=C(),h=_("p"),a=P(f),d=C(),this.h()},l(o){e=v(o,"DIV",{class:!0});var c=b(e);t=v(c,"H3",{class:!0});var r=b(t);n=D(r,l),r.forEach(p),i=E(c),h=v(c,"P",{});var m=b(h);a=D(m,f),m.forEach(p),d=E(c),c.forEach(p),this.h()},h(){g(t,"class","text-lg font-medium capitalize"),g(e,"class","flex flex-col space-x-2")},m(o,c){j(o,e,c),u(e,t),u(t,n),u(e,i),u(e,h),u(h,a),u(e,d)},p(o,c){c&1&&l!==(l=o[1].name+"")&&A(n,l),c&1&&f!==(f=o[1].description+"")&&A(a,f)},d(o){o&&p(e)}}}function vt(s){let e,t,l="Technologies",n,i,h=L(s[0]),f=[];for(let a=0;a<h.length;a+=1)f[a]=xe(Ve(s,h,a));return{c(){e=_("section"),t=_("h3"),t.textContent=l,n=C(),i=_("div");for(let a=0;a<f.length;a+=1)f[a].c();this.h()},l(a){e=v(a,"SECTION",{class:!0});var d=b(e);t=v(d,"H3",{class:!0,["data-svelte-h"]:!0}),te(t)!=="svelte-ijmgjj"&&(t.textContent=l),n=E(d),i=v(d,"DIV",{class:!0});var o=b(i);for(let c=0;c<f.length;c+=1)f[c].l(o);o.forEach(p),d.forEach(p),this.h()},h(){g(t,"class","text-2xl"),g(i,"class","flex flex-col space-y-3"),g(e,"class","skills-description")},m(a,d){j(a,e,d),u(e,t),u(e,n),u(e,i);for(let o=0;o<f.length;o+=1)f[o]&&f[o].m(i,null)},p(a,[d]){if(d&1){h=L(a[0]);let o;for(o=0;o<h.length;o+=1){const c=Ve(a,h,o);f[o]?f[o].p(c,d):(f[o]=xe(c),f[o].c(),f[o].m(i,null))}for(;o<f.length;o+=1)f[o].d(1);f.length=h.length}},i:q,o:q,d(a){a&&p(e),le(f,a)}}}function kt(s,e,t){let{data:l}=e;return s.$$set=n=>{"data"in n&&t(0,l=n.data)},[l]}class bt extends Z{constructor(e){super(),K(this,e,kt,vt,Q,{data:0})}}function St(s){let e,t,l,n,i,h,f,a,d,o,c,r,m,y;l=new Be({props:{data:s[7]}}),i=new ht({props:{data:s[2]}});function S(k){s[8](k)}let I={data:s[6]};s[0]!==void 0&&(I.skillsClicked=s[0]),f=new _t({props:I}),_e.push(()=>Se(f,"skillsClicked",S));function M(k){s[9](k)}let x={data:s[4],priorities:s[3]};return s[1]!==void 0&&(x.skillsFilter=s[1]),o=new st({props:x}),_e.push(()=>Se(o,"skillsFilter",M)),m=new bt({props:{data:s[5]}}),{c(){e=C(),t=_("section"),G(l.$$.fragment),n=C(),G(i.$$.fragment),h=C(),G(f.$$.fragment),d=C(),G(o.$$.fragment),r=C(),G(m.$$.fragment),this.h()},l(k){Re("svelte-rrjofc",document.head).forEach(p),e=E(k),t=v(k,"SECTION",{class:!0});var z=b(t);J(l.$$.fragment,z),n=E(z),J(i.$$.fragment,z),h=E(z),J(f.$$.fragment,z),d=E(z),J(o.$$.fragment,z),r=E(z),J(m.$$.fragment,z),z.forEach(p),this.h()},h(){document.title="Jeremia Axel's Portofolio Web",g(t,"class","flex flex-auto flex-col my-20 space-y-4 md:container mx-auto md:w-3/5 w-11/12")},m(k,O){j(k,e,O),j(k,t,O),U(l,t,null),u(t,n),U(i,t,null),u(t,h),U(f,t,null),u(t,d),U(o,t,null),u(t,r),U(m,t,null),y=!0},p(k,[O]){const z={};!a&&O&1&&(a=!0,z.skillsClicked=k[0],ve(()=>a=!1)),f.$set(z);const X={};!c&&O&2&&(c=!0,X.skillsFilter=k[1],ve(()=>c=!1)),o.$set(X)},i(k){y||(B(l.$$.fragment,k),B(i.$$.fragment,k),B(f.$$.fragment,k),B(o.$$.fragment,k),B(m.$$.fragment,k),y=!0)},o(k){H(l.$$.fragment,k),H(i.$$.fragment,k),H(f.$$.fragment,k),H(o.$$.fragment,k),H(m.$$.fragment,k),y=!1},d(k){k&&(p(e),p(t)),W(l),W(i),W(f),W(o),W(m)}}}function yt(s,e,t){const l=fe.profile,n=["internship","volunteering","school","personal"],i=fe.projects.map(I=>{let M=new qe;return Object.assign(M,I),M}),h=fe.technologies,f=Qe(i),a=Ze(h),d=[...new Set(f.concat(a))].sort(),o={title:"Work In Progress",detail:"This website is still under development. But the contents are ready."};let c={latestClick:0,values:new Set},r=new Set;function m(I,M){let x="";M.forEach(k=>x+=d[k]+"|"),x=x.trim(),t(1,r=new Set(x.split("|").filter(k=>k!="")))}function y(I){c=I,t(0,c)}function S(I){r=I,t(1,r)}return s.$$.update=()=>{s.$$.dirty&1&&m(c.latestClick,c.values)},[c,r,l,n,i,h,d,o,y,S]}class jt extends Z{constructor(e){super(),K(this,e,yt,St,Q,{})}}export{jt as component};
