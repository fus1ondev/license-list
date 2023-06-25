# safe-license-list

This library provides type-safe license data from the [github/choosealicense.com](https://github.com/github/choosealicense.com) repository.


## Install

```shell
npm install safe-license-list
```

## Usage

```typescript
import { licenses } from "safe-license-list";

console.log(licenses);
```

```typescript
import { getLicenseFromId } from "safe-license-list";

const mit = getLicenseFromId("MIT", false);

console.log(mit);

/*
{
  title: 'MIT License',
  featured: true,
  hidden: false,
  description: 'A short and simple...',
  how: 'Create a text file...',
  using: {
    Babel: 'https://github.com/babel/babel/blob/master/LICENSE',
    '.NET': 'https://github.com/dotnet/runtime/blob/main/LICENSE.TXT',
    Rails: 'https://github.com/rails/rails/blob/master/MIT-LICENSE'
  },
  permissions: [ 'commercial-use', 'modifications', 'distribution', 'private-use' ],
  conditions: [ 'include-copyright' ],
  limitations: [ 'liability', 'warranty' ],
  body: 'MIT License\nCopyright (c) [year] [fullname]...',
  id: 'MIT'
}
*/

```

## License

MIT
