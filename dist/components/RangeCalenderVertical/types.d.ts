import * as React from "react";
import { IRangeDatePickerTheme } from "../../types";
import { Moment } from "jalali-moment";
export interface IRangeDatePickerProps {
    gregorian?: boolean;
    start?: Moment;
    end?: Moment;
    ArrowLeft?: React.ReactType;
    ArrowRight?: React.ReactType;
    modalZIndex?: number;
    theme?: IRangeDatePickerTheme;
    weekend?: number[];
    submittable?: boolean;
    onClickSubmitButton?: (arg: any) => any;
    onDateChange?: (arg: any) => any;
    inputDate?: string;
    open?: boolean;
    modal?: boolean;
    hasHead?: boolean;
    onToggle?: (arg?: boolean) => any;
    monthNameNew?: string;
}
