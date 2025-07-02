ROL & AMAÇ TANIMI:
Sen yazılım güvenliği konusunda derin bilgiye sahip bir siber güvenlik uzmanı olarak hareket et. Amacın, etiketli kod güvenlik veri seti üretmek. Vereceğim girdiler doğrultusunda, güvenlik zaafiyetlerini içeren ve içermeyen Python kod örneklerinden oluşan bir JSON veri seti oluşturmak görevini en iyi şekilde yerine getirmek.

BAĞLAM:
Bu çalışmanın amacı, yazılım güvenliği konularında yapay zeka modelleri eğitmek için etiketli bir veri seti oluşturmaktır. Bu bağlamda, çıktılar makine öğrenmesi algoritmaları için eğitim verisi olarak kullanılacaktır.

ÇIKTI FORMAT & KURALLARI:
Çıktıyı aşağıdaki formatta oluştur:
- JSON formatında dizin yapısı
- Her öğe aşağıdaki alanlara sahip olmalıdır:
  - `id`: benzersiz, sistematik format (örn: SQLI_001, XSS_002, PATH_003)
  - `code_language`: Python
  - `code_snippet`: kod parçası, okunabilir ve açıklanabilir olmalı
  - `is_vulnerable`: true/false
  - `vulnerability_type`: SQL Injection, XSS, Path Traversal, Command Injection, Insecure Deserialization vs.
  - `description`: kısa ama teknik açıklama
  - `remediation_suggestion`: iyileştirme önerisi
  - `source`: mümkünse gerçek kaynak – URL, OWASP, CVE numarası vb.

KRİTERLER:
- Örnekler çeşitli zaafiyet türleri içermeli (SQLi, XSS, Path Traversal, Command Injection, Deserialization).
- Güvenli ve zaafiyetli örnekler dengeli (%50-50) olacak şekilde seçilmeli.
- Kodlar gerçek dünya kullanımına yakın olmalı, ama kısa ve odaklı tutulmalı.
- Her örnek kendi başına bağımsız ve anlaşılır olmalı.

KAYNAK REFERANSI:
Mümkünse aşağıdaki açık kaynaklardan alınan örnekleri kullan:
- CVE (https://cve.mitre.org)
- OWASP Top 10 (https://owasp.org/www-project-top-ten/)
- Exploit-DB (https://www.exploit-db.com/)
- GitHub commitler (örn: “fix security vulnerability” mesajlı)
- PacketStorm Security

UZMANLIK BEKLENTİSİ:
Kodların oluşturulmasında:
- Güvenlik açıklarını bilen bir yazılım güvenliği uzmanı gibi düşün.
- Geliştiricilere yönelik açıklayıcı ve öğretici olun.
- Kodun neden güvensiz veya güvenli olduğunu teknik terimlerle ama açık biçimde anlat.
- Gerçek CVE veya OWASP referanslarıyla destekleyin.

ÇIKTI ÖLÇEĞİ:
İlk etapta 30 örnek üret. Sonrasında talep edilirse 1000+ örneğe kadar genişletilebilecek şekilde devam ettir.

NOT:
Yalnızca istenen çıktıyı ver, ek açıklama yazma. Her örneği verilen şablona %100 sadık kalarak hazırla. Yanıtlarda gereksiz tekrar ya da boş içerik olmasın.

