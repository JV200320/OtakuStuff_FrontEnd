import Anime from './Animes'

export default interface User {
  email: string;
  id: number;
  uid: string;
  provider: string;
  allow_password_change: boolean;
  nickname: string;
  image: string;
  favorites: Anime[];
}