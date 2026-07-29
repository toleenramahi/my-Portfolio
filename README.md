# Toleen Al-Ramahi — Portfolio

## كيف تشغلي المشروع (VS Code)

1. فكي ضغط الملف وافتحي الفولدر جوا VS Code (File → Open Folder)
2. افتحي Terminal جوا VS Code (Ctrl + `)
3. ثبتي المكتبات:
   ```bash
   npm install
   ```
4. شغلي السيرفر المحلي:
   ```bash
   npm run dev
   ```
5. افتحي الرابط يلي رح يطلعلك بالـ Terminal (عادة `http://localhost:5173`)

## بنية الملفات

```
toleen-portfolio/
├── index.html          ← نقطة الدخول HTML
├── package.json         ← المكتبات المستخدمة
├── vite.config.js        ← إعدادات Vite
├── tailwind.config.js    ← إعدادات Tailwind
├── postcss.config.js
└── src/
    ├── main.jsx          ← نقطة دخول React
    ├── index.css         ← Tailwind + استايلات عامة
    └── App.jsx           ← الصفحة نفسها (المحتوى + التصميم)
```

## تعديل المحتوى

كل المحتوى (المشاريع، السكيلز، البيانات الشخصية) موجود بأول ملف `src/App.jsx`
بمصفوفات `projects`, `skillGroups`, `certificates` — عدلي فيهم مباشرة.

## نشر الموقع (Deploy)

أسهل طريقة: [Vercel](https://vercel.com) أو [Netlify](https://netlify.com) —
اربطي حساب GitHub، ارفعي المشروع كـ repo، واختاريه من هناك، بينشر أوتوماتيك.
