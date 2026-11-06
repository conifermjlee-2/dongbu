import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/lib/site";

// 주요 강점 목록
const STRENGTHS = [
  {
    icon: "✓",
    title: "안전 최우선",
    desc: "작업 전 현장 조건과 위험 요소 확인",
  },
  {
    icon: "⌘",
    title: "전문 기술력",
    desc: "화물과 현장에 맞춘 작업 계획",
  },
  {
    icon: "↗",
    title: "신뢰와 약속",
    desc: "상담부터 작업까지 책임 있는 소통",
  },
] as const;

// 주요 프로젝트/시공 사례 목록
const CASES = [
  {
    no: "01",
    title: "산업설비 이전",
    desc: "생산설비와 산업용 기계의 이전을 위한 현장 확인 및 운송·반입 작업",
    image: "case-factory",
    tag: "산업설비",
  },
  {
    no: "02",
    title: "공장 내 설비 재배치",
    desc: "공장 운영 환경과 작업 동선을 고려한 설비 이동 및 배치 작업",
    image: "case-conveyor",
    tag: "공장 이전",
  },
  {
    no: "03",
    title: "대형 중량물 운송",
    desc: "화물의 크기와 중량, 운송 경로를 고려한 중량물 운송 작업",
    image: "case-heavy",
    tag: "중량물 운송",
  },
] as const;

export default function Home() {
  return (
    <main>
      {/* ── 1. 헤더 (Header) ── */}
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="동부중량 홈">
            <span className="brand-mark">DB</span>
            <span className="brand-name">DONGBU HEAVY</span>
          </Link>

          <nav className="desktop-nav" aria-label="주요 메뉴">
            <a href="#about">회사소개</a>
            <a href="#business">사업분야</a>
            <a href="#cases">이전 사례</a>
            <a href="#contact">고객지원</a>
          </nav>

          <a className="header-cta" href="#contact">
            연락하기 <span>↗</span>
          </a>
        </div>
      </header>

      {/* ── 2. 히어로 섹션 (Hero) ── */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo">
          <Image
            src="/images/hero-heavy-transport.webp"
            alt="AI로 제작한 대형 중량물 운송 콘셉트 이미지"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
        </div>
        <div className="hero-shade" />

        <div className="hero-content page-width">
          <p className="eyebrow">
            <span /> HEAVY LIFTING · TRANSPORT · INSTALLATION
          </p>
          <h1 id="hero-title">
            중량물 이전의 기준,
            <br />
            <strong>동부중량</strong>
          </h1>
          <p className="hero-copy">
            산업설비 이전부터 대형 중량물 운송까지
            <br />
            안전과 기술력으로 완성하는 중량물 이전 전문기업
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#business">
              사업분야 보기 <span>→</span>
            </a>
            <a className="button button-ghost" href="#contact">
              문의하기 <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-caption">
          <i /> HEAVY EQUIPMENT LOGISTICS
        </div>
      </section>

      {/* ── 3. 강점 스트립 (Proof Strip) ── */}
      <section className="proof-strip" id="strength">
        <div className="proof-inner page-width">
          {STRENGTHS.map((item) => (
            <div className="proof-item" key={item.title}>
              <span className="proof-icon">{item.icon}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="proof-wordmark">
            <b>DONGBU HEAVY</b>
            <span>MOVE WITH CONFIDENCE</span>
          </div>
        </div>
      </section>

      {/* ── 4. 회사 소개 (About / Intro) ── */}
      <section className="intro section page-width" id="about">
        <div className="section-kicker">
          ABOUT DONGBU HEAVY <span>01 / COMPANY</span>
        </div>
        <div className="intro-grid">
          <h2>
            무거운 현장일수록,
            <br />
            <em>믿을 수 있는 파트너</em>가 필요합니다.
          </h2>
          <div className="intro-copy">
            <p>
              중량물 운송과 산업설비 이전은 장비의 규모만큼이나 세밀한 계획과 현장 대응이 중요합니다.
            </p>
            <p>
              동부중량은 작업 환경과 화물의 특성을 먼저 살피고, 고객의 일정과 현장 조건에 맞는 솔루션을 제안합니다.
            </p>
            <a className="text-link" href="#contact">
              동부중량에 문의하기 <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. 사업 분야 (Business / Services) ── */}
      <section className="business-section section" id="business">
        <div className="page-width">
          <div className="section-kicker">
            OUR BUSINESS <span>02 / SERVICES</span>
          </div>
          <div className="section-heading">
            <div>
              <h2>사업분야</h2>
              <p>현장에 필요한 중량물 운송과 산업설비 이전 서비스를 제공합니다.</p>
            </div>
            <span className="heading-side">PLANNING · MOVING · DELIVERY</span>
          </div>

          <div className="service-grid">
            {services.map((s) => (
              <article className="service-card" key={s.number}>
                <div className="service-top">
                  <span>{s.number}</span>
                  <span className="service-arrow">↗</span>
                </div>
                <div className="service-thumb">
                  <Image
                    src={s.image}
                    alt={`${s.title} 콘셉트 이미지`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 25vw"
                    className="service-thumb-img"
                  />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <div className="tag-row">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. 기업 이전 사례 (Cases) ── */}
      <section className="cases-section section" id="cases">
        <div className="page-width">
          <div className="section-kicker">
            PROJECT STORIES <span>03 / CASES</span>
          </div>
          <div className="section-heading">
            <div>
              <h2>기업 이전 사례</h2>
              <p>다양한 산업 현장의 이전 프로젝트를 소개합니다.</p>
            </div>
            <span className="heading-side">PLAN · MOVE · COMPLETE</span>
          </div>

          <div className="case-grid">
            {CASES.map((c) => (
              <article className="case-card" key={c.no}>
                <div
                  className={`case-photo ${c.image}`}
                  role="img"
                  aria-label={`${c.title} 참고용 이미지`}
                >
                  <span>REFERENCE IMAGE</span>
                </div>
                <div className="case-body">
                  <div className="case-meta">
                    <span>{c.no} / PROJECT</span>
                    <span>{c.tag}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. 문의 및 연락처 (Contact) ── */}
      <section className="contact-section" id="contact">
        <div className="contact-inner page-width">
          <div>
            <div className="section-kicker light">
              CONTACT US <span>04 / CUSTOMER SUPPORT</span>
            </div>
            <h2>
              중량물 이전,
              <br />
              동부중량과 상담하세요.
            </h2>
            <p>회사 위치와 연락처를 확인하고 편하게 문의해 주세요.</p>
          </div>
          <div className="contact-details">
            <div>
              <small>ADDRESS</small>
              <strong>경기 수원시 권선구 경수대로 193</strong>
            </div>
            <div>
              <small>TELEPHONE</small>
              <strong>
                031-455-9900
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. 푸터 (Footer) ── */}
      <footer className="footer">
        <div className="footer-inner page-width">
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">DB</span>
            <span className="brand-name">DONGBU HEAVY</span>
          </Link>
          <div className="footer-info">
            <b>{site.name}</b>
            <span>중량물 운송 · 산업설비 이전</span>
            {site.telephone && <span>TEL. {site.telephone}</span>}
          </div>
          <span className="copyright">
            © {new Date().getFullYear()} DONGBU HEAVY. ALL RIGHTS RESERVED.
          </span>
        </div>
      </footer>
    </main>
  );
}
