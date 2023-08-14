"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[501],{501:(_t,Q,o)=>{o.r(Q),o.d(Q,{SucursalesModule:()=>p});var N=o(9299),I=o(4859),k=o(6709),f=o(9549),F=o(7392),C=o(284),M=o(8255),y=o(8739),U=o(3162),Y=o(3238),S=o(6308),B=o(4385),E=o(455),L=o(266),z=o(4466),d=o(5412),r=o(4006),O=o(7155),t=o(4650);class h{constructor(){}}h.\u0275fac=function(e){return new(e||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["sucursales"]],decls:1,vars:0,template:function(e,s){1&e&&t._UZ(0,"router-outlet")},dependencies:[N.lC],encapsulation:2,changeDetection:0});var w=o(7579),A=o(2722),R=o(8372),v=o(3900),_=o(4004),G=o(6451),j=o(8288),x=o(6895);function $(n,e){1&n&&(t.TgZ(0,"h1",14),t._uU(1,"Agregar sucursal"),t.qZA())}function H(n,e){1&n&&(t.TgZ(0,"h1",14),t._uU(1,"Editar sucursal"),t.qZA())}function X(n,e){1&n&&(t.TgZ(0,"h1",14),t._uU(1,"Datos del sucursal"),t.qZA())}function K(n,e){1&n&&(t.TgZ(0,"div"),t._uU(1,' El campo "nombre" es requerido. '),t.qZA())}function W(n,e){1&n&&(t.TgZ(0,"div"),t._uU(1,' El campo "nombre" debe tener al menos 3 caracteres. '),t.qZA())}function q(n,e){1&n&&(t.TgZ(0,"div"),t._uU(1,' El campo "nombre" debe tener un m\xe1ximo 3 caracteres. '),t.qZA())}function V(n,e){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,K,2,0,"div",16),t.YNc(2,W,2,0,"div",16),t.YNc(3,q,2,0,"div",16),t.qZA()),2&n){const s=t.oxw();t.xp6(1),t.Q6J("ngIf",null==s.nombre.errors?null:s.nombre.errors.required),t.xp6(1),t.Q6J("ngIf",null==s.nombre.errors?null:s.nombre.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==s.nombre.errors?null:s.nombre.errors.maxlength)}}function P(n,e){1&n&&t._UZ(0,"div",15)}function tt(n,e){if(1&n){const s=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(s);const i=t.oxw();return t.KtG(i.closeDialog())}),t._uU(1," Cancelar "),t.qZA()}}function et(n,e){if(1&n&&(t.TgZ(0,"button",18),t._uU(1),t.qZA()),2&n){const s=t.oxw();t.Q6J("color","primary")("disabled",s.sucursalesForm.invalid),t.xp6(1),t.hij(" ",s.actionBtn," ")}}function st(n,e){if(1&n){const s=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(s);const i=t.oxw();return t.KtG(i.closeDialog())}),t._uU(1,"Cerrar"),t.qZA()}}class u{constructor(e,s,a){this._formBuilder=e,this.dialogRef=s,this.data=a,this.isLoading=!1,this.actionBtn="Guardar"}ngOnInit(){this.sucursalesForm=this._formBuilder.group({nombre:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(60)])],estado:[!0,r.kI.compose([])]}),"crear"!==this.data.action&&(this.actionBtn="Actualizar",this.sucursalesForm.controls.nombre.setValue(this.data.sucursal.nombre),this.sucursalesForm.controls.estado.setValue(this.data.sucursal.estado))}get nombre(){return this.sucursalesForm.get("nombre")}get estado(){return this.sucursalesForm.get("estado")}closeDialog(){this.dialogRef.close(!1)}guardar(){if(!this.sucursalesForm.invalid)return this.dialogRef.close(this.sucursalesForm.value)}}u.\u0275fac=function(e){return new(e||u)(t.Y36(r.qu),t.Y36(d.so),t.Y36(d.WI))},u.\u0275cmp=t.Xpm({type:u,selectors:[["modalDialog"]],decls:21,vars:12,consts:[[1,"flex","w-full"],["class","font-bold px-0 text-lg","mat-dialog-title","",4,"ngIf"],[1,"m-0"],[1,"mt-5",3,"formGroup","ngSubmit"],[1,"grid","sm:grid-cols-6","gap-6"],[1,"mt-2","col-span-6","md:col-span-2"],[1,"fuse-mat-no-subscript","w-full"],["matInput","","formControlName","nombre",3,"placeholder","spellcheck"],["class","alert alert-danger mt-2 px-1 text-red-500",4,"ngIf"],["formControlName","estado",1,"mt-5",3,"color"],[1,"flex","justify-end","mt-8"],["type","button","class","ml-auto","mat-button","",3,"click",4,"ngIf"],["type","submit","class","ml-2","mat-flat-button","",3,"color","disabled",4,"ngIf"],["class"," ","mat-button","","mat-dialog-close","",3,"click",4,"ngIf"],["mat-dialog-title","",1,"font-bold","px-0","text-lg"],[1,"alert","alert-danger","mt-2","px-1","text-red-500"],[4,"ngIf"],["type","button","mat-button","",1,"ml-auto",3,"click"],["type","submit","mat-flat-button","",1,"ml-2",3,"color","disabled"],["mat-button","","mat-dialog-close","",1,"",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.YNc(1,$,2,0,"h1",1),t.YNc(2,H,2,0,"h1",1),t.YNc(3,X,2,0,"h1",1),t.qZA(),t._UZ(4,"hr",2),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return s.guardar()}),t.TgZ(6,"div",4)(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),t._uU(10,"Nombre"),t.qZA(),t._UZ(11,"input",7),t.qZA(),t.YNc(12,V,4,3,"div",8),t.qZA(),t.TgZ(13,"div",5)(14,"mat-checkbox",9),t._uU(15," Estado "),t.qZA(),t.YNc(16,P,1,0,"div",8),t.qZA()(),t.TgZ(17,"div",10),t.YNc(18,tt,2,0,"button",11),t.YNc(19,et,2,3,"button",12),t.YNc(20,st,2,0,"button",13),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf","crear"===s.data.action),t.xp6(1),t.Q6J("ngIf","editar"===s.data.action),t.xp6(1),t.Q6J("ngIf","ver"===s.data.action),t.xp6(2),t.Q6J("formGroup",s.sucursalesForm),t.xp6(6),t.Q6J("placeholder","Nombre")("spellcheck",!1),t.xp6(1),t.Q6J("ngIf",s.nombre.invalid&&(s.nombre.dirty||s.nombre.touched)),t.xp6(2),t.Q6J("color","primary"),t.xp6(2),t.Q6J("ngIf",s.estado.invalid&&(s.estado.dirty||s.estado.touched)),t.xp6(2),t.Q6J("ngIf","ver"!==s.data.action),t.xp6(1),t.Q6J("ngIf","ver"!==s.data.action),t.xp6(1),t.Q6J("ngIf","ver"===s.data.action))},dependencies:[I.lW,k.oG,f.KE,f.hX,C.Nt,x.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,d.ZT,d.uh]});var D=o(1135),nt=o(8505),J=o(5698),Z=o(2340),at=o(529);class m{constructor(e){this._httpClient=e,this._sucursales=new D.X([]),this._paginationSucursales=new D.X(null)}get sucursales$(){return this._sucursales.asObservable()}get paginationSucursales$(){return this._paginationSucursales.asObservable()}getSucursales(e=0,s=10,a="_id",i="desc",c=""){return this._httpClient.get(Z.N.api+"sucursales",{params:{page:""+e,size:""+s,sort:a,order:i,search:c}}).pipe((0,nt.b)(l=>{this._sucursales.next(l.registros),this._paginationSucursales.next(l.pagination)}))}createSucursal(e){return this.sucursales$.pipe((0,J.q)(1),(0,v.w)(s=>this._httpClient.post(Z.N.api+"sucursales",e).pipe((0,_.U)(a=>(this._sucursales.next([a.registro,...s]),a)))))}updateSucursal(e,s){return this.sucursales$.pipe((0,J.q)(1),(0,v.w)(a=>this._httpClient.patch(Z.N.api+"sucursales/"+e,{registro:s}).pipe((0,_.U)(i=>{for(let c=0;c<a.length;c++)if(a[c]._id===e){a[c]=i.registroActualizado;break}return this._sucursales.next(a),i}))))}deleteSucursal(e){return this.sucursales$.pipe((0,J.q)(1),(0,v.w)(s=>this._httpClient.delete(Z.N.api+"sucursales/"+e).pipe((0,_.U)(a=>{if(a.ok){const i=s.filter(c=>c._id!==e);return this._sucursales.next(i),a}return a}))))}}m.\u0275fac=function(e){return new(e||m)(t.LFG(at.eN))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});var ot=o(8552),it=o(6e3);function rt(n,e){1&n&&(t.TgZ(0,"div",15),t._UZ(1,"mat-progress-bar",16),t.qZA()),2&n&&(t.xp6(1),t.Q6J("mode","indeterminate"))}function ct(n,e){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",31),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check"))}function lt(n,e){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",32),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x"))}function ut(n,e){if(1&n){const s=t.EpF();t.ynx(0),t.TgZ(1,"div",25)(2,"div",22),t._uU(3),t.qZA(),t.TgZ(4,"div",26),t.YNc(5,ct,2,1,"ng-container",13),t.YNc(6,lt,2,1,"ng-container",13),t.qZA(),t.TgZ(7,"div",27)(8,"button",28)(9,"mat-icon",29),t.NdJ("click",function(){const c=t.CHM(s).$implicit,l=t.oxw(4);return t.KtG(l.editar(c))}),t.qZA()(),t.TgZ(10,"button",28)(11,"mat-icon",30),t.NdJ("click",function(){const c=t.CHM(s).$implicit,l=t.oxw(4);return t.KtG(l.eliminar(c))}),t.qZA()()()(),t.BQk()}if(2&n){const s=e.$implicit;t.xp6(3),t.hij(" ",s.nombre," "),t.xp6(2),t.Q6J("ngIf",s.estado),t.xp6(1),t.Q6J("ngIf",!s.estado),t.xp6(2),t.Q6J("matTooltip","Editar"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:pencil"),t.xp6(1),t.Q6J("matTooltip","Eliminar")}}function mt(n,e){if(1&n&&(t.ynx(0),t.YNc(1,ut,12,6,"ng-container",24),t.BQk()),2&n){const s=e.ngIf,a=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",s)("ngForTrackBy",a.trackByFn)}}const dt=function(n){return{"pointer-events-none":n}},gt=function(){return[5,10,25,100]};function pt(n,e){if(1&n&&(t.ynx(0),t.TgZ(1,"div",18)(2,"div",19)(3,"div",20),t._uU(4," NOMBRE "),t.qZA(),t.TgZ(5,"div",21),t._uU(6," ESTADO "),t.qZA(),t.TgZ(7,"div",22),t._uU(8,"ACCIONES"),t.qZA()(),t.YNc(9,mt,2,2,"ng-container",13),t.ALo(10,"async"),t.qZA(),t._UZ(11,"mat-paginator",23),t.BQk()),2&n){const s=t.oxw(2);t.xp6(3),t.Q6J("mat-sort-header","nombre"),t.xp6(2),t.Q6J("mat-sort-header","estado"),t.xp6(4),t.Q6J("ngIf",t.lcZ(10,9,s.sucursales$)),t.xp6(2),t.Q6J("ngClass",t.VKq(11,dt,s.isLoading))("length",s.paginationSucursales.length)("pageIndex",s.paginationSucursales.page)("pageSize",s.paginationSucursales.size)("pageSizeOptions",t.DdM(13,gt))("showFirstLastButtons",!0)}}function ft(n,e){if(1&n&&(t.ynx(0),t.YNc(1,pt,12,14,"ng-container",17),t.BQk()),2&n){const s=e.ngIf;t.oxw();const a=t.MAs(18);t.xp6(1),t.Q6J("ngIf",s.length>0)("ngIfElse",a)}}function ht(n,e){1&n&&(t.TgZ(0,"div",33),t._uU(1,"No ha registros!"),t.qZA())}class b{constructor(e,s,a,i,c){this._changeDetectorRef=e,this._sucursalesService=s,this._dialog=a,this._snackBar=i,this._confirmDialog=c,this.searchInputControl=new r.p4,this._unsubscribeAll=new w.x,this.isLoading=!1}ngOnInit(){this._sucursalesService.paginationSucursales$.pipe((0,A.R)(this._unsubscribeAll)).subscribe(e=>{this.paginationSucursales=e,this._changeDetectorRef.markForCheck()}),this.sucursales$=this._sucursalesService.sucursales$,this.searchInputControl.valueChanges.pipe((0,A.R)(this._unsubscribeAll),(0,R.b)(300),(0,v.w)(e=>(this.isLoading=!0,this._sucursalesService.getSucursales(0,10,"_id","desc",e))),(0,_.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"_id",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,A.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,G.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._sucursalesService.getSucursales(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,_.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}crear(){this._dialog.open(u,{height:"auto",width:"800px",autoFocus:!1,data:{cliente:!1,action:"crear"}}).afterClosed().subscribe(s=>{s&&this._sucursalesService.createSucursal(s).subscribe(a=>{a.ok&&this._snackBar.mostrarAlerta(a.mensaje,"mat-primary")})})}editar(e){this._dialog.open(u,{height:"auto",width:"800px",autoFocus:!1,data:{sucursal:e,action:"editar"}}).afterClosed().subscribe(a=>{a&&this._sucursalesService.updateSucursal(e._id,a).subscribe(i=>{i.ok&&this._snackBar.mostrarAlerta(i.mensaje,"mat-primary")})})}ver(e){this._dialog.open(u,{height:"650px",autoFocus:!1,data:{sucursal:e,action:"ver"}})}eliminar(e){this._confirmDialog.open("\xbfEst\xe1s seguro de que deseas eliminar este producto?","\xa1Esta acci\xf3n no se puede deshacer!","Eliminar").afterClosed().subscribe(l=>{"confirmed"===l&&this._sucursalesService.deleteSucursal(e._id).subscribe(T=>{this._snackBar.mostrarAlerta(T.mensaje,T.ok?"mat-primary":T.alerta)})})}trackByFn(e,s){return s.id||e}}b.\u0275fac=function(e){return new(e||b)(t.Y36(t.sBO),t.Y36(m),t.Y36(d.uw),t.Y36(ot.c),t.Y36(it.E))},b.\u0275cmp=t.Xpm({type:b,selectors:[["sucursales-list"]],viewQuery:function(e,s){if(1&e&&(t.Gf(y.NW,5),t.Gf(S.YE,5)),2&e){let a;t.iGM(a=t.CRH())&&(s._paginator=a.first),t.iGM(a=t.CRH())&&(s._sort=a.first)}},decls:19,vars:10,consts:[[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","py-8","px-6","md:px-8","border-b"],["class","absolute inset-x-0 bottom-0",4,"ngIf"],[1,"text-4xl","font-extrabold","tracking-tight"],[1,"flex","shrink-0","mt-6","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-flat-button","",1,"ml-4",3,"color","click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-hidden","sm:overflow-y-auto"],[4,"ngIf"],["noSucursales",""],[1,"absolute","inset-x-0","bottom-0"],[3,"mode"],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"inventory-grid-sucursales","z-10","sticky","top-0","grid","gap-4","py-4","px-6","md:px-8","shadow","text-md","font-semibold","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"",3,"mat-sort-header"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,""],[1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"inventory-grid-sucursales","grid","items-center","gap-4","py-3","px-6","md:px-8","border-b"],[1,"hidden","sm:block"],[1,"flex"],[1,"min-w-10","min-h-7","h-7",3,"matTooltip"],[1,"icon-size-5","text-blue-500",3,"svgIcon","click"],["svgIcon","heroicons_outline:trash",1,"text-red-500",3,"click"],[1,"text-green-400","icon-size-5",3,"svgIcon"],[1,"text-red-400","icon-size-5",3,"svgIcon"],[1,"p-8","sm:p-16","border-t","text-4xl","font-semibold","tracking-tight","text-center"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,rt,2,1,"div",2),t.TgZ(3,"div",3),t._uU(4,"Sucursales"),t.qZA(),t.TgZ(5,"div",4)(6,"mat-form-field",5),t._UZ(7,"mat-icon",6)(8,"input",7),t.qZA(),t.TgZ(9,"button",8),t.NdJ("click",function(){return s.crear()}),t._UZ(10,"mat-icon",9),t.TgZ(11,"span",10),t._uU(12,"Crear"),t.qZA()()()(),t.TgZ(13,"div",11)(14,"div",12),t.YNc(15,ft,2,2,"ng-container",13),t.ALo(16,"async"),t.YNc(17,ht,2,0,"ng-template",null,14,t.W1O),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("ngIf",s.isLoading),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(1),t.Q6J("formControl",s.searchInputControl)("autocomplete","off")("placeholder","Buscar..."),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus"),t.xp6(5),t.Q6J("ngIf",t.lcZ(16,8,s.sucursales$)))},dependencies:[I.lW,f.KE,f.qo,F.Hw,C.Nt,y.NW,U.pW,S.YE,S.nU,L.gM,x.mk,x.sg,x.O5,r.Fj,r.JJ,r.oH,x.Ov],styles:[".inventory-grid-sucursales{grid-template-columns:auto 100px}@media (min-width: 600px){.inventory-grid-sucursales{grid-template-columns:auto 100px 100px}}@media (min-width: 960px){.inventory-grid-sucursales{grid-template-columns:auto 100px 100px}}@media (min-width: 1280px){.inventory-grid-sucursales{grid-template-columns:auto 100px 100px}}\n"],encapsulation:2,data:{animation:j.L},changeDetection:0});class g{constructor(e){this._sucursalesService=e}resolve(e,s){return this._sucursalesService.getSucursales()}}g.\u0275fac=function(e){return new(e||g)(t.LFG(m))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"});const vt=[{path:"",pathMatch:"full",redirectTo:"lista"},{path:"lista",component:h,children:[{path:"",component:b,resolve:{sucursales:g}}]}];class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[N.Bz.forChild(vt),I.ot,k.p9,f.lN,F.Ps,C.c,M.Tx,y.TU,U.Cv,Y.si,S.JX,B.LD,E.rP,L.AV,z.m,d.Is,r.UX,r.u5,O.p0]})}}]);