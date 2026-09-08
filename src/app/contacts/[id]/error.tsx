'use client';
export default function ErrorState({ reset }: { reset: () => void }) { return <main className="shell"><div className="state-card"><h1>Algo salió mal</h1><p>No pudimos cargar esta ficha.</p><button className="button" onClick={reset}>Reintentar</button></div></main>; }
