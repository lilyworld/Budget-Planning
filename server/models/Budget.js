module.exports = (sequelize, DataTypes) => {
    const Budget = sequelize.define("Budget", {
        amount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Budget;
};