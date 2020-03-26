export type Cat = {
  id: string;
  name: string;
  knowledge: number;
  health: number;
  cuteness: number;
  birthday: string;
  ownerId: string;
};

export type User = {
  id: string;
  name: string;
  Cats?: Cat[];
};
