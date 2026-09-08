import ContactDetail from '@/components/contact-detail';
export default function ContactPage({ params }: { params: { id: string } }) { return <ContactDetail id={params.id} />; }
