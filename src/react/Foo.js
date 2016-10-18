import React from 'react';
import { hello } from '../utils';

class Foo extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="foo">
				{hello('world')}
			</div>
		);
	}
}

export default Foo;
