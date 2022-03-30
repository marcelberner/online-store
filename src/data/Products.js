const PRODUCTS = [
  {
    id: `${Math.floor(Math.random() * 1000000000)}`,
    name: "Apple iPhone 13 128GB Alpine Green",
    img: "./images/iphone_green.png",
    category: "phone",
    price: "4 199",
    amount: 19,
    reputation: "4.4",
    recomendation:
      "Bardzo mocny procesor Apple A15 Bionic, wyświetlacz OLED Super Retina XDR, świetne głośniki stereo i wieloletnie wsparcie dla nowych systemów pozwoli cieszyć się urządzeniem przez długi czas.",
    description: [
      {
        title: "Smartfon Apple iPhone 13 128 GB Starlight",
        text: "Zobacz Apple iPhone 13 128 GB Starlight i przekonaj się o jego doskonałości. Niesamowicie wydajny procesor i pojemna bateria to pewność, że możesz pracować na urządzeniu wiele godzin. Ulepszony aparat to jeszcze lepsze zdjęcia, ciekawe filmy i doskonała jakość. Na wyświetlaczu Super Retina XDR możesz cieszyć się pięknie odwzorowanymi barwami i niespotykaną szczegółowością.",
        img: "./images/iphone-opis_1.png",
      },
      {
        title: "Udoskonalony aparat",
        text: "Obiektyw ultraszerokokątny zaskoczy Cię na nowo. Teraz odsłania więcej detali w najciemniejszych fragmentach zdjęć. Obiektyw przepuszcza o 47% więcej światła, a Ty w rezultacie otrzymujesz jeszcze lepsze fotografie. Użyj trybu filmowego, który doskonale utrzyma ostrość na głównym obiekcie i stworzy wokół niego piękny efekt głębi. Dodatkowo tryb przewiduje, kiedy nowy obiekt pojawi się w kadrze i automatycznie go wyostrza.",
        img: "./images/iphone-opis_2.png",
      },
      {
        title: "Szczegółowy wyświetlacz w iPhone 13",
        text: "Apple iPhone 13 128 GB Starlight odkryje przed Tobą na nowo magię kina na wyświetlaczu smartfona. Wyświetlacz Super Retina XDR osiąga jasność 800 nitów, co daje Ci pewność, że nawet w pełnym słońcu możesz bez problemów oglądać ulubione programy. Smartfon ten ma szeroką gamę kolorów, która jest zgodna ze standardem kinowym. Dzięki temu wszystkie barwy zobaczysz tak, jak chciał tego twórca.",
        img: "./images/iphone-opis_3.png",
      },
      {
        title: "Doskonała wydajność",
        text: "Procesor A15 Bionic zadba, aby każde zadanie na urządzeniu zostało wykonane błyskawicznie i bez zbędnych problemów. Czip napędza tryb filmowy, style fotograficzne i wiele innych funkcji, które ułatwiają Ci korzystanie z urządzenia i tworzenie treści. Bateria w iPhone 13 nabrała energii. Teraz to aż do 2,5 godziny więcej korzystania z urządzenia na jednym ładowaniu.",
        img: "./images/iphone-opis_4.png",
      },
    ],
    specyfication: {
      color: "green",
      memory: "128GB",
      screen: "6,1",
      OS: "IOS 15",
      processor: "Apple A15 Bionic",
    },
  },
  {
    id: `${Math.floor(Math.random() * 1000000000)}`,
    name: "realme Pad 10.4 LTE 6/128GB Real Grey",
    img: "./images/realmePad_grey.png",
    category: "tablet",
    price: "1 399",
    amount: 29,
    reputation: "4.7",
    description: [
      {
        title: "Tablet realme Pad WiFi 128 GB Real Grey",
        text: "Oto realme Pad WiFi 128 GB Real Grey, czyli tablet, który został stworzony do mobilnej podróży i wideokonferencji. Pracuj wydajnie lub oglądaj najlepsze filmy bez obaw o poziom naładowania urządzenia. Na dużym ekranie zobaczysz wszystko jeszcze wyraźniej i przyspieszysz swoją pracę. Z doskonałą kamerą przednią zawsze będziesz wyglądać idealnie, a o krystalicznie czysty dźwięk zadbają cztery głośniki.",
        img: "./images/realme-opis_1.png",
      },
      {
        title: "Duży ekran",
        text: "Odkryj magię kina na wyświetlaczu swojego tabletu.10,4-calowy ekran pozwoli Ci swobodnie przeglądać treści, a wszystkie filmy i gry zobaczysz tak, jak chciał tego ich twórca. Żywe, doskonale odwzorowane kolory – właśnie to zapewni Ci tablet od realme. Niewielka waga zaledwie 440 g i grubość 6,9 mm pozwolą Ci zabrać urządzenie, gdziekolwiek zechcesz. Wsuń tablet do torby i podróżuj na własnych warunkach.",
        img: "./images/realme-opis_2.png",
      },
      {
        title: "Baw się dłużej z realme Pad",
        text: "Szary realme Pad WiFi 128 GB ma baterię o pojemności 7100 mAh. Wszystko po to, aby zapewnić Ci moc, która przekroczy Twoje oczekiwania. To aż 65 dni pracy tabletu w trybie czuwania lub 12 godzin oglądania filmów. Jeśli jednak urządzeniu zabraknie mocy, możesz liczyć na szybkie ładowanie 18 W, dzięki któremu tablet wróci do pełnej mocy błyskawicznie.",
        img: "./images/realme-opis_3.png",
      },
      {
        title: "Włącz wideokonferencje",
        text: "Włącz przednią kamerę HD i pozwól się zobaczyć innym w najwyższej jakości. Dzięki funkcji redukcji szumów i dwóm mikrofonom możesz być pewien, że każdy Cię usłyszy. Bierz udział w wideokonferencjach, zajęciach online i rozmowach z najbliższymi. Ciesz się doskonałym dźwiękiem wydobywającym się z urządzenia. Wbudowane cztery głośniki i adaptacyjny dźwięk przestrzenny nie pozwolą, abyś martwił się o jakość dialogów i muzyki.",
        img: "./images/realme-opis_4.png",
      },
    ],
    specyfication: {
      color: "grey",
      memory: "128GB",
      screen: "10,4",
      OS: "Android 11",
      processor: "MTK MT8786 (6 rdzeni, 1.8 GHz A55 + 2 rdzenie, 2.0 GHz A75)",
    },
  },
  {
    id: `${Math.floor(Math.random() * 1000000000)}`,
    name: "Gigabyte GeForce RTX 3050 GAMING OC 8GB GDDR6",
    img: "./images/gigabyte_RTX3050.png",
    category: "graphic-card",
    price: "2 199",
    amount: 8,
    reputation: "3.8",
    description: [
      {
        title: "Gigabyte GeForce RTX 3050 GAMING OC 8GB GDDR6",
        text: "Wykorzystująca możliwości architektury NVIDIA Ampere karta graficzna Gigabyte GeForce RTX 3050 GAMING OC 8GB GDDR6 oferuje dedykowane rdzenie Tensor oraz rdzenie RT, dzięki którym skorzystasz z unikalnych technologii graficznych, takich jak Ray Tracing i DLSS. Najlepsze chłodzenie karty zapewni układ trzech wydajnych wentylatorów WINDFORCE 3X. Pełną kontrolę nad funkcjami karty oraz jej chłodzeniem zapewni Ci dedykowane oprogramowanie AORUS Engine, a możesz też korzystać z możliwości sterowanie podświetleniem RGB Fusion 2.0.",
        img: "./images/geforce-opis_1.png",
      },
      {
        title: "Wydajność dzięki architekturze NVIDIA Ampere",
        text: "Kartę graficzną Gigabyte GeForce RTX 3050 GAMING OC oparto na nowatorskiej, bogatej w nowe technologie architekturze NVIDIA Ampere. To druga generacja układów NVIDIA RTX, która gwarantuje olbrzymi wzrost mocy obliczeniowej. Architektura zapewnia nawet dwukrotnie wyższą przepustowość dzięki drugiej generacji rdzeni RT oraz trzeciej generacji rdzeni Tensor.",
        img: "./images/geforce-opis_2.png",
      },
      {
        title: "Najlepsze chłodzenie z WINDFORCE 3X",
        text: "Gigabyte GeForce RTX 3050 GAMING OC pracuje stabilnie w każdej sytuacji dzięki wydajnemu chłodzeniu WINDFORCE 3X. Składają się na niego trzy wentylatory o średnicy 80mm, z czego środkowy obraca się w przeciwnym kierunku zapobiegając turbulencjom. Zoptymalizowany kształt łopatek pozwala na wygenerowanie mocniejszego strumienia powietrza rozpraszającego ciepło z aluminiowego radiatora. Ten odbiera energię cieplną z GPU poprzez dwa przylegające bezpośrednio miedziane ciepłowody. Dodatkowo całą konstrukcję domyka usztywniający metalowy backplate.",
        img: "./images/geforce-opis_3.png",
      },
      {
        title: "Zabezpieczenie LHR - Lite Hash Rate",
        text: "Ta karta graficzna posiada układ GPU z zaimplementowanym ograniczeniem kopania kryptowalut takich jak Ethereum, znane jako LHR (Lite Hash Rate). To algorytm, który na bieżąco wykrywa obciążenie związane z kopaniem kryptowaluty i blokuje je niezależnie od zainstalowanego sterownika. A co ważne, spadek wydajności podczas wydobywania kryptowalut nie ma wpływu na wydajność karty w grach czy profesjonalnych programach.",
        img: "./images/geforce-opis_4.png",
      },
    ],
    specyfication: {
      color: "black",
      memory: "8GB",
      gddr: "GDDR6",
      outputs: "HDMI 2.1 - 2 szt., DisplayPort 1.4a - 2 szt.",
      PCIe: "PCIe 4.0 x16 (tryb x8)",
    },
  },
  {
    id: `${Math.floor(Math.random() * 1000000000)}`,
    name: "Apple MacBook Air M1/8GB/256/Space Gray",
    img: "./images/macbook_grey.png",
    category: "laptop",
    price: "4 599",
    amount: 16,
    reputation: "5.0",
    description: [
      {
        title: "Wielka zmiana z czipem M1",
        text: "Pierwszy czip zaprojektowany specjalnie dla Maca. Wyposażony w niewiarygodne 16 miliardów tranzystorów system jednoukładowy (SoC) Apple M1 mieści CPU, GPU, system Neural Engine, system I/O i mnóstwo innych komponentów w jednym miniaturowym czipie. Niesamowicie wydajny i pełen wyjątkowych technologii czip M1 nie jest po prostu kolejnym etapem rozwoju Maca. Jest nowym otwarciem.",
        img: "./images/macbook-opis_1.png",
      },
      {
        title: "Niesamowita wydajność",
        text: "Czip M1 zawiera najszybszy procesor CPU, jaki kiedykolwiek stworzono. Z taką mocą obliczeniową MacBook Air może podejmować się najbardziej intensywnych zadań, na przykład montażu wideo o profesjonalnej jakości. Jest przy tym świetną platformą do gier pełnych akcji. 8-rdzeniowe CPU w czipie M1 jest nie tylko szybsze. Oprócz rdzeni wysoko wydajnych ma też rdzenie energooszczędne, które doskonale radzą sobie z codziennymi zadaniami, zużywając przy tym dziesięć razy mniej energii.",
        img: "./images/macbook-opis_2.png",
      },
      {
        title: "Cicha praca",
        text: "Z najbardziej energooszczędnym w branży czipem M1 MacBook Air działa zdumiewająco wydajnie bez wentylatora. Aluminiowy rozpraszacz skutecznie odprowadza generowane przez system ciepło, dzięki czemu urządzenie wykonuje nawet najbardziej wymagające zadania w absolutnej ciszy.",
        img: "./images/macbook-opis_3.png",
      },
      {
        title: "Klawiatura Magic Keyboard",
        text: "Klawiatura, na której fantastycznie się pisze, to coś pięknego. A taka, która robi przy tym wiele więcej, to prawdziwa magia. Dzięki nowym, wstępnie zaprogramowanym skrótom przydatne funkcje są jeszcze łatwiej dostępne. Możesz przełączać języki klawiatury, wysyłać emoji, wyszukiwać dokumenty w Spotlight, szybko wyciszyć powiadomienia funkcją Nie przeszkadzać i robić masę innych rzeczy jednym stuknięciem. A podświetlenie klawiszy z czujnikiem jasności w otoczeniu ułatwia pisanie w słabo oświetlonych miejscach.",
        img: "./images/macbook-opis_4.png",
      },
    ],
    specyfication: {
      color: "grey",
      memory: "256GB",
      screen: "13,3",
      OS: "macOS Big Sur",
      processor: "Apple M1",
    },
  },
  {
    id: `${Math.floor(Math.random() * 1000000000)}`,
    name: "HERO i5-11400F/16GB/1TB/RTX3060",
    img: "./images/computer_hero.png",
    category: "computer",
    price: "6 600",
    amount: 31,
    reputation: "4.4",
    description: [
        {
          title: "WEJDŹ DO ŚWIATA GAMINGU. NA SERIO",
          text: "Graj w najpopularniejsze tytuły w wysokiej rozdzielczości 1080p przy wysokich detalach. Komputery G4M3R HERO zaprojektowaliśmy tak, by rozgrywka była płynna przy wysokich detalach. Wybraliśmy komponenty, które najlepiej do siebie pasują, dzięki czemu zachowują niskie temperatury i cichą pracę. Osiągnęliśmy to dzięki autorskim rozwiązaniom i tysiącom testów.",
          img: "./images/hero-opis_1.png",
        },
        {
          title: "ZAPROJEKTOWANA ARCHITEKTURA",
          text: "Zaprojektowaliśmy nowe wnętrze komputera, które ma lepszy przepływ powietrza. Dzięki temu temperatury podzespołów są mniejsze, a praca jest cichsza. To gwarantuje mniejszy pobór energii w porównaniu ze starszą generacją i jeszcze stabilniejsze działanie.",
          img: "./images/hero-opis_2.png",
        },
      ],
    specyfication: {
      memory: "16GB",
      graphic: "NVIDIA GeForce RTX 3060",
      OS: "Microsoft Windows 11 Home",
      processor: "Intel Core i5-11400F",
    },
  },
  {
    id: `${Math.floor(Math.random() * 1000000000)}`,
    name: "ASUS ROG SWIFT PG32UQX 4K HDR",
    img: "./images/monitor_asus.png",
    category: "monitor",
    price: "15 999",
    amount: 3,
    reputation: "2.3",
    description: [
        {
          title: "Monitor dla gracza ASUS ROG Swift PG35VQ Quantum-dot HDR",
          text: "Zyskaj dodatkową przewagę nad przeciwnikiem za sprawą gamingowego monitora ASUS ROG Swift PG35VQ. Daj się porwać niezwykłej dynamice i wiernie oddanym kolorom. Zyskaj też dodatkowy oręż w walce w postaci błyskawicznej reakcji matrycy. Jej szybkość wyświetlania sprawia, że obraz jest płynniejszy, co da Ci więcej czasu na reakcję i umożliwi dokładniejsze celowanie.",
          img: "./images/rog-opis_1.png",
        },
        {
          title: "Częstotliwość odświeżania 200 Hz",
          text: "Dzięki natywnej częstotliwości odświeżania na oszałamiającym poziomie 200 Hz, ROG Swift PG35VQ jest dwa razy szybszy niż konwencjonalne monitory 100 Hz. Zapewnia zdumiewająco płynne efekty wizualne i pozwoli uzyskać przewagę w takich grach, jak strzelanki FPS, wyścigi, strategie czasu rzeczywistego oraz gry sportowe. Czysta akcja bez przerw.",
          img: "./images/rog-opis_2.png",
        },
        {
          title: "Technologia NVIDIA G-SYNC",
          text: "Monitor ROG Swift PG35VQ korzysta z technologii wyświetlania NVIDIA® G-SYNC™, która gwarantuje najbardziej płynne i najszybsze efekty wizualne w czasie gry, jakie tylko są możliwe, eliminując rwanie obrazu oraz minimalizując zacinanie animacji i opóźnienia (lagi). Ciesz się najnowszymi strzelankami typu FPS, grami sportowymi oraz grami przygodowymi przy wysokiej liczbie klatek na sekundę – i to nawet przy najwyższych ustawieniach graficznych.",
          img: "./images/rog-opis_3.png",
        },
        {
          title: "High Dynamic Range",
          text: "Monitor ROG Swift PG35VQ korzysta z technologii HDR w celu uzyskania zakresu oświetlenia bardziej zbliżonego do wrażeń, które zapewniają ludzkie oczy, a także oferuje szerszy zakres barw niż konwencjonalne monitory. Dzięki maksymalnej jasności odcieni bieli i maksymalnym zaciemnieniu odcieni czerni możliwe jest odwzorowywanie detali na niespotykanym dotąd poziomie.",
          img: "./images/rog-opis_4.png",
        },
      ],
    specyfication: {
      color: "black",
      screen: "32",
      resolution: "3840 x 2160",
      panel: "LED, IPS 10-bit",
    },
  },
  {
    id: `${Math.floor(Math.random() * 1000000000)}`,
    name: "Microsoft Xbox Series X",
    img: "./images/xbox_x.png",
    category: "console",
    price: "2 449",
    amount: 12,
    reputation: "3.9",
    description: [
        {
          title: "Konsola Microsoft Xbox Series X",
          text: "Przyszłość gier właśnie nadeszła. Na imię jej Xbox Series X. W tej konsoli, w ramach architektury XboX Velocity, dokonała się głęboka integracja zaplecza sprzętowego z oprogramowaniem. Owocem tej fuzji jest niespotykana dotąd dynamika gier oraz realizm inspirujący do nieustannego eksplorowania wirtualnych światów. Xbox Series X spełnia marzenie o ray tracingu na konsoli, ogromnej wydajności, większej przestrzeni na gry.",
          img: "./images/xbox-opis_1.png",
        },
        {
          title: "Potężne wnętrze. Ciche chłodzenie",
          text: "Za bezbłędną płynność oprawy graficznej odpowiada moc 12 Teraflopów. Na ekranie zobaczysz prawdziwe 4K, ale na tym nie koniec. Xbox Series X może współpracować z rozdzielczością 8K. W ferworze walki temperaturę komponentów utrzymuje w ryzach system równoległego chłodzenia, przeprowadzając powietrze trzema równoległymi kanałami. Co ważne, cały proces jest cichy jak szept.",
          img: "./images/xbox-opis_2.png",
        },
        {
          title: "Nowy bezprzewodowy kontroler Xbox",
          text: "Poznaj nowy bezprzewodowy kontroler Xbox, który nadchodzi wraz z konsolą Xbox Series X. Jego zmodernizowana konstrukcja zwiększa komfort obsługi podczas rozgrywki. Pad umożliwi dokładne celowanie za sprawą uchwytów z chropowatą fakturą. Możesz również w łatwy sposób przechwytywać zawartość i ją udostępniać.",
          img: "./images/xbox-opis_3.png",
        },
        {
          title: "Rozszerz pamięć swojej konsoli",
          text: "Dodaj swojej konsoli Xbox Series X dodatkowej przestrzeni na ulubione gry dzięki dedykowanej karcie rozszerzeń Seagate Storage Expansion Card o pojemności 2 TB, 1 TB lub 512 GB. Jest ona w pełni kompatybilna z architekturą Xbox Velocity, co pozwala na szybkie wznawianie gry od miejsca, gdzie została przerwana oraz w bezproblemowy sposób przełączać się pomiędzy różnymi tytułami.",
          img: "./images/xbox-opis_4.png",
        },
      ],
    specyfication: {
      color: "black",
      memory: "1TB",
      ram: "16 GB GDDR6",
      graphic: "AMD RDNA 2.0 (1825 MHz)",
      processor: "AMD Ryzen Zen 2 (8 rdzeni, 3.8 GHz)",
    },
  },
  {
    id: `${Math.floor(Math.random() * 1000000000)}`,
    name: "HTC VIVE Cosmos Elite",
    img: "./images/vr_htc.png",
    category: "vr",
    price: "4 649",
    amount: 8,
    reputation: "4.1",
    description: [
        {
          title: "Grafika, która zapiera dech w piersiach",
          text: "Gogle VR HTC VIVE Cosmos Elite oferują łączną rozdzielczość 2880 x 1700 pikseli oraz doskonałą jakość obrazu, co pozwoli Ci zobaczyć wirtualną rzeczywistość jak nigdy wcześniej. Łączna rozdzielczość oferowana przez ten modli gogli jest aż o 88% większa w porównaniu do pierwszych gogli HTC VIVE. Dzięki nowym panelom LCD, udało się jeszcze bardziej zmniejszyć odległość między pikselami i jednocześnie zredukować efekt tzw. \"drzwi ekranowych\". Oznacza to, że użytkownik nie zauważy cienkich linii oddzielających poszczególne piksele.",
          img: "./images/vr-opis_1.png",
        },
        {
          title: "Doskonały dźwięk stereo",
          text: "Dźwięk jest równie ważny co obraz podczas przygód w wirtualnym świecie. Dlatego gogle HTC VIVE Cosmos Elite zostały wyposażone w zintegrowane słuchawki nauszne, które zapewnią Ci doskonały dźwięk stereo. Sprawi to, że w pełni zanurzysz się w rzeczywistości wirtualnej.",
          img: "./images/vr-opis_2.png",
        },
        {
          title: "Wygodna konstrukcja typu flip-up",
          text: "Używaj wygodnie zestawu HTC VIVE Cosmos Elite dzięki unikalnej konstrukcji typu flip-up, która pozwala w szybki i komfortowy sposób przejść między światem rzeczywistym, a światem wirtualnym bez konieczności zdejmowania gogli z głowy. Wystarczy uchylić gogle ku górze i wrócisz do rzeczywistości. Tak, to takie proste.",
          img: "./images/vr-opis_3.png",
        },
        {
          title: "Licencja komercyjna HTC Business Warranty & Services",
          text: "Rozwijaj swój biznes wdrażając najnowocześniejszy system do wirtualnej rzeczywistości VIVE, a dzięki specjalnej ochronie zapewnij sobie bezpieczeństwo. Program dla firm VIVE Enterprise oferuje pakiet licencji na komercyjne wykorzystanie urządzeń oraz dedykowane wsparcie i narzędzia serwisowe dla produktów VIVE. Firma HTC zapewnia dostęp do zaawansowanych systemów zarządzania flotą, skraca czas ewentualnej naprawy, oferuje pomoc techniczną dostępną od ręki oraz bezpieczeństwo po zakupie, dzięki gwarancjom na sprzęt dostosowanym do potrzeb Klienta.",
          img: "./images/vr-opis_4.png",
        },
      ],
    specyfication: {
      color: "black",
      screen: "2 x 3,4",
      resolution: "2880 x 1700 (1440 x 1700 na każde oko)",
      compatybilyty: "PC",
      refresh: "90 Hz",
    },
  },
];

export default PRODUCTS;
