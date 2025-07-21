import mongoose from 'mongoose';

const wishlistItemSchema = new mongoose.Schema({
  productId: { type: String }, // for products
  video: { type: String },     // for reels
  brand: { type: String },
  name: { type: String },
  price: { type: Number },
  image: { type: String },
  type: { type: String },
}, { _id: false });

const wishlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  items: [wishlistItemSchema],
}, { timestamps: true });

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
export default Wishlist; 