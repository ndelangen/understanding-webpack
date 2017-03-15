/* IMPORTING DEPENDENCIES */
/* at the top of the file */

/* import the default */
import a from './modules/lib-a';

/* import everything */
import * as b from './modules/lib-b';

/* import a specific name */
import { foo } from './modules/lib-c';

/* import the file */
import './modules/empty';

import('./modules/log')
  .then(module => {
    const { default: log } = module;

    log('import a from "./modules/lib-a";', a);
    log('import * as b from "./modules/lib-b";', { ...b });
    log('import { foo } from "./modules/lib-c";', foo);
  })
  .catch(e => {
    console.log('ERROR: ', e);
  });
