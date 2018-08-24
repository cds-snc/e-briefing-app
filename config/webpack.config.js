const path = require('path');
const  useDefaultConfig = require('@ionic/app-scripts/config/webpack.config');


useDefaultConfig[process.env.IONIC_ENV].resolve.alias = {
    '@app' : path.resolve('./src/app/'),
    '@providers' : path.resolve('./src/providers'),
    '@pages' : path.resolve('./src/pages')
};

module.export = () => useDefaultConfig;
