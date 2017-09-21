# qubi
qubi is a simple javascript library that converts a password
checklist to a numeric score. This score can then be piped to a
progress element to make a password meter. Qubi comes inbuilt
with these constraints:
* `isLength(8)`
* `isLength(14)`
* `hasNumber`
* `hasUppercase`
* `hasLowercase`
* `hasSpecialChars`

You can add/remove constraints as per your requirements. The library is very hackable.

## Using qubi
* npm - `npm install qubi`
* CDN - `https://unpkg.com/qubi@latest/qubi.js`

## Example
Check [demo.html](https://github.com/lap00zza/qubi/blob/master/demo.html)

## License
[MIT](https://github.com/lap00zza/qubi/blob/master/LICENSE)

Copyright (C) 2017 Jewel Mahanta
