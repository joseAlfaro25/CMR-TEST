import { promises as fs } from 'fs';
import path from 'path';
import type { RawContact } from '@/types/contact';
import { normalizeContact } from './normalize';
import { findDuplicates, applyCompliance } from './rules';
export async function getContacts() { await new Promise(resolve => setTimeout(resolve, 260)); const file = await fs.readFile(path.join(process.cwd(), 'src/data/contactos.json'), 'utf8'); const raw = JSON.parse(file) as { contacts: RawContact[] }; const contacts = raw.contacts.map(normalizeContact); return contacts.map(contact => applyCompliance({ ...contact, duplicateOf: findDuplicates(contact, contacts) })); }
