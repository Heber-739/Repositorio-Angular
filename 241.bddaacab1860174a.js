"use strict";(self.webpackChunkPortafolio=self.webpackChunkPortafolio||[]).push([[241],{241:(H,k,r)=>{r.r(k),r.d(k,{ChohanModule:()=>G});var c=r(9808),l=r(2382),Z=r(6905),t=r(1223);let T=(()=>{class n{constructor(){}limpiarDado1(){const e=document.querySelectorAll(".cir1");for(var o=0;o<e.length;o++)e[o].style.display="none"}limpiarDado2(){const e=document.querySelectorAll(".cir2");for(var o=0;o<e.length;o++)e[o].style.display="none"}girarDados(){let e=15*Math.random()+7,o=200;for(let d=0;d<=e;d++)setTimeout(()=>{this.girar_dado1()},o),setTimeout(()=>{this.girar_dado2()},o),o+=200;const a=this.girar_dado1(),s=this.girar_dado2();return new Array(e,a+s)}girar_dado1(){const e=Math.round(5*Math.random()+1);switch(e){case 1:this.limpiarDado1(),document.getElementById("valor4_1").style.display="block";break;case 2:this.limpiarDado1(),document.getElementById("valor3_1").style.display="block",document.getElementById("valor5_1").style.display="block";break;case 3:this.limpiarDado1(),document.getElementById("valor3_1").style.display="block",document.getElementById("valor4_1").style.display="block",document.getElementById("valor5_1").style.display="block";break;case 4:this.limpiarDado1(),document.getElementById("valor1_1").style.display="block",document.getElementById("valor3_1").style.display="block",document.getElementById("valor5_1").style.display="block",document.getElementById("valor6_1").style.display="block";break;case 5:this.limpiarDado1(),document.getElementById("valor1_1").style.display="block",document.getElementById("valor3_1").style.display="block",document.getElementById("valor4_1").style.display="block",document.getElementById("valor5_1").style.display="block",document.getElementById("valor6_1").style.display="block";break;case 6:this.limpiarDado1(),document.getElementById("valor1_1").style.display="block",document.getElementById("valor2_1").style.display="block",document.getElementById("valor3_1").style.display="block",document.getElementById("valor5_1").style.display="block",document.getElementById("valor7_1").style.display="block",document.getElementById("valor6_1").style.display="block"}return e}girar_dado2(){const e=Math.round(5*Math.random()+1);switch(e){case 1:this.limpiarDado2(),document.getElementById("valor4_2").style.display="block";break;case 2:this.limpiarDado2(),document.getElementById("valor3_2").style.display="block",document.getElementById("valor5_2").style.display="block";break;case 3:this.limpiarDado2(),document.getElementById("valor3_2").style.display="block",document.getElementById("valor4_2").style.display="block",document.getElementById("valor5_2").style.display="block";break;case 4:this.limpiarDado2(),document.getElementById("valor1_2").style.display="block",document.getElementById("valor3_2").style.display="block",document.getElementById("valor5_2").style.display="block",document.getElementById("valor6_2").style.display="block";break;case 5:this.limpiarDado2(),document.getElementById("valor1_2").style.display="block",document.getElementById("valor3_2").style.display="block",document.getElementById("valor4_2").style.display="block",document.getElementById("valor5_2").style.display="block",document.getElementById("valor6_2").style.display="block";break;case 6:this.limpiarDado2(),document.getElementById("valor1_2").style.display="block",document.getElementById("valor2_2").style.display="block",document.getElementById("valor3_2").style.display="block",document.getElementById("valor5_2").style.display="block",document.getElementById("valor7_2").style.display="block",document.getElementById("valor6_2").style.display="block"}return e}leerRegistro(e){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var B=r(3225);function E(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",38),t._UZ(1,"input",39)(2,"input",40),t.TgZ(3,"button",13),t.NdJ("click",function(){return t.CHM(e),t.oxw().start()}),t._uU(4," Start! "),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("formControl",e.nameInput),t.xp6(1),t.Q6J("formControl",e.billeteraInput),t.xp6(1),t.Q6J("disabled",e.nameInput.invalid||e.billeteraInput.invalid)}}function A(n,i){if(1&n&&(t.TgZ(0,"p",47),t._uU(1),t._UZ(2,"br"),t._uU(3,"Apuesta y Gana! "),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" Bienvenido ",e.nombre,",")}}function S(n,i){1&n&&(t.TgZ(0,"p",48),t._uU(1,"Felicidades Gan\xf3!!"),t.qZA())}function j(n,i){1&n&&(t.TgZ(0,"p",49),t._uU(1,"Usted Perdi\xf3!"),t.qZA())}function q(n,i){if(1&n&&(t.TgZ(0,"p",47),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" Muchas Gracias ",e.nombre," por jugar, hasta la pr\xf3xima! ")}}function U(n,i){if(1&n&&(t.TgZ(0,"p",47),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" Saldo disponible: \xa2",e.billetera," ")}}function J(n,i){1&n&&(t.TgZ(0,"p",47),t._uU(1," Saldo insuficiente para seguir jugando "),t.qZA())}function z(n,i){1&n&&t._UZ(0,"p",47)}function D(n,i){if(1&n&&(t.TgZ(0,"div",41)(1,"div",42),t.YNc(2,A,4,1,"p",43),t.YNc(3,S,2,0,"p",44),t.YNc(4,j,2,0,"p",45),t.YNc(5,q,2,1,"p",43),t.qZA(),t.TgZ(6,"div",42),t.YNc(7,U,2,1,"p",43),t.YNc(8,J,2,0,"p",43),t.YNc(9,z,1,0,"p",46),t.qZA()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngSwitch",e.switchMensaje),t.xp6(1),t.Q6J("ngSwitchCase","bienvenida"),t.xp6(1),t.Q6J("ngSwitchCase","gano"),t.xp6(1),t.Q6J("ngSwitchCase","perdio"),t.xp6(1),t.Q6J("ngSwitchCase","despedida"),t.xp6(1),t.Q6J("ngSwitch",e.SaldoSuficiente),t.xp6(1),t.Q6J("ngSwitchCase","disponible"),t.xp6(1),t.Q6J("ngSwitchCase","insuficiente")}}function N(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",50)(1,"p",47),t._uU(2,"\xbfDesea continuar?"),t.qZA(),t.TgZ(3,"button",51),t.NdJ("click",function(){return t.CHM(e),t.oxw().deseaSeguir("si")}),t._uU(4,"Si"),t.qZA(),t.TgZ(5,"button",52),t.NdJ("click",function(){return t.CHM(e),t.oxw().deseaSeguir("no")}),t._uU(6,"No"),t.qZA()()}}function Q(n,i){1&n&&(t.TgZ(0,"p"),t._uU(1," Apuesta inv\xe1lida "),t.qZA())}function F(n,i){if(1&n&&(t.TgZ(0,"tr",53)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",54),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&n){const e=i.$implicit,o=i.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(e.apuesta),t.xp6(1),t.Q6J("ngClass","gano"==e.gano?"gano":"perdio"),t.xp6(1),t.hij(" ",e.gano," "),t.xp6(2),t.Oqu(e.saldo)}}const Y=[{path:"",component:(()=>{class n{constructor(e,o){this.dadosService=e,this.localStorage=o,this.nombre="",this.billetera=0,this.visible=!0,this.pregunta=!1,this.switchMensaje="",this.SaldoSuficiente="disponible",this.paridad="",this.nameInput=new l.NI("",[l.kI.required]),this.billeteraInput=new l.NI("",[l.kI.required]),this.apuestasInput=new l.NI({value:"",disabled:!0},[l.kI.required])}ngOnInit(){this.registros=this.localStorage.get("Chohan")}start(){this.billetera=this.billeteraInput.value,this.nombre=this.nameInput.value,this.visible=!1,this.apuestasInput.enable(),this.switchMensaje="bienvenida"}jugar(e){this.apostando=this.apuestasInput.value,this.apuestasInput.reset(),this.apuestasInput.disable();const o=this.dadosService.girarDados();setTimeout(()=>{let a={apuesta:this.apostando,saldo:0,gano:""};o[1]%2==0&&"par"==e||o[1]%2!=0&&"impar"==e?(this.switchMensaje="gano",this.billetera+=this.apostando,a.saldo=this.billetera,a.gano="gano"):(this.switchMensaje="perdio",this.billetera-=this.apostando,a.saldo=this.billetera,a.gano="perdio"),this.resultado=o[1],this.paridad=o[1]%2==0?"par":"impar",0!=this.billetera?this.pregunta=!0:this.deseaSeguir("no"),this.localStorage.addItem("Chohan",a),this.registros.push(a)},205*o[0])}deseaSeguir(e){this.paridad="","si"==e?this.apuestasInput.enable():(this.switchMensaje="despedida",this.SaldoSuficiente="",this.billetera=0),this.pregunta=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T),t.Y36(B.n))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-chohan"]],decls:59,vars:13,consts:[[1,"body"],[1,"saldo","box","container"],[1,"resultado","box","container"],[1,"box","container","titulo"],[1,"section1"],[1,"presentacion","box","container"],["class","form form_nombre",4,"ngIf"],["class","div_mensajes",4,"ngIf"],["class","continuar",4,"ngIf"],[1,"apuestas","box","container"],[1,"form_apuestas"],[4,"ngIf"],["type","number","placeholder","\xbfCu\xe1nto apostar\xe1?","autocomplete","off","min","1",1,"input_text","apuesta",3,"max","formControl"],["type","button",1,"btn",3,"disabled","click"],[1,"container_dados","container","box"],[1,"cont_dados","box"],[1,"dado1","cara1"],["id","valor1_1",1,"cir1","circulo1"],["id","valor2_1",1,"cir1","circulo2"],["id","valor3_1",1,"cir1","circulo3"],["id","valor4_1",1,"cir1","circulo4"],["id","valor5_1",1,"cir1","circulo5"],["id","valor6_1",1,"cir1","circulo6"],["id","valor7_1",1,"cir1","circulo7"],[1,"dado2","cara2"],["id","valor1_2",1,"cir2","circulo1"],["id","valor2_2",1,"cir2","circulo2"],["id","valor3_2",1,"cir2","circulo3"],["id","valor4_2",1,"cir2","circulo4"],["id","valor5_2",1,"cir2","circulo5"],["id","valor6_2",1,"cir2","circulo6"],["id","valor7_2",1,"cir2","circulo7"],[1,"ultimos_resultados","box","container"],[1,"tabla"],[1,"titulos"],[1,"titulo_col"],[1,"cuerpo_tabla"],["class","rows",4,"ngFor","ngForOf"],[1,"form","form_nombre"],["type","text","placeholder","\xbfCu\xe1l es tu nombre?","autocomplete","off",1,"input_text",3,"formControl"],["type","number","placeholder","Shibas a apostar","min","1","autocomplete","off",1,"input_text",3,"formControl"],[1,"div_mensajes"],[3,"ngSwitch"],["class","text",4,"ngSwitchCase"],["class","text gano",4,"ngSwitchCase"],["class","text perdio",4,"ngSwitchCase"],["class","text",4,"ngSwitchDefault"],[1,"text"],[1,"text","gano"],[1,"text","perdio"],[1,"continuar"],[1,"btn","si_cont",3,"click"],[1,"btn","no_cont",3,"click"],[1,"rows"],[3,"ngClass"]],template:function(e,o){1&e&&(t.TgZ(0,"main",0)(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA()(),t.TgZ(6,"div",2)(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA()(),t.TgZ(11,"h1",3),t._uU(12,"Comienza el Juego"),t.qZA(),t.TgZ(13,"section",4)(14,"div",5),t.YNc(15,E,5,3,"form",6),t.YNc(16,D,10,8,"div",7),t.YNc(17,N,7,0,"div",8),t.qZA(),t.TgZ(18,"div",9)(19,"div",10),t.YNc(20,Q,2,0,"p",11),t._UZ(21,"input",12),t.TgZ(22,"button",13),t.NdJ("click",function(){return o.jugar("par")}),t._uU(23," Par "),t.qZA(),t.TgZ(24,"button",13),t.NdJ("click",function(){return o.jugar("impar")}),t._uU(25," Impar "),t.qZA()()(),t.TgZ(26,"div",14)(27,"div",15)(28,"div",16),t._UZ(29,"div",17)(30,"div",18)(31,"div",19)(32,"div",20)(33,"div",21)(34,"div",22)(35,"div",23),t.qZA()(),t.TgZ(36,"div",15)(37,"div",24),t._UZ(38,"div",25)(39,"div",26)(40,"div",27)(41,"div",28)(42,"div",29)(43,"div",30)(44,"div",31),t.qZA()()()(),t.TgZ(45,"div",32)(46,"table",33)(47,"thead",34)(48,"tr")(49,"th",35),t._uU(50,"N\xb0"),t.qZA(),t.TgZ(51,"th",35),t._uU(52,"Apuesta"),t.qZA(),t.TgZ(53,"th",35),t._uU(54,"Resultado"),t.qZA(),t.TgZ(55,"th",35),t._uU(56,"Billetera"),t.qZA()()(),t.TgZ(57,"tbody",36),t.YNc(58,F,9,5,"tr",37),t.qZA()()()()),2&e&&(t.xp6(3),t.hij("Saldo: \xa2 ",o.billetera,""),t.xp6(2),t.hij("Apuesta: ",o.apostando,""),t.xp6(3),t.hij("Resultado: ",o.resultado,""),t.xp6(2),t.hij("Paridad: ",o.paridad,""),t.xp6(5),t.Q6J("ngIf",o.visible),t.xp6(1),t.Q6J("ngIf",!o.visible),t.xp6(1),t.Q6J("ngIf",o.pregunta),t.xp6(3),t.Q6J("ngIf",o.apuestasInput.invalid&&o.apuestasInput.dirty),t.xp6(1),t.Q6J("max",o.billetera)("formControl",o.apuestasInput),t.xp6(1),t.Q6J("disabled",o.apuestasInput.invalid||o.apuestasInput.disabled),t.xp6(2),t.Q6J("disabled",o.apuestasInput.invalid||""==o.apuestasInput.value||o.apuestasInput.disabled),t.xp6(34),t.Q6J("ngForOf",o.registros))},directives:[c.O5,l._Y,l.JL,l.Fj,l.JJ,l.oH,l.qQ,l.wV,c.RF,c.n9,c.ED,l.Fd,c.sg,c.mk],styles:['.body[_ngcontent-%COMP%]{grid-column-gap:1vw;column-gap:1vw;display:grid;font-family:Asap,sans-serif;grid-auto-flow:row;grid-template-columns:24vw 24vw 24vw 24vw;grid-template-rows:auto auto auto auto;min-height:71vh;grid-row-gap:5px;row-gap:5px;padding:0 0 50px}.container[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0;margin:5px auto}.saldo[_ngcontent-%COMP%], .resultado[_ngcontent-%COMP%]{margin:5px 0 2px;width:clamp(125px,45vw,270px)}.saldo[_ngcontent-%COMP%]{grid-column:1/3;grid-row:1/2;justify-self:flex-end}.resultado[_ngcontent-%COMP%]{grid-column:3/5;grid-row:1/2;justify-self:flex-start}.saldo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .resultado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 2px;font-size:calc(12px + 1.5vw);font-weight:bolder}.titulo[_ngcontent-%COMP%]{grid-column:1/5;grid-row:2/3;margin:0 auto;padding:clamp(15px,4vw,25px) clamp(15px,4vw,70px);width:-moz-fit-content;width:fit-content}.section1[_ngcontent-%COMP%]{grid-column-gap:5vw;column-gap:5vw;display:grid;justify-self:center;grid-column:1/5;grid-row:3/4;grid-template-columns:auto auto;grid-template-rows:auto auto;max-width:600px}.presentacion[_ngcontent-%COMP%]{display:grid;grid-column:1/2;margin:0 auto;text-align:center;width:clamp(150px,80%,250px);height:clamp(150px,50vw,300px)}.form_nombre[_ngcontent-%COMP%]{display:grid;flex-direction:column;height:-moz-fit-content;height:fit-content;align-self:center}.input_text[_ngcontent-%COMP%]{font-size:calc(.1rem + 3vw);height:calc(4px + 9vw);margin:6px auto;text-align:center}.btn[_ngcontent-%COMP%]{margin:0 auto;padding:8px 0;width:40%}.text[_ngcontent-%COMP%]{text-align:center;font-size:calc(12px + 1vw);line-height:1.2rem}.gano[_ngcontent-%COMP%]{color:green;font-weight:700;text-shadow:1px 1px black}.perdio[_ngcontent-%COMP%]{color:red;font-weight:700;text-shadow:1px 1px black}.continuar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around;margin:10px auto 5px;padding:0 0 5px;width:95%}.apuestas[_ngcontent-%COMP%]{display:grid;align-items:center;min-height:23vw;margin:10px auto 5px;width:clamp(150px,80%,250px);height:clamp(83px,-moz-fit-content,140px);height:clamp(83px,fit-content,140px);grid-row:2/3}.form_apuestas[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;width:100%;margin:10px auto 15px}.apuesta[_ngcontent-%COMP%]{margin:0 auto 5px}.container_dados[_ngcontent-%COMP%]{align-self:center;display:grid;grid-column:2/3;grid-row:1/3;grid-template-areas:"dado1" "dado2";justify-content:center;padding:10px;width:-moz-fit-content;width:fit-content}.cont_dados[_ngcontent-%COMP%]{background-color:#d3d3d3;margin:10px auto;width:clamp(70px,25vw,160px);height:clamp(70px,25vw,160px)}.dado1[_ngcontent-%COMP%]{grid-area:"dado1"}.dado2[_ngcontent-%COMP%]{grid-area:"dado2"}.dado1[_ngcontent-%COMP%], .dado2[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,30%);grid-template-rows:repeat(3,30%);width:100%;height:100%}.cara1[_ngcontent-%COMP%], .cara2[_ngcontent-%COMP%]{display:grid;align-content:center;justify-content:center}.cir1[_ngcontent-%COMP%], .cir2[_ngcontent-%COMP%], .circulo[_ngcontent-%COMP%]{background:black;border-radius:50%;width:80%;height:80%;margin:auto}.circulo1[_ngcontent-%COMP%]{grid-row:1;grid-column:1}.circulo2[_ngcontent-%COMP%]{grid-row:1;grid-column:2}.circulo3[_ngcontent-%COMP%]{grid-row:1;grid-column:3}.circulo4[_ngcontent-%COMP%]{display:none;grid-row:2;grid-column:2}.circulo5[_ngcontent-%COMP%]{grid-row:3;grid-column:1}.circulo6[_ngcontent-%COMP%]{grid-row:3;grid-column:3}.circulo7[_ngcontent-%COMP%]{grid-row:3;grid-column:2}.ultimos_resultados[_ngcontent-%COMP%]{margin:0 auto;grid-column:1/5;grid-row:4/5;min-height:60px;overflow:hidden;width:90vw}.tabla[_ngcontent-%COMP%]{margin:-4px 0 0;width:91vw;border-collapse:separate;border-spacing:0 0}.titulos[_ngcontent-%COMP%]{background:var(--color5)}.titulo_col[_ngcontent-%COMP%]{border-right:1px solid black;font-size:calc(.4rem + 2vw);font-weight:700;padding:8px 2px 5px;text-align:center}.cuerpo_tabla[_ngcontent-%COMP%]{transform:scaley(-1);width:32vw;box-shadow:0 1px #000}.rows[_ngcontent-%COMP%]{transform:scaley(-1);font-size:calc(10px + 1vw);font-weight:bolder;text-align:center;box-shadow:0 1px #000}.rows[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#272727;height:-moz-fit-content;height:fit-content;padding:2px 0}.rows[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2n){background:#5c5c5c}@media screen and (min-width: 768px){.titulo[_ngcontent-%COMP%]{margin:10px auto 15px}}@media screen and (min-width: 1024px){.box[_ngcontent-%COMP%]{border-radius:5px}.body[_ngcontent-%COMP%]{margin:10px auto 0;width:clamp(1024px,100vw,1920px);grid-template-columns:37% 26% 37%;grid-template-rows:auto auto auto;justify-content:center}h1.titulo[_ngcontent-%COMP%]{font-size:calc(10px + 1.5vw);grid-column:2/3;grid-row:1/2;margin:0 auto;padding:8px 18px;width:-moz-fit-content;width:fit-content}div.saldo[_ngcontent-%COMP%]{grid-column:1/2;width:90%;flex-direction:row}.saldo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .resultado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:calc(9px + .8vw);margin:.5vw 0}div.resultado[_ngcontent-%COMP%]{width:90%;grid-column:3/4;grid-row:1/2;flex-direction:row}.section1[_ngcontent-%COMP%]{column-gap:1vw;grid-column:2/4;grid-row:2/3;grid-template-columns:41% auto;grid-template-rows:auto auto;margin:2vw 0 0;padding:0;width:100%;max-width:none}.presentacion[_ngcontent-%COMP%]{display:grid;grid-column:1/2;grid-row:1/2;width:75%;height:clamp(230px,18vw,400px);text-align:center;margin:0 auto;align-content:center}.div_mensajes[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:clamp(150px,10vw,250px);justify-content:space-evenly}.input_text[_ngcontent-%COMP%]{font-size:calc(5px + 2vw);height:calc(20px + 2vw);margin:0 auto 1.3vw}.input_text[_ngcontent-%COMP%]::placeholder{font-size:calc(3px + 1.3vw)}.btn[_ngcontent-%COMP%]{font-size:calc(5px + 1.5vw);padding:6px 0;width:35%}.button[_ngcontent-%COMP%]{font-size:20px;width:50%}.text[_ngcontent-%COMP%]{line-height:1.2;font-size:calc(5px + 1.5vw)}.continuar[_ngcontent-%COMP%]{font-size:calc(5px + 1.5vw)}.apuestas[_ngcontent-%COMP%]{grid-column:1/2;grid-row:2/3;width:75%;height:clamp(150px,10vw,300px);text-align:center;margin:10px auto;min-height:0}.form_apuestas[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:calc(5px + 1vw)}.container_dados[_ngcontent-%COMP%]{align-self:flex-start;column-gap:25px;grid-template-areas:"dado1 dado2"}.cont_dados[_ngcontent-%COMP%]{width:clamp(100px,10vw,200px);height:clamp(100px,10vw,200px);border-radius:15px}.ultimos_resultados[_ngcontent-%COMP%]{grid-column:1/2;grid-row:2/3;margin:20px 0;justify-self:flex-end;height:-moz-fit-content;height:fit-content;width:90%}.tabla[_ngcontent-%COMP%]{width:100%}.titulo_col[_ngcontent-%COMP%]{font-size:calc(5px + 1vw)}.cuerpo_tabla[_ngcontent-%COMP%]{transform:scaley(-1);width:32vw;box-shadow:0 1px #000}.rows[_ngcontent-%COMP%]{font-size:calc(4px + 1vw);height:10px}.rows[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 0}}']}),n})()}];let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,l.UX,Z.Bz.forChild(Y)],Z.Bz]}),n})(),G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[T],imports:[[c.ez,R]]}),n})()}}]);