import moment from "jalali-moment";
export declare const fa: (n: any, isGregorian: any) => any;
export declare const toPersianDigits: (str: any) => any;
export declare const inputFaDateMask: (string | RegExp)[];
export declare const inputEnDateMask: (string | RegExp)[];
export declare const inputFaDateWithTimeMask: (string | RegExp)[];
export declare const inputEnDateWithTimeMask: (string | RegExp)[];
export declare const getFormatDate: ({ isGregorian }: {
    isGregorian: any;
}) => "YYYY/MM/DD" | "jYYYY/jMM/jDD";
export declare const getFormatTime: () => string;
export declare const weekDayNames: ({ isGregorian }: {
    isGregorian: any;
}) => string[];
export declare const weekDayNamesComplete: ({ isGregorian }: {
    isGregorian: any;
}) => string[];
export declare const formatDateFromString: (date: any, { isGregorian }: {
    isGregorian: any;
}) => moment.Moment;
export declare const formatDateToString: (date: any, { isGregorian }: {
    isGregorian: any;
}) => any;
