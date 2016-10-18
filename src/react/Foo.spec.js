import React from 'react';
import proxyquire from 'proxyquire';
import { shallow, mount } from 'enzyme';

describe('Foo component (React)', function () {
	let Foo = null;

	beforeEach(function () {
		Foo = proxyquire('./Foo', {
			'../utils': {
				hello (name) {
					return `Hi ${name}!`;
				},
			},
		}).default;
	});

	it('contains spec with an expectation', () => {
		expect(shallow(<Foo />).contains(<div className='foo'>Hi world!</div>)).to.equal(true);
	});

	it('contains spec with an expectation', () => {
		expect(shallow(<Foo />).is('.foo')).to.equal(true);
	});

	it('contains spec with an expectation', () => {
		expect(mount(<Foo />).find('.foo').length).to.equal(1);
	});
});
