import {Router} from 'express';
import {IUser, User} from '../models/user.model';

const router = Router();

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const newUser: IUser = new User({
    username: req.body.username
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
