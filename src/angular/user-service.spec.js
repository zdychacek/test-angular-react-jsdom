import './user-service';

const MOCK_USER = { username: 'riku' };
const MOCK_USERS = [ { id: 1 }, { id: 2 } ];

describe('User service (Angular)', function () {
	beforeEach(ngModule('services.user'));

	let $httpBackend = null;

	beforeEach(inject(function ($injector) {
		$httpBackend = $injector.get('$httpBackend');

		$httpBackend.when('GET', '/api/users').respond(MOCK_USERS);
		$httpBackend.when('GET', '/api/users/me').respond(MOCK_USER);
	}));

	afterEach(function () {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('getUsers method', function () {
		it('should return a list of users', function (done) {
			inject(function (UserService) {
				UserService.getUsers()
					.then((users) => {
						expect(users).to.deep.equal(MOCK_USERS);
						done();
					})
					.catch(done);

				$httpBackend.flush();
			});
		});
	});

	describe('getUser method', function () {
		it('should return current user', function (done) {
			inject(function (UserService) {
				UserService.getUser()
					.then((users) => {
						expect(users).to.deep.equal(MOCK_USER);
						done();
					})
					.catch(done);

				$httpBackend.flush();
			});
		});
	});
});
