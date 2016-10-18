import React from 'react';
import { hello } from '../utils';

console.log(hello('world'));

class Foo extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="foo" />
		);
	}
}

Foo.propTypes = {};
Foo.defaultProps = {};

export default Foo;
