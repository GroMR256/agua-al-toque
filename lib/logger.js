// Logger estructurado para Vercel Serverless Functions

export const logger = {
  info: (action, meta = {}) => {
    console.log(JSON.stringify({
      level: 'INFO',
      timestamp: new Date().toISOString(),
      action,
      ...meta
    }));
  },
  warn: (action, meta = {}) => {
    console.warn(JSON.stringify({
      level: 'WARN',
      timestamp: new Date().toISOString(),
      action,
      ...meta
    }));
  },
  error: (action, error, meta = {}) => {
    console.error(JSON.stringify({
      level: 'ERROR',
      timestamp: new Date().toISOString(),
      action,
      message: error?.message || error,
      stack: error?.stack || null,
      ...meta
    }));
  }
};
