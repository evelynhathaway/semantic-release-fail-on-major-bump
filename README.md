<div align="center">

<img alt="Icon" width="128" height="128" align="center" src=".github/icon.png"/>

# Semantic Release Fail on Major Bump

**Semantic release plugin that prevents publishing major version bumps**

[![npm version](https://badgen.net/npm/v/semantic-release-fail-on-major-bump?icon=npm)](https://www.npmjs.com/package/semantic-release-fail-on-major-bump)
[![check status](https://badgen.net/github/checks/evelynhathaway/semantic-release-fail-on-major-bump/main?icon=github)](https://github.com/evelynhathaway/semantic-release-fail-on-major-bump/actions)
[![license: MIT](https://badgen.net/badge/license/MIT/blue)](/LICENSE)

</div>

## Description

If you need your pipelines to fail if a major or breaking change release will be created with semantic-release, drop this plugin into your config.

## Installation

```bash
npm install --save-dev semantic-release-fail-on-major-bump
```

## Usage

In your [**semantic-release** configuration file](https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file), add `semantic-release-fail-on-major-bump`.

**`release.config.mjs`**

```js
export default {
	plugins: [
		// Add this line
		"semantic-release-fail-on-major-bump",
		// Example semantic-release commit-analyzer config below...
		[
			"@semantic-release/commit-analyzer",
			{
				"preset": "angular",
				"releaseRules": [
					{"type": "docs", "scope": "README", "release": "patch"},
					{"type": "refactor", "release": "patch"},
					{"type": "style", "release": "patch"},
				],
				"parserOpts": {
					"noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"],
				},
			},
		],
	],
};
```

## Development

### Testing

Make a either a `Breaking:` or non-breaking typed commit and then see if the error was thrown if expected while running
a dummy dry-run release.

```bash
npm link
npm link semantic-release-fail-on-major-bump
npm run test-release
```

## License

Copyright Evelyn Hathaway, [MIT License](/LICENSE)
