import{r as t,c as s,h as i,H as o}from"./p-a91f0b70.js";import{D as e,a,M as r,b as h,c as n,d as c,e as l,f as d,g as p,r as u}from"./p-ce5cb812.js";const b=class{constructor(i){t(this,i),this.displayFormat="DD. MMMM YYYY",this.pickerFormat="DD. MMMM YYYY",this.disabled=!1,this.pickerOptions={},this.placeholder="Datum auswählen",this.ionDateTimeOnMobile=!1,this.max=e(),this.min=a(),this.required=!1,this.error=!1,this.ionPopoverOptions={},this.errorClass="ionic-datepicker-error",this.monthNames=r,this.monthShortNames=h,this.dayNames=n,this.dayShortNames=c,this.okayLabel=l,this.cancelLabel=d,this.yearLabel=p,this.date="",this.isDesktop=!window.matchMedia("(any-pointer:coarse)").matches,this.spanRef=null,this.ionDatetimeRef=null,this.handleDateClick=this.handleDateClick.bind(this),this.handleInput=this.handleInput.bind(this),this.changes=s(this,"changes",7)}async open(){if(this.spanRef){if(this.popover)return;return this.spanRef.click()}if(this.ionDatetimeRef)return this.ionDatetimeRef.open()}componentWillLoad(){this.required&&(this.defaultDate&&this.defaultDate.trim()||(this.date=(new Date).toISOString())),this.defaultDate&&(this.date=this.defaultDate)}formatDate(t){return u(this.displayFormat,t,{dayNames:this.dayNames,dayShortNames:this.dayShortNames,monthNames:this.monthNames,monthShortNames:this.monthShortNames})}handleInput(t){this.disabled||(this.date=t.detail.value,this.changes.emit(t.detail.value))}async handleDateClick(t){if(this.disabled||this.popover)return;this.popover=Object.assign(document.createElement("ion-popover"),Object.assign(Object.assign({},this.ionPopoverOptions),{component:"ionic-datepicker-popover",componentProps:{selectedDate:this.date||null,disabled:this.disabled,displayFormat:this.displayFormat,max:this.max,min:this.min,pickerOptions:Object.assign(Object.assign({},this.pickerOptions),{customDays:this.dayShortNames,customMonths:this.monthNames,customOverlayMonths:this.monthShortNames,overlayButton:this.okayLabel,overlayPlaceholder:this.yearLabel})},cssClass:"datepicker-popover",event:t,mode:this.mode})),document.body.appendChild(this.popover),await this.popover.present();const{data:s}=await this.popover.onWillDismiss();this.popover=null,s&&s.date&&(this.date=s.date,this.changes.emit(s.date))}render(){const t=this.disabled?"disabled":"",s=this.error&&this.errorClass?this.errorClass:"";return i(o,null,(this.isDesktop||!this.ionDateTimeOnMobile)&&[i("span",{ref:t=>this.spanRef=t,onClick:this.handleDateClick,class:`${t} ${s} ${this.date?"":"placeholder"}`},this.date?this.formatDate(this.date):this.placeholder),i("button",{class:"hidden-button",onClick:this.handleDateClick,style:{position:"absolute",width:"100$",left:"0",top:"0"},type:"button"})],!this.isDesktop&&this.ionDateTimeOnMobile&&i("ion-datetime",{ref:t=>this.ionDatetimeRef=t,value:this.defaultDate,displayFormat:this.displayFormat,pickerFormat:this.pickerFormat,class:`${t} ${s}`,placeholder:this.placeholder,monthNames:this.monthNames,monthShortNames:this.monthShortNames,dayNames:this.dayNames,dayShortNames:this.dayShortNames,cancelText:this.cancelLabel,doneText:this.okayLabel,min:this.min,max:this.max,disabled:this.disabled,onIonChange:this.handleInput.bind(this),mode:this.mode}))}};b.style=":root,:host{--base-spacing:var(--ion-padding, 16px);--base-spacing-small:calc(var(--base-spacing) * 0.7);--base-spacing-large:calc(var(--base-spacing) * 1.5);--font-size-base:14px;--font-size-small:calc(var(--font-size-base) * 0.9);--font-size-medium:calc(var(--font-size-base) * 1.2);--font-size-large:calc(var(--font-size-base) * 1.4);--text-color:var(--ion-text-color, #424242);--error-color:var(--ion-color-danger, #eb445a);--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999));--popover-width:250px;--squares-padding:5px;--square-dimension:33px;--square-border-radius:5px;--square-font-weight:normal;--square-hover-color:#fff;--square-hover-background:var(--ion-color-secondary, #3dc2ff);--controls-padding:5px;--controls-background:#fff;--square-active-color:#fff;--square-active-background:var(--ion-color-primary, #3880ff);--square-current-color:#fff;--square-current-background:var(--ion-color-medium, #92949c);--overlay-background:rgba(255, 255, 255, .8);--overlay-text-color:var(--text-color)}:host{position:relative}span{cursor:pointer;padding-right:var(--base-spacing-small)}input{border:0}span.placeholder{color:var(--placeholder-color)}span.disabled,input[disabled],:host.disabled{cursor:not-allowed;background:transparent;pointer-events:none;opacity:.3}span.ionic-datepicker-error{color:var(--error-color)}button.hidden-button{position:absolute;left:0px;top:0px;width:100%;height:100%;z-index:-1;background:transparent;border:0;outline:none}button.hidden-button:active,button.hidden-button:focus,button.hidden-button::-moz-focus-inner{border:0}";export{b as ionic_datepicker}