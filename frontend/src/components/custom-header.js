import React, {Component} from 'react';
import { Header } from 'semantic-ui-react';
export default class CustomHeader extends Component{
	render(){
		return(
			<div>
				<Header inverted className='topText'>
					Hello world!
				</Header>
			</div>
		);
	}
}
