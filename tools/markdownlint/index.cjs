module.exports = {
  effects: {
    files: [
      {
        source: 'files/config.json',
        destination: '.markdownlint.json',
      },
    ],
    dependencies: ['markdownlint-cli', 'npm-run-all'],
    packageJson: {
      'scripts["lint"]': 'run-p lint:*',
      'scripts["lint:markdown"]':
        'markdownlint "**/*.md" --ignore "**/node_modules/**"',
      'scripts["format"]': 'run-p format:*',
      'scripts["format:markdown"]': 'yarn lint:markdown --fix',
    },
  },
}
