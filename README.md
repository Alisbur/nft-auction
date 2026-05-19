## 🖼️ Проект 1: NFT Аукцион (Next.js + TypeScript + FSD)

[![GitHub repo size](https://img.shields.io/github/repo-size/Alisbur/nft-auction?style=flat-square&label=nft-auction)](https://github.com/Alisbur/nft-auction)
[![TypeScript](https://img.shields.io/badge/TypeScript-58.5%25-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![FSD](https://img.shields.io/badge/Architecture-Feature_Sliced-00C9A5?style=flat-square)](https://feature-sliced.design/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)

> Адаптивная страница слайдера NFT аукционов, демонстрирующая современные практики разработки на Next.js и архитектуру FSD. Проект полностью готов к запуску как локально, так и в Docker-контейнере.

### ✨ Ключевые особенности

- 🎨 **Адаптивный дизайн**, точно соответствующий макету в Figma
- 🖼️ **Слайдер с центральным элементом** и симметричными соседними карточками (Swiper)
- 🔄 **Асинхронная загрузка** данных из публичного API CoinGecko
- 📊 **Генерация полей** «Дата окончания» и «Текущая ставка» на клиенте
- 🐳 **Docker-поддержка** для простого развёртывания в любом окружении
- 🧩 **Архитектура FSD** (Feature-Sliced Design) для масштабируемости
- ⚡ **Полный набор инструментов**: ESLint, Prettier, Git hooks

### 🛠️ Технологический стек

- **Фреймворк:** Next.js 16
- **Архитектура:** FSD (Feature-Sliced Design)
- **Язык:** TypeScript
- **Состояние:** Redux Toolkit
- **Стилизация:** SCSS + TailwindCSS (утилиты)
- **Анимации:** Framer Motion
- **Слайдер:** Swiper
- **Асинхронные данные:** SWR, Axios
- **Дата и время:** Day.js

### 🚀 Быстрый старт

*Внимание! Адрес для подключения API содержится в env.template. При установке переименовать файл в .env.local
При создании образа Docker .env.local с адресом будет добавлен автоматически.*

---

## Запуск проекта локально
1. Клонировать репозиторий:  
- git clone https://github.com/Alisbur/nft-auction.git
- cd nft-auction
2. Установить зависимости:
- npm install
3. Добавить .env файл с URL API
- переименовать env.template в .env.local
4. Запустить в режиме разработки: 
- npm run dev
5. Для production сборки:
- npm run build
- npm start

## Запуск проекта в Docker
1. Сборка образа:
- docker build -t nft-auction .
2. Запуск контейнера:
- docker run -p 3000:3000 nft-auction
3. Доступ к приложению:
- http://localhost:3000
    
---

# Структура репозитория

- **app/** — страницы Next.js + Стор Redux
- **widgets/** — переиспользуемые виджеты
- **entities/** — бизнес-логика и API-хуки  
- **shared/** — общие UI-компоненты и утилиты
- **features/** — моки FSD-фич
- **styles/** — глобальные и модульные SCSS стили  
- **Dockerfile** — для сборки и запуска контейнера  

