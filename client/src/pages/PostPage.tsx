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
  return (
    <div className="w-[500px]">
      <PostHeader />
      <main>
        <ImageSection />
        <UserInfoSection />
        <ProductMainSection />
        <ProductDetailSection />
        <AdvertisementSection />
        <SimiliarProductsSection />
        <NotificationSection />
        <UserProductsSection />
        <AdvertisementSection />
      </main>
      <PostFooter />
    </div>
  );
};
