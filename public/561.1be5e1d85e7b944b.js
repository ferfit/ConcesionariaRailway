"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[561],{6561:(_t,N,s)=>{s.r(N),s.d(N,{TiposModule:()=>u});var k=s(9299),C=s(4859),F=s(6709),f=s(9549),U=s(7392),y=s(284),Y=s(8255),A=s(8739),L=s(3162),B=s(3238),b=s(6308),S=s(4385),E=s(455),D=s(266),z=s(4466),d=s(5412),r=s(4006),O=s(7155),t=s(4650);class h{constructor(){}}h.\u0275fac=function(o){return new(o||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["tipos"]],decls:1,vars:0,template:function(o,i){1&o&&t._UZ(0,"router-outlet")},dependencies:[k.lC],encapsulation:2,changeDetection:0});var w=s(7579),J=s(2722),R=s(8372),v=s(3900),_=s(4004),G=s(6451),j=s(8288),x=s(6895);function $(n,o){1&n&&(t.TgZ(0,"h1",14),t._uU(1,"Agregar tipo"),t.qZA())}function H(n,o){1&n&&(t.TgZ(0,"h1",14),t._uU(1,"Editar tipo"),t.qZA())}function X(n,o){1&n&&(t.TgZ(0,"h1",14),t._uU(1,"Datos del tipo"),t.qZA())}function K(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,' El campo "nombre" es requerido. '),t.qZA())}function W(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,' El campo "nombre" debe tener al menos 3 caracteres. '),t.qZA())}function q(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,' El campo "nombre" debe tener un m\xe1ximo 3 caracteres. '),t.qZA())}function V(n,o){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,K,2,0,"div",16),t.YNc(2,W,2,0,"div",16),t.YNc(3,q,2,0,"div",16),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",null==i.nombre.errors?null:i.nombre.errors.required),t.xp6(1),t.Q6J("ngIf",null==i.nombre.errors?null:i.nombre.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==i.nombre.errors?null:i.nombre.errors.maxlength)}}function P(n,o){1&n&&t._UZ(0,"div",15)}function tt(n,o){if(1&n){const i=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.closeDialog())}),t._uU(1," Cancelar "),t.qZA()}}function ot(n,o){if(1&n&&(t.TgZ(0,"button",18),t._uU(1),t.qZA()),2&n){const i=t.oxw();t.Q6J("color","primary")("disabled",i.tiposForm.invalid),t.xp6(1),t.hij(" ",i.actionBtn," ")}}function it(n,o){if(1&n){const i=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.closeDialog())}),t._uU(1,"Cerrar"),t.qZA()}}class p{constructor(o,i,e){this._formBuilder=o,this.dialogRef=i,this.data=e,this.isLoading=!1,this.actionBtn="Guardar"}ngOnInit(){this.tiposForm=this._formBuilder.group({nombre:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(60)])],estado:[!0,r.kI.compose([])]}),"crear"!==this.data.action&&(this.actionBtn="Actualizar",this.tiposForm.controls.nombre.setValue(this.data.tipo.nombre),this.tiposForm.controls.estado.setValue(this.data.tipo.estado))}get nombre(){return this.tiposForm.get("nombre")}get estado(){return this.tiposForm.get("estado")}closeDialog(){this.dialogRef.close(!1)}guardar(){if(!this.tiposForm.invalid)return this.dialogRef.close(this.tiposForm.value)}}p.\u0275fac=function(o){return new(o||p)(t.Y36(r.qu),t.Y36(d.so),t.Y36(d.WI))},p.\u0275cmp=t.Xpm({type:p,selectors:[["modalDialog"]],decls:21,vars:12,consts:[[1,"flex","w-full"],["class","font-bold px-0 text-lg","mat-dialog-title","",4,"ngIf"],[1,"m-0"],[1,"mt-5",3,"formGroup","ngSubmit"],[1,"grid","sm:grid-cols-6","gap-6"],[1,"mt-2","col-span-6","md:col-span-2"],[1,"fuse-mat-no-subscript","w-full"],["matInput","","formControlName","nombre",3,"placeholder","spellcheck"],["class","alert alert-danger mt-2 px-1 text-red-500",4,"ngIf"],["formControlName","estado",1,"mt-5",3,"color"],[1,"flex","justify-end","mt-8"],["type","button","class","ml-auto","mat-button","",3,"click",4,"ngIf"],["type","submit","class","ml-2","mat-flat-button","",3,"color","disabled",4,"ngIf"],["class"," ","mat-button","","mat-dialog-close","",3,"click",4,"ngIf"],["mat-dialog-title","",1,"font-bold","px-0","text-lg"],[1,"alert","alert-danger","mt-2","px-1","text-red-500"],[4,"ngIf"],["type","button","mat-button","",1,"ml-auto",3,"click"],["type","submit","mat-flat-button","",1,"ml-2",3,"color","disabled"],["mat-button","","mat-dialog-close","",1,"",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.YNc(1,$,2,0,"h1",1),t.YNc(2,H,2,0,"h1",1),t.YNc(3,X,2,0,"h1",1),t.qZA(),t._UZ(4,"hr",2),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return i.guardar()}),t.TgZ(6,"div",4)(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),t._uU(10,"Nombre"),t.qZA(),t._UZ(11,"input",7),t.qZA(),t.YNc(12,V,4,3,"div",8),t.qZA(),t.TgZ(13,"div",5)(14,"mat-checkbox",9),t._uU(15," Estado "),t.qZA(),t.YNc(16,P,1,0,"div",8),t.qZA()(),t.TgZ(17,"div",10),t.YNc(18,tt,2,0,"button",11),t.YNc(19,ot,2,3,"button",12),t.YNc(20,it,2,0,"button",13),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("ngIf","crear"===i.data.action),t.xp6(1),t.Q6J("ngIf","editar"===i.data.action),t.xp6(1),t.Q6J("ngIf","ver"===i.data.action),t.xp6(2),t.Q6J("formGroup",i.tiposForm),t.xp6(6),t.Q6J("placeholder","Nombre")("spellcheck",!1),t.xp6(1),t.Q6J("ngIf",i.nombre.invalid&&(i.nombre.dirty||i.nombre.touched)),t.xp6(2),t.Q6J("color","primary"),t.xp6(2),t.Q6J("ngIf",i.estado.invalid&&(i.estado.dirty||i.estado.touched)),t.xp6(2),t.Q6J("ngIf","ver"!==i.data.action),t.xp6(1),t.Q6J("ngIf","ver"!==i.data.action),t.xp6(1),t.Q6J("ngIf","ver"===i.data.action))},dependencies:[C.lW,F.oG,f.KE,f.hX,y.Nt,x.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,d.ZT,d.uh]});var M=s(1135),nt=s(8505),Q=s(5698),Z=s(2340),et=s(529);class m{constructor(o){this._httpClient=o,this._tipos=new M.X([]),this._paginationTipos=new M.X(null)}get tipos$(){return this._tipos.asObservable()}get paginationTipos$(){return this._paginationTipos.asObservable()}getTipos(o=0,i=10,e="_id",a="desc",c=""){return this._httpClient.get(Z.N.api+"tipos",{params:{page:""+o,size:""+i,sort:e,order:a,search:c}}).pipe((0,nt.b)(l=>{this._tipos.next(l.registros),this._paginationTipos.next(l.pagination)}))}createTipo(o){return this.tipos$.pipe((0,Q.q)(1),(0,v.w)(i=>this._httpClient.post(Z.N.api+"tipos",o).pipe((0,_.U)(e=>(this._tipos.next([e.registro,...i]),e)))))}updateTipo(o,i){return this.tipos$.pipe((0,Q.q)(1),(0,v.w)(e=>this._httpClient.patch(Z.N.api+"tipos/"+o,{registro:i}).pipe((0,_.U)(a=>{for(let c=0;c<e.length;c++)if(e[c]._id===o){e[c]=a.registroActualizado;break}return this._tipos.next(e),a}))))}deleteTipo(o){return this.tipos$.pipe((0,Q.q)(1),(0,v.w)(i=>this._httpClient.delete(Z.N.api+"tipos/"+o).pipe((0,_.U)(e=>{if(e.ok){const a=i.filter(c=>c._id!==o);return this._tipos.next(a),e}return e}))))}}m.\u0275fac=function(o){return new(o||m)(t.LFG(et.eN))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});var st=s(8552),at=s(6e3);function rt(n,o){1&n&&(t.TgZ(0,"div",15),t._UZ(1,"mat-progress-bar",16),t.qZA()),2&n&&(t.xp6(1),t.Q6J("mode","indeterminate"))}function ct(n,o){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",31),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check"))}function lt(n,o){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",32),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x"))}function pt(n,o){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"div",25)(2,"div",22),t._uU(3),t.qZA(),t.TgZ(4,"div",26),t.YNc(5,ct,2,1,"ng-container",13),t.YNc(6,lt,2,1,"ng-container",13),t.qZA(),t.TgZ(7,"div",27)(8,"button",28)(9,"mat-icon",29),t.NdJ("click",function(){const c=t.CHM(i).$implicit,l=t.oxw(4);return t.KtG(l.editar(c))}),t.qZA()(),t.TgZ(10,"button",28)(11,"mat-icon",30),t.NdJ("click",function(){const c=t.CHM(i).$implicit,l=t.oxw(4);return t.KtG(l.eliminar(c))}),t.qZA()()()(),t.BQk()}if(2&n){const i=o.$implicit;t.xp6(3),t.hij(" ",i.nombre," "),t.xp6(2),t.Q6J("ngIf",i.estado),t.xp6(1),t.Q6J("ngIf",!i.estado),t.xp6(2),t.Q6J("matTooltip","Editar"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:pencil"),t.xp6(1),t.Q6J("matTooltip","Eliminar")}}function mt(n,o){if(1&n&&(t.ynx(0),t.YNc(1,pt,12,6,"ng-container",24),t.BQk()),2&n){const i=o.ngIf,e=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",i)("ngForTrackBy",e.trackByFn)}}const dt=function(n){return{"pointer-events-none":n}},gt=function(){return[5,10,25,100]};function ut(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",18)(2,"div",19)(3,"div",20),t._uU(4," NOMBRE "),t.qZA(),t.TgZ(5,"div",21),t._uU(6," ESTADO "),t.qZA(),t.TgZ(7,"div",22),t._uU(8,"ACCIONES"),t.qZA()(),t.YNc(9,mt,2,2,"ng-container",13),t.ALo(10,"async"),t.qZA(),t._UZ(11,"mat-paginator",23),t.BQk()),2&n){const i=t.oxw(2);t.xp6(3),t.Q6J("mat-sort-header","nombre"),t.xp6(2),t.Q6J("mat-sort-header","estado"),t.xp6(4),t.Q6J("ngIf",t.lcZ(10,9,i.tipos$)),t.xp6(2),t.Q6J("ngClass",t.VKq(11,dt,i.isLoading))("length",i.paginationTipos.length)("pageIndex",i.paginationTipos.page)("pageSize",i.paginationTipos.size)("pageSizeOptions",t.DdM(13,gt))("showFirstLastButtons",!0)}}function ft(n,o){if(1&n&&(t.ynx(0),t.YNc(1,ut,12,14,"ng-container",17),t.BQk()),2&n){const i=o.ngIf;t.oxw();const e=t.MAs(18);t.xp6(1),t.Q6J("ngIf",i.length>0)("ngIfElse",e)}}function ht(n,o){1&n&&(t.TgZ(0,"div",33),t._uU(1,"No ha registros!"),t.qZA())}class T{constructor(o,i,e,a,c){this._changeDetectorRef=o,this._tiposService=i,this._dialog=e,this._snackBar=a,this._confirmDialog=c,this.searchInputControl=new r.p4,this._unsubscribeAll=new w.x,this.isLoading=!1}ngOnInit(){this._tiposService.paginationTipos$.pipe((0,J.R)(this._unsubscribeAll)).subscribe(o=>{this.paginationTipos=o,this._changeDetectorRef.markForCheck()}),this.tipos$=this._tiposService.tipos$,this.searchInputControl.valueChanges.pipe((0,J.R)(this._unsubscribeAll),(0,R.b)(300),(0,v.w)(o=>(this.isLoading=!0,this._tiposService.getTipos(0,10,"_id","desc",o))),(0,_.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"_id",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,J.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,G.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._tiposService.getTipos(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,_.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}crear(){this._dialog.open(p,{height:"auto",width:"800px",autoFocus:!1,data:{cliente:!1,action:"crear"}}).afterClosed().subscribe(i=>{i&&this._tiposService.createTipo(i).subscribe(e=>{e.ok&&this._snackBar.mostrarAlerta(e.mensaje,"mat-primary")})})}editar(o){this._dialog.open(p,{height:"auto",width:"800px",autoFocus:!1,data:{tipo:o,action:"editar"}}).afterClosed().subscribe(e=>{e&&this._tiposService.updateTipo(o._id,e).subscribe(a=>{a.ok&&this._snackBar.mostrarAlerta(a.mensaje,"mat-primary")})})}ver(o){this._dialog.open(p,{height:"650px",autoFocus:!1,data:{tipo:o,action:"ver"}})}eliminar(o){this._confirmDialog.open("\xbfEst\xe1s seguro de que deseas eliminar este producto?","\xa1Esta acci\xf3n no se puede deshacer!","Eliminar").afterClosed().subscribe(l=>{"confirmed"===l&&this._tiposService.deleteTipo(o._id).subscribe(I=>{this._snackBar.mostrarAlerta(I.mensaje,I.ok?"mat-primary":I.alerta)})})}trackByFn(o,i){return i.id||o}}T.\u0275fac=function(o){return new(o||T)(t.Y36(t.sBO),t.Y36(m),t.Y36(d.uw),t.Y36(st.c),t.Y36(at.E))},T.\u0275cmp=t.Xpm({type:T,selectors:[["tipos-list"]],viewQuery:function(o,i){if(1&o&&(t.Gf(A.NW,5),t.Gf(b.YE,5)),2&o){let e;t.iGM(e=t.CRH())&&(i._paginator=e.first),t.iGM(e=t.CRH())&&(i._sort=e.first)}},decls:19,vars:10,consts:[[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","py-8","px-6","md:px-8","border-b"],["class","absolute inset-x-0 bottom-0",4,"ngIf"],[1,"text-4xl","font-extrabold","tracking-tight"],[1,"flex","shrink-0","mt-6","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-flat-button","",1,"ml-4",3,"color","click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-hidden","sm:overflow-y-auto"],[4,"ngIf"],["noTipos",""],[1,"absolute","inset-x-0","bottom-0"],[3,"mode"],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"inventory-grid-tipos","z-10","sticky","top-0","grid","gap-4","py-4","px-6","md:px-8","shadow","text-md","font-semibold","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"",3,"mat-sort-header"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,""],[1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"inventory-grid-tipos","grid","items-center","gap-4","py-3","px-6","md:px-8","border-b"],[1,"hidden","sm:block"],[1,"flex"],[1,"min-w-10","min-h-7","h-7",3,"matTooltip"],[1,"icon-size-5","text-blue-500",3,"svgIcon","click"],["svgIcon","heroicons_outline:trash",1,"text-red-500",3,"click"],[1,"text-green-400","icon-size-5",3,"svgIcon"],[1,"text-red-400","icon-size-5",3,"svgIcon"],[1,"p-8","sm:p-16","border-t","text-4xl","font-semibold","tracking-tight","text-center"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,rt,2,1,"div",2),t.TgZ(3,"div",3),t._uU(4,"Tipos"),t.qZA(),t.TgZ(5,"div",4)(6,"mat-form-field",5),t._UZ(7,"mat-icon",6)(8,"input",7),t.qZA(),t.TgZ(9,"button",8),t.NdJ("click",function(){return i.crear()}),t._UZ(10,"mat-icon",9),t.TgZ(11,"span",10),t._uU(12,"Crear"),t.qZA()()()(),t.TgZ(13,"div",11)(14,"div",12),t.YNc(15,ft,2,2,"ng-container",13),t.ALo(16,"async"),t.YNc(17,ht,2,0,"ng-template",null,14,t.W1O),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("ngIf",i.isLoading),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(1),t.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Buscar..."),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus"),t.xp6(5),t.Q6J("ngIf",t.lcZ(16,8,i.tipos$)))},dependencies:[C.lW,f.KE,f.qo,U.Hw,y.Nt,A.NW,L.pW,b.YE,b.nU,D.gM,x.mk,x.sg,x.O5,r.Fj,r.JJ,r.oH,x.Ov],styles:[".inventory-grid-tipos{grid-template-columns:auto 100px}@media (min-width: 600px){.inventory-grid-tipos{grid-template-columns:auto 100px 100px}}@media (min-width: 960px){.inventory-grid-tipos{grid-template-columns:auto 100px 100px}}@media (min-width: 1280px){.inventory-grid-tipos{grid-template-columns:auto 100px 100px}}\n"],encapsulation:2,data:{animation:j.L},changeDetection:0});class g{constructor(o){this._tiposService=o}resolve(o,i){return this._tiposService.getTipos()}}g.\u0275fac=function(o){return new(o||g)(t.LFG(m))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"});const vt=[{path:"",pathMatch:"full",redirectTo:"lista"},{path:"lista",component:h,children:[{path:"",component:T,resolve:{tipos:g}}]}];class u{}u.\u0275fac=function(o){return new(o||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[k.Bz.forChild(vt),C.ot,F.p9,f.lN,U.Ps,y.c,Y.Tx,A.TU,L.Cv,B.si,b.JX,S.LD,E.rP,D.AV,z.m,d.Is,r.UX,r.u5,O.p0]})}}]);