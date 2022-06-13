const db = require(__dirname + '/../connection');

const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

////////////////////////////////////////////////////////////////////////

const schema = {
    id: { type: Sequelize.UUID, allowNull: false, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    
    genres: { type: Sequelize.STRING(128), allowNull: false },
    director: { type: Sequelize.STRING(128), allowNull: false },
    imdb_rating : {type : Sequelize.INTEGER, allowNull : false},
    length: { type: Sequelize.STRING(128), allowNull: false },
    poster: { type: Sequelize.STRING(128), allowNull: false },
    title: { type: Sequelize.STRING(128), allowNull: false },

};

var tableName = 'movie_tables';
var modelName = 'MovieTable';

////////////////////////////////////////////////////////////////////////

module.exports.Model = sequelize.define(modelName, schema, {
    freezeTableName: true,
    timestamps: false,
    tableName: tableName
});
module.exports.Schema = schema;
module.exports.TableName = tableName;
