module.exports = function (sequelize, DataTypes) {
    const Book = sequelize.define("Book", {
    title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    author: {
        type: DataTypes.STRING,
        allowNull: false,

      },
    isbn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    edition: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    publisher: {
        type: DataTypes.STRING,
      },
    year: DataTypes.INTEGER,
    });
  
    Book.associate = function(models) {
        // A book should belong to a user
        // A book can't be created without a User due to the foreign key constraint
        Book.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  
    return Book;
  };