export interface Message {
  type: string;
  data?: any;
  token: string;
}

export interface Result {
  data?: any;
  success: boolean;
  error?: string;
  type: string;
  token?: string;
}
