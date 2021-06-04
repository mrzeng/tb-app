import config from '../rollup.base';

export default { ...config, external: ['@tb-app/pub-sub', '@tbmp/mp-cloud-sdk'] };
