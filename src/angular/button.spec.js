import './button';

describe('Button directive (Angular)', function () {
	beforeEach(ngModule('directives.button'));

	describe('Functionality', function () {
		it('should call method given as on-click attribute', function (done) {
			inject(function ($rootScope, $compile) {
				const scope = $rootScope.$new();

				scope.doSomething = done;

				const compiled = $compile('<btn on-click="doSomething()">Click me!</btn>')(scope)[0];

				compiled.click();
			});
		});
	});

	describe('Render output', function () {
		it('should have right classname', inject(function ($rootScope, $compile) {
			const scope = $rootScope.$new();

			const compiled = $compile('<btn>Click me!</btn>')(scope);

			expect(compiled.attr('class')).to.include('btn');
		}));

		it('should be a <button> tag', inject(function ($rootScope, $compile) {
			const scope = $rootScope.$new();

			const compiled = $compile('<btn>Click me!</btn>')(scope);

			expect(compiled.prop('tagName')).to.equal('BUTTON');
		}));

		it('should include the text given', inject(function ($rootScope, $compile) {
			const scope = $rootScope.$new();

			const compiled = $compile('<btn>test 123</btn>')(scope);

			expect(compiled.text()).to.equal('test 123');
		}));
	});
});
