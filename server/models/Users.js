module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    Users.associate = (models) => {
        Users.hasMany(models.Need_list, {
          onDelete: "cascade",
        });

        Users.hasMany(models.Want_list, {
            onDelete: "cascade",
        });

        Users.hasMany(models.Saving_amount, {
            onDelete: "cascade",
          });
        
        Users.hasMany(models.Budget, {
            onDelete: "cascade",
        });

        Users.hasMany(models.Want_amount, {
            onDelete: "cascade",
        });

        Users.hasMany(models.Need_amount, {
            onDelete: "cascade",
        });

        Users.hasMany(models.Nremain, {
            onDelete: "cascade",
          });

        Users.hasMany(models.Wremain, {
            onDelete: "cascade",
        });
      };
    return Users;
};