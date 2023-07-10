import FeaturedCard from "../Cards/FeaturedCard";

function FeaturedSection({ sectionTitle }: { sectionTitle: string }) {
  return (
    <section className="flex flex-col mx-20">
      <div className="mb-10">
        <h1 className="text-5xl font-semibold">{sectionTitle}</h1>
      </div>
      <div className="flex place-content-center gap-8">
        <FeaturedCard />
      </div>
    </section>
  );
}

export default FeaturedSection;
