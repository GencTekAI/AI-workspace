Gençtek AI: Zaafiyet Bulan Yapay Zeka Projesi Çalışma Mantığı

1. Proje Amacı

Gençtek AI olarak, yazılım kodlarındaki güvenlik zaafiyetlerini otomatik olarak tespit edebilen bir yapay zeka (YZ) modeli geliştirmeyi hedefliyoruz. Geleneksel güvenlik denetimi yöntemleri genellikle zaman alıcı ve insan hatasına açık olabilirken, geliştireceğimiz bu yapay zeka, potansiyel güvenlik açıklarını daha hızlı ve verimli bir şekilde belirleyerek yazılım geliştirme süreçlerini daha güvenli hale getirecektir. Bu proje, hem güvenli kod yazılımını teşvik etmeyi hem de mevcut yazılımlardaki zayıf noktaların giderilmesine yardımcı olmayı amaçlamaktadır.

2. Temel Çalışma Prensibi

Projemizin temel çalışma mantığı, yapay zeka modelinin binlerce kod örneğini analiz ederek, hangi kod kalıplarının güvenlik zaafiyeti içerdiğini ve hangilerinin güvenli olduğunu öğrenmesine dayanır. Model, bu öğrenme süreci sonunda, kendisine sunulan yeni ve daha önce görmediği kod parçacıklarını da sınıflandırabilir hale gelecektir: ya "güvenli" ya da "zaafiyetli".

Bu süreç, bir nevi doktorun hastalıkları teşhis etmesi gibidir; doktor (YZ modeli) binlerce hasta vakasını (kod örneğini) inceleyerek hastalık semptomlarını (zaafiyet kalıplarını) öğrenir ve ardından yeni bir hastanın semptomlarına bakarak hastalığı teşhis eder.

3. Mimari ve Adımlar

Zaafiyet bulan yapay zeka projemiz aşağıdaki ana adımlardan oluşacaktır:

3.1. Veri Seti Toplama ve Hazırlığı

Bu aşama, projenin en kritik temelidir. Yapay zeka modelimizin doğru ve güvenilir tahminler yapabilmesi için yüksek kaliteli ve çeşitli bir veri setine ihtiyacımız var.

    Veri Kaynakları:

        Açık Kaynak Güvenlik Veritabanları: CVE (Common Vulnerabilities and Exposures), OWASP Top 10 projeleri, Exploit-DB gibi platformlardan zaafiyet içeren kod örnekleri toplanacaktır.

        Açık Kaynak Projeler: GitHub/GitLab gibi platformlardaki açık kaynak kod depolarında yapılan güvenlik yamaları (patches) incelenerek yama öncesi (zaafiyetli) ve yama sonrası (güvenli) kod parçacıkları elde edilecektir.

        Sentetik Veri Üretimi: Belirli zaafiyet kalıplarını taklit eden veya güvenli kodlara kasıtlı olarak zaafiyet enjekte edilerek sentetik kod örnekleri oluşturulabilir.

    Etiketleme: Toplanan her bir kod parçacığına bir etiket atanacaktır:

        0 (Sıfır): Kod parçacığı güvenlidir ve bilinen bir güvenlik zaafiyeti içermemektedir.

        1 (Bir): Kod parçacığı zaafiyetlidir ve belirli bir güvenlik açığı (örneğin SQL Injection, XSS, Path Traversal vb.) içermektedir.

        Her etiketin yanı sıra, code_language, vulnerability_type, description ve remediation_suggestion gibi ek meta veriler de JSON formatında saklanacaktır.

    Ön İşleme: Ham kod metinleri, yapay zeka modelinin anlayabileceği sayısal bir formata dönüştürülecektir. Bu genellikle tokenizasyon (kodun kelimelere veya sembollere ayrılması) ve embedding (bu tokenlerin sayısal vektörlere dönüştürülmesi) adımlarını içerir.

3.2. Model Eğitimi

