# 🎬 React Movie Search App

Müasir və responsiv dizayna malik **React Movie Search** tətbiqi. Layihə istifadəçilərə **OMDb API** vasitəsilə filmləri axtarmaq, nəticələrə baxmaq və səhifələr arasında keçid etmək imkanı yaradır.

## 🚀 İstifadə olunan texnologiyalar

* React
* Vite
* JavaScript (ES6+)
* CSS3
* OMDb API
* Fetch API
* React Hooks (`useState`, `useEffect`)
* Custom Hooks (`useDebounce`, `useFetch`)

---

## ✨ Xüsusiyyətlər

* 🔍 Film adına görə axtarış
* ⏱️ Debounce ilə optimallaşdırılmış axtarış
* 📄 Pagination (səhifələmə)
* ⌛ Loading state
* ⚠️ Error state
* 📭 Empty state
* ❌ Köhnə API sorğularının `AbortController` ilə ləğvi
* 🪝 Custom hook-larla kodun təşkili
* 📱 Responsiv dizayn

---

## 📁 Layihə strukturu

```text
src/
│
├── components/
│   ├── Card.jsx
│   ├── Pagination.jsx
│   ├── ResultsList.jsx
│   └── SearchBar.jsx
│
├── hooks/
│   ├── useDebounce.js
│   └── useFetch.js
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 👨‍💻 Müəllif

**Məhəmməd İbrahimli**
