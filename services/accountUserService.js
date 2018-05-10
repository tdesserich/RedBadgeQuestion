const db = require('../models/index').sequelize;
const AccountUser = db.model('account_members');

class AccountUserService {

    constructor(userId) {
        this._userId = userId;
    }

    findAllUsers(query) {
        return this.checkUser()
        .then(
            () => {
                switch (Object.keys(query)[0]) {
                    case 'limit':
                        return AccountUser.findAll({ limit: query.limit })
                    default:
                        return AccountUser.findAll()
                }
            }
        )
        .catch(
            (e) => new ReferenceError('user doesn\'t exist')
        );
    }

    checkUser() {
        if (!this._userId)
            throw new ReferenceError('No user provided')

        return AccountUser.find({ where: { uid: this._userId } })
            .catch(
                (error) => {
                    return {m: false, e: new ReferenceError('user doesn\'t exist')}
                }
            ).then(
                (user) => user
            )
    }
}

module.exports = AccountUserService;