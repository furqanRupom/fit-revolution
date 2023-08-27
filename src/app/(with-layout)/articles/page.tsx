import ArticlesCompo from "@/components/articleCompo/ArticlesCompo";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'fitRevolution | Articles',
  description: 'This is our articles page',
}
const articlePage = () => {
  return (
    <>
      <ArticlesCompo />
    </>
  );
};

export default articlePage;
