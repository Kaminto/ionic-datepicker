/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { PopoverOptions, } from "@ionic/core";
export namespace Components {
    interface IonicDatepicker {
        /**
          * default date as iso date|datetime string Default: today when required
         */
        "defaultDate"?: string;
        /**
          * Flag if datepicking is disabled Default: disabled
         */
        "disabled": boolean;
        /**
          * How the date should be formatted for display purposes Default: "DDD"
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
          * Max selectable date as iso date|datetime string Default: today + 100 years
         */
        "max": any;
        /**
          * Min selectable date as iso date|datetime string Default: today - 100 years
         */
        "min": any;
        /**
          * nativeOnMobile if native date picker is used on mobile devices Default: false
         */
        "nativeOnMobile": boolean;
        /**
          * Options for the js-datepicker Default: {}
         */
        "pickerOptions": object;
        /**
          * placeholder if not required and empty Default: Datum
         */
        "placeholder": string;
        /**
          * Change ionic popover options, PopoverOptions | {} Default: {}
         */
        "popoverOptions": PopoverOptions | {};
        /**
          * Required input Default: false
         */
        "required": boolean;
    }
    interface IonicDatepickerPopover {
        /**
          * Flag if datepicking is disabled Default: disabled
         */
        "disabled": boolean;
        /**
          * Max selectable date as iso date|datetime string Default: today + 100 years
         */
        "max": any;
        /**
          * Min selectable date as iso date|datetime string Default: today - 100 years
         */
        "min": any;
        /**
          * Options for the js-datepicker Default: {}
         */
        "pickerOptions": object;
        /**
          * selected default date as iso date|datetime string Default: today
         */
        "selectedDate": any;
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
          * default date as iso date|datetime string Default: today when required
         */
        "defaultDate"?: string;
        /**
          * Flag if datepicking is disabled Default: disabled
         */
        "disabled"?: boolean;
        /**
          * How the date should be formatted for display purposes Default: "DDD"
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
          * Max selectable date as iso date|datetime string Default: today + 100 years
         */
        "max"?: any;
        /**
          * Min selectable date as iso date|datetime string Default: today - 100 years
         */
        "min"?: any;
        /**
          * nativeOnMobile if native date picker is used on mobile devices Default: false
         */
        "nativeOnMobile"?: boolean;
        /**
          * Event that emits the iso date string everytime the date changes
         */
        "onChanges"?: (event: CustomEvent<string>) => void;
        /**
          * Options for the js-datepicker Default: {}
         */
        "pickerOptions"?: object;
        /**
          * placeholder if not required and empty Default: Datum
         */
        "placeholder"?: string;
        /**
          * Change ionic popover options, PopoverOptions | {} Default: {}
         */
        "popoverOptions"?: PopoverOptions | {};
        /**
          * Required input Default: false
         */
        "required"?: boolean;
    }
    interface IonicDatepickerPopover {
        /**
          * Flag if datepicking is disabled Default: disabled
         */
        "disabled"?: boolean;
        /**
          * Max selectable date as iso date|datetime string Default: today + 100 years
         */
        "max"?: any;
        /**
          * Min selectable date as iso date|datetime string Default: today - 100 years
         */
        "min"?: any;
        /**
          * Options for the js-datepicker Default: {}
         */
        "pickerOptions"?: object;
        /**
          * selected default date as iso date|datetime string Default: today
         */
        "selectedDate"?: any;
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
