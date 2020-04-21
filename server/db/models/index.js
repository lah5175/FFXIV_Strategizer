const User = require('./user');
const Group = require('./group');
const Strategy = require('./strategy');
const Phase = require('./phase');
const Step = require('./step');
const Marker = require('./marker');

// db associations

User.hasMany(Strategy);
Strategy.belongsTo(User);

Group.hasMany(Strategy);
Strategy.belongsTo(Group);

Strategy.hasMany(Phase);
Phase.belongsTo(Strategy);

Phase.hasMany(Step, {onDelete: 'cascade'});
Step.belongsTo(Phase);

User.belongsToMany(User, {through: 'friends', as: 'friend'});

Step.belongsToMany(Marker, {through: 'stepMarker'});
Marker.belongsToMany(Step, {through: 'stepMarker'});

User.belongsToMany(Group, {through: 'groupUser'});
Group.belongsToMany(User, {through: 'groupUser'});


module.exports = {
  User,
  Group,
  Strategy,
  Phase,
  Step,
  Marker,
}