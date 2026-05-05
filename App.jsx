import React, { useState } from 'react';
import { 
  Github, 
  Cloud, 
  Rocket, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Settings, 
  FileCode2, 
  LayoutDashboard,
  RefreshCw,
  Globe,
  Info
} from 'lucide-react';

const steps = [
  {
    id: 'persiapan',
    title: 'Persiapan Awal',
    icon: CheckCircle2,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-600 leading-relaxed">
          Sebelum kita mulai meluncurkan website Anda ke internet, ada 3 hal utama yang perlu Anda siapkan. Semuanya <strong>100% Gratis!</strong>
        </p>
        
        <div className="grid gap-4 md:grid-cols-3 mt-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <Github className="w-8 h-8 text-slate-800 mb-3" />
            <h3 className="font-bold text-slate-800 mb-2">1. Akun GitHub</h3>
            <p className="text-sm text-slate-600">Tempat menyimpan kode website Anda. Daftar di github.com jika belum punya.</p>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <Cloud className="w-8 h-8 text-orange-500 mb-3" />
            <h3 className="font-bold text-slate-800 mb-2">2. Akun Cloudflare</h3>
            <p className="text-sm text-slate-600">Layanan server untuk mengonlinekan web. Daftar di dash.cloudflare.com.</p>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <FileCode2 className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-bold text-slate-800 mb-2">3. Kode Website</h3>
            <p className="text-sm text-slate-600">Pastikan kode Anda sudah di-push (diunggah) ke repository GitHub Anda.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'cek-kode',
    title: 'Cek Struktur Kode',
    icon: FileCode2,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-600 leading-relaxed">
          Cloudflare butuh file utama untuk ditampilkan. Pastikan struktur folder Anda sudah benar di GitHub.
        </p>

        <div className="bg-slate-800 rounded-xl p-6 text-slate-300 font-mono text-sm shadow-inner">
          <p className="text-green-400 mb-2">✓ Struktur yang BENAR (HTML Biasa):</p>
          <ul className="list-none space-y-1 ml-4 border-l-2 border-slate-600 pl-4">
            <li>📁 nama-repository/</li>
            <li className="text-white bg-slate-700/50 inline-block px-2 rounded">📄 index.html  ← (Harus di luar)</li>
            <li>📄 style.css</li>
            <li>📁 images/</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl mt-6 flex gap-4">
          <Info className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <p className="text-sm text-blue-800">
            <strong>Catatan untuk Framework:</strong> Jika Anda memakai React, Vite, Next.js, atau Vue, pastikan kode Anda tidak ada error saat dijalankan di komputer lokal sebelum di-push ke GitHub.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'dashboard-cf',
    title: 'Masuk Dashboard CF',
    icon: LayoutDashboard,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-600 leading-relaxed">
          Sekarang kita akan memulai proses pembuatan aplikasi di Cloudflare.
        </p>

        <ol className="list-decimal list-inside space-y-4 text-slate-700 mt-6">
          <li className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
            Buka dan login ke <a href="https://dash.cloudflare.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">dash.cloudflare.com</a>
          </li>
          <li className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
            Di menu sebelah kiri, cari dan klik menu <strong>"Workers & Pages"</strong>.
          </li>
          <li className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
            Klik tombol biru bertuliskan <span className="inline-block px-2 py-1 bg-blue-600 text-white rounded text-xs font-bold mx-1">Create application</span>
          </li>
          <li className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
            Di halaman selanjutnya, pilih tab <strong>"Pages"</strong> (jangan pilih Workers).
          </li>
          <li className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
            Klik tombol <span className="inline-block px-2 py-1 bg-white border border-slate-300 rounded text-xs font-bold mx-1">Connect to Git</span>
          </li>
        </ol>
      </div>
    )
  },
  {
    id: 'hubungkan-git',
    title: 'Hubungkan GitHub',
    icon: Github,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-600 leading-relaxed">
          Cloudflare perlu izin untuk membaca kode Anda di GitHub agar bisa mengonlinekannya.
        </p>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">1</div>
              <p className="text-slate-700">Pilih tab <strong>GitHub</strong>, lalu klik tombol "Connect to GitHub".</p>
            </div>
            <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">2</div>
              <p className="text-slate-700">Jika diminta, masukkan password/konfirmasi login GitHub Anda.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">3</div>
              <div>
                <p className="text-slate-700">Di layar "Install & Authorize", pilih akses yang diinginkan:</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> <strong>All repositories:</strong> Cloudflare bisa akses semua repo Anda.</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> <strong>Only select repositories:</strong> (Disarankan) Pilih hanya repo website yang ingin dideploy.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-4 border-t border-slate-200">
            <p className="text-sm text-slate-500 text-center">Terakhir, klik tombol <strong>"Install & Authorize"</strong>.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'konfigurasi',
    title: 'Konfigurasi Build',
    icon: Settings,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-600 leading-relaxed">
          Ini adalah langkah penentuan. Beri tahu Cloudflare jenis website apa yang Anda buat.
        </p>

        <p className="text-slate-700">Pilih repository Anda, lalu klik <strong>"Begin setup"</strong>. Anda akan melihat bagian <em>Build settings</em>. Sesuaikan dengan proyek Anda:</p>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white border-2 border-orange-100 rounded-xl p-5 shadow-sm hover:border-orange-300 transition-colors">
            <h4 className="font-bold text-orange-600 mb-4 flex items-center gap-2">
              <FileCode2 className="w-5 h-5"/> Web HTML Biasa
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><strong>Framework preset:</strong> <span className="bg-slate-100 px-2 py-1 rounded text-slate-800">None</span></li>
              <li><strong>Build command:</strong> <em>(Kosongkan)</em></li>
              <li><strong>Build output directory:</strong> <em>(Kosongkan)</em></li>
            </ul>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-xl p-5 shadow-sm hover:border-blue-300 transition-colors">
            <h4 className="font-bold text-blue-600 mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5"/> Web Framework (Vite/React/Next)
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><strong>Framework preset:</strong> <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">Pilih Framework Anda</span></li>
              <li className="text-xs text-slate-500 italic mt-2">
                *Cloudflare akan otomatis mengisi Build command dan Output directory. Biarkan default jika Anda tidak merubah konfigurasi build di kode Anda.
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'deploy',
    title: 'Deploy & Selesai!',
    icon: Globe,
    content: (
      <div className="space-y-6">
        <div className="text-center py-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
            <Rocket className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">Website Anda Sedang Meluncur!</h3>
          <p className="text-slate-600 mt-2">Langkah terakhir untuk mengonlinekan karya Anda.</p>
        </div>

        <ul className="space-y-4 text-slate-700 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <li className="flex gap-3">
            <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-green-500" /></div>
            <p>Klik tombol biru <strong>"Save and Deploy"</strong> di bagian bawah halaman.</p>
          </li>
          <li className="flex gap-3">
            <div className="mt-1"><RefreshCw className="w-5 h-5 text-blue-500 animate-spin" /></div>
            <p>Cloudflare sedang bekerja. Anda akan melihat layar terminal yang memproses kode Anda. Tunggu sekitar 1-3 menit.</p>
          </li>
          <li className="flex gap-3">
            <div className="mt-1"><Globe className="w-5 h-5 text-orange-500" /></div>
            <p>Jika berhasil, akan muncul tulisan <strong>"Success!"</strong> dan link website Anda (contoh: <code>nama-proyek.pages.dev</code>).</p>
          </li>
        </ul>

        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 p-5 rounded-xl mt-6">
          <h4 className="font-bold text-orange-800 flex items-center gap-2 mb-2">
            <RefreshCw className="w-5 h-5"/> Keajaiban Otomatisasi (CI/CD)
          </h4>
          <p className="text-sm text-orange-900 leading-relaxed">
            Kedepannya, Anda <strong>tidak perlu</strong> membuka Cloudflare lagi. Cukup ubah kode di komputer, lalu <code>git push</code> ke GitHub. Cloudflare akan otomatis mendeteksi perubahan dan mengupdate website Anda dalam beberapa menit!
          </p>
        </div>
      </div>
    )
  }
];

