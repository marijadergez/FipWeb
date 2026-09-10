import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

import { RouteNames } from "../constants";
import GlassCard from "./components/GlassCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-content">

      {/* =========================================
          HERO
          ========================================= */}

      <section className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={9} className="hero-content">

              <p className="hero-eyebrow">
                FIP Knjigovodstvo i računovodstvo
              </p>

              <h1>
                Vaša financijska kontrola.
                <br />
                <span>Naša stručnost.</span>
              </h1>

              <p>
                Pouzdano knjigovodstvo, računovodstvo i financijsko
                savjetovanje prilagođeno vašem poslovanju.
              </p>

              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(RouteNames.USLUGE)}
                >
                  Saznajte više o uslugama
                  <FaArrowRight className="button-icon" />
                </button>
              </div>

            </Col>
          </Row>
        </Container>
      </section>


      {/* =========================================
          UVOD
          ========================================= */}

      <section className="section">
        <Container>

          <div className="section-heading">
            <span className="section-label">
              FIP računovodstvo
            </span>

            <h2>
              Vi vodite posao.
              <br />
              Mi brinemo o brojkama.
            </h2>

            <p>
              FIP Knjigovodstvo i računovodstvo pruža profesionalne
              knjigovodstvene, računovodstvene i financijske usluge
              mikro i malim poduzetnicima, obrtnicima, OPG-ovima,
              trgovačkim društvima i neprofitnim organizacijama.
            </p>

            <p>
              Naš cilj nije samo evidentirati poslovne promjene.
              Želimo razumjeti vaše poslovanje, pružiti vam jasne
              informacije i pomoći vam da na temelju financijskih
              podataka donosite kvalitetne poslovne odluke.
            </p>
          </div>


          <Row className="g-4 cards-grid">

            <Col md={6} lg={3}>
              <GlassCard title="Knjigovodstvo">
                <p>
                  Vođenje poslovnih knjiga, evidencija i dokumentacije
                  u skladu s važećim propisima.
                </p>
              </GlassCard>
            </Col>

            <Col md={6} lg={3}>
              <GlassCard title="Računovodstvo">
                <p>
                  Financijsko izvještavanje, završni računi,
                  porezne obveze i praćenje poslovanja.
                </p>
              </GlassCard>
            </Col>

            <Col md={6} lg={3}>
              <GlassCard title="Porezno savjetovanje">
                <p>
                  Podrška u razumijevanju poreznih obveza i
                  pravovremenom ispunjavanju zakonskih obveza.
                </p>
              </GlassCard>
            </Col>

            <Col md={6} lg={3}>
              <GlassCard title="Financijsko savjetovanje">
                <p>
                  Analiza poslovanja, planiranje, praćenje troškova
                  i pomoć pri donošenju financijskih odluka.
                </p>
              </GlassCard>
            </Col>

          </Row>

        </Container>
      </section>


      {/* =========================================
          VIŠE OD KNJIGOVODSTVA
          ========================================= */}

      <section className="section section-soft">
        <Container>

          <Row className="align-items-center g-5">

            <Col lg={6}>
              <div className="content-block">

                <span className="section-label">
                  Naš pristup
                </span>

                <h2>
                  Više od klasičnog knjigovodstva
                </h2>

                <p>
                  Suvremeno računovodstvo nije samo knjiženje računa.
                  Ono predstavlja važan izvor informacija za upravljanje
                  poslovanjem.
                </p>

                <p>
                  Zato FIP svojim klijentima želi pružiti širi pogled na
                  njihovo poslovanje – od svakodnevnog knjigovodstva i
                  obračuna poreznih obveza do financijske analize,
                  planiranja i poslovnog savjetovanja.
                </p>

                <p>
                  Posebnu pažnju posvećujemo digitalizaciji poslovanja,
                  sigurnosti podataka i individualnom pristupu svakom
                  klijentu.
                </p>

              </div>
            </Col>


            <Col lg={6}>

              <GlassCard title="Usluge koje možemo pružiti">

                <ul className="service-list">
                  <li>Vođenje poslovnih knjiga</li>
                  <li>Obračun plaća i doprinosa</li>
                  <li>Obračun PDV-a</li>
                  <li>JOPPD obrasci</li>
                  <li>Porez na dobit i porez na dohodak</li>
                  <li>Završni financijski izvještaji</li>
                  <li>PO-SD obrasci</li>
                  <li>Fiskalizacija i digitalno poslovanje</li>
                  <li>Financijska analiza</li>
                  <li>Poslovno savjetovanje</li>
                </ul>

              </GlassCard>

            </Col>

          </Row>

        </Container>
      </section>


      {/* =========================================
          KOME POMAŽEMO
          ========================================= */}

      <section className="section">
        <Container>

          <div className="section-heading">

            <span className="section-label">
              Za koga radimo
            </span>

            <h2>
              Partner za vaše poslovanje
            </h2>

            <p>
              Svoje usluge usmjeravamo prvenstveno prema mikro i
              malim poduzetnicima kojima je potreban pouzdan i
              pristupačan računovodstveni partner.
            </p>

          </div>


          <Row className="g-4 cards-grid">

            <Col md={6} lg={3}>
              <GlassCard title="Obrti">
                <p>
                  Knjigovodstvena i računovodstvena podrška za obrtnike,
                  uključujući paušalne i redovne obrte.
                </p>
              </GlassCard>
            </Col>

            <Col md={6} lg={3}>
              <GlassCard title="Društva">
                <p>
                  Podrška za j.d.o.o. i d.o.o. kroz svakodnevno
                  računovodstvo i financijsko izvještavanje.
                </p>
              </GlassCard>
            </Col>

            <Col md={6} lg={3}>
              <GlassCard title="OPG">
                <p>
                  Vođenje poslovnih knjiga i podrška u ispunjavanju
                  računovodstvenih i poreznih obveza.
                </p>
              </GlassCard>
            </Col>

            <Col md={6} lg={3}>
              <GlassCard title="Udruge">
                <p>
                  Knjigovodstvene usluge prilagođene potrebama
                  neprofitnih organizacija.
                </p>
              </GlassCard>
            </Col>

          </Row>

        </Container>
      </section>


      {/* =========================================
          ZAŠTO FIP
          ========================================= */}

      <section className="section section-soft">
        <Container>

          <div className="section-heading">

            <span className="section-label">
              Zašto FIP
            </span>

            <h2>
              Računovodstvo kojem možete vjerovati
            </h2>

          </div>


          <Row className="justify-content-center">

            <Col lg={10}>

              <GlassCard title="Naš način rada">

                <Row className="g-5">

                  <Col md={6}>
                    <div className="feature-item">
                      <h5>Individualan pristup</h5>

                      <p>
                        Svaki klijent i svako poslovanje imaju svoje
                        specifičnosti. Zato uslugu prilagođavamo
                        stvarnim potrebama klijenta.
                      </p>
                    </div>
                  </Col>


                  <Col md={6}>
                    <div className="feature-item">
                      <h5>Stručnost i kontinuirano obrazovanje</h5>

                      <p>
                        Znanje kontinuirano nadograđujemo kroz stručne
                        edukacije i praćenje zakonskih promjena.
                      </p>
                    </div>
                  </Col>


                  <Col md={6}>
                    <div className="feature-item">
                      <h5>Sigurnost podataka</h5>

                      <p>
                        Posebnu pažnju posvećujemo zaštiti povjerljivih
                        financijskih i osobnih podataka naših klijenata.
                      </p>
                    </div>
                  </Col>


                  <Col md={6}>
                    <div className="feature-item">
                      <h5>Digitalno poslovanje</h5>

                      <p>
                        Koristimo suvremena programska rješenja kako bi
                        poslovanje bilo jednostavnije, preglednije i
                        učinkovitije.
                      </p>
                    </div>
                  </Col>

                </Row>

              </GlassCard>

            </Col>

          </Row>

        </Container>
      </section>


     {/* =========================================
    STRUČNOST
    ========================================= */}

