module MyModule {
    export class MyPublicClass {
      private myPrivateNumber: number;
      constructor() {
        this.myPrivateNumber = 0;
      }
      public getPrivateNumber() {
        return this.myPrivateNumber;
      }
    }
  
    class MyPrivateClass {
      private myPrivateString: string;
      constructor() {
        this.myPrivateString = 'Hello World!';
      }
      public getPrivateString() {
        return this.myPrivateString;
      }
    }
  }