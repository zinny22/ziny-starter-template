export type ColorType = "primary" | "secondary" | "tertiary" | "cta";

export type Variant = "contained" | "outline" | "ghost";

export type State = "enable" | "disable" | "skeleton";

export type Size = "XS" | "S" | "M" | "L" | "XL";

export type Radius = "none" | "full";

export type DropdownOption = {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
};
