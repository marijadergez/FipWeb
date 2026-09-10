
import { Container, Row, Col } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import GlassCard from "../GlassCard";

export default function Usluge() {
  return (
    <div className="page-content">

      {/* =========================
    NASLOV
    ========================= */}

<section className="section pt-5">
  <Container>

    <Row className="justify-content-center text-center">
      <Col lg={8}>

        <span className="section-label">
          FIP Knjigovodstvo i računovodstvo
        </span>

        <h1 className="display-4 fw-bold mb-3">
          Naše usluge
        </h1>

        <p className="lead text-muted">
          Pouzdana računovodstvena i financijska podrška
          prilagođena vašem poslovanju.
        </p>

        <div className="services-intro-links">

          <a href="#digitalno-poslovanje">
            Digitalno poslovanje
          </a>

          <span>•</span>

          <a href="#cjenik">
            Cjenik
          </a>

        </div>

      </Col>
    </Row>

  </Container>
</section>

      {/* =========================
          KNJIGOVODSTVO
          ========================= */}
      <section className="section">
        <Container>

          <Row className="justify-content-center">
            <Col lg={10}>

              <GlassCard title="Knjigovodstvo">

                <p className="text-muted">
                  Vodimo brigu o svakodnevnim knjigovodstvenim obvezama
                  kako biste se vi mogli posvetiti svom poslovanju.
                </p>

                <Row className="g-4 mt-2">

                  <Col md={6}>
                    <h5>Vođenje poslovnih knjiga</h5>

                    <ul className="service-list">
                      <li>glavna knjiga i dnevnik</li>
                      <li>pomoćne knjige i evidencije</li>
                      <li>evidencija ulaznih i izlaznih računa</li>
                      <li>robno-materijalno knjigovodstvo</li>
                      <li>obračun amortizacije</li>
                    </ul>
                  </Col>

                  <Col md={6}>
                    <h5>Administrativna podrška</h5>

                    <ul className="service-list">
                      <li>obračun plaća i doprinosa</li>
                      <li>obračun putnih naloga</li>
                      <li>izrada JOPPD obrazaca</li>
                      <li>prijava i odjava djelatnika</li>
                      <li>vođenje potrebnih evidencija</li>
                    </ul>
                  </Col>

                </Row>

              </GlassCard>

            </Col>
          </Row>

        </Container>
      </section>


      {/* =========================
          RAČUNOVODSTVO
          ========================= */}
      <section className="section section-soft">
        <Container>

          <Row className="justify-content-center">
            <Col lg={10}>

              <GlassCard title="Računovodstvo">

                <p className="text-muted">
                  Računovodstvene usluge obuhvaćaju praćenje poslovanja,
                  obračun poreznih obveza i izradu financijskih izvještaja.
                </p>

                <Row className="g-4 mt-2">

                  <Col md={6}>
                    <h5>Porezne obveze</h5>

                    <ul className="service-list">
                      <li>obračun PDV-a</li>
                      <li>porez na dobit</li>
                      <li>porez na dohodak</li>
                      <li>PO-SD obrazac</li>
                      <li>ostale porezne prijave</li>
                    </ul>
                  </Col>

                  <Col md={6}>
                    <h5>Financijsko izvještavanje</h5>

                    <ul className="service-list">
                      <li>godišnji financijski izvještaji</li>
                      <li>završni račun</li>
                      <li>izvještavanje prema FINI</li>
                      <li>bilanca</li>
                      <li>račun dobiti i gubitka</li>
                    </ul>
                  </Col>

                </Row>

              </GlassCard>

            </Col>
          </Row>

        </Container>
      </section>


      {/* =========================
          POREZNO SAVJETOVANJE
          ========================= */}
      <section className="section">
        <Container>

          <Row className="justify-content-center">
            <Col lg={10}>

              <GlassCard title="Porezno savjetovanje">

                <p className="text-muted">
                  Porezni propisi često se mijenjaju. Cilj nam je pomoći
                  klijentima da razumiju svoje obveze i pravovremeno
                  donesu kvalitetne poslovne odluke.
                </p>

                <ul className="service-list">
                  <li>savjetovanje vezano uz porezne obveze</li>
                  <li>praćenje poreznih propisa i izmjena</li>
                  <li>podrška pri donošenju poslovnih odluka</li>
                  <li>pomoć u razumijevanju poreznih prijava</li>
                </ul>

              </GlassCard>

            </Col>
          </Row>

        </Container>
      </section>


      {/* =========================
          FINANCIJSKO SAVJETOVANJE
          ========================= */}
      <section className="section section-soft">
        <Container>

          <Row className="justify-content-center">
            <Col lg={10}>

              <GlassCard title="Financijsko savjetovanje">

                <p className="text-muted">
                  Financijski podaci nisu samo obveza. Oni su alat koji
                  poduzetniku omogućuje bolje upravljanje poslovanjem.
                </p>

                <Row className="g-4 mt-2">

                  <Col md={6}>
                    <h5>Analiza poslovanja</h5>

                    <ul className="service-list">
                      <li>analiza prihoda i troškova</li>
                      <li>praćenje poslovnih pokazatelja</li>
                      <li>analiza profitabilnosti</li>
                      <li>izračun točke pokrića</li>
                    </ul>
                  </Col>

                  <Col md={6}>
                    <h5>Planiranje</h5>

                    <ul className="service-list">
                      <li>izrada poslovnih planova</li>
                      <li>financijsko planiranje</li>
                      <li>planiranje novčanog toka</li>
                      <li>praćenje odstupanja od plana</li>
                    </ul>
                  </Col>

                </Row>

              </GlassCard>

            </Col>
          </Row>

        </Container>
      </section>


      {/* =========================
          DIGITALNO POSLOVANJE
          ========================= */}
      <section
        className="section"
        id="digitalno-poslovanje"
      >
        <Container>

          <Row className="justify-content-center">
            <Col lg={10}>

              <GlassCard title="Digitalno poslovanje">

                <p className="text-muted">
                  Pratimo razvoj digitalnih rješenja u računovodstvu i
                  nastojimo klijentima omogućiti jednostavnije i
                  učinkovitije poslovanje.
                </p>

                <ul className="service-list">
                  <li>digitalna obrada računovodstvene dokumentacije</li>
                  <li>e-Račun i digitalno poslovanje</li>
                  <li>fiskalizacija</li>
                  <li>digitalna komunikacija s klijentima</li>
                </ul>

              </GlassCard>

            </Col>
          </Row>

        </Container>
      </section>


      {/* =========================
          ZA KOGA RADIMO
          ========================= */}
      <section className="section section-soft">
        <Container>

          <Row className="justify-content-center">
            <Col lg={10}>

              <div className="section-heading">

                <span className="section-label">
                  Za koga radimo
                </span>

                <h2>
                  Partner za različite oblike poslovanja
                </h2>

                <p>
                  Usluge prilagođavamo potrebama mikro i malih
                  poduzetnika, obrtnika i neprofitnih organizacija.
                </p>

              </div>

              <Row className="g-4 cards-grid">

                <Col md={6} lg={3}>
                  <GlassCard title="Obrti">
                    <p>
                      Knjigovodstvena i računovodstvena podrška za
                      paušalne i redovne obrte.
                    </p>
                  </GlassCard>
                </Col>

                <Col md={6} lg={3}>
                  <GlassCard title="d.o.o. / j.d.o.o.">
                    <p>
                      Vođenje poslovnih knjiga, financijsko izvještavanje
                      i računovodstvena podrška.
                    </p>
                  </GlassCard>
                </Col>

                <Col md={6} lg={3}>
                  <GlassCard title="OPG">
                    <p>
                      Vođenje poslovnih knjiga i podrška pri ispunjavanju
                      poreznih i računovodstvenih obveza.
                    </p>
                  </GlassCard>
                </Col>

                <Col md={6} lg={3}>
                  <GlassCard title="Udruge">
                    <p>
                      Knjigovodstvo prilagođeno poslovanju neprofitnih
                      organizacija.
                    </p>
                  </GlassCard>
                </Col>

              </Row>

            </Col>
          </Row>

        </Container>
      </section>


      {/* =========================
          CJENIK
          ========================= */}
      <section
        className="section"
        id="cjenik"
      >
        <Container>

          <Row className="justify-content-center">
            <Col lg={10}>

              <GlassCard title="Cjenik">

                <p className="text-muted mb-4">
                  Cijene su informativne i mogu se prilagoditi opsegu
                  dokumentacije, broju zaposlenih i složenosti poslovanja.
                </p>

                <Row className="g-4">

                  <Col md={6}>
                    <h5>OPG</h5>

                    <ul className="service-list">
                      <li>
                        Vođenje poslovnih knjiga – od 60 € mjesečno
                      </li>
                      <li>
                        Sastavljanje PO-SD obrasca – 200 € jednokratno
                      </li>
                    </ul>
                  </Col>

                  <Col md={6}>
                    <h5>j.d.o.o. / d.o.o.</h5>

                    <ul className="service-list">
                      <li>
                        Vođenje poslovnih knjiga – od 150 € mjesečno
                      </li>
                      <li>
                        Sastavljanje završnog računa – 350 €
                      </li>
                    </ul>
                  </Col>

                  <Col md={6}>
                    <h5>Redovni obrti</h5>

                    <ul className="service-list">
                      <li>
                        Vođenje poslovnih knjiga kroz dvojno
                        knjigovodstvo – od 150 € mjesečno
                      </li>
                      <li>
                        Završno izvještavanje / GIF obrazac – 350 €
                      </li>
                    </ul>
                  </Col>

                  <Col md={6}>
                    <h5>Paušalni obrti</h5>

                    <ul className="service-list">
                      <li>
                        Vođenje poslovnih knjiga – od 60 € mjesečno
                      </li>
                      <li>
                        Sastavljanje PO-SD obrasca – 200 €
                      </li>
                    </ul>
                  </Col>

                  <Col md={6}>
                    <h5>Udruge</h5>

                    <ul className="service-list">
                      <li>
                        Vođenje poslovnih knjiga – od 60 € mjesečno
                      </li>
                    </ul>
                  </Col>

                </Row>

              </GlassCard>

            </Col>
          </Row>

        </Container>
      </section>


 {/* CTA + SOCIALS */}
<section className="cta-section">
  <div className="cta-inner">

    <span className="cta-label">
      FIP Knjigovodstvo i računovodstvo
    </span>

    <h2>Treba vam računovodstvena podrška?</h2>

    <p>
      Javite nam se i razgovarajmo o vašem poslovanju.
      Zajedno možemo pronaći model usluge koji odgovara
      vašim potrebama.
    </p>

    <button className="btn btn-light">
      Kontaktirajte nas
    </button>

<div className="cta-socials">
  <a
    href="#"
    className="social-icon"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="#"
    className="social-icon"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="#"
    className="social-icon"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
</div>

  </div>
</section>

{/* FOOTER */}
<footer className="fip-footer">
  <Container>
    <div className="footer-bottom">
      <span>
        © {new Date().getFullYear()} FIP Knjigovodstvo i računovodstvo | MDergez 
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
