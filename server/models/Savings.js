module.exports = (sequelize, DataTypes) => {
    const Savings = sequelize.define("Savings", {
        amount:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    
    return Savings;
};