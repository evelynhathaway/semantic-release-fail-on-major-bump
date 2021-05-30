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

In your [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration), add `semantic-release-fail-on-major-bump`.

**`.releaserc`**

```json
{
  "plugins": [
    [
      "semantic-release-fail-on-major-bump",
      "@semantic-release/commit-analyzer",
      {
        "preset": "angular",
        "releaseRules": [
          {"type": "docs", "scope":"README", "release": "patch"},
          {"type": "refactor", "release": "patch"},
          {"type": "style", "release": "patch"}
        ],
        "parserOpts": {
          "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      }
    ]
  ]
}
```

## License

Copyright Evelyn Hathaway, [MIT License](/LICENSE)
