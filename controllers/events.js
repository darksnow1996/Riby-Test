const Event = require('../models/event');
const Actor = require('../models/actor');
const Repo = require('../models/repo');
var getAllEvents = (req,res,next) => {
	Event.findAll({
		attributes : {
			exclude: ['actorId','repoId','updatedAt']
		},

		include : [
			Actor, Repo

		]

	})
		.then(function(events){
			res.status(200).json({events: events});
			/*console.log(events);*/
		})
		.catch(function (err) {
			res.status(400).json({
				message: err
			});
			/*console.log(err)
*/
		})

};

var addEvent = (req,res,next) => {

	var etype = req.body.etype;
	var actor = req.body.actor;
	var repo = req.body.repo;
	Event.create({type: etype, actorId: actor, repoId: repo})
		.then(function (event) {
			res.status(201).json({
				event: event
			});
		}).catch(function (err) {
		res.status(400).json(err)

	});
};



var getByActor = (req,res,next) => {
	var actorId= req.params.actorId;
Actor.findByPk(actorId)
	.then(function (actor) {
		return actor.getEvents({order: [
			['id','asc']
			]},);
	})
	.then(function (events) {
		res.status(200).json({events : events})
	})
	.catch(function (err) {
		res.status(404).json({message : "Unable to get events by actor"});

	})

};


var eraseEvents = (req,res,next) => {
Event.destroy({
	where: {}
})
	.then(function (result) {
	res.status(200).json({message : "Events deleted successfully"});
}).catch(function (err) {

})
};

module.exports = {
	getAllEvents: getAllEvents,
	addEvent: addEvent,
	getByActor: getByActor,
	eraseEvents: eraseEvents,

};

















