# Test-project to investigate Vite CommonJS support

`npm run build` works properly,
but `npm run dev` produces error: `SyntaxError: import not found: fancyDate`.


## Notes

It uses CommonJS library `date-format` as inner dependency for local package.
([npm](https://www.npmjs.com/package/date-format),
[src](https://github.com/nomiddlename/date-format)).
