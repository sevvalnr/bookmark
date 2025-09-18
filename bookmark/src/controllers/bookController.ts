import { Request, Response } from 'express';
import Book, { IBook } from '../models/bookModel';

export const getBooks = async (req: any, res: Response) => {
  const books = await Book.find(); // user filter yok
  res.json(books);
};


export const createBook = async (req: any, res: Response) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ message: 'Title and author required' });

  const book = new Book({ title, author});
  await book.save();
  res.status(201).json(book);
};

export const updateBook = async (req: any, res: Response) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  if (book.user !==  'local-user') return res.status(403).json({ message: 'Not authorized' });

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  await book.save();

  res.json(book);
};

export const deleteBook = async (req: any, res: Response) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  if (book.user !=='local-user') return res.status(403).json({ message: 'Not authorized' });

  await book.deleteOne();
  res.json({ message: 'Book removed' });
};
