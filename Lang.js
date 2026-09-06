// ============================================================
// GLOBAL BILINGUAL TRANSLATION ENGINE (HINDI & ENGLISH)
// ============================================================

const translations = {
  hi: {
    brandTitle: "काव्य सागर और कहानी",
    navHome: "होम",
    navPoem: "कविताएँ",
    navStory: "कहानी",
    navDiary: "डायरी",
    navInspiration: "प्रेरणादायक बातें",
    myProfile: "My Profile",
    savedItems: "Saved Items",
    myWorks: "My Works",
    contactUs: "Contact us",
    logout: "Logout",
    categoriesHeading: "श्रेणियाँ (Categories)",
    catLove: "Love (प्रेम)",
    catFriendship: "Friendship (दोस्ती)",
    catNature: "Nature (प्रकृति)",
    catReligious: "Religious (भक्ति)",
    catSad: "Sad (दर्द)",
    btnSave: "🔖 सहेजें",
    btnShare: "🔗 साझा करें",
    btnComment: "💬 टिप्पणी",
    aboutUs: "About us",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms and Conditions",
    otherLinks: "Other Links",
    close: "✕ Close"
  },
  en: {
    brandTitle: "Kavya Sagar & Stories",
    navHome: "Home",
    navPoem: "Poems",
    navStory: "Stories",
    navDiary: "Diaries",
    navInspiration: "Inspirational",
    myProfile: "My Profile",
    savedItems: "Saved Items",
    myWorks: "My Works",
    contactUs: "Contact Us",
    logout: "Logout",
    categoriesHeading: "Categories",
    catLove: "Love",
    catFriendship: "Friendship",
    catNature: "Nature",
    catReligious: "Devotion",
    catSad: "Heartbreak",
    btnSave: "🔖 Save",
    btnShare: "🔗 Share",
    btnComment: "💬 Comment",
    aboutUs: "About Us",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms and Conditions",
    otherLinks: "Other Links",
    close: "✕ Close"
  }
};

function applyLanguage(lang) {
  const selectedLang = (lang === 'en') ? 'en' : 'hi';
  localStorage.setItem('site_lang', selectedLang);
  document.documentElement.lang = selectedLang;

  const dict = translations[selectedLang];

  // 1. Update all static elements carrying data-lang-key
  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if (dict && dict[key]) {
      el.innerText = dict[key];
    }
  });

  // 2. Sync language dropdown value if present
  const dropdown = document.getElementById('globalLangSelect');
  if (dropdown) {
    dropdown.value = selectedLang;
  }

  // 3. Dispatch broadcast event for dynamic components (like Swiper cards)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: selectedLang } }));
}

// Ensure initial run as soon as DOM loads
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('site_lang') || 'hi';
  applyLanguage(savedLang);
});