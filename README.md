# qubi
qubi is a simple javascript library that converts a password
checklist to a numeric score. This score can then be piped to a
progress element to make a password meter. Qubi makes use of
adapters which make sure your password constraints are satisfied.
Each adapter:
   * Has a "password" parameter
   * Returns a boolean

## Using qubi
* npm - `npm install qubi`
* CDN - `https://unpkg.com/qubi@lates/qubi.js`

## Example
Check [demo.html](https://github.com/lap00zza/qubi/blob/master/demo.html)

## License
[MIT](https://github.com/lap00zza/qubi/blob/master/LICENSE)

Copyright (C) 2017 Jewel Mahanta
