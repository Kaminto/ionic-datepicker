/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Mode, PopoverOptions, } from "@ionic/core";
export namespace Components {
    interface IonicDatepicker {
        /**
          * Set cancel label Default: 'Abbrechen'
         */
        "cancelLabel": string;
        /**
          * Possibility to overwrite day names Default: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
         */
        "dayNames": string[];
        /**
          * Possibility to overwrite day shortnames Default: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
         */
        "dayShortNames": string[];
        /**
          * default date as iso date|datetime string Default: today when required
         */
        "defaultDate"?: string;
        /**
          * Flag if datepicking is disabled Default: disabled
         */
        "disabled": boolean;
        /**
          * How the date should be formatted for ion-datetime for display purposes (https://ionicframework.com/docs/api/datetime/#display-and-picker-formats) Default: "DD. MMMM YYYY"
         */
        "displayFormat": string;
        /**
          * Flag if it should be marked as error Default: false
         */
        "error": boolean;
        /**
          * Possibility to overwrite the error css class Default: 'ionic-datepicker-error'
         */
        "errorClass": string;
        /**
          * ionDateTimeOnMobile if ion datetime picker is used on mobile devices Default: false
         */
        "ionDateTimeOnMobile": boolean;
        /**
          * Change ionic popover options, Omit<PopoverOptions, 'mode' | 'component' | 'componentProps'> Default: {}
         */
        "ionPopoverOptions": Omit<PopoverOptions, "mode" | "component" | "componentProps">;
        /**
          * Max selectable date as iso date|datetime string Default: today + 100 years
         */
        "max": string;
        /**
          * Min selectable date as iso date|datetime string Default: today - 100 years
         */
        "min": string;
        /**
          * Changes the mode of ion-popover and ion-datetime> Default: undefined
         */
        "mode"?: Mode;
        /**
          * Possibility to overwrite month names Default: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
         */
        "monthNames": string[];
        /**
          * Possibility to overwrite month shortnames Default: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
         */
        "monthShortNames": string[];
        /**
          * Set okay label Default: 'Okay'
         */
        "okayLabel": string;
        /**
          * How the date should be formatted for ion-datetime  for display purposes (https://ionicframework.com/docs/api/datetime/#display-and-picker-formats) Default: "DD. MMMM YYYY"
         */
        "pickerFormat": string;
        /**
          * Options for the js-datepicker Default: {}
         */
        "pickerOptions": object;
        /**
          * placeholder if not required and empty Default: Datum
         */
        "placeholder": string;
        /**
          * Required input Default: false
         */
        "required": boolean;
        /**
          * Set year label Default: 'Jahr'
         */
        "yearLabel": string;
    }
    interface IonicDatepickerPopover {
        /**
          * Flag if datepicking is disabled Default: disabled
         */
        "disabled": boolean;
        /**
          * Max selectable date as iso date|datetime string Default: today + 100 years
         */
        "max": string;
        /**
          * Min selectable date as iso date|datetime string Default: today - 100 years
         */
        "min": string;
        /**
          * Options for the js-datepicker Default: {}
         */
        "pickerOptions": object;
        /**
          * selected default date as iso date|datetime string Default: today
         */
        "selectedDate"?: string;
    }
}
declare global {
    interface HTMLIonicDatepickerElement extends Components.IonicDatepicker, HTMLStencilElement {
    }
    var HTMLIonicDatepickerElement: {
        prototype: HTMLIonicDatepickerElement;
        new (): HTMLIonicDatepickerElement;
    };
    interface HTMLIonicDatepickerPopoverElement extends Components.IonicDatepickerPopover, HTMLStencilElement {
    }
    var HTMLIonicDatepickerPopoverElement: {
        prototype: HTMLIonicDatepickerPopoverElement;
        new (): HTMLIonicDatepickerPopoverElement;
    };
    interface HTMLElementTagNameMap {
        "ionic-datepicker": HTMLIonicDatepickerElement;
        "ionic-datepicker-popover": HTMLIonicDatepickerPopoverElement;
    }
}
declare namespace LocalJSX {
    interface IonicDatepicker {
        /**
          * Set cancel label Default: 'Abbrechen'
         */
        "cancelLabel"?: string;
        /**
          * Possibility to overwrite day names Default: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
         */
        "dayNames"?: string[];
        /**
          * Possibility to overwrite day shortnames Default: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
         */
        "dayShortNames"?: string[];
        /**
          * default date as iso date|datetime string Default: today when required
         */
        "defaultDate"?: string;
        /**
          * Flag if datepicking is disabled Default: disabled
         */
        "disabled"?: boolean;
        /**
          * How the date should be formatted for ion-datetime for display purposes (https://ionicframework.com/docs/api/datetime/#display-and-picker-formats) Default: "DD. MMMM YYYY"
         */
        "displayFormat"?: string;
        /**
          * Flag if it should be marked as error Default: false
         */
        "error"?: boolean;
        /**
          * Possibility to overwrite the error css class Default: 'ionic-datepicker-error'
         */
        "errorClass"?: string;
        /**
          * ionDateTimeOnMobile if ion datetime picker is used on mobile devices Default: false
         */
        "ionDateTimeOnMobile"?: boolean;
        /**
          * Change ionic popover options, Omit<PopoverOptions, 'mode' | 'component' | 'componentProps'> Default: {}
         */
        "ionPopoverOptions"?: Omit<PopoverOptions, "mode" | "component" | "componentProps">;
        /**
          * Max selectable date as iso date|datetime string Default: today + 100 years
         */
        "max"?: string;
        /**
          * Min selectable date as iso date|datetime string Default: today - 100 years
         */
        "min"?: string;
        /**
          * Changes the mode of ion-popover and ion-datetime> Default: undefined
         */
        "mode"?: Mode;
        /**
          * Possibility to overwrite month names Default: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
         */
        "monthNames"?: string[];
        /**
          * Possibility to overwrite month shortnames Default: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
         */
        "monthShortNames"?: string[];
        /**
          * Set okay label Default: 'Okay'
         */
        "okayLabel"?: string;
        /**
          * Event that emits the iso date string everytime the date changes
         */
        "onChanges"?: (event: CustomEvent<string>) => void;
        /**
          * How the date should be formatted for ion-datetime  for display purposes (https://ionicframework.com/docs/api/datetime/#display-and-picker-formats) Default: "DD. MMMM YYYY"
         */
        "pickerFormat"?: string;
        /**
          * Options for the js-datepicker Default: {}
         */
        "pickerOptions"?: object;
        /**
          * placeholder if not required and empty Default: Datum
         */
        "placeholder"?: string;
        /**
          * Required input Default: false
         */
        "required"?: boolean;
        /**
          * Set year label Default: 'Jahr'
         */
        "yearLabel"?: string;
    }
    interface IonicDatepickerPopover {
        /**
          * Flag if datepicking is disabled Default: disabled
         */
        "disabled"?: boolean;
        /**
          * Max selectable date as iso date|datetime string Default: today + 100 years
         */
        "max"?: string;
        /**
          * Min selectable date as iso date|datetime string Default: today - 100 years
         */
        "min"?: string;
        /**
          * Options for the js-datepicker Default: {}
         */
        "pickerOptions"?: object;
        /**
          * selected default date as iso date|datetime string Default: today
         */
        "selectedDate"?: string;
    }
    interface IntrinsicElements {
        "ionic-datepicker": IonicDatepicker;
        "ionic-datepicker-popover": IonicDatepickerPopover;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ionic-datepicker": LocalJSX.IonicDatepicker & JSXBase.HTMLAttributes<HTMLIonicDatepickerElement>;
            "ionic-datepicker-popover": LocalJSX.IonicDatepickerPopover & JSXBase.HTMLAttributes<HTMLIonicDatepickerPopoverElement>;
        }
    }
}
