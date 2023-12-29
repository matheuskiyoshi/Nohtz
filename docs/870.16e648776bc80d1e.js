"use strict";(self.webpackChunkNohtz=self.webpackChunkNohtz||[]).push([[870],{7870:($,f,r)=>{r.r(f),r.d(f,{NotesModule:()=>F});var u=r(6814),l=r(2414),y=r(8645),d=r(1374),x=r(4352),_=r(9360),N=r(8251),k=r(3997),Z=r(4664),t=r(9212),m=r(1474);let C=(()=>{class o{constructor(e){this.http=e,this.API="https://nohtz-api.onrender.com/notes"}getById(e){return this.http.get(`${this.API}/${e}`)}list(){return this.http.get(this.API)}create(e){return this.http.post(this.API,e).pipe((0,d.P)())}update(e,n){return this.http.put(`${this.API}/${e}`,n)}remove(e){return this.http.delete(`${this.API}/${e}`).pipe((0,d.P)())}search(e){const n=(new m.LE).set("query",e);return this.http.get(`${this.API}/search`,{params:n})}static#t=this.\u0275fac=function(n){return new(n||o)(t.LFG(m.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var T=r(965);function I(o,h){if(1&o){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11)(2,"div",12)(3,"h3",13),t._uU(4),t.qZA(),t.TgZ(5,"div",14)(6,"input",15),t.NdJ("change",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.toggleCheck(s))}),t.qZA()()(),t.TgZ(7,"p",16),t._uU(8),t.qZA()(),t.TgZ(9,"div",17)(10,"p",18),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"div",19)(14,"button",20),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.editNote(s))}),t._UZ(15,"i",21),t.qZA(),t.TgZ(16,"button",22),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.deteleNote(s._id))}),t._UZ(17,"i",23),t.qZA()()()()}if(2&o){const e=h.$implicit,n=t.oxw();t.xp6(3),t.ekj("checked",e.done),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Q6J("checked",e.done),t.xp6(1),t.ekj("checked",e.done),t.xp6(1),t.hij(" ",e.body," "),t.xp6(2),t.Tol(n.isDeadlineExpired(e.deadline)),t.ekj("checked",e.done),t.xp6(1),t.hij(" ",t.xi3(12,12,e.deadline,"dd/MMM/yyyy")," ")}}const A=()=>["new"];let S=(()=>{class o{constructor(e,n,i){this.notesService=e,this.router=n,this.authService=i,this.notes=[],this.currentDate="",this.searchTerm$=new y.x}ngOnInit(){this.userName=this.authService.getUserName(),this.listNotes(),this.updateDateTime(),this.initializeSearch()}listNotes(){this.notesService.list().subscribe(e=>this.notes=e)}editNote(e){this.router.navigate(["/notes/edit",e._id])}deteleNote(e){this.notesService.remove(e).pipe((0,d.P)()).subscribe({error:n=>{console.log(n)},complete:()=>{this.listNotes()}})}updateDateTime(){this.currentDate=(new Date).toLocaleDateString()}toggleCheck(e){e.done=!e.done,this.updateDoneStatus(e._id,e.done)}isDeadlineExpired(e){return new Date(e)<=new Date?"text-danger fw-bold":""}updateDoneStatus(e,n){this.notesService.update(e,{done:n}).pipe((0,d.P)()).subscribe({error:s=>{console.log(s)}})}initializeSearch(){this.searchTerm$.pipe(function w(o,h=x.z){return(0,_.e)((e,n)=>{let i=null,s=null,a=null;const M=()=>{if(i){i.unsubscribe(),i=null;const p=s;s=null,n.next(p)}};function z(){const p=a+o,O=h.now();if(O<p)return i=this.schedule(void 0,p-O),void n.add(i);M()}e.subscribe((0,N.x)(n,p=>{s=p,a=h.now(),i||(i=h.schedule(z,o),n.add(i))},()=>{M(),n.complete()},void 0,()=>{s=i=null}))})}(300),(0,k.x)(),(0,Z.w)(e=>""===e.trim()?this.notesService.list():this.notesService.search(e))).subscribe(e=>{this.notes=e})}onSearch(e){this.searchTerm$.next(e.target.value)}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(C),t.Y36(l.F0),t.Y36(T.e))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-notes-list"]],decls:16,vars:7,consts:[[1,"container-date"],["id","noteLabel",1,"d-flex","justify-content-between","align-items-start","pb-2"],[1,"fw-bold"],["id","userName"],[1,"searchNote"],["type","text","id","searchNote","placeholder","Search Note",1,"form-control",3,"keyup"],[1,"newNote"],["type","button",1,"btn","btn-primary",3,"routerLink"],["id","noteContainer"],["class","note",4,"ngFor","ngForOf"],[1,"note"],[1,"noteInfo","d-flex","flex-column","justify-content-between"],[1,"noteDetails","d-flex","justify-content-between","align-items-center"],[1,"fw-bold","m-0","noteTitle"],[1,"noteCheck"],["type","checkbox","name","noteCheck",1,"form-check-input",3,"checked","change"],[1,"m-0","noteContent"],[1,"noteBottom","d-flex","justify-content-between"],[1,"noteDeadline","fw-light"],[1,"noteButtonWrap","d-flex","justify-content-end"],["type","button",1,"btn","me-1",3,"click"],[1,"bi","bi-pencil-square"],["type","button",1,"btn",3,"click"],[1,"bi","bi-trash-fill"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2),t.qZA()(),t.TgZ(3,"div",1)(4,"h3",2),t._uU(5,"Welcome back, "),t.TgZ(6,"span",3),t._uU(7),t.ALo(8,"titlecase"),t.qZA()(),t.TgZ(9,"div",4)(10,"input",5),t.NdJ("keyup",function(a){return i.onSearch(a)}),t.qZA()(),t.TgZ(11,"div",6)(12,"button",7),t._uU(13,"New note"),t.qZA()()(),t.TgZ(14,"div",8),t.YNc(15,I,18,15,"div",9),t.qZA()),2&n&&(t.xp6(2),t.Oqu(i.currentDate),t.xp6(5),t.Oqu(t.lcZ(8,4,i.userName)),t.xp6(5),t.Q6J("routerLink",t.DdM(6,A)),t.xp6(3),t.Q6J("ngForOf",i.notes))},dependencies:[u.sg,l.rH,u.rS,u.uU],styles:["[_nghost-%COMP%]{padding-top:2rem;min-height:100%;width:100%;flex:10}[_nghost-%COMP%]   .container-date[_ngcontent-%COMP%]{padding:0 4%;margin-bottom:2rem;font-size:2rem}[_nghost-%COMP%]   #noteContainer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;gap:1rem;padding:2rem .5rem 2rem 7%}[_nghost-%COMP%]   #noteLabel[_ngcontent-%COMP%]{padding:0 4%}[_nghost-%COMP%]   .noteCheck[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{background-color:var(--secondary)!important}[_nghost-%COMP%]   .noteCheck[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked{background-color:var(--primary)!important}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]{width:21.875rem;max-width:calc(50% - 1rem);position:relative;display:flex;flex-direction:column;justify-content:space-between;gap:.5rem;min-height:-moz-fit-content;min-height:fit-content;padding:.625rem 1rem;border-radius:.5rem;height:11.25rem;outline:.125rem solid var(--text);transition:.3s ease}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]   p.checked[_ngcontent-%COMP%], [_nghost-%COMP%]   .note[_ngcontent-%COMP%]   h3.checked[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--done)!important}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]   .noteInfo[_ngcontent-%COMP%]{overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]   .noteInfo[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]:last-child{border:none}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]:hover{transition:.3s transform ease;transform:translateY(-.25rem)}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%]{color:var(--text)}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]:hover   .noteTitle[_ngcontent-%COMP%]{font-size:1.625rem;overflow-wrap:break-word;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]:hover   .noteContent[_ngcontent-%COMP%]{font-size:1rem;overflow-wrap:break-word;font-family:Poppins,sans-serif;font-weight:500;max-height:6rem}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]:hover   .noteButtonWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{aspect-ratio:1/1;padding:0 .375rem;transition:.3s ease;border-radius:.5rem}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]:hover   .noteButtonWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transition:.15s ease;transform:scale(1.3)}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]:hover   .noteButtonWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:var(--text)}.newNote[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--primary)!important;border:transparent;font-weight:700}.newNote[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transition:.15s ease;transform:scale(1.05);color:var(--primary)!important;background-color:var(--secondary)!important}"]})}return o})();var U=r(7398),v=r(7799);const g=o=>(0,t.f3M)(v.r).isLoggedIn().pipe((0,U.U)(h=>!!h||(0,l.RI)(o,["/","login"])));var c=r(95);const b=o=>({"is-invalid":o}),D=()=>["/notes"];let P=(()=>{class o{constructor(e,n,i,s){this.noteService=e,this.location=n,this.route=i,this.loginService=s,this.submitted=!1}ngOnInit(){this.userId=this.loginService.getUserId(),this.buildForm(),this.getIdFromUrl()}buildForm(){this.form=new c.cw({title:new c.NI(null,[c.kI.required]),body:new c.NI(null,[c.kI.required]),done:new c.NI(!1),deadline:new c.NI(null,[c.kI.required])})}getIdFromUrl(){this.noteId=this.route.snapshot.params.id,this.noteId&&this.getNoteById()}getNoteById(){this.noteService.getById(this.noteId).pipe((0,d.P)()).subscribe({next:e=>{this.form.patchValue(e)},error:e=>{console.log(e)}})}onSave(){this.noteId?this.onUpdate(this.noteId):this.onCreate()}onCreate(){this.submitted=!0,this.form.valid&&this.noteService.create(this.form.getRawValue()).pipe((0,d.P)()).subscribe({next:e=>{this.location.back()},error:e=>{console.log(e)}})}onCancel(){this.submitted=!1,this.form.reset()}onUpdate(e){this.submitted=!0,this.form.valid&&this.noteService.update(e,this.form.getRawValue()).pipe((0,d.P)()).subscribe({error:n=>{console.log(n)},complete:()=>{this.location.back()}})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(C),t.Y36(u.Ye),t.Y36(l.gz),t.Y36(v.r))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-notes-create"]],decls:21,vars:10,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"container-create-note","col-sm-8","col-md-5","col-lg-4"],["novalidate","",1,"needs-validation","pt-3",3,"formGroup"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","placeholder","Note title","formControlName","title",1,"form-control",3,"ngClass"],["for","body",1,"form-label"],["placeholder","Describe the note","formControlName","body","id","body",1,"form-control",3,"ngClass"],["type","date","formControlName","deadline","id","date",1,"form-control","text-col-black"],[1,"mb-3","d-flex","justify-content-end"],["type","submit",1,"btn","btn-outline-dark","me-1",3,"routerLink","click"],["type","submit",1,"btn","btn-outline-light",3,"disabled","click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",4)(5,"label",5),t._uU(6,"Note title"),t.qZA(),t._UZ(7,"input",6),t.qZA(),t.TgZ(8,"div",4)(9,"label",7),t._uU(10,"Note description"),t.qZA(),t._UZ(11,"textarea",8),t.qZA(),t.TgZ(12,"div",4)(13,"label",5),t._uU(14,"Deadline"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"div",10)(17,"button",11),t.NdJ("click",function(){return i.onCancel()}),t._uU(18," Cancel "),t.qZA(),t.TgZ(19,"button",12),t.NdJ("click",function(){return i.onSave()}),t._uU(20," Save "),t.qZA()()()()()()),2&n&&(t.xp6(3),t.Q6J("formGroup",i.form),t.xp6(4),t.Q6J("ngClass",t.VKq(5,b,i.submitted)),t.xp6(4),t.Q6J("ngClass",t.VKq(7,b,i.submitted)),t.xp6(6),t.Q6J("routerLink",t.DdM(9,D)),t.xp6(2),t.Q6J("disabled",i.form.invalid))},dependencies:[u.mk,l.rH,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u],styles:["[_nghost-%COMP%]{margin-top:4.5rem;height:100%;width:100%;flex:10}.container-create-note[_ngcontent-%COMP%]{background:var(--primary);border-radius:.5rem}"]})}return o})();const L=[{path:"",component:S,canActivate:[g]},{path:"new",component:P,canActivate:[g]},{path:"edit/:id",component:P,canActivate:[g]}];let J=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(L),l.Bz]})}return o})();var j=r(6620);let F=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({providers:[{provide:m.TP,useClass:j.L,multi:!0}],imports:[u.ez,J,c.UX]})}return o})()}}]);