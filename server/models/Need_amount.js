module.exports = (sequelize, DataTypes) => {
    const Need_amount = sequelize.define("Need_amount", {
        amount:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        percent:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    return Need_amount;
};