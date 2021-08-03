module.exports = (sequelize, DataTypes) => {
    const Want_amount = sequelize.define("Want_amount", {
        amount:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        percent:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    return Want_amount;
};