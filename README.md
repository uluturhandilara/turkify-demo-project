# Turkify Demo Project 🚀

<img width="1457" height="828" alt="Ekran Resmi 2025-11-05 18 07 42" src="https://github.com/user-attachments/assets/4617a007-5762-4de0-88a8-1043a4cebd76" />
<img width="1457" height="828" alt="Ekran Resmi 2025-11-05 18 07 49" src="https://github.com/user-attachments/assets/ae7ad00f-457b-414e-a9cb-0013071ab7cc" />

Bu proje, [turkify](https://www.npmjs.com/package/turkify) npm paketinin tüm özelliklerini interaktif olarak gösteren bir demo uygulamasıdır.

## 🎯 Özellikler

Turkify paketi şu işlevleri sağlar:

- ✅ **Türkçe karakterleri Latin karşılıklarına çevirme** (İ→I, Ş→S, Ç→C, vb.)
- ✅ **Türkçe locale ile lowercase/uppercase dönüşümleri**
- ✅ **URL/Slug oluşturma** (Türkçe karakter desteği ile)

## 🛠️ Teknolojiler

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Turkify** - Türkçe karakter normalizasyon paketi

## 📦 Kurulum

```bash
npm install
```

## 🚀 Geliştirme

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

## 📋 Demo'da Gösterilen Fonksiyonlar

### 1. `normalizeTurkish(text: string)`

Türkçe karakterleri Latin karşılıklarına çevirir.

**Örnek:** `İstanbul` → `Istanbul`

### 2. `toTurkishLowerCase(text: string)`

Türkçe locale ile lowercase'e çevirir.

**Örnek:** `İSTANBUL` → `istanbul`

### 3. `toTurkishUpperCase(text: string)`

Türkçe locale ile uppercase'e çevirir.

**Örnek:** `istanbul` → `İSTANBUL`

### 4. `normalizeTurkishLowercase(text: string)`

Türkçe karakterleri normalize eder ve lowercase'e çevirir.

**Örnek:** `İstanbul` → `istanbul`

### 5. `slugify(text: string, options?: SlugifyOptions)`

Türkçe karakterleri destekleyen slug/URL oluşturur.

**Örnek:** `İstanbul Şişli` → `istanbul-sisli`

## 🔗 Bağlantılar

- **npm paketi:** https://www.npmjs.com/package/turkify
- **GitHub repository:** https://github.com/uluturhandilara/turkify

## 📝 Build

Production build için:

```bash
npm run build
```

Build edilmiş dosyaları önizlemek için:

```bash
npm run preview
```
