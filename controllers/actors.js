const Event = require('../models/event');
const Actor = require('../models/actor');
const Repo = require('../models/repo');
const Sequelize = require('sequelize');
var getAllActors = (req,res,next) => {
	Actor.findAll({
		attributes: {
			include:
			[
				[Sequelize.literal('(SELECT COUNT(*) FROM events where events.actorId = actor.id)'),
			"EventCount"
],
				[Sequelize.literal('(SELECT createdAt from events where events.actorId = actor.id order by createdAt DESC LIMIT 1)'), 'EventDate']
			]
},
include: [Event],
		order: [
			[Sequelize.literal('EventCount'), 'desc'],
			[Sequelize.literal('EventDate'), 'desc'],
			['login', 'asc']
		]
	})
		.then(function (actors) {
			res.status(200).json({actors: actors});
			/*console.log(JSON.stringify(actors));*/
		})
		.catch(function (err) {
			console.log(err);
		})

};

var updateActor = (req,res,next) => {
	const avatar_url = req.body.avatar_url;
	const actorId = req.body.id;
	//console.log(avatar_url,actorId);
	Actor.findByPk(actorId)
		.then(function (actor) {
			 actor.update(
				{
					avatar_url : avatar_url
				}
			)
				 .then(function (result) {
					 res.status(200).json({actor: actor});
				 })
				 .catch(function (err) {
					 res.status(400).json(err);
				 })
		})

		.catch(function (err) {
			res.status(404).json(err);

		})

};

var getStreak = (req,res,next) => {

};



module.exports = {
	updateActor: updateActor,
	getAllActors: getAllActors,
	getStreak: getStreak
};

















