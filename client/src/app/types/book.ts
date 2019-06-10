export class Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: Number;
  publisher: string;

  constructor(obj?: Book) {
    Object.assign(this, obj ? obj : {
      id: '',
      title: '',
      author: '',
      description: '',
      price: '',
      publisher: ''
    });
  }
}