Elde edilen etiketli ve ön işlenmiş veri seti, yapay zeka modelimizi eğitmek için kullanılacaktır.

    Model Seçimi: Prototip aşamasında, metin sınıflandırma görevleri için etkili olan Tekrar Eden Sinir Ağları (RNN), özellikle LSTM (Long Short-Term Memory) veya daha gelişmiş Transformer tabanlı modeller (CodeBERT gibi) tercih edilebilir. Bu modeller, kodun yapısındaki ve akışındaki bağımlılıkları öğrenmede başarılıdır.

    Eğitim Süreci:

        Veri setimiz eğitim seti ve test seti olarak ikiye ayrılacaktır. Eğitim seti, modelin öğrenmesi için kullanılırken, test seti modelin performansını değerlendirmek için daha önce görmediği verilerle kullanılacaktır.

        Model, eğitim setindeki kod parçacıklarını ve ilgili 0/1 etiketlerini kullanarak yinelenen bir süreçle eğitilir. Her döngüde (epoch), model tahminler yapar ve bu tahminlerin gerçek etiketlerden ne kadar farklı olduğunu (hata/kayıp) hesaplar.

        Model, bu hatayı minimize etmek için iç parametrelerini (ağırlıklarını) sürekli olarak ayarlar. Bu süreçte, güvenli kodların 0'a, zaafiyetli kodların 1'e yakın bir çıktı vermesi için optimize edilir.

3.3. Model Değerlendirme

Model eğitimi tamamlandıktan sonra, gerçek dünyadaki performansını anlamak için kapsamlı bir değerlendirme yapılmalıdır.

    Metrikler:

        Doğruluk (Accuracy): Genel olarak doğru tahminlerin oranı.

        Hassasiyet (Precision): Modelin "zaafiyetli" olarak işaretlediği kodların ne kadarının gerçekten zaafiyetli olduğunu gösterir (yanlış pozitifleri önlemede önemli).

        Duyarlılık (Recall): Gerçekten zaafiyetli olan tüm kodların ne kadarını modelin tespit edebildiğini gösterir (hiçbir zaafiyeti kaçırmama açısından önemli).

        F1-Skor: Hassasiyet ve Duyarlılığın dengeli bir ölçüsü.

        Karışıklık Matrisi (Confusion Matrix): Modelin hangi tür hataları (yanlış pozitifler ve yanlış negatifler) yaptığını detaylı gösterir.

    İterasyon: Elde edilen değerlendirme sonuçlarına göre modelde veya veri setinde iyileştirmeler yapılır ve eğitim süreci tekrarlanır. Amaç, istenen performans seviyesine ulaşmaktır.

3.4. Dağıtım ve Kullanım (Gelecek Aşama)

Model yeterli performansa ulaştığında, onu gerçek dünya senaryolarında kullanılabilir hale getirme adımları planlanacaktır.

    Entegrasyon: Model, CI/CD (Sürekli Entegrasyon/Sürekli Dağıtım) boru hatlarına veya IDE'lere (Entegre Geliştirme Ortamı) entegre edilebilir.

    API Geliştirme: Bir API (Uygulama Programlama Arayüzü) aracılığıyla geliştiricilerin veya diğer güvenlik araçlarının modelimize kolayca erişmesi sağlanabilir.

    Gerçek Zamanlı Analiz: Geliştiriciler kod yazarken anında geri bildirim alabilirler.

4. Kullanılacak Teknolojiler (Örnek)

    Programlama Dili: Python

    Veri İşleme: Pandas, NumPy

    Makine Öğrenimi Çatısı: TensorFlow / Keras veya PyTorch

    Metin İşleme: NLTK, SpaCy, Hugging Face Transformers kütüphaneleri

5. Projenin Sağlayacağı Faydalar

    Hız ve Verimlilik: Güvenlik açıklarını manuel incelemelere göre çok daha hızlı tespit edebilir.

    Maliyet Azaltma: Güvenlik denetimi süreçlerinin maliyetini düşürebilir.

    Erken Teşhis: Geliştirme sürecinin erken aşamalarında zaafiyetleri bularak, bunların ürün piyasaya sürülmeden önce giderilmesini sağlar.

    Tutarlılık: İnsan incelemesindeki öznel farklılıkların aksine, tespitlerde daha tutarlı bir yaklaşım sunar.

    Ölçeklenebilirlik: Büyük kod tabanlarını kolayca tarayabilir ve analiz edebilir.