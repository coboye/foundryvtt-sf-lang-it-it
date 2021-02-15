
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'FoundryVTT-sf-it',
			lang: 'it',
			dir: 'compendium'
		});
	}
});