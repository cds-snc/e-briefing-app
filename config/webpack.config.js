const path = require('path');
const  useDefaultConfig = require('@ionic/app-scripts/config/webpack.config');


useDefaultConfig.resolve.alias = {
    '@app' : path.resolve('./src/app/'),
    '@providers' : path.resolve('./src/providers'),
    '@pages' : path.resolve('./src/pages')
};

module.export = () => useDefaultConfig;
