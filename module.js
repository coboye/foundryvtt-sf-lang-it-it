
var MODULE_NAME = "foundryvtt-sf-lang-it-it";

Hooks.once('init', () => {
	if(typeof Babele !== 'undefined') {		
		const babele = Babele.get();
		babele.register({
			module: MODULE_NAME,
			lang: "it",
			dir: "compendium"
		});
	}
});