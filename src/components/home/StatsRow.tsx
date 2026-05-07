import type { Stat } from "@/content/site";

type StatsRowProps = {
  stats: Stat[];
};

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <section
      aria-label="Quick stats"
      className="mt-10 grid gap-5 lg:grid-cols-3"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="card px-6 py-6"
        >
          <p className="stat-number">{stat.value}</p>
          <p className="mt-3 text-sm leading-6 text-caption">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}