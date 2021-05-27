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

export type Callback = (data: any) => void;

export type Data = {
  data: any;
  webViewContext: any;
  token: string;
};
