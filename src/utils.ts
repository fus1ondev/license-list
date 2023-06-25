import { licenses } from "./generated/licenses";
import { permissions, conditions, limitations } from "./generated/rules";
import { PermissionTag, ConditionTag, LimitationTag } from "./generated/generatedTypes";

export const getLicenseFromId = (id: string, ignoreCase: boolean) => {
  if (ignoreCase) {
    return licenses.find((license) => license.id.toLowerCase() === id.toLowerCase());
  } else {
    return licenses.find((license) => license.id === id);
  }
}

export const getLicenseFromTitle = (title: string) => {
  return licenses.find((license) => license.title === title);
}

export const getPermissionFromTag = (tag: PermissionTag) => {
  return permissions.find((permission) => permission.tag === tag);
}

export const getConditionFromTag = (tag: ConditionTag) => {
  return conditions.find((condition) => condition.tag === tag);
}

export const getLimitationFromTag = (tag: LimitationTag) => {
  return limitations.find((limitation) => limitation.tag === tag);
}

export const getPermissionsFromTags = (tags: PermissionTag[]) => {
  return tags.map((tag) => getPermissionFromTag(tag));
}

export const getConditionsFromTags = (tags: ConditionTag[]) => {
  return tags.map((tag) => getConditionFromTag(tag));
}

export const getLimitationsFromTags = (tags: LimitationTag[]) => {
  return tags.map((tag) => getLimitationFromTag(tag));
}
