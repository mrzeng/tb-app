import config from '../rollup.base';

export default { ...config, external: ['@tb-app/pub-sub', '@tb-app/pc-api'] };
