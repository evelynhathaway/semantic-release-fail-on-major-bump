function verifyRelease (pluginConfig, context) {
	if (context.nextRelease.type === "major") {
		throw new Error("The next release is a major bump and you're using semantic-release-fail-on-major-bump.");
	}
}

module.exports = {verifyRelease};
