'use strict';

module.exports = (sequelize, DataTypes) => {
  const MonthlyPayment = sequelize.define(
    'MonthlyPayment',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      tenant_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      monthly_due_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },

      monthly_rent: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },

      date_paid: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },

      amount_paid: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: 0
      },

      remaining_balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    },
    {
      tableName: 'MonthlyPayments',
      timestamps: true
    }
  );

  return MonthlyPayment;
};
