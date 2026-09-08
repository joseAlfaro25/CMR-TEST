import Link from 'next/link';
import ContactsList from '@/components/contacts-list';
export default function ContactsPage() { return <main className="shell"><header className="topbar"><Link href="/contacts" className="brand"><span className="brand-mark">K</span>kontaktu</Link><span className="topbar-context">CRM / Contactos</span></header><section className="page-heading"><div><p className="eyebrow">GESTIÓN DE LEADS</p><h1>Contactos</h1><p className="muted">La puerta de entrada a cada conversación.</p></div></section><ContactsList /></main>; }
