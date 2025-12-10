'use strict';

module.exports = (sequelize, DataTypes) => {
  const Deposit = sequelize.define(
    'Deposit',
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

      deposit_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },

      partial_deposit: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: 0
      },

      balance_deposit: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },

      payment_status: {
        type: DataTypes.ENUM('Paid', 'Partial', 'Unpaid'),
        allowNull: false,
        defaultValue: 'Unpaid'
      }
    },
    {
      tableName: 'Deposits',
      timestamps: true
    }
  );

  return Deposit;
};
