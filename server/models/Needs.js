module.exports = (sequelize, DataTypes) => {
    const Needs = sequelize.define("Needs", {
        itemname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    
    return Needs;
};