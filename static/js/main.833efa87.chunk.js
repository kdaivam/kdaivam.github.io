(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"a":"Kanya","c":"","b":"Daivam","f":"| Solutions Architect | Engineering Leader | Mentor | Runner | Artist ","j":[{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/kanyadaivam/","style":"socialicons"},{"id":0,"image":"fa-github","url":"https://github.com/kdaivam","style":"socialicons"},{"id":4,"image":"fa-twitter","url":"https://www.twitter.com/kanyadaivam/","style":"socialicons"}],"e":"About Me","q":true,"l":"/?__a=1","d":"I\'m an Engineering manager. My strengths are data engineering, Machine learning and a newbie in UI. I lead, coach, hire and develop the engineering team. I have MBA from Santa Clara University,CA and Bachelors in Computer Science from India","n":"Recent Projects","k":"https://www.instagram.com/","m":"","g":"https://api.github.com/users/","i":"kdaivam","h":"/repos?sort=updated&direction=desc","o":2,"r":true,"p":false}')},12:function(e,a,t){e.exports=t.p+"static/media/resume.e75af3b2.pdf"},32:function(e,a,t){e.exports=t.p+"static/media/Profile.21c3688f.jpg"},37:function(e,a,t){e.exports=t(68)},42:function(e,a,t){},46:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(30),l=t.n(i),c=(t(42),t(11)),s=t(8),o=(t(43),t(44),t(46),t(1)),m=t(36),u=t(3),d=t(31),p=t.n(d),g=function(){var e=Object(n.useState)(new Array(o.j.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],i=a[1],l=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",i(a)):"leave"===e.event?(a[e.icon.id]="socialicons",i(a)):void 0};return r.a.createElement("div",null,r.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{className:"container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),r.a.createElement(p.a,{className:"lead"}," ",o.f),r.a.createElement("div",{className:"p-5"},o.j.map((function(e){return r.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return l({icon:e,event:"enter"})},onMouseOut:function(){return l({icon:e,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},b=t(10),f=t.n(b),h=t(12),v=t.n(h),E=t(32),N=t.n(E),y={display:"flex",flexDirection:"row",alignItems:"center"},j=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=(a[0],a[1]),i=Object(n.useState)(o.q),l=Object(u.a)(i,2),c=l[0],s=l[1],m=Object(n.useState)(v.a),d=Object(u.a)(m,1)[0];Object(n.useEffect)((function(){c&&p()}),[c]);var p=function(e){f.a.get(o.k+o.m+o.l).then((function(e){return t(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return s(!1),console.error(e.message)})).finally((function(){}))};return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row",style:y},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border border-secondary rounded-circle",src:N.a,alt:"profilepicture",width:"350",height:"350"})),r.a.createElement("div",{className:"col d-lg-inline align-self-center"},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),r.a.createElement("p",{className:"lead text-center"},o.d),d&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:v.a,target:"_blank",rel:"noreferrer noopener",role:"button"},"Resume"))))))},k=function(e){var a=e.value,t=Object(n.useState)([]),i=Object(u.a)(t,2),l=i[0],c=i[1],s=Object(n.useCallback)((function(e){f.a.get(a).then((function(e){return c(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){s()}),[s]);var o=[],m=0;for(var d in l)o.push(d),m+=l[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(l[e]/m*1e3)/10," %")})))},w=function(e){var a=e.value,t=Object(n.useState)("0 mints"),i=Object(u.a)(t,2),l=i[0],c=i[1],s=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),r=Math.trunc(n/1e3/60/60);if(r<24)return c("".concat(r.toString()," hours ago"));var i=t.getDate(),l=t.getMonth(),s=t.getFullYear();return c("on ".concat(i," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][l]," ").concat(s))}),[a.pushed_at]);Object(n.useEffect)((function(){s()}),[s]);var o=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,g=a.languages_url;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},o," "),r.a.createElement("p",{className:"card-text"},m," "),r.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(k,{value:g}),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},p)),r.a.createElement("small",{className:"text-muted"},"Updated ",l)))))},q=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],i=a[1],l=Object(n.useCallback)((function(e){f.a.get(o.g+o.i+o.h).then((function(e){return i(e.data.slice(0,o.o))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){l()}),[l]),r.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},t.length&&r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},o.n),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(w,{key:e.id,id:e.id,value:e})})))))},x=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(u.a)(e,1)[0];return r.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/kdaivam","aria-label":"My GitHub"},"Kanya Daivam")," ","using ",r.a.createElement("i",{className:"fab fa-react"}))},O=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),i=t[0],l=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==i&&l(e)}))}),[i]),r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(i?"bg-transparent":"bg-gradient"," ")},r.a.createElement("a",{className:"navbar-brand",href:"/#home"},"<".concat(o.a," />")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},o.p&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link lead",to:"/blog"},"Blog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#projects"},"1.Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:v.a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("b",null,"2.Resume"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#aboutme"},r.a.createElement("b",null,"3.About"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:v.a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("b",null,"4.Blog"))))))},P=t(35),S=function e(a){var t=this,i=a.title,l=a.image,c=a.description;Object(P.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h1",{className:""},e),r.a.createElement("hr",null))),t},this.getBlog=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.title=i,this.image=l,this.description=c},M=[],_=new S({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),A=new S({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");M.push(A),M.push(_);var C=M,D=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Blogs"),C.map((function(e,a){return r.a.createElement(B,{key:a,title:e.title,description:e.description,index:a})})))},B=function(e){var a=e.index,t=e.title,n=(e.image,e.description);return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-lg-12"}),r.a.createElement("div",{className:"col-8 col-lg-12"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},t),r.a.createElement("p",{className:"lead"},n),r.a.createElement(c.b,{to:"".concat("","blog/").concat(a)},"Read more..."," ")))),r.a.createElement("hr",null)))},L=function(e){var a=e.match.params.id,t=C[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.title),r.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},H=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,null),r.a.createElement(j,null),r.a.createElement(q,null))},I=function(){return r.a.createElement(c.a,{basename:"/"},o.r&&r.a.createElement(O,null),r.a.createElement(s.a,{path:"/",exact:!0,component:H}),o.p&&r.a.createElement(s.a,{path:"/blog",exact:!0,component:D}),o.p&&r.a.createElement(s.a,{path:"/blog/:id",component:L}),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.833efa87.chunk.js.map