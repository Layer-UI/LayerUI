
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
  "files": "src/**",
  "targets": [
    "svelte",
    "react",
    "qwik"
  ],
  "dest": "packages",
  "commonOptions": {
    "typescript": true
  },
  "options": {
    "react": {
      "stylesType": "style-tag"
    },
    "svelte": {},
    "qwik": {}
  }
}