const router = require('express').Router();
const AccountUserService = require('../services/accountUserService');

router.get('/:id/users', (req, res) => {
    const limit = req.query
    aus(req.params.id).findAllUsers(limit)
    .then(
        users => {
            res.status(200).render('index', {users:JSON.stringify(users)})
        }
    )
})

const aus = (user) => new AccountUserService(user);

module.exports = router;