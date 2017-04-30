import STORE from './STORE.js'
import {AsteroidModel} from './Models.js'
import axios from 'axios'

const ACTIONS = {
	fetchAsteroids() {
		axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=SbpWDpbPprCJtaTuRMhDd601quGYL0VrdOOO09CW')
	  		.then(function (response) {
    		// console.log(response);
    		return response
 		 })
  		.catch(function (error) {
    		console.log(error);
  		});

	}
}

export default ACTIONS