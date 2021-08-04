module.exports = (sequelize, DataTypes) => {
    const Nremain = sequelize.define("Nremain", {
        amount:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    return Nremain;
};