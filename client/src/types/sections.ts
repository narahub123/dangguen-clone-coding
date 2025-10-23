export interface PostMetaType {
  chats: number;
  likes: number;
  views: number;
}

export interface CategoryType {
  name: string;
  value: string;
}

export interface AuthorType {
  username: string;
  userId: string;
  profileImage: string;
  temp: string;
  location: string;
}

export interface ProductType {
  postId: string;
  title: string;
  price: number;
  image: string;
}
export interface PostType {
  postId: string;
  userId: string;
  images: string[];
  username: string;
  location: string;
  profileImage: string;
  temp: string;
  title: string;
  price: number;
  categories: CategoryType[];
  postDate: string;
  detail: string;
  meta: PostMetaType;
}
