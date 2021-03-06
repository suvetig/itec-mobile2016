// Example model


module.exports = function (sequelize, DataTypes) {

  var NotePlataIncasate = sequelize.define('note_plata_incasate', {
    tab_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    note_plata_id: DataTypes.INTEGER,
    operare: DataTypes.DATE,
    utilizator_id: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return NotePlataIncasate;
};

