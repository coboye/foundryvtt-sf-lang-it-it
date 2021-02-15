
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'foundryvtt-sf-lang-it-it',
			lang: 'it',
			dir: 'compendium'
		});
	}
});