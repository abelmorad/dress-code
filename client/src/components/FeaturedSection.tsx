import FeaturedCard from "./FeaturedCard";

function FeaturedSection() {

  return (
    <section className="flex flex-col mx-20">
      <div className="mb-10">
        <h1 className="text-5xl font-medium">Featured Products</h1>
      </div>
      <div className="flex place-content-center gap-8">
        <FeaturedCard />
      </div>
    </section>
  );
}

export default FeaturedSection;
