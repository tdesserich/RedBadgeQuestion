module.exports = (sequelize, DataTypes) => {
    const StoreInventory = sequelize.define('store_inventory', {
        product_name: {
            type: DataTypes.STRING,
        },
        product_description: {
            type: DataTypes.STRING,
        },
        product_price: {
            type: DataTypes.FLOAT,
        },
        product_rating: {
            type: DataTypes.FLOAT,
            defaultValue: 0.00
        },
        product_images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        product_type: {
            type: DataTypes.ENUM('Backpack', 'Tent', 'Sleeping Bag', 'Pad & Hammock', 'Camp Kitchen', 'Camp Furniture', 'Uncategorized'),
            defaultValue: 'Uncategorized'
        },
        product_size: {
            type: DataTypes.ENUM('tiny','S', 'M', 'L', 'XXL', 'XXXL', 'big'),
        }   
    });

    return StoreInventory;
}