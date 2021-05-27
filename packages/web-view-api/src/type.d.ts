export type Message = {
  type: string;
  data?: any;
  token: string;
};

export type Result = {
  data?: any;
  success: boolean;
  error?: string;
  type: string;
  token?: string;
};

export type Data = Pick<Result, 'data' | 'success' | 'error'>;
