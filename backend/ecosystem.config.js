module.exports = {
  apps: [
    {
      name: 'kupipodariday-backend',
      cwd: '/app',
      script: './src/main.ts',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 4000
      }
    }
  ]
};
