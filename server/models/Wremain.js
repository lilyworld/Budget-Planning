module.exports = (sequelize, DataTypes) => {
    const Wremain = sequelize.define("Wremain", {
        amount:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        percent:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    return Wremain;
};