(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2+oU":function(t,e,n){"use strict";n.r(e);var c=n("ofXK"),o=n("tyNb"),s=n("Gpoy"),a=n("ey9i"),i=n("D7qI"),r=n("y8gV"),l=n("fXoL"),b=n("Wp6s"),g=n("MutI"),h=n("f0Cb"),m=n("kmnG"),d=n("qFsG"),u=n("3Pt+"),p=n("bTqV"),f=n("FKr1");function v(t,e){if(1&t&&l.Tb(0,"img",15),2&t){const t=l.kc().$implicit,e=l.kc();l.qc("src",e.imgAPI+t.url,l.Fc)}}function w(t,e){1&t&&l.Tb(0,"img",16)}function C(t,e){if(1&t){const t=l.Zb();l.Yb(0,"mat-list-option",11),l.gc("click",(function(n){l.Dc(t);const c=e.$implicit;return l.kc().onContactChange(c.id)})),l.Kc(1,v,1,1,"img",12),l.Kc(2,w,1,0,"img",13),l.Yb(3,"h3",14),l.Mc(4),l.Xb(),l.Xb()}if(2&t){const t=e.$implicit;l.qc("selected",t.selected),l.Eb(1),l.qc("ngIf",null!==t.url),l.Eb(1),l.qc("ngIf",null===t.url),l.Eb(2),l.Oc(" ",t.pib," ")}}function k(t,e){if(1&t&&l.Tb(0,"img",23),2&t){const t=l.kc().$implicit,e=l.kc();l.qc("src",e.imgAPI+t.senderAvatar,l.Fc)}}function M(t,e){1&t&&l.Tb(0,"img",24)}function y(t,e){if(1&t&&(l.Yb(0,"mat-list-item",17),l.Kc(1,k,1,1,"img",18),l.Kc(2,M,1,0,"img",19),l.Yb(3,"h3",20),l.Yb(4,"b"),l.Mc(5),l.Xb(),l.Mc(6,": "),l.Yb(7,"span",21),l.Mc(8),l.Xb(),l.Xb(),l.Yb(9,"div",14),l.Yb(10,"div",22),l.Mc(11),l.Xb(),l.Xb(),l.Xb()),2&t){const t=e.$implicit;l.Eb(1),l.qc("ngIf",null!==t.senderAvatar),l.Eb(1),l.qc("ngIf",null===t.senderAvatar),l.Eb(2),l.Jc("color",t.color),l.Eb(1),l.Nc(t.senderPib),l.Eb(3),l.Nc(t.date),l.Eb(3),l.Oc(" ",t.message," ")}}const X=[{path:"",component:(()=>{class t{constructor(t,e){this.tools=t,this.authService=e,this.contacts=[],this.messages=[],this.selectedId="",this.message="",this.imgAPI=""}ngOnInit(){this.imgAPI=a.d,this.connect()}connect(){this._hubConnection=(new s.b).withUrl(a.a+"/api/hubs/chat",{transport:s.a.WebSockets,accessTokenFactory:()=>window.localStorage.getItem(a.e)}).build(),this._hubConnection.start().then(()=>{this.tools.showNotification("Connected to the chat"),this._hubConnection.invoke("getMyContactsAsync").catch(t=>this.Handler(t))}).catch(t=>{this.tools.showNotification("Error while starting connection"),console.log("Error while starting connection: "+t)}),this._hubConnection.on("Recive",t=>{console.log(t)}),this._hubConnection.on("ReciveMessage",t=>{this.messages.push(t),this.goDown()}),this._hubConnection.on("ReciveMessages",t=>{this.messages=t,this.goDown()}),this._hubConnection.on("reciveContacts",t=>{console.log(t),this.contacts=t,this.contacts.forEach(t=>{t.selected=!1})})}Send(){this._hubConnection.invoke("SendToAsync",this.message,this.selectedId).catch(t=>this.Handler(t)),this.message=""}onContactChange(t){this.selectedId=t,this.messages=[],this.contacts.forEach(e=>{!0===e.selected&&(e.selected=!1),e.id===t&&(e.selected=!0,this._hubConnection.invoke("getAllMessageWithUser",t).catch(t=>this.Handler(t)))})}goDown(){const t=document.querySelector(".chat");setTimeout(()=>{t.scrollTop=t.scrollHeight},0)}Handler(t){-1!==t.message.toString().indexOf("because user is unauthorized")&&(this._hubConnection.stop(),this.authService.Refresh().subscribe(()=>{this.connect()}))}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(i.a),l.Sb(r.a))},t.\u0275cmp=l.Mb({type:t,selectors:[["app-chat"]],decls:20,vars:5,consts:[[1,"row","container-fluid","chat-container"],[1,"cell-md-4","cell-12","contacts"],[3,"selected","click",4,"ngFor","ngForOf"],[1,"cell-md-8","cell-12"],[1,"chat"],["tdMediaToggle","gt-xs"],["class","pad-top pad-bottom",4,"ngFor","ngForOf"],["layout","row","layout-align","start center"],["flex","","layout","row","floatPlaceholder","never",2,"width","100%"],["matInput","","placeholder","message",2,"width","100%",3,"ngModel","ngModelChange"],["type","submit","color","primary","mat-raised-button","","mat-button","",3,"disabled","click"],[3,"selected","click"],["matListAvatar","","alt","",3,"src",4,"ngIf"],["matListAvatar","","src","https://banner2.cleanpng.com/20180430/jge/kisspng-computer-icons-font-awesome-hamburger-button-5ae723a4ebfc72.3953800615250973809666.jpg","alt","",4,"ngIf"],["matLine",""],["matListAvatar","","alt","",3,"src"],["matListAvatar","","src","https://banner2.cleanpng.com/20180430/jge/kisspng-computer-icons-font-awesome-hamburger-button-5ae723a4ebfc72.3953800615250973809666.jpg","alt",""],[1,"pad-top","pad-bottom"],["matListAvatar","","matListAvatar","","alt","",3,"src",4,"ngIf"],["matListAvatar","","matListAvatar","","src","https://banner2.cleanpng.com/20180430/jge/kisspng-computer-icons-font-awesome-hamburger-button-5ae723a4ebfc72.3953800615250973809666.jpg","alt","",4,"ngIf"],["matLine","",1,"cursor-pointer"],[1,"tc-grey-500","md-caption"],[1,"text-wrap",2,"word-wrap","break-word"],["matListAvatar","","matListAvatar","","alt","",3,"src"],["matListAvatar","","matListAvatar","","src","https://banner2.cleanpng.com/20180430/jge/kisspng-computer-icons-font-awesome-hamburger-button-5ae723a4ebfc72.3953800615250973809666.jpg","alt",""]],template:function(t,e){1&t&&(l.Yb(0,"div",0),l.Yb(1,"mat-card",1),l.Yb(2,"mat-card-subtitle"),l.Mc(3,"Contacts"),l.Xb(),l.Yb(4,"mat-selection-list"),l.Kc(5,C,5,4,"mat-list-option",2),l.Xb(),l.Xb(),l.Yb(6,"div",3),l.Yb(7,"div",4),l.Yb(8,"mat-card",5),l.Yb(9,"mat-card-subtitle"),l.Mc(10),l.Xb(),l.Yb(11,"mat-list"),l.Kc(12,y,12,7,"mat-list-item",6),l.Xb(),l.Xb(),l.Xb(),l.Tb(13,"mat-divider"),l.Yb(14,"mat-card"),l.Yb(15,"div",7),l.Yb(16,"mat-form-field",8),l.Yb(17,"textarea",9),l.gc("ngModelChange",(function(t){return e.message=t})),l.Xb(),l.Xb(),l.Yb(18,"button",10),l.gc("click",(function(t){return e.Send()})),l.Mc(19,"Send"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()),2&t&&(l.Eb(5),l.qc("ngForOf",e.contacts),l.Eb(5),l.Oc("Chat with: [",e.selectedId,"]"),l.Eb(2),l.qc("ngForOf",e.messages),l.Eb(5),l.qc("ngModel",e.message),l.Eb(1),l.qc("disabled",0==e.message.length||0==e.selectedId.length))},directives:[b.a,b.e,g.i,c.k,g.a,h.a,m.b,d.b,u.c,u.o,u.r,p.b,g.f,c.l,f.j,g.b,g.d],styles:[".chat[_ngcontent-%COMP%]{height:350px;overflow-y:scroll;overflow-wrap:inherit}.mat-option.mat-selected[_ngcontent-%COMP%]{background:red!important}.mat-option.mat-active[_ngcontent-%COMP%]{background:#00f!important}mat-list-option[aria-selected=true][_ngcontent-%COMP%]{background:rgba(0,139,139,.7)}.contacts[_ngcontent-%COMP%]{height:500px;overflow-y:scroll;overflow-wrap:inherit}.mat-pseudo-checkbox[_ngcontent-%COMP%]{display:none!important;visibility:hidden!important}"]}),t})()}];let A=(()=>{class t{}return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)},imports:[[o.i.forChild(X)],o.i]}),t})();var I=n("M0ag");n.d(e,"ChatModule",(function(){return Y}));let Y=(()=>{class t{}return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)},imports:[[c.c,A,I.a]]}),t})()}}]);