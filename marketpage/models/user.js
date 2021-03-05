module.exports = function (sequelize, Datatypes) {
    const User = sequelize.define("User", {
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1, 140],
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        }
    });

    User.associate = function(models) {
        // Associating User with Books
        // When an User is deleted, also delete any associated books from their library
        User.hasMany(models.Books, {
          onDelete: "cascade"
        });
      };    

    // Custom prototype method to check user password against database
    User.prototype.validPassword = function (password) {
        return password === this.password
    };

    return User;
};