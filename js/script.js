// هەمان translations object و فانکشنەکانی setTextContent, setPlaceholder, updateAllTexts, changeLanguage
// وەک لە وەڵامی پێشوودا بوو، لێرەدا دووبارەی ناکەمەوە بۆ کورتکردنەوە.
// دڵنیابە کە هەمووی کۆپی دەکەیت.

const translations = {
    en: {
        // ... (هەموو وەرگێڕانەکانی پێشوو) ...
        pageTitle: "Baran Cargo | LS Express Company",
        topHeaderBaranCargo: "LS Company",
        topHeaderInDubai: "In Dubai City",
        topHeaderLSExpress: "LS Express Company",
        topHeaderIraqIran: "Iraq & Iran",
        navBrandText: "LS Express",
        navLinkHome: "Home",
        navLinkAbout: "About",
        navLinkServices: "Services",
        navLinkBranches: "Branches",
        navLinkContact: "Contact",
        navLanguage: "Language",
        navLinkLogin: "Login",
        navLinkRegister: "Register",
        heroTitle: "Track Your Shipment",
        trackingInputPlaceholder: "Enter your tracking number...",
        trackBtnText: "Track",
        heroHint: "You can find your tracking number on your shipping receipt",
        servicesMainTitle: "Our Services",
        serviceSeaFreightTitle: "Sea Freight",
        serviceSeaFreightDesc: "Shipping services from Dubai and China to Iraq ports with reliable tracking and handling.",
        serviceAirFreightTitle: "Air Freight", 
        serviceAirFreightDesc: "Fast and reliable air cargo services connecting major global hubs with Iraq and Iran.", 
        serviceLandTransportTitle: "Land Transport",
        serviceLandTransportDesc: "Ground transportation services between Iraq and Iran with secure and monitored delivery.",
        ctaMainTitle: "Ready to Ship with Confidence?",
        ctaMainText: "Experience reliable shipping across China, Dubai, Iraq, and Iran with our expert logistics service.",
        ctaBtn: "Get a Quote Today",
        branchesMainTitle: "Our Branches",
        branchChinaYiwuTitle: "China / Yiwu City",
        branchChinaYiwuAddr: "浙江义乌市福田银座A座11楼1106室", 
        branchChinaYiwuContact: "18042216637 TAIYEB AZIZI",
        branchDubaiTitle: "Dubai",
        branchDubaiAddr: "Deira - Abubaker Al Siddique Rd, Opposite AG CARS Services - 9A St",
        branchDubaiManagerLabel: "Warehouse Manager:",
        branchDubaiManagerName: "Mr. Adnan",
        branchDubaiWhatsapp: "+971508274405",
        branchDubaiSim: "SIM & WhatsApp",
        branchSulaymaniyahTitle: "Iraq / Sulaymaniyah",
        branchSulaymaniyahAddr: "Kawa Street - Haji Salih Qasim Market - Second Floor - No. 34",
        branchDuhokTitle: "Iraq / Duhok",
        branchDuhokAddr: "Downtown / Cinema Nawroz Street, Nawroz Building, Second Floor",
        branchDuhokPhone1: "009647502901440",
        branchDuhokPhone2: "009647764401440",
        branchMariwanTitle: "Iran / Mariwan",
        branchMariwanAddr: "Navid - Mohammadi Karimi Building",
        branchMariwanPhone: "+98 914 383 0025",
        branchBanehTitle: "Iran / Baneh",
        branchBanehAddr: "Hamid - Ali Mohammadi Building",
        branchBanehPhone: "+98 914 383 0065",
        footerCompanyTitle: "LS Express Company",
        footerCompanyDesc: "LS Express Company for General Trading and Transport / Limited. Providing cargo transportation services between China, Dubai, Iraq and Iran",
        footerQuickLinks: "Quick Links",
        footerLinkHome: "Home",
        footerLinkAbout: "About",
        footerLinkServices: "Services",
        footerLinkBranches: "Branches",
        footerLinkContact: "Contact",
        footerContactTitle: "Contact Us",
        footerEmail: "info@LS-Shaho.com",
        footerPhone: "+964 771 950 1156",
        footerWebsite: "www.barancargo.com",
        footerCopyText: "© 2025 All Rights Reserved:",
        footerCopyLink: "Baran Cargo / LS Express Company",

        // وەرگێڕانی نوێ بۆ مۆداڵی تراکینگ
        trackingDetailsTitle: "Tracking Details",
        trackNoLabel: "Track No.:",
        destinationLabel: "Destination:",
        totalPiecesLabel: "Total Pieces:",
        customerLabel: "Customer:",
        shippingTypeLabel: "Shipping Type:",
        totalBoxesLabel: "Total Boxes:",
        totalWeightLabel: "Total Weight:",
        totalCBMLabel: "Total CBM:",
        currentStatusLabel: "Current Status:",
        listOfBoxesLabel: "List Of Boxes:",
        closeBtn: "Close",
        // نموونەی ستاتوسەکان (بۆ وەرگێڕان)
        statusInWarehouse: "In Warehouse",
        statusReceivedByWarehouse: "Received by warehouse",
        statusShippedViaAir: "Shipped via Air",
        statusCustomsDeclaration: "Customs declaration",
        statusCustomsDeclarationFinished: "Customs declaration finished",
        statusEstimatedDelivery: "Estimated delivery date",
        statusNotDelivered: "Not Delivered"
    },
    ku: {
        // ... (هەموو وەرگێڕانەکانی پێشوو) ...
        pageTitle: "باران کارگۆ | کۆمپانیای ئێڵ ئێس ئێکسپرێس",
        topHeaderBaranCargo: "کۆمپانیای لوتکەی شاهۆ",
        topHeaderInDubai: "لە شاری دوبەی",
        topHeaderLSExpress: "کۆمپانیای ئێڵ ئێس ئێکسپرێس",
        topHeaderIraqIran: "عێراق و ئێران",
        navBrandText: "کۆمپانیای لوتکەی شاهۆ",
        navLinkHome: "سەرەکی",
        navLinkAbout: "دەربارە",
        navLinkServices: "خزمەتگوزارییەکان",
        navLinkBranches: "لقەکان",
        navLinkContact: "پەیوەندی",
        navLanguage: "زمان",
        navLinkLogin: "چوونەژوورەوە",
        navLinkRegister: "تۆمارکردن",
        heroTitle: "بەدواداچوونی بارەکەت بکە",
        trackingInputPlaceholder: "ژمارەی بەدواداچوونەکەت بنووسە...",
        trackBtnText: "گەڕان",
        heroHint: "ژمارەی بەدواداچوونەکەت لەسەر پسووڵەی بارکردنەکەت دەدۆزیتەوە",
        servicesMainTitle: "خزمەتگوزارییەکانمان",
        serviceSeaFreightTitle: "گواستنەوەی دەریایی",
        serviceSeaFreightDesc: "خزمەتگوزارییەکانی بارکردن لە دوبەی و چینەوە بۆ بەندەرەکانی عێراق لەگەڵ بەدواداچوون و مامەڵەی متمانەپێکراو.",
        serviceAirFreightTitle: "گواستنەوەی هەوایی", 
        serviceAirFreightDesc: "خزمەتگوزاری بارکردنی ئاسمانی خێرا و متمانەپێکراو، گرێدانی ناوەندە سەرەکییە جیهانییەکان بە عێراق و ئێران.", 
        serviceLandTransportTitle: "گواستنەوەی وشکانی",
        serviceLandTransportDesc: "خزمەتگوزارییەکانی گواستنەوەی زەمینی نێوان عێراق و ئێران لەگەڵ گەیاندنی پارێزراو و چاودێریکراو.",
        ctaMainTitle: "ئامادەیت بە متمانەوە بارەکانت بنێریت؟",
        ctaMainText: "گواستنەوەی متمانەپێکراو ئەزموون بکە لە سەرانسەری چین، دوبەی، عێراق، و ئێران لەگەڵ خزمەتگوزاری لۆجستی شارەزامان.",
        ctaBtn: "ئەمڕۆ داوای نرخ بکە",
        branchesMainTitle: "لقەکانمان",
        branchChinaYiwuTitle: "چین / شاری ییوو",
        branchChinaYiwuAddr: "浙江义乌市福田银座A座11楼1106室", 
        branchChinaYiwuContact: "١٨٠٤٢٢١٦٦٣٧ تەیب عەزیزی",
        branchDubaiTitle: "دوبەی",
        branchDubaiAddr: "دیرە - شەقامی ئەبوبەکر سدیق، بەرامبەر خزمەتگوزارییەکانی ئەی جی کارس - شەقامی ٩A",
        branchDubaiManagerLabel: "بەڕێوەبەری کۆگا:",
        branchDubaiManagerName: "بەرێز عەدنان",
        branchDubaiWhatsapp: "+٩٧١٥٠٨٢٧٤٤٠٥",
        branchDubaiSim: "سیمکارت و واتسئاپ",
        branchSulaymaniyahTitle: "عێراق / سلێمانی",
        branchSulaymaniyahAddr: "شەقامی کاوە - بازاڕی حاجی ساڵحی قاسم - نهۆمی دووەم - ژمارە ٣٤",
        branchDuhokTitle: "عێراق / دهۆک",
        branchDuhokAddr: "ناوشار / شەقامی سینەما نەورۆز، باڵەخانەی نەورۆز، نهۆمی دووەم",
        branchDuhokPhone1: "٠٠٩٦٤٧٥٠٢٩٠١٤٤٠",
        branchDuhokPhone2: "٠٠٩٦٤٧٧٦٤٤٠١٤٤٠",
        branchMariwanTitle: "ئێران / مەریوان",
        branchMariwanAddr: "نەوید - باڵەخانەی محەمەدی کەریمی",
        branchMariwanPhone: "+٩٨٩١٤٣٨٣٠٠٢٥",
        branchBanehTitle: "ئێران / بانە",
        branchBanehAddr: "حەمید - باڵەخانەی عەلی محەمەدی",
        branchBanehPhone: "+٩٨٩١٤٣٨٣٠٠٦٥",
        footerCompanyTitle: "کۆمپانیای ئێڵ ئێس ئێکسپرێس",
        footerCompanyDesc: "کۆمپانیای ئێڵ ئێس ئێکسپرێس بۆ بازرگانی گشتی و گواستنەوە / سنووردار. پێشکەشکردنی خزمەتگوزارییەکانی گواستنەوەی بار لە نێوان چین، دوبەی، عێراق و ئێران",
        footerQuickLinks: "بەستەرە خێراکان",
        footerLinkHome: "سەرەکی",
        footerLinkAbout: "دەربارە",
        footerLinkServices: "خزمەتگوزارییەکان",
        footerLinkBranches: "لقەکان",
        footerLinkContact: "پەیوەندی",
        footerContactTitle: "پەیوەندیمان پێوە بکە",
        footerEmail: "info@barancargo.com",
        footerPhone: "+٩٦٤٧٧٠٢٤٢٠٧٧٠",
        footerWebsite: "www.barancargo.com",
        footerCopyText: "© ٢٠٢٥ هەموو مافەکان پارێزراون:",
        footerCopyLink: "باران کارگۆ / کۆمپانیای ئێڵ ئێس ئێکسپرێس",

        // وەرگێڕانی نوێ
        trackingDetailsTitle: "وردەکارییەکانی بەدواداچوون",
        trackNoLabel: "ژمارەی تراک:",
        destinationLabel: "مەبەست:",
        totalPiecesLabel: "کۆی پارچەکان:",
        customerLabel: "کڕیار:",
        shippingTypeLabel: "جۆری گواستنەوە:",
        totalBoxesLabel: "کۆی کارتۆنەکان:",
        totalWeightLabel: "کۆی کێش:",
        totalCBMLabel: "کۆی CBM:",
        currentStatusLabel: "دۆخی ئێستا:",
        listOfBoxesLabel: "لیستی کارتۆنەکان:",
        closeBtn: "داخستن",
        statusInWarehouse: "لە کۆگادایە",
        statusReceivedByWarehouse: "گەیشتە کۆگا لەلایەن",
        statusShippedViaAir: "بە ڕێگەی ئاسمانی بارکرا",
        statusCustomsDeclaration: "بەیانی گومرگی",
        statusCustomsDeclarationFinished: "بەیانی گومرگی تەواوبوو",
        statusEstimatedDelivery: "کاتی پێشبینیکراوی گەیشتن",
        statusNotDelivered: "نەگەیشتووە"
    },
    ar: {
        // ... (هەموو وەرگێڕانەکانی پێشوو) ...
        pageTitle: "باران كارجو | شركة ال اس اكسبرس",
        topHeaderBaranCargo: "باران كارجو",
        topHeaderInDubai: "في مدينة دبي",
        topHeaderLSExpress: "شركة ال اس اكسبرس",
        topHeaderIraqIran: "العراق وإيران",
        navBrandText: "شرکة ال اس اكسبرس",
        navLinkHome: "الرئيسية",
        navLinkAbout: "حولنا",
        navLinkServices: "خدماتنا",
        navLinkBranches: "فروعنا",
        navLinkContact: "اتصل بنا",
        navLanguage: "اللغة",
        navLinkLogin: "تسجيل الدخول",
        navLinkRegister: "تسجيل",
        heroTitle: "تتبع شحنتك",
        trackingInputPlaceholder: "أدخل رقم التتبع الخاص بك...",
        trackBtnText: "تتبع",
        heroHint: "يمكنك العثور على رقم التتبع الخاص بك على إيصال الشحن",
        servicesMainTitle: "خدماتنا",
        serviceSeaFreightTitle: "الشحن البحري",
        serviceSeaFreightDesc: "خدمات الشحن من دبي والصين إلى موانئ العراق مع تتبع ومناولة موثوقة.",
        serviceAirFreightTitle: "الشحن الجوي", 
        serviceAirFreightDesc: "خدمات شحن جوي سريعة وموثوقة تربط بين المراكز العالمية الرئيسية والعراق وإيران.", 
        serviceLandTransportTitle: "النقل البري",
        serviceLandTransportDesc: "خدمات النقل البري بين العراق وإيران مع تسليم آمن ومراقب.",
        ctaMainTitle: "هل أنت مستعد للشحن بثقة؟",
        ctaMainText: "جرب شحنًا موثوقًا عبر الصين ودبي والعراق وإيران من خلال خدمتنا اللوجستية المتخصصة.",
        ctaBtn: "احصل على عرض سعر اليوم",
        branchesMainTitle: "فروعنا",
        branchChinaYiwuTitle: "الصين / مدينة ييوو",
        branchChinaYiwuAddr: "浙江义乌市福田银座A座11楼1106室", 
        branchChinaYiwuContact: "18042216637 طيب عزيزي",
        branchDubaiTitle: "دبي",
        branchDubaiAddr: "ديرة - طريق أبو بكر الصديق، مقابل خدمات إيه جي كارز - شارع ٩A",
        branchDubaiManagerLabel: "مدير المستودع:",
        branchDubaiManagerName: "السيد عدنان",
        branchDubaiWhatsapp: "+٩٧١٥٠٨٢٧٤٤٠٥",
        branchDubaiSim: "شريحة اتصال وواتساب",
        branchSulaymaniyahTitle: "العراق / السليمانية",
        branchSulaymaniyahAddr: "شارع كاوە - سوق حاجي صالح قاسم - الطابق الثاني - رقم ٣٤",
        branchDuhokTitle: "العراق / دهوك",
        branchDuhokAddr: "وسط المدينة / شارع سينما نوروز، بناية نوروز، الطابق الثاني",
        branchDuhokPhone1: "٠٠٩٦٤٧٥٠٢٩٠١٤٤٠",
        branchDuhokPhone2: "٠٠٩٦٤٧٧٦٤٤٠١٤٤٠",
        branchMariwanTitle: "إيران / مريوان",
        branchMariwanAddr: "نويد - بناية محمدي كريمي",
        branchMariwanPhone: "+٩٨٩١٤٣٨٣٠٠٢٥",
        branchBanehTitle: "إيران / بانه",
        branchBanehAddr: "حميد - بناية علي محمدي",
        branchBanehPhone: "+٩٨٩١٤٣٨٣٠٠٦٥",
        footerCompanyTitle: "شركة ال اس اكسبرس",
        footerCompanyDesc: "شركة ال اس اكسبرس للتجارة العامة والنقل / محدودة. توفير خدمات نقل البضائع بين الصين ودبي والعراق وإيران",
        footerQuickLinks: "روابط سريعة",
        footerLinkHome: "الرئيسية",
        footerLinkAbout: "حولنا",
        footerLinkServices: "خدماتنا",
        footerLinkBranches: "فروعنا",
        footerLinkContact: "اتصل بنا",
        footerContactTitle: "اتصل بنا",
        footerEmail: "info@barancargo.com",
        footerPhone: "+٩٦٤٧٧٠٢٤٢٠٧٧٠",
        footerWebsite: "www.barancargo.com",
        footerCopyText: "© ٢٠٢٥ جميع الحقوق محفوظة:",
        footerCopyLink: "باران كارجو / شركة ال اس اكسبرس",

        // وەرگێڕانی نوێ
        trackingDetailsTitle: "تفاصيل التتبع",
        trackNoLabel: "رقم التتبع:",
        destinationLabel: "الوجهة:",
        totalPiecesLabel: "إجمالي القطع:",
        customerLabel: "العميل:",
        shippingTypeLabel: "نوع الشحن:",
        totalBoxesLabel: "إجمالي الصناديق:",
        totalWeightLabel: "الوزن الإجمالي:",
        totalCBMLabel: "إجمالي CBM:",
        currentStatusLabel: "الحالة الحالية:",
        listOfBoxesLabel: "قائمة الصناديق:",
        closeBtn: "إغلاق",
        statusInWarehouse: "في المستودع",
        statusReceivedByWarehouse: "تم الاستلام بواسطة المستودع",
        statusShippedViaAir: "شُحنت جواً",
        statusCustomsDeclaration: "تصريح جمركي",
        statusCustomsDeclarationFinished: "تم إنهاء التصريح الجمركي",
        statusEstimatedDelivery: "تاريخ التسليم المتوقع",
        statusNotDelivered: "لم يتم التسليم"
    },
    fa: {
        // ... (هەموو وەرگێڕانەکانی پێشوو) ...
        pageTitle: "باران کارگو | شرکت ال اس اکسپرس",
        topHeaderBaranCargo: "باران کارگو",
        topHeaderInDubai: "در شهر دبی",
        topHeaderLSExpress: "شرکت ال اس اکسپرس",
        topHeaderIraqIran: "عراق و ایران",
        navBrandText: "شرکت ال اس اکسپرس",
        navLinkHome: "صفحه اصلی",
        navLinkAbout: "درباره ما",
        navLinkServices: "خدمات",
        navLinkBranches: "شعبات",
        navLinkContact: "تماس با ما",
        navLanguage: "زبان",
        navLinkLogin: "ورود",
        navLinkRegister: "ثبت نام",
        heroTitle: "محموله خود را پیگیری کنید",
        trackingInputPlaceholder: "شماره پیگیری خود را وارد کنید...",
        trackBtnText: "پیگیری",
        heroHint: "می توانید شماره پیگیری خود را در رسید حمل و نقل خود پیدا کنید",
        servicesMainTitle: "خدمات ما",
        serviceSeaFreightTitle: "حمل و نقل دریایی",
        serviceSeaFreightDesc: "خدمات حمل و نقل از دبی و چین به بنادر عراق با پیگیری و جابجایی قابل اعتماد.",
        serviceAirFreightTitle: "حمل و نقل هوایی", 
        serviceAirFreightDesc: "خدمات باربری هوایی سریع و قابل اعتماد، اتصال مراکز اصلی جهانی به عراق و ایران.", 
        serviceLandTransportTitle: "حمل و نقل زمینی",
        serviceLandTransportDesc: "خدمات حمل و نقل زمینی بین عراق و ایران با تحویل امن و تحت نظارت.",
        ctaMainTitle: "آماده ارسال با اطمینان هستید؟",
        ctaMainText: "حمل و نقل قابل اعتماد در سراسر چین، دبی، عراق و ایران را با خدمات لجستیک متخصص ما تجربه کنید.",
        ctaBtn: "همین امروز قیمت بگیرید",
        branchesMainTitle: "شعبات ما",
        branchChinaYiwuTitle: "چین / شهر ایوو",
        branchChinaYiwuAddr: "浙江义乌市福田银座A座11楼1106室", 
        branchChinaYiwuContact: "۱۸۰۴۲۲۱۶۶۳۷ طیب عزیزی",
        branchDubaiTitle: "دبی",
        branchDubaiAddr: "دیره - خیابان ابوبکر صدیق، روبروی خدمات ای جی کارز - خیابان ۹A",
        branchDubaiManagerLabel: "مدیر انبار:",
        branchDubaiManagerName: "آقای عدنان",
        branchDubaiWhatsapp: "+۹۷۱۵۰۸۲۷۴۴۰۵",
        branchDubaiSim: "سیم کارت و واتس اپ",
        branchSulaymaniyahTitle: "عراق / سلیمانیه",
        branchSulaymaniyahAddr: "خیابان کاوه - بازار حاجی صالح قاسم - طبقه دوم - پلاک ٣٤",
        branchDuhokTitle: "عراق / دهوک",
        branchDuhokAddr: "مرکز شهر / خیابان سینما نوروز، ساختمان نوروز، طبقه دوم",
        branchDuhokPhone1: "۰۰۹۶۴۷۵۰۲۹۰۱۴۴۰",
        branchDuhokPhone2: "۰۰۹۶۴۷۷۶۴۴۰۱۴۴۰",
        branchMariwanTitle: "ایران / مریوان",
        branchMariwanAddr: "نوید - ساختمان محمدی کریمی",
        branchMariwanPhone: "+۹۸۹۱۴۳۸۳۰۰۲۵",
        branchBanehTitle: "ایران / بانه",
        branchBanehAddr: "حمید - ساختمان علی محمدی",
        branchBanehPhone: "+۹۸۹۱۴۳۸۳۰۰۶۵",
        footerCompanyTitle: "شرکت ال اس اکسپرس",
        footerCompanyDesc: "شرکت ال اس اکسپرس برای تجارت عمومی و حمل و نقل / محدود. ارائه خدمات حمل بار بین چین، دبی، عراق و ایران",
        footerQuickLinks: "لینک های سریع",
        footerLinkHome: "صفحه اصلی",
        footerLinkAbout: "درباره ما",
        footerLinkServices: "خدمات",
        footerLinkBranches: "شعبات",
        footerLinkContact: "تماس با ما",
        footerContactTitle: "تماس با ما",
        footerEmail: "info@barancargo.com",
        footerPhone: "+۹۶۴۷۷۰۲۴۲۰۷۷۰",
        footerWebsite: "www.barancargo.com",
        footerCopyText: "© ۲۰۲۵ تمام حقوق محفوظ است:",
        footerCopyLink: "باران کارگو / شرکت ال اس اکسپرس",

        // وەرگێڕانی نوێ
        trackingDetailsTitle: "جزئیات پیگیری",
        trackNoLabel: "شماره پیگیری:",
        destinationLabel: "مقصد:",
        totalPiecesLabel: "تعداد کل قطعات:",
        customerLabel: "مشتری:",
        shippingTypeLabel: "نوع حمل:",
        totalBoxesLabel: "تعداد کل جعبه ها:",
        totalWeightLabel: "وزن کل:",
        totalCBMLabel: "CBM کل:",
        currentStatusLabel: "وضعیت فعلی:",
        listOfBoxesLabel: "لیست جعبه ها:",
        closeBtn: "بستن",
        statusInWarehouse: "در انبار",
        statusReceivedByWarehouse: "دریافت شده توسط انبار",
        statusShippedViaAir: "ارسال شده از طریق هوایی",
        statusCustomsDeclaration: "اظهارنامه گمرکی",
        statusCustomsDeclarationFinished: "اظهارنامه گمرکی تکمیل شد",
        statusEstimatedDelivery: "تاریخ تخمینی تحویل",
        statusNotDelivered: "تحویل داده نشده"
    }
};

