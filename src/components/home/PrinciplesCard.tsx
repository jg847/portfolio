import type { Principle, Testimonial } from "@/content/site";

type PrinciplesCardProps = {
  principles: Principle[];
  testimonial: Testimonial;
};

export function PrinciplesCard({ principles, testimonial }: PrinciplesCardProps) {
  return (
    <section
      aria-label="How I work"
      className="mt-16 grid gap-6 lg:grid-cols-[0.66fr_0.34fr] lg:items-start"
    >
      <div className="card-lg p-7">
        <p className="eyebrow">How I work</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="card-cream p-5">
              <h2 className="type-h3 text-ink">{principle.title}</h2>
              <p className="mt-3 text-sm leading-6 text-caption">{principle.body}</p>
            </div>
          ))}
        </div>
      </div>
      <aside className="card-accent p-7">
        <p
          className="text-[0.78rem] uppercase tracking-[0.24em] font-medium"
          style={{ color: "#f3d6c5" }}
        >
          {testimonial.eyebrow}
        </p>
        <p className="mt-5 type-h2 leading-tight">
          {`“${testimonial.quote}”`}
        </p>
        <p
          className="mt-6 text-sm uppercase tracking-[0.22em] font-medium"
          style={{ color: "#f4dacb" }}
        >
          {testimonial.attribution}
        </p>
        <p
          className="mt-2 text-sm leading-6"
          style={{ color: "#fff1e7" }}
        >
          {testimonial.role}
        </p>
      </aside>
    </section>
  );
}