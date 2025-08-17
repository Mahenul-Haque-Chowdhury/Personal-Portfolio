export default function TechStack() {
  type Item = { icon: string; label: string; colored?: boolean; extra?: string };
  const frontEnd: Item[] = [
    { icon: "devicon-html5-plain", label: "HTML5" },
    { icon: "devicon-css3-plain", label: "CSS3" },
    { icon: "devicon-javascript-plain", label: "JavaScript" },
    { icon: "devicon-react-original", label: "React" },
    { icon: "devicon-typescript-plain", label: "TypeScript" },
    { icon: "devicon-tailwindcss-plain", label: "Tailwind" },
  ];
  const backEnd: Item[] = [
    { icon: "devicon-php-plain", label: "PHP" },
    { icon: "devicon-laravel-plain", label: "Laravel" },
    { icon: "devicon-mysql-plain", label: "MySQL" },
    { icon: "devicon-postgresql-plain", label: "PostgreSQL" },
    { icon: "devicon-python-plain", label: "Python" },
    { icon: "devicon-cplusplus-plain", label: "C++" },
  ];
  const devops: Item[] = [
    { icon: "devicon-github-original", label: "GitHub", colored: false, extra: "text-white" },
    { icon: "devicon-wordpress-plain", label: "WordPress", colored: false, extra: "text-white" },
    { icon: "devicon-git-plain", label: "Git" },
    { icon: "devicon-docker-plain", label: "Docker" },
    { icon: "devicon-gitlab-plain", label: "GitLab" },
    { icon: "devicon-bitbucket-original", label: "Bitbucket" },
    { icon: "devicon-postman-plain", label: "Postman" },
    { icon: "devicon-openstack-original", label: "OpenStack" },
  ];

  const Block = ({ title, items }: { title: string; items: Item[] }) => (
    <div className="p-2 md:p-4">
      <h3 className="text-xl font-semibold text-white mb-6 text-center md:text-left">{title}</h3>
      <div
        className={
          // For DevOps & Tools, use a column-flow grid with fixed auto column width so each column aligns vertically.
          title === "DevOps & Tools"
            ? "w-full flex flex-wrap items-center gap-y-6 gap-x-10 justify-center md:grid md:grid-rows-2 md:grid-flow-col md:auto-cols-[84px] md:gap-x-10 md:gap-y-6 md:justify-start md:place-items-center"
            : "w-full flex flex-wrap items-center gap-y-6 gap-x-10 justify-center md:justify-between"
        }
      >
        {items.map((it) => (
          <div
            key={it.label}
            className={`group relative flex flex-col items-center ${
              title === "DevOps & Tools" ? "w-[68px] md:w-[84px]" : ""
            }`}
            aria-label={it.label}
            tabIndex={0}
          >
            <i
              className={`${it.icon} ${it.colored === false ? "" : "colored"} ${it.extra ?? ""} text-[48px] md:text-[56px] transition-transform duration-200 ease-out group-hover:scale-110 group-focus-visible:scale-110`}
              aria-hidden
            />
            <span
              className="pointer-events-none absolute top-full mt-2 px-2 py-1 rounded bg-black/80 text-white/95 text-[11px] border border-white/10 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 whitespace-nowrap"
              role="tooltip"
            >
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative z-10 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-[5%]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 gradient-text">Technologies I use</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <Block title="Frontend" items={frontEnd} />
          <Block title="Backend" items={backEnd} />
          <Block title="DevOps & Tools" items={devops} />
        </div>
      </div>
    </section>
  );
}
