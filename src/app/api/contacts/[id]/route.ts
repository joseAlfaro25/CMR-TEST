import { NextResponse } from 'next/server';
import { getContacts } from '@/lib/contacts/repository';
export async function GET(_: Request, { params }: { params: { id: string } }) { try { const contact = (await getContacts()).find(item => item.id === params.id); return contact ? NextResponse.json(contact) : NextResponse.json({ error: 'Contacto no encontrado' }, { status: 404 }); } catch { return NextResponse.json({ error: 'No se pudo cargar el contacto' }, { status: 500 }); } }
