# 조용한 동네 카페 - 랜딩 페이지

조용한 동네 카페의 오픈 전 홍보용 랜딩 페이지입니다. 시끄럽지 않고 혼자 오기 좋은 카페의 브랜드 컨셉을 담은 미니멀하고 차분한 디자인의 웹사이트입니다.

## 프로젝트 소개

이 프로젝트는 조용한 동네 카페의 오픈 전 홍보를 위한 랜딩 페이지입니다. 브랜드의 핵심 가치인 **조용함**, **미니멀함**, **편안함**을 웹사이트에 반영하여, 과하지 않은 로컬 감성과 오래 머물러도 눈치 보이지 않는 여유로운 공간을 소개합니다.

## 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험
- **부드러운 스크롤**: 앵커 링크 클릭 시 부드러운 스크롤 애니메이션
- **모바일 네비게이션**: 햄버거 메뉴를 통한 모바일 친화적 네비게이션
- **접근성**: WCAG 2.1 AA 준수를 목표로 한 키보드 네비게이션 및 스크린 리더 지원
- **성능 최적화**: 순수 HTML/CSS/JavaScript로 구현된 가벼운 구조

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: CSS Custom Properties를 활용한 변수 기반 스타일링
- **Vanilla JavaScript**: 프레임워크 없이 순수 JavaScript로 구현
- **Google Fonts**: Noto Serif KR 폰트 사용

## 파일 구조

```
/
├── index.html          # 메인 랜딩 페이지
├── menu.html           # 메뉴 페이지 (오픈 후)
├── space.html          # 공간/사진 페이지 (오픈 후)
├── styles.css          # 메인 스타일시트
├── main.js             # 메인 JavaScript
├── assets/
│   └── image/          # 이미지 파일들
│       ├── cafe-image1.png
│       └── cafe-image2.png
└── README.md           # 프로젝트 문서
```

## 설치 및 실행

이 프로젝트는 별도의 빌드 과정 없이 바로 실행할 수 있습니다.

### 로컬 서버 실행

1. 프로젝트를 클론하거나 다운로드합니다.

2. 로컬 서버를 실행합니다:

   **Python 3 사용:**
   ```bash
   python -m http.server 8000
   ```

   **Node.js (http-server) 사용:**
   ```bash
   npx http-server -p 8000
   ```

   **VS Code Live Server 확장 사용:**
   - `index.html` 파일을 우클릭하고 "Open with Live Server" 선택

3. 브라우저에서 `http://localhost:8000` 접속

### 직접 파일 열기

`index.html` 파일을 브라우저에서 직접 열어도 동작하지만, 일부 기능(예: CORS 정책)이 제한될 수 있으므로 로컬 서버 사용을 권장합니다.

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 주요 섹션

- **Hero**: 메인 타이틀과 CTA 버튼
- **Concept**: 카페의 컨셉과 핵심 가치 소개
- **Space**: 공간 구성과 좌석 배치 안내
- **Opening Schedule**: 오픈 일정 안내
- **Event**: 오픈 이벤트 정보
- **Location**: 카페 위치 및 지도

## 개발 가이드

### 코드 스타일

- **HTML**: 시맨틱 태그 사용, 접근성 속성 필수
- **CSS**: CSS Custom Properties 활용, 모바일 퍼스트 접근
- **JavaScript**: ES6+ 문법, 순수 JavaScript만 사용

자세한 코딩 규칙은 `.cursor/rules/cursorrule.mdc` 파일을 참고하세요.

### CSS 변수

주요 색상과 스페이싱은 CSS 변수로 관리됩니다:

```css
--color-primary: #2c3e50;
--color-bg-muted: #f8f9fa;
--spacing-md: 1.5rem;
--bp-mobile: 768px;
```

### 반응형 브레이크포인트

- **모바일**: ~767px
- **태블릿**: 768px ~ 1023px
- **데스크톱**: 1024px+

## 접근성

- ARIA 속성을 통한 스크린 리더 지원
- 키보드 네비게이션 지원
- 적절한 색상 대비율 유지
- 시맨틱 HTML 구조

## 성능

- 이미지 최적화 권장
- CSS/JavaScript 최소화
- 외부 리소스 최소 사용 (Google Fonts 제외)

## 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 등록해주세요.

---

**조용한 동네 카페** - 시끄럽지 않아 혼자 오기 좋고, 오래 머물러도 눈치 보지 않는 카페