export default function App() {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    if (activeStep < steps.length - 1) setActiveStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (activeStep > 0) setActiveStep(prev => prev - 1);
  };

  const CurrentIcon = steps[activeStep].icon;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-lg">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight hidden sm:block">
              DeployMaster
            </h1>
          </div>
          <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
            <span>GitHub</span>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <span>Cloudflare Pages</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="md:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4 ml-3">Daftar Langkah</h2>
            <nav className="space-y-1">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isPast = index < activeStep;
                
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 ${
                      isActive 
                        ? 'bg-orange-100 text-orange-700 shadow-sm font-semibold' 
                        : isPast
                          ? 'text-slate-600 hover:bg-slate-100'
                          : 'text-slate-400 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`p-1 rounded-full ${isActive ? 'bg-orange-200 text-orange-600' : isPast ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                      {isPast && !isActive ? <CheckCircle2 className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                    </div>
                    <span className="text-sm">{step.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Step Content Area */}
        <div className="flex-1 flex flex-col max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex-1 flex flex-col">
            
            {/* Content Header */}
            <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50 flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shadow-inner">
                <CurrentIcon className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <span className="text-orange-600 font-bold text-sm tracking-wide uppercase">
                  Langkah {activeStep === 0 ? 'Awal' : activeStep}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-800 mt-1">
                  {steps[activeStep].title}
                </h2>
              </div>
            </div>

            {/* Actual Content */}
            <div className="p-6 md:p-8 flex-1">
              {steps[activeStep].content}
            </div>

            {/* Footer / Controls */}
            <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={prevStep}
                disabled={activeStep === 0}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                  activeStep === 0 
                    ? 'text-slate-300 cursor-not-allowed' 
                    : 'text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 hover:text-slate-800 shadow-sm'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Sebelumnya
              </button>
              
              <div className="flex gap-1">
                {steps.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeStep ? 'w-6 bg-orange-500' : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextStep}
                disabled={activeStep === steps.length - 1}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm ${
                  activeStep === steps.length - 1
                    ? 'bg-green-500 text-white shadow-green-500/20' // visually indicate completion
                    : 'bg-slate-800 text-white hover:bg-slate-700 hover:shadow-md'
                }`}
              >
                {activeStep === steps.length - 1 ? 'Selesai!' : 'Selanjutnya'}
                {activeStep !== steps.length - 1 && <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
            
          </div>
        </div>

      </main>
    </div>
  );
}