<section className="section">
  <Container>

    <Row className="align-items-center justify-content-center g-5">

      {/* TEKST */}

      <Col lg={7}>

        <div className="content-block">

          <span className="section-label">
            Stručnost
          </span>

          <h2>
            Znanje na kojem gradimo povjerenje
          </h2>

          <p>
            FIP je nastao na temelju dugogodišnjeg obrazovanja
            i kontinuiranog usavršavanja iz područja ekonomije,
            financija, bankarstva i knjigovodstva.
          </p>

          <p>
            Uz formalno obrazovanje i iskustvo, dodatno smo se
            educirali iz područja knjigovodstva, zaštite osobnih
            podataka i sprječavanja pranja novca.
          </p>

          <p>
            Pratimo zakonske izmjene i razvoj digitalnih rješenja
            kako bismo svojim klijentima mogli pružiti kvalitetnu
            i suvremenu uslugu.
          </p>

        </div>

      </Col>


      {/* NAŠ PRISTUP */}

      <Col lg={5}>

        <GlassCard title="Naš pristup">

          <div className="approach-list">

            <div>Profesionalnost</div>
            <div>Povjerenje</div>
            <div>Diskrecija</div>
            <div>Kontinuirano učenje</div>
            <div>Individualan odnos s klijentom</div>

          </div>

        </GlassCard>

      </Col>

    </Row>

  </Container>
</section>

      {/* =========================================
          CTA
          ========================================= */}

      <section className="cta-section">

        <div className="cta-inner">

          <span className="cta-label">
            Razgovarajmo
          </span>

          <h2>
            Razgovarajmo o vašem poslovanju.
          </h2>

          <p>
            Trebate pouzdano knjigovodstvo, računovodstvo ili
            financijski savjet? Javite nam se i zajedno ćemo
            pronaći rješenje prilagođeno vašem poslovanju.
          </p>

          <button
            className="btn btn-light"
            onClick={() => navigate(RouteNames.USLUGE)}
          >
            Pogledajte naše usluge
            <FaArrowRight className="button-icon" />
          </button>

        </div>

      </section>


      {/* =========================================
          FOOTER
          ========================================= */}

      <footer className="fip-footer">

        <Container>

          <Row className="g-4 align-items-center">

            <Col md={6} className="text-md-start text-center">

              <div className="footer-brand">
                <span className="footer-logo">
                  FIP
                </span>

                <div>
                  <strong>
                    FIP Knjigovodstvo i računovodstvo
                  </strong>

                  <span>
                    Pouzdani partner vašeg poslovanja
                  </span>
                </div>
              </div>

            </Col>


            <Col md={6}>

              <div className="footer-social">

                <a
                  href="#"
                  aria-label="Instagram"
                  className="social-icon"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="social-icon"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="social-icon"
                >
                  <FaLinkedinIn />
                </a>

              </div>

            </Col>

          </Row>

   
          <div className="footer-bottom">

  


            <span>
              © {new Date().getFullYear()} FIP Knjigovodstvo i računovodstvo App | MDergez |
            </span>

            <span>
              Sva prava pridržana.
            </span>

          </div>

        </Container>

      </footer>

    </div>
  );
}