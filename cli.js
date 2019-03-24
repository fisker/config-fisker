#!/usr/bin/env node

process.on('unhandledRejection', error => {
  console.error(error)
  process.exit(1)
})

require('./lib/cli').run()
