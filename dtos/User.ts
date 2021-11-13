import {IAnime} from './Animes'

export interface IUser {
  email: string;
  id: number;
  uid: string;
  provider: string;
  allow_password_change: boolean;
  nickname: string;
  image: string;
  favorites: IAnime[];
}