import singleFileUpload from './singleFileUpload.js';

const mountRoutes = (app) => {
  app.use('/singleFileUpload', singleFileUpload);
};

export default mountRoutes;