function setTextContent(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

function setPlaceholder(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.placeholder = text;
    }
}

// Helper function to translate elements with data-key attribute
function translateElementsByDataKey(lang) {
    const elements = document.querySelectorAll('.translate');
    elements.forEach(el => {
        const key = el.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
        
function updateAllTexts(lang) {
    const currentTranslations = translations[lang];
    if (!currentTranslations) {
        console.error(`Translations for language '${lang}' not found.`);
        return;
    }

    document.title = currentTranslations.pageTitle;

    const elementsToTranslate = {
        topHdrBaranCargo: currentTranslations.topHeaderBaranCargo,
        topHdrInDubai: currentTranslations.topHeaderInDubai,
        topHdrLSExpress: currentTranslations.topHeaderLSExpress,
        topHdrIraqIran: currentTranslations.topHeaderIraqIran,
        navBrandText: currentTranslations.navBrandText,
        navLinkHome: currentTranslations.navLinkHome,
        navLinkAbout: currentTranslations.navLinkAbout,
        navLinkServices: currentTranslations.navLinkServices,
        navLinkBranches: currentTranslations.navLinkBranches,
        navLinkContact: currentTranslations.navLinkContact,
        navLanguage: currentTranslations.navLanguage,
        navLinkLogin: currentTranslations.navLinkLogin,
        navLinkRegister: currentTranslations.navLinkRegister,
        heroTitle: currentTranslations.heroTitle,
        trackBtnText: currentTranslations.trackBtnText,
        heroHint: currentTranslations.heroHint,
        servicesMainTitle: currentTranslations.servicesMainTitle,
        serviceSeaFreightTitle: currentTranslations.serviceSeaFreightTitle,
        serviceSeaFreightDesc: currentTranslations.serviceSeaFreightDesc,
        serviceAirFreightTitle: currentTranslations.serviceAirFreightTitle,
        serviceAirFreightDesc: currentTranslations.serviceAirFreightDesc,
        serviceLandTransportTitle: currentTranslations.serviceLandTransportTitle,
        serviceLandTransportDesc: currentTranslations.serviceLandTransportDesc,
        ctaMainTitle: currentTranslations.ctaMainTitle,
        ctaMainText: currentTranslations.ctaMainText,
        ctaBtn: currentTranslations.ctaBtn,
        branchesMainTitle: currentTranslations.branchesMainTitle,
        branchChinaYiwuTitle: currentTranslations.branchChinaYiwuTitle,
        branchChinaYiwuAddr: currentTranslations.branchChinaYiwuAddr,
        branchChinaYiwuContact: currentTranslations.branchChinaYiwuContact,
        branchDubaiTitle: currentTranslations.branchDubaiTitle,
        branchDubaiAddr: currentTranslations.branchDubaiAddr,
        branchDubaiManagerLabel: currentTranslations.branchDubaiManagerLabel,
        branchDubaiManagerName: currentTranslations.branchDubaiManagerName,
        branchDubaiWhatsapp: currentTranslations.branchDubaiWhatsapp,
        branchDubaiSim: currentTranslations.branchDubaiSim,
        branchSulaymaniyahTitle: currentTranslations.branchSulaymaniyahTitle,
        branchSulaymaniyahAddr: currentTranslations.branchSulaymaniyahAddr,
        branchDuhokTitle: currentTranslations.branchDuhokTitle,
        branchDuhokAddr: currentTranslations.branchDuhokAddr,
        branchDuhokPhone1: currentTranslations.branchDuhokPhone1,
        branchDuhokPhone2: currentTranslations.branchDuhokPhone2,
        branchMariwanTitle: currentTranslations.branchMariwanTitle,
        branchMariwanAddr: currentTranslations.branchMariwanAddr,
        branchMariwanPhone: currentTranslations.branchMariwanPhone,
        branchBanehTitle: currentTranslations.branchBanehTitle,
        branchBanehAddr: currentTranslations.branchBanehAddr,
        branchBanehPhone: currentTranslations.branchBanehPhone,
        footerCompanyTitle: currentTranslations.footerCompanyTitle,
        footerCompanyDesc: currentTranslations.footerCompanyDesc,
        footerQuickLinks: currentTranslations.footerQuickLinks,
        footerLinkHome: currentTranslations.footerLinkHome,
        footerLinkAbout: currentTranslations.footerLinkAbout,
        footerLinkServices: currentTranslations.footerLinkServices,
        footerLinkBranches: currentTranslations.footerLinkBranches,
        footerLinkContact: currentTranslations.footerLinkContact,
        footerContactTitle: currentTranslations.footerContactTitle,
        footerEmail: currentTranslations.footerEmail,
        footerPhone: currentTranslations.footerPhone,
        footerWebsite: currentTranslations.footerWebsite,
        footerCopyText: currentTranslations.footerCopyText,
        footerCopyLink: currentTranslations.footerCopyLink,
    };

    for (const id in elementsToTranslate) {
        setTextContent(id, elementsToTranslate[id]);
    }
    
    setPlaceholder('trackingInput', currentTranslations.trackingInputPlaceholder);
    translateElementsByDataKey(lang); // Translate modal static texts
}
// --- New Logic for Track Button on Index Page ---
const trackShipmentBtnOnIndex = document.getElementById('trackShipmentBtnOnIndex');

if (trackShipmentBtnOnIndex) {
    trackShipmentBtnOnIndex.addEventListener('click', () => {
        const trackingNumberInput = document.getElementById('trackingInput');
        const trackingNumber = trackingNumberInput.value.trim();
        const currentTranslations = translations[currentLang] || translations.en;


        if (trackingNumber) {
            // چوونە لاپەڕەی ئەنجامەکان لەگەڵ ژمارەی تراکینگ وەک پارامیتەر
            window.location.href = `tracking-result.html?trackNo=${encodeURIComponent(trackingNumber)}`;
        } else {
            alert(currentTranslations.trackingInputPlaceholder || "Please enter a tracking number.");
            trackingNumberInput.focus();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ku';
    changeLanguage(savedLang); // ئەمە updateAllTexts و updateTrackingResultPageLanguage بانگ دەکات
});
let currentLang = 'ku'; // Default language

function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    // ... ناوەوەی فانکشنی changeLanguage ...
    updateTrackingResultPageLanguage(lang); // بۆ ئەوەی لاپەڕەی تراکینگیش زمانەکەی بگۆڕدرێت
    localStorage.setItem('selectedLanguage', lang);
    if (lang === 'ar' || lang === 'fa' || lang === 'ku') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
    }
    
    updateAllTexts(lang);
    localStorage.setItem('selectedLanguage', lang);

    const dropdownItems = document.querySelectorAll('#languageDropdownMenu .dropdown-item');
    dropdownItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick') === `changeLanguage('${lang}')`) {
            item.classList.add('active');
        }
    });
}

