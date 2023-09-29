# @meetsnowmaker/sluggy-string-compactor

[![npm (scoped)](https://img.shields.io/npm/v/@meetsnowmaker/sluggy-string-compactor)](https://github.com/MeetSnowmaker/sluggy-string-compactor)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@meetsnowmaker/sluggy-string-compactor)](https://www.npmjs.com/package/@meetsnowmaker/sluggy-string-compactor)

Extracting useful chars from a string into compact chunk.

## Hello 0.1.x

The default export is not set in stone and further flavors are coming.

## Introduction

So there was this project where the end user could not ensure that the imported csv, or the search input in the application was properly used for searching of names, also the database was inconsistent so whatever. Here is a simple script that helped me generate deterministic ugly names that could be used with contains or starts_with comparisons. Main issues were incorrect Casing, beginning or trailing whitespaces, incorrect spacing between name parts etc.

Please note: this is definitely not an original idea, just my take on a solution.

## How to

Toss in anything the default version returns with a string. If the input is string it will parse it, else it will return '' for now. Strict version will come eventually.

```node
import { lenientTrimSlugRemove as ltsr } from '@meetsnowmaker/sluggy-string-compactor';

const personFullName =
  '  Dr. Emily "Am-ly" Patterson, 12nd Chief Medical Officer and Director of Research at Mercy General Hospital #2/23. ';

const uglySluggy = ltsr(personFullName);

console.log('uglySluggy', uglySluggy);
```

will yield

```
uglySluggy dremilyamlypatterson12ndchiefmedicalofficeranddirectorofresearchatmercygeneralhospital223
```

## Roadmap

Eventually I should implement proper type support and more variables of the base function.

Things I want to add in the future:

- strict versions
- typescript
- webpack for minifying
- some real life examples
- some real life test scenarios with BDD
- GitHub Actions for publishing
