import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "nav_solutions": "Solutions",
            "nav_products": "Products",
            "nav_resources": "Resources",
            "nav_about": "About Us",
            "nav_contact": "Contact",
            "signin": "Sign In",
            "book_demo": "Book a Demo",
            "hero_title": "Secure Your Digital Assets with Confidence",
            "hero_desc": "Proteccio provides comprehensive solutions that help businesses navigate complex regulatory landscapes.",
            "get_started": "Get Started",
            "learn_more": "Learn More"
        }
    },
    te: {
        translation: {
            "nav_solutions": "పరిష్కారాలు",
            "nav_products": "ఉత్పత్తులు",
            "nav_resources": "వనరులు",
            "nav_about": "మా గురించి",
            "nav_contact": "సంప్రదించండి",
            "signin": "సైన్ ఇన్",
            "book_demo": "డెమో బుక్ చేయండి",
            "hero_title": "మీ డిజిటల్ ఆస్తులను నమ్మకంతో సురక్షితం చేసుకోండి",
            "hero_desc": "ప్రొటెక్షియో వ్యాపారాలకు సంక్లిష్టమైన నియంత్రణ ప్రకృతి దృశ్యాలను నావిగేట్ చేయడంలో సహాయపడే సమగ్ర పరిష్కారాలను అందిస్తుంది.",
            "get_started": "ప్రారంభించండి",
            "learn_more": "మరింత తెలుసుకోండి"
        }
    },
    hi: {
        translation: {
            "nav_solutions": "समाधान",
            "nav_products": "उत्पाद",
            "nav_resources": "संसाधन",
            "nav_about": "हमारे बारे में",
            "nav_contact": "संपर्क करें",
            "signin": "साइन इन",
            "book_demo": "डेमो बुक करें",
            "hero_title": "अपने डिजिटल एसेट्स को विश्वास के साथ सुरक्षित करें",
            "hero_desc": "Proteccio व्यापक समाधान प्रदान करता है जो व्यवसायों को जटिल नियामक परिदृश्यों को नेविगेट करने में मदद करता है।",
            "get_started": "शुरू करें",
            "learn_more": "अधिक जानें"
        }
    },
    ur: {
        translation: {
            "nav_solutions": "حل",
            "nav_products": "مصنوعات",
            "nav_resources": "ذرائع",
            "nav_about": "ہمارے بارے میں",
            "nav_contact": "رابطہ کریں",
            "signin": "سائن ان",
            "book_demo": "ڈیمو بک کریں",
            "hero_title": "اپنے ڈیجیٹل اثاثوں کو اعتماد کے ساتھ محفوظ کریں",
            "hero_desc": "Proteccio جامع حل فراہم کرتا ہے جو کاروباروں کو پیچیدہ ریگولیٹری مناظر میں تشریف لے جانے میں مدد کرتا ہے۔",
            "get_started": "شروع کریں",
            "learn_more": "مزید جانیں"
        }
    },
    ko: {
        translation: {
            "nav_solutions": "솔루션",
            "nav_products": "제품",
            "nav_resources": "리소스",
            "nav_about": "회사 소개",
            "nav_contact": "문의하기",
            "signin": "로그인",
            "book_demo": "데모 예약",
            "hero_title": "자신 있게 디지털 자산을 보호하세요",
            "hero_desc": "Proteccio는 기업이 복잡한 규제 환경을 탐색할 수 있도록 돕는 포괄적인 솔루션을 제공합니다.",
            "get_started": "시작하기",
            "learn_more": "더 알아보기"
        }
    },
    zh: {
        translation: {
            "nav_solutions": "解决方案",
            "nav_products": "产品",
            "nav_resources": "资源",
            "nav_about": "关于我们",
            "nav_contact": "联系我们",
            "signin": "登录",
            "book_demo": "预约演示",
            "hero_title": "充满信心地保护您的数字资产",
            "hero_desc": "Proteccio 提供全面的解决方案，帮助企业应对复杂的监管环境。",
            "get_started": "开始使用",
            "learn_more": "了解更多"
        }
    },
    de: {
        translation: {
            "nav_solutions": "Lösungen",
            "nav_products": "Produkte",
            "nav_resources": "Ressourcen",
            "nav_about": "Über uns",
            "nav_contact": "Kontakt",
            "signin": "Anmelden",
            "book_demo": "Demo buchen",
            "hero_title": "Sichern Sie Ihre digitalen Assets mit Vertrauen",
            "hero_desc": "Proteccio bietet umfassende Lösungen, die Unternehmen helfen, komplexe regulatorische Landschaften zu navigieren.",
            "get_started": "Jetzt starten",
            "learn_more": "Mehr erfahren"
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
