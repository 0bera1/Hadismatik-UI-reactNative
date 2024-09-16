# **Hadismatik**

React Native ve Expo ile geliştirilmiş basit ve verimli bir mobil uygulama. Bu proje, kullanıcıların çeşitli notlar oluşturmasına, görüntülemesine ve yönetmesine olanak tanır.

**Özellikler**
* Not Oluşturma: Kullanıcılar başlık ve içerik ile notlar oluşturabilir.
* Notları Görüntüleme: Tüm notların listesini kolayca görüntüleyin.
* Notları Yönetme: Notları düzenleyin veya silin.

**Kullanılan Teknolojiler**
* React Native: React kullanarak mobil uygulamalar geliştirmek için popüler bir framework.
* Expo: Evrensel React uygulamaları için bir framework ve platform.
* JSON Server: Notları saklamak için basit bir yerel backend oluşturmak amacıyla kullanılır.
* ngrok: Test amaçlı olarak yerel sunucuyu internete açmayı sağlar.
* React Navigation: Uygulama içindeki gezinmeyi yönetmek için kullanılır.
* Axios: Yerel JSON sunucusuna istek yapmak için kullanılan bir promise tabanlı HTTP istemcisi.

**Başlarken**

*Gereksinimler*
* Node.js ve npm yüklü olmalı.
* Expo CLI, `npm install -g expo-cli` komutu ile global olarak kurulmuş olmalı.

**Kurulum**
1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/yourusername/hadismatik.git
   cd hadismatik
   ````
2.Bağımlılıkları yükleyin:
 ```bash
    npm install

   ````
3.Expo sunucusunu başlatın:
 ```bash
npm start

   ````
Uygulamayı tercih ettiğiniz platformda (Android, iOS veya Web) çalıştırın:

   ```bash
npm run android   # for Android
npm run ios       # for iOS
npm run web       # for Web
   ````
Proje Yapısı

/src: Uygulamanın ana kaynak kodlarını içerir.
/screens: Farklı ekranları içerir (örneğin, HomeScreen).
/components: Uygulama genelinde yeniden kullanılabilir bileşenler.
package.json: Proje meta verileri ve bağımlılıkları.

