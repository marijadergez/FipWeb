
import { Container, Row, Col } from "react-bootstrap";
import { IME_APLIKACIJE, RouteNames } from "./constants";
import { useNavigate } from "react-router-dom";
import GlassCard from "./components/GlassCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={9}>
              <p className="text-muted mb-2">
                FIP Knjigovodstvo i računovodstvo
              </p>

              <h1 className="display-3 fw-bold mb-4">
                Vaša financijska kontrola.
                <br />
                Naša stručnost.
              </h1>

              <p className="lead text-muted mb-4">
                Pouzdano knjigovodstvo, računovodstvo i financijsko
                savjetovanje prilagođeno vašem poslovanju.
              </p>

              <button
                className="btn btn-glass"
                onClick={() => navigate(RouteNames.USLUGE)}
              >
                Saznajte više o uslugama
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* UVOD */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="fw-bold mb-3">
                Vi vodite posao. Mi brinemo o brojkama.
              </h2>

              <p className="text-muted">
                FIP Knjigovodstvo i računovodstvo pruža profesionalne
                knjigovodstvene, računovodstvene i financijske usluge
                mikro i malim poduzetnicima, obrtnicima, OPG-ovima,
                trgovačkim društvima i neprofitnim organizacijama.
              </p>

              <p className="text-muted">
                Naš cilj nije samo evidentirati poslovne promjene.
                Želimo razumjeti vaše poslovanje, pružiti vam jasne
                informacije i pomoći vam da na temelju financijskih
                podataka donosite kvalitetne poslovne odluke.
              </p>
            </Col>
          </Row>

          {/* GLAVNE USLUGE */}
          <Row className="g-4 justify-content-center">
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

      {/* ŠTO RADIMO */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h2 className="fw-bold mb-4">
                Više od klasičnog knjigovodstva
              </h2>

              <p className="text-muted">
                Suvremeno računovodstvo nije samo knjiženje računa.
                Ono predstavlja važan izvor informacija za upravljanje
                poslovanjem.
              </p>

              <p className="text-muted">
                Zato FIP svojim klijentima želi pružiti širi pogled na
                njihovo poslovanje – od svakodnevnog knjigovodstva i
                obračuna poreznih obveza do financijske analize,
                planiranja i poslovnog savjetovanja.
              </p>

              <p className="text-muted">
                Posebnu pažnju posvećujemo digitalizaciji poslovanja,
                sigurnosti podataka i individualnom pristupu svakom
                klijentu.
              </p>
            </Col>

            <Col lg={6}>
              <GlassCard title="Usluge koje možemo pružiti">
                <ul>
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

      {/* KOME POMAŽEMO */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="fw-bold mb-3">
                Partner za vaše poslovanje
              </h2>

              <p className="text-muted">
                Svoje usluge usmjeravamo prvenstveno prema mikro i
                malim poduzetnicima kojima je potreban pouzdan i
                pristupačan računovodstveni partner.
              </p>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
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

      {/* ZAŠTO FIP */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <GlassCard title="Zašto FIP?">
                <Row className="g-4">
                  <Col md={6}>
                    <h5>Individualan pristup</h5>
                    <p className="text-muted">
                      Svaki klijent i svako poslovanje imaju svoje
                      specifičnosti. Zato uslugu prilagođavamo
                      stvarnim potrebama klijenta.
                    </p>
                  </Col>

                  <Col md={6}>
                    <h5>Stručnost i kontinuirano obrazovanje</h5>
                    <p className="text-muted">
                      Znanje kontinuirano nadograđujemo kroz stručne
                      edukacije i praćenje zakonskih promjena.
                    </p>
                  </Col>

                  <Col md={6}>
                    <h5>Sigurnost podataka</h5>
                    <p className="text-muted">
                      Posebnu pažnju posvećujemo zaštiti povjerljivih
                      financijskih i osobnih podataka naših klijenata.
                    </p>
                  </Col>

                  <Col md={6}>
                    <h5>Digitalno poslovanje</h5>
                    <p className="text-muted">
                      Koristimo suvremena programska rješenja kako bi
                      poslovanje bilo jednostavnije, preglednije i
                      učinkovitije.
                    </p>
                  </Col>
                </Row>
              </GlassCard>
            </Col>
          </Row>
        </Container>
      </section>

      {/* STRUČNOST */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <h2 className="fw-bold mb-4">
                Znanje na kojem gradimo povjerenje
              </h2>

              <p className="text-muted">
                FIP je nastao na temelju dugogodišnjeg obrazovanja
                i kontinuiranog usavršavanja iz područja ekonomije,
                financija, bankarstva i knjigovodstva.
              </p>

              <p className="text-muted">
                Uz formalno obrazovanje i iskustvo, dodatno smo se
                educirali iz područja knjigovodstva, zaštite osobnih
                podataka i sprječavanja pranja novca.
              </p>

              <p className="text-muted">
                Pratimo zakonske izmjene i razvoj digitalnih rješenja
                kako bismo svojim klijentima mogli pružiti kvalitetnu
                i suvremenu uslugu.
              </p>
            </Col>

            <Col lg={5}>
              <GlassCard title="Naš pristup">
                <p>
                  Profesionalnost.
                  <br />
                  Povjerenje.
                  <br />
                  Diskrecija.
                  <br />
                  Kontinuirano učenje.
                  <br />
                  Individualan odnos s klijentom.
                </p>
              </GlassCard>
            </Col>
          </Row>
        </Container>
      </section>

      {/* POZIV NA AKCIJU */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-3">
                Razgovarajmo o vašem poslovanju.
              </h2>

              <p className="text-muted mb-4">
                Trebate pouzdano knjigovodstvo, računovodstvo ili
                financijski savjet? Javite nam se i zajedno ćemo
                pronaći rješenje prilagođeno vašem poslovanju.
              </p>

              <button
                className="btn btn-glass"
                onClick={() => navigate(RouteNames.USLUGE)}
              >
                Pogledajte naše usluge
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

