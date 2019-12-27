export type RootProps = {
  messages: Message[];
};

export type Message = {
  id?: string;
  body: string;
  time: string;
};
