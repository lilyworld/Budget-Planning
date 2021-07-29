module.exports = (sequelize, DataTypes) => {
    const Needs = sequelize.define("Needs", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Price:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    
    return Needs;
};