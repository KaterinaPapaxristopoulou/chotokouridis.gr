import { client } from "@/sanity/client";

// ── Types ────────────────────────────────────────────────────────────────────

export type SanityImage = {
  asset: { _id: string; url: string };
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export type ProjectListItem = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  location: string;
  year: number;
  status: string;
  image: SanityImage | null;
};

export type ProjectDetail = ProjectListItem & {
  services: string[];
  description: Array<{ _type: string; [key: string]: unknown }>;
  technicalNotes: Array<{ _type: string; [key: string]: unknown }>;
  gallery: SanityImage[];
};

export type ServiceItem = {
  _id: string;
  title: string;
  slug: { current: string };
  summary: string;
};

// ── Queries ──────────────────────────────────────────────────────────────────

const PROJECT_LIST_FIELDS = `
  _id,
  title,
  slug,
  category,
  location,
  year,
  status,
  "image": mainImage { asset->, hotspot, crop }
`;

export async function getAllProjects(): Promise<ProjectListItem[]> {
  return client.fetch(
    `*[_type == "project"] | order(year desc) { ${PROJECT_LIST_FIELDS} }`,
  );
}

export async function getFeaturedProjects(): Promise<ProjectListItem[]> {
  return client.fetch(
    `*[_type == "project" && featured == true] | order(year desc)[0...3] { ${PROJECT_LIST_FIELDS} }`,
  );
}

export async function getProjectBySlug(
  slug: string,
): Promise<ProjectDetail | null> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      ${PROJECT_LIST_FIELDS},
      services,
      description,
      technicalNotes,
      "gallery": gallery[] { asset->, hotspot, crop }
    }`,
    { slug },
  );
}

export async function getAllServices(): Promise<ServiceItem[]> {
  return client.fetch(
    `*[_type == "service"] | order(_createdAt asc) { _id, title, slug, summary }`,
  );
}
