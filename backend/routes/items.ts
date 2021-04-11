import {Router} from 'express';
import {IItem, Item} from '../models/item.model';

const router = Router();

router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const item: IItem = new Item({
    username: req.body.username,
    name: req.body.name
  });

  if ('category' in req.body) item.category = req.body.category;

  item.save()
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
