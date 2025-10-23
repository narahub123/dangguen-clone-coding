import { useCallback, useEffect, useState } from "react";
import { example1, example2, example3 } from "../asset";
import type { PostType, UserType } from "../types";
import {
  AdvertisementSection,
  ImageSection,
  LightBox,
  NotificationSection,
  PostFooter,
  PostHeader,
  PostReportSheet,
  ProductDetailSection,
  ProductMainSection,
  SimiliarProductsSection,
  UserInfoSection,
  UserProductsSection,
} from "../ui";
import { userExample } from "../data";

export const PostPage = () => {
  const [post, setPost] = useState<PostType>();
  const [user, setUser] = useState<UserType>();
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [isPostReportOpen, setIsPostReportOpen] = useState(false);
  const [isOver, setIsOver] = useState(true);
  const [sentinelEl, setSentinelEl] = useState<HTMLDivElement | null>(null);
  const setSentinelRef = useCallback((node: HTMLDivElement | null) => {
    setSentinelEl(node); // node가 붙거나 떨어질 때마다 리렌더 발생
  }, []);

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
    setUser(userExample);
  }, []);

  //
  useEffect(() => {
    if (!sentinelEl) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        setIsOver(entry.isIntersecting);
      },
      {
        root: null, // 뷰포트 (스크롤 컨테이너 쓰면 해당 엘리먼트를 넣기)
        rootMargin: "0px", // 사전 로딩 여유 공간 Ex) "200px 0px"
        threshold: 0.1, // 10% 보이면 true
      }
    );

    io.observe(sentinelEl);

    return () => io.unobserve(sentinelEl);
  }, [sentinelEl]);

  console.log(isOver);

  const handleClickLikes = () => {
    if (!user || !post) return;
    if (!user.likes.includes(post.postId)) {
      setUser((prev) => ({
        ...prev!,
        likes: [...(prev?.likes ?? []), post.postId],
      }));
    } else {
      setUser((prev) => ({
        ...prev!,
        likes: prev?.likes.filter((l) => l !== post.postId) ?? [],
      }));
    }
  };

  const onLightBoxOpen = () => {
    setIsLightBoxOpen(true);
  };
  const onLightBoxClose = () => {
    setIsLightBoxOpen(false);
  };

  const onPostReportOpen = () => {
    setIsPostReportOpen(true);
  };
  const onPostReportClose = () => {
    setIsPostReportOpen(false);
  };

  console.log(user);

  if (!post || !user) return null;

  return (
    <div className="w-[500px]">
      <LightBox
        images={post.images}
        isOpen={isLightBoxOpen}
        onClose={onLightBoxClose}
      />
      <PostHeader isOver={isOver} onPostReportOpen={onPostReportOpen} />
      <main>
        <ImageSection
          images={post.images}
          ref={setSentinelRef}
          onOpen={onLightBoxOpen}
        />
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
        <UserProductsSection username={post.username} userId={post.userId} />
        <AdvertisementSection />
      </main>
      <PostReportSheet isOpen={isPostReportOpen} onClose={onPostReportClose} />
      <PostFooter
        isLiked={user.likes.includes(post.postId)}
        onLikeClick={handleClickLikes}
        postId={post.postId}
      />
    </div>
  );
};
