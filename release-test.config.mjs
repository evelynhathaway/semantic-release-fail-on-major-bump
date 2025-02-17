/**
 * @type {import("semantic-release").GlobalConfig}
 */
export default {
	plugins: [
		"semantic-release-fail-on-major-bump",
		[
			"@semantic-release/commit-analyzer",
			{
				"config": "conventional-changelog-evelyn",
				"releaseRules": "conventional-changelog-evelyn/release-rules.js",
			},
		],
	],
};
