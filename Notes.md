Inventory:
  Shirt:
  Skirt:
  Dress:
  Jeans:
  Leggings:
  Pants:
  Sweater:
  Shoes:
  Belts:
  Accessories:

const categories = [array of categories]
const colors = [array of colors];
const sizes = [array of sizes]
const tags = [array of tags]
const brands = [array of brands]
const countries = [array of countries]

Product: {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  category: {
    type: Sequelize.ENUM(categories)
  }
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'placeholderImage.jpg',
    validate: {
      notEmpty: true,
      isUrl: true
    }
  }
  brand: {
    type: Sequelize.ENUM(brands),
  },
  color: {
    type: Sequelize.ENUM(colors),
    allowNull: false
  },
  size: {
    type: Sequelize.ENUM(sizes),
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0.01
    }
  },
}

Tag {
  name: {
    type: Sequelize.ENUM(tags)
  }
}

Product.hasMany(Tag)
Tag.belongsToMany(Product)



User: {
  id: {
    type: Sequelize.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING(128),
    unique: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
    lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }, 
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      throw new Error('Do not try to set the `fullName` value!');
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  }
}

Address.belongsTo(User)
User.hasMany(Address)

Address: {
  addressLine1: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
    addressLine2: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  zipCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  country: {
    type: Sequelize.ENUM(countries),
    allowNull: false,
    defaultValue: 'USA',
    validate: {
      notEmpty: true
    }
  }
}

Order: {
  id: {
    type: Sequelize.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  final: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}

Order.hasMany(LineItem)
LineItem.belongsTo(Order)

LineItem: