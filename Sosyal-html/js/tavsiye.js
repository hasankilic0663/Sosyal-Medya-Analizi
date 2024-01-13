const express = require('express');
const router = express.Router();

const recommendations = {
  cocuk: [
    // Çocuklar için 50 tavsiye
    
"Kitap Okuma: Renkli resimli kitaplarla çocuklarınıza okuma alışkanlığı kazandırın.",

"Resim Çizme: Kağıt, boya ve renkli kalemlerle çocuklarınızın yaratıcılığını geliştirin.",

"Oyun Hamuruyla Oynama: El-göz koordinasyonunu artırmak için oyun hamurlarıyla şekiller yapın.",

"Dışarıda Oyunlar: Parka gidin ve açık havada oyunlar oynayarak fiziksel aktivitelerini destekleyin.",

"Şarkı Söyleme: Sevilen şarkıları birlikte söyleyerek çocuklarınıza müzikle tanıştırın.",

"Blok Oyunları: Farklı renk ve şekillerdeki bloklarla kuleler yaparak problem çözme becerilerini geliştirin.",

"Mutfakta Yardım Etme: Güvenli bir şekilde basit mutfak görevlerine katılmalarına izin verin.",

"Hayvanları Tanıma: Kitaplar veya gerçek hayvanlar aracılığıyla çocuklarınıza hayvanları tanıtmak."
,
"Drama Oyunları: Basit rol yapma oyunları ile hayal güçlerini geliştirmelerine yardımcı olun.",

"Gizli Nesne Oyunu: Evin içinde küçük nesneleri gizleyerek çocuklarınıza bulma oyunları oynatın.",

"Duyu İnceleme: Dokunma, görme, işitme gibi duyuları kullanarak çeşitli oyunlar oynayın.",

"Doğa Keşifleri: Çocuklarınızla birlikte parka giderek bitkileri, taşları ve böcekleri inceleyin.",

"Görsel Tanıma Oyunları: Renkleri, şekilleri ve nesneleri tanıma oyunları ile görsel algılarını geliştirin.",

"Masal Anlatma: Basit masallar anlatarak hayal güçlerini destekleyin.",

"El Yapımı Oyuncaklar: Evde basit oyuncaklar yaparak çocuklarınızın yaratıcılıklarını teşvik edin.",

"Bardak İstifleme: Plastik bardakları istifleyerek el becerilerini geliştirin.",

"Dil Gelişimi İçin Oyunlar: Renkleri, sayıları ve kelimeleri içeren oyunlarla dil gelişimini destekleyin.",

"Gökyüzü İzleme: Bulutları veya kuşları izleyerek çocuklarınızın dikkatini çekin.",

"Puzzle Oyunları: Basit puzzle'lar ile problem çözme yeteneklerini geliştirin."
,
"Balon Oyunları: Renkli balonlarla oyunlar oynayarak çocuklarınızın eğlenmelerini sağlayın.",

"Göz El Koordinasyonu Oyunları: Topa vurmak, hedefe atmak gibi oyunlarla göz-el koordinasyonlarını geliştirin.",

"Dans Etme: Evde müzik eşliğinde dans ederek enerji harcamalarına olanak tanıyın.",

"Bahçe Sulama: Evinizde bir bahçeniz varsa, çocuklarınızla birlikte bitkileri sulayarak sorumluluk duygusunu artırın.",

"Müze Ziyaretleri: Basit müzeleri ziyaret ederek çocuklarınıza sanat ve tarihle ilgili deneyimler kazandırın.",

"Çamurda Oynama: Güvenli bir ortamda çocuklarınıza çamurda oynama izni verin.",

"Minik Bahçe: Evde küçük bir bitki veya çiçek bahçesi oluşturarak doğayla etkileşimlerini artırın.",

"Kumla Oynama: Kova ve kürek kullanarak kumla oynamalarına izin verin.",

"Bisiklet Sürme: Güvenli bir alanda bisiklet sürmelerine izin vererek fiziksel aktivitelerini artırın.",

"Dışarıda Piknik: Güzel bir hava gününde dışarıda piknik yaparak açık havada vakit geçirin.",

"Elbise Giydirme: Kendi başlarına elbiselerini giyebilmeleri için basit elbiselerle pratik yapın."
,
"Evde Kamp Kurma: Odalarında basit bir kamp kurarak eğlenceli zaman geçirmelerine izin verin."
,
"Geri Dönüşüm Sanatı: Evde bulunan geri dönüşümlü malzemelerle sanat projeleri yaparak çocuklarınızın yaratıcılıklarını geliştirin."
,
"Büyük Parçalı Oyuncaklar: Küçük parçalı oyuncaklardan ziyade, büyük ve güvenli oyuncaklar tercih edin.",

"Koşma ve Yakalama Oyunları: Açık alanda koşma ve yakalama oyunları oynayarak enerji harcamalarına yardımcı olun.",

"Minik Evcil Hayvan Bakımı: Eğer mümkünse, basit evcil hayvanları besleyerek sorumluluk duygusunu artırın.",

"Kar Topu Savaşı: Kış aylarında güvenli bir alanda kar topu savaşı yaparak eğlenceli vakit geçirin.",

"Tahta Oyunları: Basit tahta oyunları ile strateji gelişimlerine katkıda bulunun.",

"Gölgelerle Oyunlar: Evin içinde veya bahçede gölgelerle oyunlar oynayarak hayal güçlerini destekleyin."
,
"Ailece Puzzle Çözme: Büyük bir puzzle'ı ailece çözerek işbirliği ve problem çözme yeteneklerini geliştirin.",

"Şekillerle Oyunlar: Farklı şekillerdeki nesneleri tanıma ve eşleştirme oyunları oynayın."
,
"Deniz Kabukları ve Taşlarla Sanat: Deniz kenarında bulunan kabuklar ve taşlarla sanat projeleri yaparak eğlenceli vakit geçirin."
,
"Evi Temizleme Oyunları: Basit ev işlerine katılarak temizlik yapma oyunları ile sorumluluk duygularını artırın."
,
"Uçurtma Uçurma: Güvenli bir alanda uçurtma uçurarak açık havada eğlenin.",

"Bebek Bezi Kutusuyla Oyunlar: Büyük bebek bezi kutularını kullanarak çeşitli oyunlar tasarlayın.",

"Müzik Aletleriyle Çalma: Basit müzik aletleri ile çocuklarınıza müzikle tanışma fırsatı verin.",

"Dil Gelişimi İçin Hikayeler: Basit hikayeler anlatarak çocukların dil gelişimlerini destekleyin."
,
"Evde Piknik: Evin içinde örtü serip piknik yaparak farklı bir deneyim yaşayın.",

"Bardakla Çalgı Yapma: Plastik bardakları kullanarak basit çalgılar yapın ve çocuklarınıza müzikle eğlenme şansı tanıyın.",

"Yapboz Yapma: Büyük parçalı yapbozlar ile çocukların problem çözme yeteneklerini geliştirin.",

"Büyük Kağıtlarla Boyama: Büyük kağıtlar kullanarak çocuklarınızın özgürce boyama yapmalarına izin verin.",
  ],
  genc: [
    // Gençler için 50 tavsiye
    

    "Kitap Okuma: Farklı türlerde kitaplar okuyarak okuma alışkanlığı kazanın.",

    "Yaratıcı Yazılar: Günlük yazma veya kısa hikayeler oluşturma gibi yazma aktivitelerine katılın."
    ,
    "Doğa Yürüyüşleri: Parkta yürüyüşe çıkarak doğayı keşfedin."
    ,
    "Resim Çizme: Kâğıt, fırça ve boya kullanarak resim yapma yeteneklerini geliştirin."
    ,
    "Müze Ziyaretleri: Sanat, tarih veya bilim müzelerini ziyaret ederek öğrenmeye devam edin."
    ,
    "Bahçe İşleri: Bahçede çiçek dikme veya sebze yetiştirme gibi basit bahçe işleriyle ilgilenin."
    ,
    "Müzik Çalma: Enstrüman çalmayı öğrenmek veya müzik dinlemekle zaman geçirin."
    ,
    "Dil Öğrenme: Yeni bir dil öğrenmeye başlayın veya dil bilgisi becerilerinizi geliştirin."
    ,
    "Topluluk Hizmeti: Gönüllü çalışmalara katılarak topluluğunuza faydalı olun."
    ,
    "El İşi Projeleri: Örgü, dikiş, maket yapma gibi el işi projelerle yaratıcılığınızı kullanın."
    ,
    "Gözlem Yapma: Bulunduğunuz ortamda gözlem yaparak çevrenizi daha iyi anlayın."
    ,
    "Gitar Çalma: Akustik gitar gibi taşınabilir enstrümanlarla çalmayı öğrenin."
    ,
    "Film Gecesi: Ailece veya arkadaşlarınızla film izleyerek keyifli vakit geçirin."
    ,
    "Spor Aktiviteleri: Bisiklet sürme, yüzme veya koşma gibi fiziksel aktivitelere katılın."
    ,
    "Puzzle Çözme: Zorluk seviyesine göre farklı puzzle'lar çözerek zihinsel becerilerinizi artırın."
    ,
    "Kendi Takılarını Yapma: Boncuk, ipler ve diğer malzemelerle takılar yapın."
    ,
    "Drama ve Tiyatro: Tiyatro veya dramatik aktivitelere katılarak sahne yeteneklerinizi geliştirin."
    ,
    "Kamp Yapma: Doğada kamp yaparak açık havada zaman geçirin."
    ,
    "Doğa Fotoğrafçılığı: Doğada çeşitli fotoğraflar çekerek fotoğrafçılık becerilerinizi geliştirin."
    ,
    "Çocuklara Hikaye Anlatma: Küçük kardeşlere veya akrabalara hikayeler anlatarak iletişim becerilerinizi güçlendirin."
    ,
    "Basketbol Oynama: Basketbol potası olan bir alanda arkadaşlarınızla basketbol oynayın."
    ,
    "Hayvan Barınaklarına Ziyaret: Hayvan barınaklarına giderek hayvanlarla vakit geçirin."
    ,
    "Deneyler Yapma: Evde basit kimya veya fizik deneyleri yaparak bilimle ilgili deneyim kazanın."
    ,
    "Satranç Oynama: Satranç oynayarak strateji becerilerinizi geliştirin."
    ,
    "Bisiklet Turu: Şehrinizde veya çevrenizde bisiklet turları düzenleyerek yeni yerler keşfedin."
    ,
    "Doğa Temizliği: Doğadaki çöpleri toplamak için bir temizlik etkinliği düzenleyin."
    ,
    "Tarih Yürüyüşü: Şehrinizdeki tarihi yerleri keşfetmek için bir yürüyüş düzenleyin."
    ,
    "Ahşap İşçiliği: Ahşap malzemelerle basit projeler yaparak el becerilerinizi geliştirin."
    ,
    "Ağaç Dikme: Evinizin etrafına veya çevrenizdeki bir alana ağaç dikerek doğaya katkıda bulunun."
    ,
    "Çikolata veya Kurabiye Yapma: Basit tariflerle çikolata veya kurabiye yaparak keyifli anlar yaşayın."
    ,
    "Deniz Kenarı Yürüyüşü: Deniz kenarında yürüyüş yaparak dinlenin ve temiz hava alın."
    ,
    "Tasarım ve Moda: Moda tasarımı veya ev dekorasyonu gibi alanlarda projeler yapın."
    ,
    "Diksiyon ve Konuşma Eğitimi: Konuşma becerilerinizi geliştirmek için diksiyon ve konuşma eğitimine katılın."
    ,
    "Satış Standı Kurma: Evde ürettiklerinizi satmak için bir satış standı kurun."
    ,
    "Bilmece ve Bulmaca Çözme: Zihinsel meydan okuma için bilmece ve bulmacalarla vakit geçirin."
    ,
    "Kardeşlere Yardım: Küçük kardeşlere öğretmenlik yaparak ve yardımcı olarak sorumluluk alın."
    ,
    "Kurulu Oyunlar: Arkadaşlarınızla bir araya gelerek masa oyunları oynayın."
    ,
    "Edebiyat Kulübü: Kitaplar üzerine sohbetler yapmak için bir edebiyat kulübü oluşturun."
    ,
    "Eski Fotoğraflara Bakma: Aile albümlerini inceleyerek geçmişe duygusal bir yolculuk yapın."
    ,
    "Hayvan Figürleriyle Oyunlar: Plastik hayvan figürleri kullanarak hikayeler yaratmalarına olanak tanıyın."
    ,
    "Kum Saatleri Yapma: Evde kum saatleri yaparak zamanı ölçmeyi öğrenin."
    ,
    "Yüzme: Yaz aylarında açık havuzda veya denizde yüzerek serinleyin."
    ,
    "Müzikal Performanslar: Enstrüman çalmak veya şarkı söylemek gibi müzikal yeteneklerinizi geliştirin."
    ,
    "Moda Defilesi Düzenleme: Kıyafetlerinizi arkadaşlarınızla paylaşarak basit bir moda defilesi düzenleyin."
    ,
    "Günlük Tutma: Günlük tutarak hislerinizi ifade edin ve düşüncelerinizi yazın."
    ,
    "Tarih Okuma: Tarih kitapları okuyarak geçmişi daha iyi anlamaya çalışın."
    ,
    "Satranç Turnuvası Düzenleme: Arkadaşlarınızla küçük bir satranç turnuvası düzenleyerek rekabeti deneyimleyin."
    ,
    "Sessiz Kitap Okuma Saati: Ailece sessiz bir kitap okuma saati düzenleyerek sessizliği deneyimleyin."
    ,
    "Rüzgar Güllerini Uçurma: Basit rüzgar gülleri yaparak eğlenceli bir etkinlik düzenleyin."
    ,
    "Gönüllü Çalışma: Çevrenizdeki hayır kurumlarına veya yardıma ihtiyacı olanlara gönüllü çalışarak katkıda bulunun."
  ]
 ,orta: [
    // Orta yaş için 50 tavsiye
    
"Kitap Okuma: Farklı türlerde kitaplar okuyarak okuma alışkanlığı kazanın."
,
"Yaratıcı Yazılar: Günlük yazma veya kısa hikayeler oluşturma gibi yazma aktivitelerine katılın."
,
"Doğa Yürüyüşleri: Parkta yürüyüşe çıkarak doğayı keşfedin."
,
"Resim Çizme: Kâğıt, fırça ve boya kullanarak resim yapma yeteneklerini geliştirin."
,
"Müze Ziyaretleri: Sanat, tarih veya bilim müzelerini ziyaret ederek öğrenmeye devam edin."
,
"Bahçe İşleri: Bahçede çiçek dikme veya sebze yetiştirme gibi basit bahçe işleriyle ilgilenin."
,
"Müzik Çalma: Enstrüman çalmayı öğrenmek veya müzik dinlemekle zaman geçirin."
,
"Dil Öğrenme: Yeni bir dil öğrenmeye başlayın veya dil bilgisi becerilerinizi geliştirin."
,
"Topluluk Hizmeti: Gönüllü çalışmalara katılarak topluluğunuza faydalı olun."
,
"El İşi Projeleri: Örgü, dikiş, maket yapma gibi el işi projelerle yaratıcılığınızı kullanın."
,
"Gözlem Yapma: Bulunduğunuz ortamda gözlem yaparak çevrenizi daha iyi anlayın."
,
"Gitar Çalma: Akustik gitar gibi taşınabilir enstrümanlarla çalmayı öğrenin."
,
"Film Gecesi: Ailece veya arkadaşlarınızla film izleyerek keyifli vakit geçirin."
,
"Spor Aktiviteleri: Bisiklet sürme, yüzme veya koşma gibi fiziksel aktivitelere katılın."
,
"Puzzle Çözme: Zorluk seviyesine göre farklı puzzle'lar çözerek zihinsel becerilerinizi artırın."
,
"Kendi Takılarını Yapma: Boncuk, ipler ve diğer malzemelerle takılar yapın."
,
"Drama ve Tiyatro: Tiyatro veya dramatik aktivitelere katılarak sahne yeteneklerinizi geliştirin."
,
"Kamp Yapma: Doğada kamp yaparak açık havada zaman geçirin."
,
"Doğa Fotoğrafçılığı: Doğada çeşitli fotoğraflar çekerek fotoğrafçılık becerilerinizi geliştirin."
,
"Çocuklara Hikaye Anlatma: Küçük kardeşlere veya akrabalara hikayeler anlatarak iletişim becerilerinizi güçlendirin."
,
"Basketbol Oynama: Basketbol potası olan bir alanda arkadaşlarınızla basketbol oynayın."
,
"Hayvan Barınaklarına Ziyaret: Hayvan barınaklarına giderek hayvanlarla vakit geçirin."
,
"Deneyler Yapma: Evde basit kimya veya fizik deneyleri yaparak bilimle ilgili deneyim kazanın."
,
"Satranç Oynama: Satranç oynayarak strateji becerilerinizi geliştirin."
,
"Bisiklet Turu: Şehrinizde veya çevrenizde bisiklet turları düzenleyerek yeni yerler keşfedin."
,
"Doğa Temizliği: Doğadaki çöpleri toplamak için bir temizlik etkinliği düzenleyin."
,
"Tarih Yürüyüşü: Şehrinizdeki tarihi yerleri keşfetmek için bir yürüyüş düzenleyin."
,
"Ahşap İşçiliği: Ahşap malzemelerle basit projeler yaparak el becerilerinizi geliştirin."
,
"Ağaç Dikme: Evinizin etrafına veya çevrenizdeki bir alana ağaç dikerek doğaya katkıda bulunun."
,
"Çikolata veya Kurabiye Yapma: Basit tariflerle çikolata veya kurabiye yaparak keyifli anlar yaşayın."
,
"Deniz Kenarı Yürüyüşü: Deniz kenarında yürüyüş yaparak dinlenin ve temiz hava alın."
,
"Tasarım ve Moda: Moda tasarımı veya ev dekorasyonu gibi alanlarda projeler yapın."
,
"Diksiyon ve Konuşma Eğitimi: Konuşma becerilerinizi geliştirmek için diksiyon ve konuşma eğitimine katılın."
,
"Satış Standı Kurma: Evde ürettiklerinizi satmak için bir satış standı kurun."
,
"Bilmece ve Bulmaca Çözme: Zihinsel meydan okuma için bilmece ve bulmacalarla vakit geçirin."
,
"Kardeşlere Yardım: Küçük kardeşlere öğretmenlik yaparak ve yardımcı olarak sorumluluk alın."
,
"Kurulu Oyunlar: Arkadaşlarınızla bir araya gelerek masa oyunları oynayın."
,
"Edebiyat Kulübü: Kitaplar üzerine sohbetler yapmak için bir edebiyat kulübü oluşturun."
,
"Eski Fotoğraflara Bakma: Aile albümlerini inceleyerek geçmişe duygusal bir yolculuk yapın."
,
"Hayvan Figürleriyle Oyunlar: Plastik hayvan figürleri kullanarak hikayeler yaratmalarına olanak tanıyın."
,
"Kum Saatleri Yapma: Evde kum saatleri yaparak zamanı ölçmeyi öğrenin."
,
"Yüzme: Yaz aylarında açık havuzda veya denizde yüzerek serinleyin."
,
"Müzikal Performanslar: Enstrüman çalmak veya şarkı söylemek gibi müzikal yeteneklerinizi geliştirin."
,
"Moda Defilesi Düzenleme: Kıyafetlerinizi arkadaşlarınızla paylaşarak basit bir moda defilesi düzenleyin."
,
"Günlük Tutma: Günlük tutarak hislerinizi ifade edin ve düşüncelerinizi yazın."
,
"Tarih Okuma: Tarih kitapları okuyarak geçmişi daha iyi anlamaya çalışın."
,
"Satranç Turnuvası Düzenleme: Arkadaşlarınızla küçük bir satranç turnuvası düzenleyerek rekabeti deneyimleyin."
,
"Sessiz Kitap Okuma Saati: Ailece sessiz bir kitap okuma saati düzenleyerek sessizliği deneyimleyin."
,
"Rüzgar Güllerini Uçurma: Basit rüzgar gülleri yaparak eğlenceli bir etkinlik düzenleyin."
,
"Gönüllü Çalışma: Çevrenizdeki hayır kurumlarına veya yardıma ihtiyacı olanlara gönüllü çalışarak katkıda bulunun."
,
  ],
  yasli: [
    // Yaşlılar için 50 tavsiye
    "Kitap Okuma: Farklı türlerde kitaplar okuyarak bilgi birikiminizi artırın.",

    "Bahçe İşleri: Bitki dikme veya bahçe bakımı yaparak doğayla iç içe olun.",
    
    "El İşi Projeleri: Örgü, dikiş veya marangozluk gibi el işi projelerle uğraşın."
    ,
    "Yürüyüş ve Egzersiz: Günlük düzenli yürüyüş ve egzersiz yaparak sağlığınıza özen gösterin."
    ,
    "Resim Çizme: Kâğıt, fırça ve boya kullanarak resim yapma yeteneklerinizi geliştirin."
    ,
    "Müze ve Sanat Galerileri Ziyareti: Sanat ve kültürle ilgili müzeleri gezerek yeni şeyler öğrenin."
    ,
    "Keman Çalma: Akustik enstrümanlarla çalmayı öğrenerek müziğin tadını çıkarın."
    ,
    "Yemek Yapma: Yeni tarifler deneyerek yemek yapma becerilerinizi geliştirin."
    ,
    "Gönüllü Çalışmalar: Gönüllü olarak toplum hizmetine katılarak faydalı olun."
    ,
    "Geleneksel Oyunlar: Satranç, tavla, dama gibi geleneksel oyunlarla zaman geçirin."
    ,
    "Doğada Piknik: Doğada piknik yaparak açık havada keyifli bir zaman geçirin."
    ,
    "Masal Anlatma: Aile üyeleri veya arkadaşlarınıza masallar anlatarak zaman geçirin."
    ,
    "Deneme Yazma: Kendi düşüncelerinizi ve deneyimlerinizi yazarak ifade kabiliyetinizi geliştirin."
    ,
    "Tarih Kitapları Okuma: Tarih kitapları okuyarak geçmişle ilgili bilgi edinin."
    ,
    " dans Etme: Yavaş tempolu danslarla müziğin ritmine ayak uydurarak eğlenin."
    ,
    "Fotoğrafi: Fotoğraf çekmeyi öğrenerek anılarınızı ölümsüzleştirin."
    ,
    "Tatil Planlama: Gelecek tatiller için planlar yaparak heyecanlanın."
    ,
    "Puzzle Çözme: Zorluk seviyesine göre farklı puzzle'lar çözerek zihinsel becerilerinizi artırın."
    ,
    "Kendi Takılarınızı Yapma: Boncuk, tel ve diğer malzemelerle kendi takılarınızı yapın."
    ,
    "Tatlı veya Kurabiye Yapma: Basit tatlı veya kurabiye tarifleri deneyerek keyifli anlar yaşayın."
    ,
    "Ahşap İşçiliği: Ahşap malzemelerle basit projeler yaparak el becerilerinizi geliştirin."
    ,
    "Gözleme ve Mantar Toplama: Hafif yürüyüşlerle doğada gözleme yapın veya mantar toplayın."
    ,
    "Doğa Yürüyüşleri: Ormanlık alanlarda yürüyüş yaparak doğayla iç içe olun."
    ,
    "Köy Pazarına Gitme: Yerel köy pazarlarını ziyaret ederek doğal ürünler alın."
    ,
    "Satranç Oynama: Zihinsel aktivite olarak satranç oynayın."
    ,
    "Deniz Kenarında Zaman Geçirme: Deniz kenarında oturarak dinlenin veya yürüyüş yapın."
    ,
    "Eski Resimlere Bakma: Eski fotoğrafları inceleyerek geçmişe dönük anılarınızı hatırlayın."
    ,
    "Gazete ve Dergi Okuma: Günlük haberleri takip ederek gündemdeki gelişmeleri öğrenin."
    ,
    "Ev Dekorasyonu: Evde küçük değişiklikler yaparak evinizi yenileyin."
    ,
    "Geleneksel Çay Saati: Aile veya arkadaşlarınızla geleneksel çay saatleri düzenleyin."
    ,
    "Piknik Yapma: Doğada veya parkta piknik yaparak açık havanın tadını çıkarın."
    ,
    "Kendi Sebze ve Meyvenizi Yetiştirme: Bahçede sebze ve meyve yetiştirmeyle uğraşarak organik ürünler elde edin."
    ,
    "Yabancı Dil Öğrenme: Yeni bir dil öğrenmeye başlayarak zihinsel aktivitenizi artırın."
    ,
    "Kuş Gözlemi: Pencerelerden veya bahçeden kuşları gözlemleyerek keyif alın."
    ,
    "Tatil Anıları: Eskiden yaşadığınız tatil anılarını paylaşarak keyifli sohbetler edin."
    ,
    "Klasik Film İzleme: Klasik filmleri izleyerek sinema kültürünüzü zenginleştirin."
    ,
    "Meyve Suyu veya Reçine Yapımı: Evde doğal meyve suları veya reçineler yaparak yaratıcı olun."
    ,
    "Eski Arkadaşlarla Buluşma: Eski dostlarınızla zaman geçirerek güzel anılarınızı canlandırın."
    ,
    "Gitar Çalma: Akustik gitar gibi enstrümanlarla çalmayı öğrenerek müziğin tadını çıkarın."
    ,
    "Deneme Yazma: Kendi düşüncelerinizi ve deneyimlerinizi yazarak ifade kabiliyetinizi geliştirin."
    ,
    "Kapalı Alan Oyunları: Tavla, iskambil oyunları gibi kapalı alan oyunlarıyla zaman geçirin."
    ,
    "Geleneksel Yemek Tarifleri: Geleneksel yemek tariflerini deneyerek hatıralarınızı canlandırın."
    ,
    "Evde Konser Düzenleme: Aile üyeleri veya arkadaşlarınızla küçük bir konser düzenleyin."
    ,
    "Ağaç Dikme: Evinizin etrafına veya çevrenizdeki bir alana ağaç dikerek doğaya katkıda bulunun."
    ,
    "Kendi Bahçenizi Tasarlama: Bahçenizi güzelleştirmek için peyzaj çalışmaları yapın."
    ,
    "Kardeşlere ve Çocuklara Zaman Ayırma: Aile fertleriyle vakit geçirerek ilişkilerinizi güçlendirin."
    ,
    "Kendi Takılarınızı Yapma: Boncuk, tel ve diğer malzemelerle kendi takılarınızı yapın."
    ,
    "Hayvan Barınaklarına Ziyaret: Hayvan barınaklarına giderek hayvanlarla vakit geçirin."
    ,
    "Hobi Koleksiyonu: Kitap, pul, madalya gibi hobilerle ilgilenerek bir koleksiyon oluşturun."
    ,
    "Günlük Tutma: Günlük yazarak gününüzü hatırlayın ve düşüncelerinizi ifade edin."  
,
  ],
};

router.get('/getRandomRecommendation', (req, res) => {
  const selectedCategory = req.query.category;
  const categoryRecommendations = recommendations[selectedCategory] || [];
  const randomIndex = Math.floor(Math.random() * categoryRecommendations.length);
  const randomRecommendation = categoryRecommendations[randomIndex];
  res.json({ recommendation: randomRecommendation });
});

module.exports = router;
