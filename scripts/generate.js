const matter = require("gray-matter");
const yaml = require("js-yaml");
const fs   = require("fs");

const licenses = [];
for (const fileName of fs.readdirSync("./choosealicense.com/_licenses")) {
  const { data, content } = matter.read(`./choosealicense.com/_licenses/${fileName}`);
  let license = {
    ...data,
    body: content,
  };
  license.id = license["spdx-id"];
  if (license.redirect_from) {
    license.redirect_from = license.redirect_from.split("/")[2];
  }
  delete license["spdx-id"];
  licenses.push(license);
}

licenses.sort((a, b) => a.id.localeCompare(b.id));

const licensesTs = `import { License } from "../types";
export const licenses: License[] = ${JSON.stringify(licenses)};`;
fs.writeFileSync("./src/generated/licenses.ts", licensesTs);

console.log("licenses.js generated");

const yml = fs.readFileSync("./choosealicense.com/_data/rules.yml");
const { permissions, conditions, limitations } = yaml.load(yml);
const rulesTs = `import { Permission, Condition, Limitation } from "../types";
export const permissions: Permission[] = ${JSON.stringify(permissions)};
export const conditions: Condition[] = ${JSON.stringify(conditions)};
export const limitations: Limitation[] = ${JSON.stringify(limitations)};`;
fs.writeFileSync("./src/generated/rules.ts", rulesTs);

console.log("rules.js generated");

const licenseIds = [...new Set(licenses.map((license) => license.id))];
const permissionTags = permissions.map((permission) => permission.tag);
const conditionTags = conditions.map((condition) => condition.tag);
const limitationTags = limitations.map((limitation) => limitation.tag);
const typesTs = `export type LicenseId = ${licenseIds.map((id) => `"${id}"`).join(" | ")};
export type PermissionTag = ${permissionTags.map((tag) => `"${tag}"`).join(" | ")};
export type ConditionTag = ${conditionTags.map((tag) => `"${tag}"`).join(" | ")};
export type LimitationTag = ${limitationTags.map((tag) => `"${tag}"`).join(" | ")};`;
fs.writeFileSync("./src/generated/generatedTypes.ts", typesTs);

console.log("generatedTypes.js generated");
