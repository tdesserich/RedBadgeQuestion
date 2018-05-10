module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define('account_members', {
        uid: {
            type: DataTypes.UUID,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allow_null: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allow_null: false
        },
        email: {
            type: DataTypes.STRING,
            allow_null: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        email_status: {
            type: DataTypes.ENUM('daily', 'weekly', 'bi-monthly', 'none'),
            defaultValue: 'daily'
        },
        password: {
            type: DataTypes.STRING,
            allow_null: false
        },
        available_dividend: {
            type: DataTypes.FLOAT,
            defaultValue: 0.00
        }
    })

    return Member
}