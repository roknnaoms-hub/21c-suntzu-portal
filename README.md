# 21세기 현대인을 위한 손자병법 웹포털

『21세기 현대인을 위한 손자병법』의 핵심 내용을 웹 기반으로 제공하기 위한 정적 웹포털입니다.

## 주요 기능

- 도서 소개
- 손자병법 13편 핵심 해설
- 원문·독음·해석·교훈 카드
- 현대 적용 프레임
- 핵심 개념어 해설
- 통합 검색
- GitHub Pages 자동 배포

## 기술 스택

- React
- Vite
- Tailwind CSS
- Fuse.js
- GitHub Pages

## 설치 및 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## GitHub Pages 배포

1. GitHub 저장소를 `21c-suntzu-portal`로 생성합니다.
2. `vite.config.js`의 `base` 값이 `/21c-suntzu-portal/`인지 확인합니다.
3. GitHub 저장소 Settings → Pages → Source를 `GitHub Actions`로 설정합니다.
4. main 브랜치에 push하면 자동 배포됩니다.

```bash
git init
git add .
git commit -m "Initial commit: 21c Sunzi portal"
git branch -M main
git remote add origin https://github.com/<USER>/21c-suntzu-portal.git
git push -u origin main
```

## 저작권

본 저장소의 소스코드는 배포 목적에 맞게 사용할 수 있으나, 도서 원고·해설·편집 콘텐츠의 저작권은 저자에게 있습니다. 공개 저장소에는 전체 원고 PDF를 올리지 않는 것을 권장합니다.
