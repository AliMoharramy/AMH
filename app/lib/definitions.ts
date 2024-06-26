export type tasksRaw = {
  task_id: number;
  title: string;
  description: string;
  rank: string;
  duration?: string;
  start?: string;
  endtime?: string;
};
export type products = {
  product_id: number;
  name: string;
  size: string;
  cost: string;
  img: string;
};
export type users = {
  user_id: number;
  email: string;
  password: string;
  name: string;
};
