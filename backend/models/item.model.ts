import {model, Model, Schema, Document} from 'mongoose';

interface IItem extends Document {
  username: string;
  name: string;
  category: string;
}

const ItemSchema = new Schema({
  username: {type: String, required: true},
  name: {type: String, required: true},
  category: {type: String},
});

const Item: Model<IItem> = model('Item', ItemSchema);

export {IItem, Item};
