export interface IImage {
  readonly url: string;
  paint(): void;
}

export class Image implements IImage {
  readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  paint(): void {
    console.log(`Painting image from ${this.url}`);
  }
}

export class ImageProxy implements IImage {
  readonly url: string;
  private image: Image;

  constructor(url: string) {
    this.url = url;
  }

  paint(): void {
    if (!this.image) {
      console.log(`Loading image from ${this.url}...`);
      this.image = new Image(this.url);
      console.log(`Image from ${this.url} is loaded.`);
    }
    this.image.paint();
  }
}

// do nothing, you won't see anything about dog.jpg
const imageProxy1 = new ImageProxy('dog.jpg');

// do painting
const imageProxy2 = new ImageProxy('cat.jpg');
imageProxy2.paint();
