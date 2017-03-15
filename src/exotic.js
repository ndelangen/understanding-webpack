/* import css styles */
import css from './whut/styles.css';

/* import a file's url */
import zip from './whut/file.zip';
import png from './whut/image.png';

/* import text */
import svg from './whut/icon.svg';

/* import parsed markdown */
import md from './whut/document.md';

import log from './modules/log';

/* log our imported modules */
log('importing a CSS `module`', css);
log('importing a ZIP `module`', zip);
log('importing a PNG `module`', png);
log('importing a SVG `module`', svg);
log('importing a MARKDOWN `module`', md);
