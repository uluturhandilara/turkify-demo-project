import { useState } from "react";
import {
  normalizeTurkish,
  toTurkishLowerCase,
  toTurkishUpperCase,
  normalizeTurkishLowercase,
  slugify,
} from "turkify";

function App() {
  const [input, setInput] = useState("İstanbul Şişli Çankaya Ümraniye");

  const examples = [
    "İstanbul Şişli Çankaya Ümraniye",
    "İSTANBUL",
    "istanbul",
    "Çankaya/Ümraniye",
    "Örnek Metin: Şişli'de Yaşıyorum",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl font-bold mb-4">Turkify Demo</h1>
          <p className="text-xl opacity-90">
            Türkçe karakter normalizasyon paketi - Tüm özelliklerini keşfedin
          </p>
          <a
            href="https://www.npmjs.com/package/turkify"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            npm i turkify
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20">
          <label className="block text-white font-semibold mb-3 text-lg">
            Test Metninizi Girin:
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
            rows={3}
            placeholder="Türkçe karakterler içeren bir metin girin..."
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-white/80 text-sm">Hızlı örnekler:</span>
            {examples.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setInput(example)}
                className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded-lg transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DemoCard
            title="normalizeTurkish"
            description="Türkçe karakterleri Latin karşılıklarına çevirir"
            result={normalizeTurkish(input)}
            examples={[
              { input: "İstanbul", output: "Istanbul" },
              { input: "Şişli", output: "Sisli" },
              { input: "Çankaya", output: "Cankaya" },
            ]}
          />

          <DemoCard
            title="toTurkishLowerCase"
            description="Türkçe locale ile lowercase'e çevirir"
            result={toTurkishLowerCase(input)}
            examples={[
              { input: "İSTANBUL", output: "istanbul" },
              { input: "İ", output: "i" },
              { input: "ŞİŞLİ", output: "şişli" },
            ]}
          />

          <DemoCard
            title="toTurkishUpperCase"
            description="Türkçe locale ile uppercase'e çevirir"
            result={toTurkishUpperCase(input)}
            examples={[
              { input: "istanbul", output: "İSTANBUL" },
              { input: "ı", output: "I" },
              { input: "şişli", output: "ŞİŞLİ" },
            ]}
          />

          <DemoCard
            title="normalizeTurkishLowercase"
            description="Normalize eder ve lowercase'e çevirir"
            result={normalizeTurkishLowercase(input)}
            examples={[
              { input: "İstanbul", output: "istanbul" },
              { input: "ŞİŞLİ", output: "sisli" },
              { input: "ÇANKAYA", output: "cankaya" },
            ]}
          />

          <div className="md:col-span-2">
            <DemoCard
              title="slugify"
              description="Türkçe karakterleri destekleyen slug/URL oluşturur"
              result={slugify(input)}
              examples={[
                { input: "İstanbul Şişli", output: "istanbul-sisli" },
                { input: "Çankaya/Ümraniye", output: "cankaya-umraniye" },
                {
                  input: "Örnek Metin: Şişli'de Yaşıyorum",
                  output: "ornek-metin-sisli-de-yasiyorum",
                },
              ]}
              additionalOptions={
                <div className="mt-4 space-y-2">
                  <div>
                    <span className="text-white/80 text-sm">
                      Özel separator:
                    </span>
                    <div className="mt-2 flex gap-2">
                      {["-", "_", ".", " "].map((sep) => (
                        <button
                          key={sep}
                          className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded transition-colors"
                          onClick={() => {
                            const result = slugify(input, { separator: sep });
                            navigator.clipboard.writeText(result);
                          }}
                        >
                          {slugify(input, { separator: sep })}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        <div className="mt-12 text-center text-white/80 text-sm">
          <p>
            <a
              href="https://github.com/uluturhandilara/turkify"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              GitHub
            </a>{" "}
            •{" "}
            <a
              href="https://www.npmjs.com/package/turkify"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              npm
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

interface DemoCardProps {
  title: string;
  description: string;
  result: string;
  examples: Array<{ input: string; output: string }>;
  additionalOptions?: React.ReactNode;
}

function DemoCard({
  title,
  description,
  result,
  examples,
  additionalOptions,
}: DemoCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm mb-4">{description}</p>

      <div className="bg-white/5 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/60 text-xs font-semibold uppercase tracking-wide">
            Sonuç:
          </span>
          <button
            onClick={handleCopy}
            className="text-white/60 hover:text-white text-sm transition-colors"
          >
            {copied ? "✓ Kopyalandı!" : "📋 Kopyala"}
          </button>
        </div>
        <p className="text-white font-mono text-lg break-all">{result}</p>
      </div>

      <div className="space-y-2">
        <span className="text-white/60 text-xs font-semibold uppercase tracking-wide">
          Örnekler:
        </span>
        {examples.map((example, idx) => (
          <div key={idx} className="bg-white/5 rounded p-2 text-sm font-mono">
            <span className="text-white/60">{example.input}</span>
            <span className="text-white/40 mx-2">→</span>
            <span className="text-white">{example.output}</span>
          </div>
        ))}
      </div>

      {additionalOptions}
    </div>
  );
}

export default App;
