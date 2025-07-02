# Gençtek AI Web Sitesi

Bu dizin, Gençtek AI projesinin resmi web sitesini içerir. Web sitesi, projenin amacını, çalışma prensiplerini, mimarisini ve faydalarını interaktif bir şekilde sunar.

## 📁 Dosya Yapısı

```
├── index.html          # Ana web sayfası
├── styles.css          # CSS stilleri ve responsive tasarım
├── script.js           # JavaScript etkileşim ve animasyonlar
├── README.md          # Bu dokümantasyon
├── Prompt.md          # Veri üretimi için prompt şablonları
├── dataset.json       # Örnek veri seti
└── sample.md          # Örnek veri istekleri
```

## 🚀 Web Sitesini Çalıştırma

### Yerel Geliştirme Sunucusu

1. **Python HTTP Sunucusu (Önerilen):**
   ```bash
   cd /path/to/AI-workspace
   python3 -m http.server 8000
   ```
   Tarayıcıda `http://localhost:8000` adresine gidin.

2. **Node.js HTTP Sunucusu:**
   ```bash
   npx http-server -p 8000
   ```

3. **PHP Geliştirme Sunucusu:**
   ```bash
   php -S localhost:8000
   ```

### Doğrudan Dosya Açma

Web sitesi statik HTML olduğu için tarayıcıda `index.html` dosyasını doğrudan açabilirsiniz, ancak bazı özellikler (örneğin yazı tipleri) yerel sunucu kullanımını gerektirebilir.

## 🎨 Özellikler

### 📱 Responsive Tasarım
- **Mobil Uyumlu:** 375px ve üzeri tüm ekran boyutları
- **Tablet Uyumlu:** iPad ve benzeri cihazlar
- **Masaüstü Uyumlu:** 1200px ve üzeri geniş ekranlar

### 🎯 İnteraktif Bileşenler
- **Navigasyon Menüsü:** Smooth scrolling ile bölümler arası geçiş
- **Demo Sekmeleri:** SQL Injection, XSS, Command Injection örnekleri
- **Kod Kopyalama:** Kod örneklerini tek tıkla kopyalama
- **Animasyonlar:** Sayfa scroll'unda element animasyonları

### 🔧 Teknik Detaylar
- **Vanilla JavaScript:** Framework bağımlılığı yok
- **Modern CSS:** Flexbox, Grid, CSS Variables
- **Web Fontları:** Google Fonts (Inter)
- **İkonlar:** Font Awesome 6.0
- **Performans:** Optimize edilmiş resimler ve CSS

## 📋 Bölümler

1. **Ana Sayfa (Hero):** Proje tanıtımı ve temel değer önerisi
2. **Hakkında:** Proje amacı ve temel faydalar
3. **Nasıl Çalışır:** Sistemin çalışma prensibi
4. **Mimari:** 4 aşamalı proje mimarisi
5. **Faydalar:** 6 ana fayda kartı
6. **Demo:** Canlı kod analizi örnekleri
7. **Teknolojiler:** Kullanılan teknoloji stack'i
8. **Footer:** İletişim bilgileri ve linkler

## 🛠️ Geliştirme

### CSS Değişiklikleri
`styles.css` dosyasında CSS değişkenleri kullanarak kolay tema değişiklikleri yapabilirsiniz:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #f093fb;
  --text-color: #333;
  --background-color: #f8fafc;
}
```

### JavaScript Özelliklikleri
`script.js` dosyası şu özellikleri içerir:
- Mobil navigation toggle
- Smooth scrolling
- Tab sistemi
- Intersection Observer animasyonları
- Kod kopyalama fonksiyonu

### Yeni Bölüm Ekleme

1. `index.html`'e yeni section ekleyin
2. `styles.css`'e gerekli stilleri ekleyin
3. Gerekirse `script.js`'e interaktif özellikler ekleyin
4. Navigation menüsünü güncelleyin

## 📊 Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Mobile Friendly:** ✅
- **SEO Optimized:** ✅

## 🔗 Harici Bağımlılıklar

- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [Font Awesome 6.0](https://fontawesome.com/)

## 📝 İçerik Güncelleme

Web sitesindeki içeriği güncellemek için:

1. **Metin İçeriği:** `index.html` dosyasındaki ilgili bölümleri düzenleyin
2. **Kod Örnekleri:** Demo bölümündeki code snippet'leri güncelleyin
3. **Renkler/Tema:** `styles.css` dosyasındaki CSS değişkenlerini düzenleyin
4. **Animasyonlar:** `script.js` dosyasındaki timing değerlerini ayarlayın

## 🚀 Deployment

Bu statik web sitesi şu platformlarda host edilebilir:

- **GitHub Pages** (Önerilen)
- **Netlify**
- **Vercel** 
- **Firebase Hosting**
- **AWS S3 + CloudFront**

### GitHub Pages Deployment

```bash
# Repository ayarlarından Pages'i etkinleştirin
# Source: Deploy from a branch
# Branch: main / root
```

## 📞 Destek

Web sitesi ile ilgili sorular için:
- GitHub Issues açabilirsiniz
- Pull Request gönderebilirsiniz
- E-posta: info@genctekai.com

---

**Not:** Bu web sitesi Gençtek AI yapay zeka güvenlik zaafiyet tespit projesi için geliştirilmiştir.