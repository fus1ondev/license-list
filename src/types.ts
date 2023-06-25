import { LicenseId, PermissionTag, ConditionTag, LimitationTag } from "./generated/generatedTypes";

export type License = {
  // Required
  title: string;
  id: LicenseId;
  description: string;
  how: string;
  using: {
    [key: string]: string;
  } | null;
  permissions: PermissionTag[];
  conditions: ConditionTag[];
  limitations: LimitationTag[];
  // Optional
  featured?: boolean;
  hidden?: boolean;
  nickname?: string;
  note?: string;
  redirect_from?: string;

  body: string;
};

export type Permission = {
  description: string;
  label: string;
  tag: PermissionTag;
};

export type Condition = {
  description: string;
  label: string;
  tag: ConditionTag;
};

export type Limitation = {
  description: string;
  label: string;
  tag: LimitationTag;
};
