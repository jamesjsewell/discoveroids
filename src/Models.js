import Backbone from 'backbone'

export var AsteroidCollection = Backbone.Collection.extend({
	model : AsteroidModel,
	url : 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=SbpWDpbPprCJtaTuRMhDd601quGYL0VrdOOO09CW'
})

export var AsteroidModel = Backbone.Model.extend({
	url : 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=SbpWDpbPprCJtaTuRMhDd601quGYL0VrdOOO09CW'
})