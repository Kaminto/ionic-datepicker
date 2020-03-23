import{r as e,h as o}from"./p-a9232c04.js";import{D as r,a,d as s,M as i,b as t,t as c,e as n,g as p}from"./p-ce5cb812.js";const d=class{constructor(o){e(this,o),this.disabled=!1,this.pickerOptions={},this.max=r(),this.min=a()}setDisabled(e,o){this.picker&&(this.picker.disabled=o)}componentDidLoad(){const e=this.selectedDate?new Date(this.selectedDate):null;this.picker=window.datepicker(this.el,Object.assign({alwaysShow:!0,customDays:s,customMonths:i,customOverlayMonths:t,dateSelected:e&&e.getTime()<=new Date(this.max).getTime()&&e.getTime()>=new Date(this.min).getTime()?e:new Date,maxDate:new Date(this.max),minDate:new Date(this.min),onSelect:e=>{document.querySelector("ion-popover").dismiss({date:c(e.dateSelected.toISOString())})},overlayButton:n,overlayPlaceholder:p,showAllDates:!0,startDay:1},this.pickerOptions)),this.picker.disabled=this.disabled}render(){return o("div",null,o("div",{class:"container",ref:e=>this.el=e}))}static get watchers(){return{disabled:["setDisabled"]}}};d.style=":root,:host{--base-spacing:var(--ion-padding, 16px);--base-spacing-small:calc(var(--base-spacing) * 0.7);--base-spacing-large:calc(var(--base-spacing) * 1.5);--font-size-base:14px;--font-size-small:calc(var(--font-size-base) * 0.9);--font-size-medium:calc(var(--font-size-base) * 1.2);--font-size-large:calc(var(--font-size-base) * 1.4);--text-color:var(--ion-text-color, #424242);--error-color:var(--ion-color-danger, #eb445a);--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999));--popover-width:250px;--squares-padding:5px;--square-dimension:33px;--square-border-radius:5px;--square-font-weight:normal;--square-hover-color:#fff;--square-hover-background:var(--ion-color-secondary, #3dc2ff);--controls-padding:5px;--controls-background:#fff;--square-active-color:#fff;--square-active-background:var(--ion-color-primary, #3880ff);--square-current-color:#fff;--square-current-background:var(--ion-color-medium, #92949c);--overlay-background:rgba(255, 255, 255, .8);--overlay-text-color:var(--text-color)}ion-popover.datepicker-popover,ion-popover.sc-ion-popover-md-h.datepicker-popover{--width:var(--popover-width);--max-width:var(--popover-width);--min-width:var(--popover-width)}ionic-datepicker-popover .qs-datepicker-container{border:0;border-radius:0;margin-top:0;-webkit-box-shadow:none;box-shadow:none;position:relative}ionic-datepicker-popover .qs-datepicker .qs-controls{background-color:var(--controls-background);padding:var(--controls-padding)}ionic-datepicker-popover .qs-datepicker .qs-squares{-ms-flex-pack:center;justify-content:center;padding:var(--squares-padding)}ionic-datepicker-popover .qs-datepicker .qs-square{border-radius:var(--square-border-radius);height:var(--square-dimension);width:var(--square-dimension)}ionic-datepicker-popover .qs-datepicker .qs-square.qs-day{font-weight:var(--square-font-weight)}ionic-datepicker-popover .qs-datepicker .qs-square .qs-num{color:var(--text-color)}ionic-datepicker-popover .qs-datepicker .qs-square.qs-current.qs-active,ionic-datepicker-popover .qs-datepicker .qs-square.qs-active{background-color:var(--square-active-background);color:var(--square-active-color)}ionic-datepicker-popover .qs-datepicker .qs-square.qs-current{background-color:var(--square-current-background);color:var(--square-current-color)}ionic-datepicker-popover .qs-datepicker .qs-square.qs-current .qs-num{text-decoration:none}ionic-datepicker-popover .qs-datepicker .qs-square:not(.qs-empty):not(.qs-disabled):not(.qs-day):not(.qs-active):hover{background-color:var(--square-hover-background);color:var(--square-hover-color)}ionic-datepicker-popover .qs-datepicker .qs-overlay{background:var(--overlay-background)}ionic-datepicker-popover .qs-datepicker .qs-overlay .qs-submit{display:none}ionic-datepicker-popover .qs-datepicker .qs-overlay .qs-close{color:var(--overlay-text-color);font-size:var(--font-size-base);padding:var(--base-spacing)}ionic-datepicker-popover .qs-datepicker .qs-overlay .qs-overlay-month{color:var(--overlay-text-color);cursor:pointer;font-size:var(--font-size-base);opacity:1}ionic-datepicker-popover .qs-datepicker .qs-overlay .qs-overlay-year{color:var(--overlay-text-color);border-bottom:.5px solid var(--overlay-text-color);font-size:var(--font-size-base);padding:calc(var(--base-spacing-small) * .5) 0;width:120px}";export{d as ionic_datepicker_popover}