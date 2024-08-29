import { StakeArt } from "@/assets/logo";

const IntroPage = () => {
  return (
    <main className="flex flex-col min-h-screen  items-center">
      <img src={StakeArt} alt="" className="size-40 mt-auto" />
      <div className="my-loader mt-auto pb-20"></div>
    </main>
  );
};

export default IntroPage;
