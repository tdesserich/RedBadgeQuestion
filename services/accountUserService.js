const db = require('../models/index').sequelize;
const AccountUser = db.model('account_members');

class AccountUserService {

    constructor(userId) {
        this._userId = userId;
    }

    findAllUsers(query) {
        return this.checkUser()
        .then(
            (err) => {
                if (err) throw new ReferenceError('User not found.')
                console.log('test')
                switch (Object.keys(query)[0]) {
                    case 'limit':
                        return AccountUser.findAll({ limit: query.limit })
                    default:
                        return AccountUser.findAll()
                }
            }
        )
    }

    checkUser() {
        if (!this._userId)
            return new Promise((resolve, reject) => {
                return resolve(false)
            })

            console.log(this._userId)
        return AccountUser.findOne({ where: { uid: this._userId} })
            .catch(
                (error) => false
            ).then(
                (user) => user
            )
    }
}

module.exports = AccountUserService;