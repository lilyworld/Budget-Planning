module.exports = (sequelize, DataTypes) => {
    const Wants = sequelize.define("Wants", {
        itemname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    
    return Wants;
};