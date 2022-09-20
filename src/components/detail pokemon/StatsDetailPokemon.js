
export default function StatsDetailPokemon({ stats }) {
  return (
    <div>
      <h1>STATS</h1>
      {stats.map((item, i) => {
        return (
          <div key={i}>
          <h2>{item.stat.name}</h2>
          <p>{item.base_stat}</p>
          </div>
        )
      })}
    </div>
  )
}
