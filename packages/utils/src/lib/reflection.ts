import {PositiveNoZero, Validate, ValidatorError} from "@deepkit/type";

function minLessThanMax(value: any) {
  const valid = (value[0] <= value[1]) ;
  return valid ? undefined : new ValidatorError("minLessThanMax", `min should be less than max`);
}

export type MinMax = [min: number | null, max: number | null] & Validate<typeof minLessThanMax>;

export type PositiveNumber = number & PositiveNoZero;
export type MinMaxPositive = [PositiveNumber | null, PositiveNumber | null] & Validate<typeof minLessThanMax>;