// --- Tracking Modal Logic ---
const trackShipmentBtn = document.getElementById('trackShipmentBtn');
const trackingResultModalElement = document.getElementById('trackingResultModal');
const trackingResultModal = new bootstrap.Modal(trackingResultModalElement);

// نموونەی داتای تراکینگ (لەمەودوا دەبێت لە APIـیەوە بێت)
const sampleTrackingData = {
    trackNo: "B9874-05-0315309",
    customer: "HAWRE AHMED HADI-IR",
    destination: "Erbil",
    shippingType: "By Shipping by air",
    totalPieces: "1 PCs",
    totalBoxes: "1 boxes",
    totalWeight: "11.7 KG",
    totalCBM: "0.0721 m3",
    currentStatusKey: "statusNotDelivered", // Key for translation
    timeline: [
        { date: "2025-05-13", time: "13:57:25", statusKey: "statusInWarehouse", details: "Received by warehouse | Guangzhou-Air", by: "Akai Wang | China", type: "completed" },
        { date: "2025-05-15", time: "10:27:12", statusKey: "statusShippedViaAir", details: "Air Freight No. | 85042 HK-ISU | HK-ISU-D40606", by: "Apple Li | China", type: "completed" },
        { date: "2025-05-19", time: "15:03:21", statusKey: "statusCustomsDeclaration", details: "Customs declaration finished | In Iraq", by: "Aveen Asker | Erbil", type: "completed" },
        { date: "2025-05-19", time: "17:20:38", statusKey: "statusInWarehouse", details: "Received by warehouse | Sulaymania", by: "Hake Sulaymaniyah", type: "completed" },
        { date: "2025-05-19", time: "17:23:57", statusKey: "statusInWarehouse", details: "Received by warehouse | Sulaymania", by: "Hake Sulaymaniyah", type: "completed" },
        { date: "2025-05-19", time: "18:04:10", statusKey: "statusShippedViaAir", details: "Air Freight No. | ISU EBL 534 | ISU - Erbil-A30527", by: "Hogir Sulamaniyah", type: "completed" },
        { date: "2025-05-23", time: "00:00:00", statusKey: "statusEstimatedDelivery", details: "2025-05-23 00:00:00", by: "", type: "estimated" }
    ],
    boxes: [
        { id: "TY49", descriptionKey: "viscometer 和设计", count: 1 } // descriptionKey بۆ وەرگێڕان یان ناوی وەک خۆی
    ]
};

