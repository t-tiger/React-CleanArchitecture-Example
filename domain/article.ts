import { Author } from "./author";

export class Article {
  readonly id: number;
  readonly name: string;
  readonly author: Author;
  readonly createdAt: Date;

  constructor(id: number, name: string, author: Author, createdAt: Date) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.createdAt = createdAt;
  }
}
