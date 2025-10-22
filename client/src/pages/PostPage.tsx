import { useEffect, useState } from "react";
import { example1, example2, example3 } from "../asset";
import type { PostType, UserType } from "../types";
import {
  AdvertisementSection,
  ImageSection,
  NotificationSection,
  PostFooter,
  PostHeader,
  ProductDetailSection,
  ProductMainSection,
  SimiliarProductsSection,
  UserInfoSection,
  UserProductsSection,
} from "../ui";

export const PostPage = () => {
  const [post, setPost] = useState<PostType>();
  const [user, setUser] = useState<UserType>();

  // post 초기화
  useEffect(() => {
    const post: PostType = {
      postId: "1",
      userId: "xxx",
      images: [example1, example2, example3],
      profileImage: "",
      username: "화이아루",
      location: "역삼1동",
      temp: "32.7",
      title: "맥북 에어 M1 실버, 램8, ssd256 (매직 마우스 포함)",
      price: 520000,
      categories: [{ name: "디지털기기", value: "digital_devices" }],
      postDate: new Date().toISOString(),
      detail:
        "맥북 에어 M1 실버 색상 판매합니다 - 사이클 수는 49회입니다 - 배터리 성능 최대치는 98%입니다 MacBook Air는 얇고 가벼운 디자인으로 휴대성이 뛰어납니다\n\n램 8기가 ssd는 256 입니다\n\n커버 끼고 사용해서 깨끗 합니다\n사용감 있는 매직마우스 포함 입니다",
      meta: {
        chats: 2,
        likes: 12,
        views: 119,
      },
    };

    setPost(post);
  }, []);

  // user 초기화
  useEffect(() => {
    const user: UserType = {
      likes: [],
    };

    setUser(user);
  }, []);

  const handleClickLikes = () => {
    if (!user || !post) return;
    if (!user.likes.includes(post.postId)) {
      setUser((prev) => ({
        ...prev,
        likes: [...(prev?.likes ?? []), post.postId],
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        likes: prev?.likes.filter((l) => l !== post.postId) ?? [],
      }));
    }
  };

  console.log(user);

  if (!post || !user) return null;

  return (
    <div className="w-[500px]">
      <PostHeader />
      <main>
        <ImageSection images={post.images} />
        <UserInfoSection
          username={post.username}
          location={post.location}
          temp={post.temp}
          userId={post.userId}
        />
        <ProductMainSection
          title={post.title}
          price={post.price}
          categories={post.categories}
          postDate={post.postDate}
        />
        <ProductDetailSection detail={post.detail} meta={post.meta} />
        <AdvertisementSection />
        <SimiliarProductsSection />
        <NotificationSection />
        <UserProductsSection username={post.username} />
        <AdvertisementSection />
      </main>
      <PostFooter
        isLiked={user.likes.includes(post.postId)}
        onLikeClick={handleClickLikes}
        postId={post.postId}
      />
    </div>
  );
};
