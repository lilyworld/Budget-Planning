module.exports = (sequelize, DataTypes) => {
    const Savings = sequelize.define("Saving_amount", {
        amount:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        percent:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    return Savings;
};