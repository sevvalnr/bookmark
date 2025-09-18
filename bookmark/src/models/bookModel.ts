import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  user: string;
}

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  user: { type: String, required: false } // JWT’den alınacak user id
}, { timestamps: true });

export default mongoose.model<IBook>('Book', bookSchema);
