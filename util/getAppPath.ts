import { app } from 'electron';

export default () => process.env.NODE_ENV === 'development' ? '.' : app.getAppPath();
