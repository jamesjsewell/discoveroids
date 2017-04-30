import Backbone from 'backbone'

export var AstCollection = Backbone.Collection.extend({
	url : 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=SbpWDpbPprCJtaTuRMhDd601quGYL0VrdOOO09CW'
	return apiResponse
})

export var AstModel = Backbone.Model.extend({
	url : 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=SbpWDpbPprCJtaTuRMhDd601quGYL0VrdOOO09CW'
	return apiResponse[0]
})