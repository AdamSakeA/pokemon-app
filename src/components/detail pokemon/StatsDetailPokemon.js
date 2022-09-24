import '../../styles/DetailPokemon.scss'
export default function StatsDetailPokemon({ stats }) {
  return (
    <div className="effect-container">
      <h1 className="sub-title">STATS</h1>
      <div>
        {stats.map((item, i) => {
          return (
            <div className="stats-effect-contents" key={i}>
              <h2>{item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1)}</h2>
              <p>{item.base_stat}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
