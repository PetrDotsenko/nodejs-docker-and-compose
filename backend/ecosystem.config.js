module.exports = {
  apps: [
    {
      name: 'kupipodariday-backend',
      cwd: '/app',
      // запускаем компилированный JS (dist), явный интерпретатор node
      script: './dist/main.js',
      exec_interpreter: 'node',
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
