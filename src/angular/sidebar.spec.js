import './sidebar';

describe('Sidebar directive (Angular)', () => {
	beforeEach(ngModule('directives.sidebar'));

	it('should have proper classname', inject(function ($rootScope, $compile) {
		const scope = $rootScope.$new();
		const compiled = $compile('<div sidebar></div>')(scope);

		expect(compiled.attr('class')).to.contain('sidebar');
	}));
});
