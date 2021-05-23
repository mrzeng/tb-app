declare let my: any;

declare namespace NodeJS {
  interface Global {
    my: any;
  }
}