function populateTrackingModal(data) {
    const langTranslations = translations[currentLang] || translations.en;

    document.getElementById('modalTrackNo').textContent = data.trackNo;
    document.getElementById('modalCustomer').textContent = data.customer;
    document.getElementById('modalDestination').textContent = data.destination;
    document.getElementById('modalShippingType').textContent = data.shippingType;
    document.getElementById('modalTotalPieces').textContent = data.totalPieces;
    document.getElementById('modalTotalBoxes').textContent = data.totalBoxes;
    document.getElementById('modalTotalWeight').textContent = data.totalWeight;
    document.getElementById('modalTotalCBM').textContent = data.totalCBM;
    document.getElementById('modalCurrentStatus').textContent = langTranslations[data.currentStatusKey] || data.currentStatusKey.replace('status','');


    const timelineContainer = trackingResultModalElement.querySelector('.tracking-timeline');
    timelineContainer.innerHTML = ''; // Clear previous timeline

    data.timeline.forEach(item => {
        const itemStatus = langTranslations[item.statusKey] || item.statusKey.replace('status','');
        const timelineItemDiv = document.createElement('div');
        timelineItemDiv.classList.add('timeline-item');
        if (item.type === "estimated") timelineItemDiv.classList.add('estimated-step');
        else if (item.type === "current") timelineItemDiv.classList.add('current-step'); // If you have a 'current' type
        else timelineItemDiv.classList.add('completed-step');


        timelineItemDiv.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date} ${item.time}</div>
                <div class="timeline-status">${itemStatus}</div>
                <div class="timeline-details">${item.details}</div>
                ${item.by ? `<div class="timeline-by">By: ${item.by}</div>` : ''}
            </div>
        `;
        timelineContainer.appendChild(timelineItemDiv);
    });

    const boxesContainer = document.getElementById('modalListOfBoxes');
    boxesContainer.innerHTML = ''; // Clear previous boxes
    data.boxes.forEach(box => {
        // بۆ نموونە، ئەگەر descriptionKey هەبوو و لە وەرگێڕانەکاندا هەبوو، بەکاریبێنە
        const boxDesc = langTranslations[box.descriptionKey] || box.descriptionKey || "N/A"; 
        const boxItemDiv = document.createElement('div');
        boxItemDiv.classList.add('box-item');
        boxItemDiv.innerHTML = `
            <div>
                <span class="box-id">${box.id}</span>
                <span class="box-desc ms-2">${boxDesc}</span>
            </div>
            <span class="box-count">${box.count}</span>
        `;
        boxesContainer.appendChild(boxItemDiv);
    });
    
    translateElementsByDataKey(currentLang); // Re-translate static parts of the modal after populating dynamic parts
}


if (trackShipmentBtn) {
    trackShipmentBtn.addEventListener('click', () => {
        const trackingNumber = document.getElementById('trackingInput').value;
        // لێرەدا دەبێت داواکاری بۆ API بنێردرێت بە trackingNumber
        // و ئەنجامەکەی بخرێتە ناو populateTrackingModal
        // ئێستا تەنها نموونەی داتاکان بەکاردێنین
        if (trackingNumber) { // Simple check if input is not empty
             populateTrackingModal(sampleTrackingData);
             trackingResultModal.show();
        } else {
            // Optionally show an error if tracking number is empty
            alert(translations[currentLang].trackingInputPlaceholder || "Please enter a tracking number.");
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ku'; // Default to Kurdish
    changeLanguage(savedLang);
});