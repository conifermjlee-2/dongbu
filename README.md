# 동부중량 홈페이지

전달받은 메인 시안을 참고해 제작한 Next.js 15 + TypeScript 반응형 홈페이지 템플릿입니다.

## 실행
```bash
npm install
npm run dev
```
`http://localhost:3000`에서 확인할 수 있습니다.

## 배포 전에 꼭 수정할 것
- `lib/site.ts`: 실제 도메인, 전화번호, 주소
- `app/page.tsx`: 이메일 주소, 실제 서비스 범위, 실적과 장비 정보
- `public/images/hero-heavy-transport.webp`: 현재는 전달받은 시안에서 운송 장면만 잘라낸 임시 이미지입니다. 실제 회사 작업 사진으로 교체하는 것을 권장합니다.

## SEO 기반
- 한국어 문서 구조, 페이지 제목과 설명
- Open Graph 메타데이터와 대표 이미지
- canonical URL
- Organization JSON-LD 구조화 데이터
- 자동 생성 sitemap.xml / robots.txt
- 이미지 대체 텍스트, 시맨틱 제목 구조
- Next.js 이미지 최적화와 반응형 화면

## 검색엔진 등록
실제 도메인 연결 및 HTTPS 적용 후 Google Search Console과 네이버 서치어드바이저에 사이트를 등록하고 `/sitemap.xml`을 제출하세요. 검색 순위는 보장되지 않으며, 실제 작업 사례·장비·지역·회사 정보가 담긴 고유 콘텐츠를 지속적으로 추가해야 합니다.

문의 폼 서버 전송, 관리자 페이지, 실적 데이터베이스는 아직 포함되지 않은 프론트엔드 템플릿입니다.

## 이미지 사용 안내

- `public/images/hero-heavy-transport.webp`: 동부중량 메인 화면용 AI 생성 콘셉트 이미지입니다. 실제 보유 차량·실제 운송 실적 사진이 아닙니다.
- 이전 사례 카드의 임시 이미지는 Pexels 무료 스톡 사진을 사용하며, 실제 동부중량의 수행 실적을 나타내지 않습니다. 실제 홈페이지 공개 전에는 반드시 실제 프로젝트 사진으로 교체하세요.
- Pexels 사진은 Pexels 라이선스에 따라 상업적 웹사이트에서 무료로 사용할 수 있고 일반적으로 출처 표시는 필수가 아닙니다. 다만 사진 속 식별 가능한 인물·상표·브랜드 등의 별도 권리는 별개일 수 있습니다.
- 사용 사진 출처: https://www.pexels.com/photo/industrial-factory-interior-with-machinery-36397988/ , https://www.pexels.com/photo/industrial-factory-interior-with-conveyor-34718930/ , https://www.pexels.com/photo/cargo-truck-transporting-a-heavy-machinery-5961982/
