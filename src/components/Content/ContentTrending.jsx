import ContentCard from "./ContentCard";

const ContentTrending = () => {
  return <div className="w-full  rounded flex gap-5 flex-col">
    <div>
      <h1 className="text-3xl">Trending</h1>
      <h3 className="text-slate-500">Baseado nas suas preferências</h3>
    </div>
    <ContentCard />
  </div>;
};

export default ContentTrending;
