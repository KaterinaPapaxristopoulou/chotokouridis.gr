type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return (
    <section className="project-detail">
      <p className="eyebrow">Project</p>
      <h1>{slug.replaceAll("-", " ")}</h1>
      <dl className="project-detail__meta">
        <div>
          <dt>Location</dt>
          <dd>Katerini</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>Study</dd>
        </div>
        <div>
          <dt>Services</dt>
          <dd>Architecture / Documentation</dd>
        </div>
      </dl>
      <div className="project-detail__image" />
    </section>
  );
}
