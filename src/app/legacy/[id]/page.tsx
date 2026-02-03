import PersonalityContent from './PersonalityContent';

// Required for static export
export function generateStaticParams() {
  return [
    { id: 'ballal-shetty' },
    { id: 'ballal-raghunath' },
    { id: 'tripurasundari-ballal' },
    { id: 'vijaya-ballal' },
    { id: 'narendra-ballal' },
    { id: 'kavya-ballal' },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PersonalityDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <PersonalityContent personalityId={id} />;
}
