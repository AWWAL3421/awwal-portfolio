'use client';
import { useState } from 'react';

type TabType = 'lexicon' | 'rulings' | 'topics' | 'chapters' | 'juzs';

export default function LexiconShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>('lexicon');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');
  const [latency, setLatency] = useState(0);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    const startTime = performance.now();

    try {
      let endpoint = '';
      // Route the query through the Next.js proxy to bypass HTTPS/HTTP mixed content errors on Vercel
      if (activeTab === 'lexicon') endpoint = `/api/proxy/v1/roots/lookup/${query}`;
      if (activeTab === 'rulings') endpoint = `/api/proxy/v1/rulings/${query}`;
      if (activeTab === 'topics') endpoint = `/api/proxy/v1/critical-topics/${query}`;
      if (activeTab === 'chapters') endpoint = `/api/proxy/v1/chapters/${query}`;
      if (activeTab === 'juzs') endpoint = `/api/proxy/v1/juzs/${query}`;

      const res = await fetch(endpoint);
      const data = await res.json();
      
      const endTime = performance.now();
      setLatency(Math.round(endTime - startTime));

      if (!res.ok) throw new Error(data.error || 'Failed to fetch');
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setResult(null);
    setQuery('');
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl shadow-2xl font-sans text-slate-200 overflow-hidden">
      
      {/* Scrollable Tabs */}
      <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950 custom-scrollbar hide-scrollbar">
        {['lexicon', 'rulings', 'topics', 'chapters', 'juzs'].map((tab) => (
          <button 
            key={tab}
            onClick={() => handleTabChange(tab as TabType)} 
            className={`px-5 py-3 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${activeTab === tab ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6">
        <p className="text-sm text-slate-400 mb-4 h-10">
          {activeTab === 'lexicon' && 'Search for an Arabic root or English transliteration (e.g., k-t-b, s-l-m, كتب).'}
          {activeTab === 'rulings' && 'Enter a Surah ID (1-114) to fetch Ayat Al-Ahkam (legal rulings).'}
          {activeTab === 'topics' && 'Enter a Surah ID (1-114) to fetch critical topics and literature matrices.'}
          {activeTab === 'chapters' && 'Enter a Surah ID (1-114) to fetch full chapter metadata and translations.'}
          {activeTab === 'juzs' && 'Enter a Juz ID (1-30) to fetch volume metadata and verse mapping.'}
        </p>

        <form onSubmit={handleSearch} className="flex gap-3 mb-6">
          <input
            type={activeTab === 'lexicon' ? 'text' : 'number'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={activeTab === 'lexicon' ? 'Enter root...' : 'Enter ID (e.g., 1)'}
            className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {loading ? 'Executing...' : 'Query DB'}
          </button>
        </form>

        {error && <div className="p-4 bg-red-900/30 border border-red-800 text-red-300 rounded-lg text-sm">{error}</div>}

        {/* Dynamic Results Display */}
        {result && (
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            <div className="text-right mb-2 border-b border-slate-800 pb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                200 OK | {latency}ms
              </span>
            </div>

            {/* Lexicon Custom UI */}
            {activeTab === 'lexicon' && result.dictionary_entry ? (
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-2xl font-bold text-emerald-400 font-arabic" dir="rtl">{result.dictionary_entry.root_arabic}</h4>
                  <span className="text-xs font-mono text-slate-400 uppercase">{result.dictionary_entry.root_transliteration}</span>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-sm text-slate-300 leading-relaxed">{result.dictionary_entry.core_meaning}</p>
                </div>
              </div>
            ) : (
              /* Raw JSON Output for all other tabs */
              <pre className="text-xs text-emerald-400 bg-slate-950 p-4 rounded-lg overflow-x-auto font-mono border border-slate-800">
                {JSON.stringify(result, null, 2)}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
}