import { IRangeDate, IRangeDays } from "../types";
import { Moment } from "jalali-moment";
export declare function rangeHelper(
  range: IRangeDate,
  {
    isGregorian,
  }: {
    isGregorian: any;
  },
): IRangeDays;
export declare const makeRangeStatus: (
  start: Moment,
  end: Moment,
  {
    isGregorian,
  }: {
    isGregorian: any;
  },
) => string;
export declare const datePickerStatus: (
  date: Moment,
  {
    isGregorian,
  }: {
    isGregorian: any;
  },
) => string;
