'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1c98651d.js');
const utils = require('./utils-2172fc46.js');

const variablesCss = ":root,:host{--base-spacing:var(--ion-padding, 16px);--base-spacing-small:calc(var(--base-spacing) * 0.7);--base-spacing-large:calc(var(--base-spacing) * 1.5);--font-size-base:14px;--font-size-small:calc(var(--font-size-base) * 0.9);--font-size-medium:calc(var(--font-size-base) * 1.2);--font-size-large:calc(var(--font-size-base) * 1.4);--text-color:var(--ion-text-color, #424242);--error-color:var(--ion-color-danger, #eb445a);--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999));--popover-width:250px;--squares-padding:5px;--square-dimension:33px;--square-border-radius:5px;--square-font-weight:normal;--square-hover-color:#fff;--square-hover-background:var(--ion-color-secondary, #3dc2ff);--controls-padding:5px;--controls-background:#fff;--square-active-color:#fff;--square-active-background:var(--ion-color-primary, #3880ff);--square-current-color:#fff;--square-current-background:var(--ion-color-medium, #92949c);--overlay-background:rgba(255, 255, 255, .8);--overlay-text-color:var(--text-color)}";

const ionicDatepickerCss = variablesCss + "span{cursor:pointer;padding-right:var(--base-spacing-small)}input{border:0}span.placeholder{color:var(--placeholder-color)}span.disabled,input[disabled],:host.disabled{cursor:not-allowed;background:transparent;pointer-events:none;opacity:.3}span.ionic-datepicker-error{color:var(--error-color)}";

const isDesktop = () => !(window.matchMedia('(any-pointer:coarse)').matches);
const IonicDatepicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * How the date should be formatted for ion-datetime for display purposes (https://ionicframework.com/docs/api/datetime/#display-and-picker-formats)
         * Default: "DD. MMMM YYYY"
         */
        this.displayFormat = 'DD. MMMM YYYY';
        /**
         * How the date should be formatted for ion-datetime  for display purposes (https://ionicframework.com/docs/api/datetime/#display-and-picker-formats)
         * Default: "DD. MMMM YYYY"
         */
        this.pickerFormat = 'DD. MMMM YYYY';
        /**
         * Flag if datepicking is disabled
         * Default: disabled
         */
        this.disabled = false;
        /**
         * Options for the js-datepicker
         * Default: {}
         */
        this.pickerOptions = {};
        /**
         * placeholder if not required and empty
         * Default: Datum
         */
        this.placeholder = 'Datum auswählen';
        /**
         * ionDateTimeOnMobile if ion datetime picker is used on mobile devices
         * Default: false
         */
        this.ionDateTimeOnMobile = false;
        /**
         * Max selectable date as iso date|datetime string
         * Default: today + 100 years
         */
        this.max = utils.DEFAULT_MAX();
        /**
         * Min selectable date as iso date|datetime string
         * Default: today - 100 years
         */
        this.min = utils.DEFAULT_MIN();
        /**
         * Required input
         * Default: false
         */
        this.required = false;
        /**
         * Flag if it should be marked as error
         * Default: false
         */
        this.error = false;
        /**
         * Change ionic popover options, Omit<PopoverOptions, 'mode' | 'component' | 'componentProps'>
         * Default: {}
         */
        this.ionPopoverOptions = {};
        /**
         * Possibility to overwrite the error css class
         * Default: 'ionic-datepicker-error'
         */
        this.errorClass = 'ionic-datepicker-error';
        /**
         * Possibility to overwrite month names
         * Default: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
         */
        this.monthNames = utils.MONTH_NAMES;
        /**
         * Possibility to overwrite month shortnames
         * Default: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
         */
        this.monthShortNames = utils.MONTH_SHORT_NAMES;
        /**
         * Possibility to overwrite day names
         * Default: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
         */
        this.dayNames = utils.DAY_NAMES;
        /**
         * Possibility to overwrite day shortnames
         * Default: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
         */
        this.dayShortNames = utils.DAY_SHORT_NAMES;
        /**
         * Set okay label
         * Default: 'Okay'
         */
        this.okayLabel = utils.DEFAULT_OKAY_LABEL;
        /**
         * Set cancel label
         * Default: 'Abbrechen'
         */
        this.cancelLabel = utils.DEFAULT_CANCEL_LABEL;
        /**
         * Set year label
         * Default: 'Jahr'
         */
        this.yearLabel = utils.DEFAULT_YEAR_LABEL;
        /**
         * Stores the current selected date as formatted string for display purposes
         */
        this.formattedDate = '';
        this.isDesktop = isDesktop();
        this.handleDateClick = this.handleDateClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.changes = index.createEvent(this, "changes", 7);
    }
    componentWillLoad() {
        if (this.required) {
            if (!this.defaultDate || !this.defaultDate.trim()) {
                this.defaultDate = new Date().toISOString();
            }
        }
        if (this.defaultDate) {
            this.formatDate(this.defaultDate);
        }
    }
    formatDate(date) {
        this.formattedDate = utils.renderDatetime(this.displayFormat, date, {
            dayNames: this.dayNames,
            dayShortNames: this.dayShortNames,
            monthNames: this.monthNames,
            monthShortNames: this.monthShortNames
        });
    }
    handleInput(ev) {
        if (!this.disabled) {
            this.formatDate(ev.detail.value);
            this.changes.emit(ev.detail.value);
        }
    }
    async handleDateClick(event) {
        if (this.disabled) {
            return;
        }
        const popover = Object.assign(document.createElement('ion-popover'), Object.assign(Object.assign({}, this.ionPopoverOptions), { component: 'ionic-datepicker-popover', componentProps: {
                selectedDate: this.defaultDate || null,
                disabled: this.disabled,
                displayFormat: this.displayFormat,
                max: this.max,
                min: this.min,
                pickerOptions: Object.assign(Object.assign({}, this.pickerOptions), { customDays: this.dayShortNames, customMonths: this.monthNames, customOverlayMonths: this.monthShortNames, overlayButton: this.okayLabel, overlayPlaceholder: this.yearLabel })
            }, cssClass: 'datepicker-popover', event: event, mode: this.mode }));
        document.body.appendChild(popover);
        await popover.present();
        const { data } = await popover.onWillDismiss();
        if (data && data.date) {
            this.formatDate(data.date);
            this.changes.emit(data.date);
        }
    }
    render() {
        const disabledClassName = this.disabled ? 'disabled' : '';
        const placeholderClassName = !this.formattedDate ? 'placeholder' : '';
        const errorClassName = this.error && !!this.errorClass ? this.errorClass : '';
        return index.h(index.Host, null, (this.isDesktop || !this.ionDateTimeOnMobile) && index.h("span", { onClick: this.handleDateClick, class: `${disabledClassName} ${errorClassName} ${placeholderClassName}` }, this.formattedDate || this.placeholder), !this.isDesktop && this.ionDateTimeOnMobile &&
            index.h("ion-datetime", { value: this.defaultDate, displayFormat: this.displayFormat, pickerFormat: this.pickerFormat, class: `${disabledClassName} ${errorClassName}`, placeholder: this.placeholder, monthNames: this.monthNames, monthShortNames: this.monthShortNames, dayNames: this.dayNames, dayShortNames: this.dayShortNames, cancelText: this.cancelLabel, doneText: this.okayLabel, min: this.min, max: this.max, disabled: this.disabled, onIonChange: this.handleInput.bind(this), mode: this.mode }));
    }
};
IonicDatepicker.style = ionicDatepickerCss;

exports.ionic_datepicker = IonicDatepicker;
