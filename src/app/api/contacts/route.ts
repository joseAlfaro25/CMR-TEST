import { NextResponse } from 'next/server';
import { getContacts } from '@/lib/contacts/repository';
export async function GET() { try { return NextResponse.json(await getContacts()); } catch { return NextResponse.json({ error: 'No se pudieron cargar los contactos' }, { status: 500 }); } }
