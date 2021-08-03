module.exports = (sequelize, DataTypes) => {
    const Needs = sequelize.define("Need_list", {
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