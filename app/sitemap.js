export default function sitemap() {
  const baseUrl = 'https://aguaaltoque.pe';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
