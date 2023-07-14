import TrendingCard from "../Cards/TrendingCard"

function TrendingSection() {
  return (
    <section className="flex flex-col">
      <div className="mb-10">
        <h1 className="text-5xl font-semibold">Featured Products</h1>
      </div>
      <div className= "grid grid-flow-col grid-cols-4 grid-row-auto place-content-center gap-8">
        <TrendingCard />
      </div>
    </section>
  )
}

export default TrendingSection