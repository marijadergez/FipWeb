import { Container, Row, Col } from "react-bootstrap";
import { IME_APLIKACIJE } from "../constants";
import GlassCard from "./components/GlassCard";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Home() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#4e4e4d' }}>
            Dobrodošli na {IME_APLIKACIJE}
          </h1>
          <p className="lead text-muted">
            Profesionalno knjigovodstvo i računovodstvo za vaše poslovanje.
          </p>
        </Col>
      </Row>

      <Row className="g-4 justify-content-center">
        {/* Kartica 1 */}
        <Col md={6} lg={4}>
          <GlassCard title="Naše Usluge">
            <p>Klijentima sam spremna ponuditi i digitalno poslovanje odnosno dostavljanje digitalne dokumentacije kroz suvremena aplikativna rješenja što nije slučaj u knjigovodstvenim servisima s kojima sam se do sada susretala.
              Svoje poslovanje planiram usmjeriti prema mikro i malim poduzetnicima koji su organizirani kroz obrte, d.o.o, j.d.o.o., obiteljska poljoprivredna gospodarstva (OPG) i neprofitne organizacije – udruge i društva.


            </p>
            <p>
              <em>• Porezno savjetovanje</em><br />
              <em>• Vođenje evidencije</em><br />
              <em>• Godišnji zaključci</em>
            </p>
          </GlassCard>
        </Col>


        {/* Kartica 3 */}
        <Col md={6} lg={4}>
          <GlassCard title="FIP Web Platforma">
            <p>
              Vaš pristup svim financijskim podacima na jednom mjestu.
              Transparentnost, brzina i sigurnost na prvom mjestu.
            </p>
            <p className="text-muted small">
              Pripremite se za budućnost financijskog menadžmenta.
            </p>
          </GlassCard>
        </Col>

        {/* Kartica 4 */}
        <Col md={6} lg={4}>
          <GlassCard title="Vaša Financijska Kontrola,moja Stručnost">
            <p>
              Svoje obrazovanje u smjeru ekonomije sam započela još sa srednjom školom te sam završila srednju Ekonomsku školu i stekla znanje ekonomist,upisujem Ekonomski fakultet u Osijeku te po završetku istoga stječem VSS zvanje diplomirani ekonomist. Nakon toga upisujem poslijediplomski specijalistički studij na Ekonomskom fakultetu u Osijeku smjer financije i bankarstvo te stječem zvanje Specijaliste iz područja financije i bankarstva. Svojim obrazovanjem stekla sam sva ključna znanja za obavljanje knjigovodstvene djelatnosti u vidu knjigovodstvenog servisa te sam klijentima osim knjigovodstvenih usluga u mogućnosti ponuditi i računovodstvene usluge, financijsko savjetovanje te financijsko opismenjavanje odnosno popratiti poslovanje poduzetnika iz svih aspekata.Prilikom donošenja odluke o otvaranju vlastitog knjigovodstvenog servisa smatrala sam da je dobro da osvježim svoje znanje i nadopunim ga te sam upisala tečaj u EDUNOVI- Ustanovi za obrazovanje odraslih u trajanju od 6 mjeseci za stjecanje kvalifikacije knjigovođe obujma 14 CSVET bodova,-educirala sam se iz područja GDPR-a još kroz svoje prethodno radno iskustvu u banci (Opća uredba o zaštiti podataka) kako bih poduzela adekvatne mjere u cilju zaštite osobnih podataka mojih klijenata.Educirala sam se iz područja AMLa  (Zakon o sprječavanju pranja novca i financiranja terorizma), edukacija mi je izuzetno bitna jer knjigovođe podliježu Zakonu te su obvezne sve sumnjive transakcije koje značajno odstupaju od redovnog poslovanja klijenata prijaviti prema Uredu za sprječavanje pranja novca pri Ministarstvu financija.Uslijed mnogobrojnih zakonskih izmjena u poslovanju obrta, tvrtki, OPG-ova i u udruga i tehnoloških promjena smatram da ću kako bih pratila trendove i izmjene nastaviti sa edukacijama koje organiziraju RRiF i druge institucije koje prate zakonske izmjene i rješenja iz ekonomije.



            </p>
            <p className="text-muted small">
              Pripremite se za budućnost financijskog menadžmenta.
            </p>
          </GlassCard>
        </Col>

        {/* Kartica 5 */}
        <Col md={6} lg={4}>
          <GlassCard title="Cjenik Usluga">
            <p>
              <em>•  Vođenje poslovni knjiga za OPG
                1 klijent - 60 eura mjesečno</em><br />
              <em>•    Sastavljanje PO-SD obrasca - 200,00 eura</em><br />
              <em>• Vođenje poslovnih knjiga u sustavu dvojnog knjigovodstva za j.d.o.o. /d.o.o.
                1 klijent - 150 eura mjesečno</em><br />
              <em>• Sastavljanje završnog računa za j.d.o.o./d.o.o. -350 eura </em><br />
              <em>• Vođenje poslovnih knjiga za redovne obrtnike kroz dvojno knjigovodstvo – 1 klijent - 150 eura mjesečno</em><br />
              <em>• Završno izvješćivanje za obrtnike kroz sastavljanje GIF obrasca - 350 eura </em><br />
              <em>• Vođenje poslovnih knjiga jednostavnog knjigovodstva za paušalne obrte
                2 klijenta - 60 eura mjesečno </em><br />
              <em>• Sastavljanje PO-SD obrasca za paušalne obrtnike -200 eura </em><br />
              <em>•  Vođenje poslovnih knjiga za udruge
                2 klijenta - 60 eura mjesečno</em><br />
              <em>• Vođenje poslovni knjiga za OPG
                3 klijenta - 60 eura mjesečno</em><br />
              <em>• Sastavljanje PO-SD obrasca 200,00 eura jednokratno</em><br />
              <em>• Vođenje poslovnih knjiga u sustavu dvojnog knjigovodstva za j.d.o.o. / d.o.o.
                1 klijent - 150 eura mjesečno </em><br />
              <em>•
                Sastavljanje završnog računa za j.d.o.o./d.o.o. - 350 eura</em><br />
              <em>•  Vođenje poslovnih knjiga za redovne obrtnike kroz dvojno knjigovodstvo –
                1 klijent - 150 eura mjesečno</em><br />
              <em>• Završno izvješćivanje za obrtnike kroz sastavljanje GIF obrasca -350 eura</em><br />
              <em>• Vođenje poslovnih knjiga jednostavnog knjigovodstva za paušalne obrte
                4 klijenta - 60 eura mjesečno</em><br />
              <em>• Sastavljanje PO-SD obrasca za paušalne obrtnike 200,00 eura jednokratno
                Vođenje poslovnih knjiga za udruge 5 klijenata - 60 eura mjesečno</em><br />
              <em>•
                Vođenje poslovni knjiga za OPG
                5 klijenata - 70 eura mjesečno</em><br />
              <em>• Sastavljanje PO-SD obrasca - 200,00 eura</em><br />
              <em>• Vođenje poslovnih knjiga u sustavu dvojnog knjigovodstva za j.d.o.o. /d.o.o.  2 klijenta - 200 eura mjesečno</em><br />
              <em>• Sastavljanje završnog računa za j.d.o.o./d.o.o. -350 eura</em><br />



            </p>
            <p className="text-muted small">
              Pripremite se za budućnost financijskog menadžmenta.
            </p>
          </GlassCard>

          
          {/* Kartica 2 */}
          <Col md={6} lg={4}>
            <GlassCard title="Zašto Mi?">
              <p>
                Koristimo najnovije tehnologije za brže i preciznije usluge.
                Vaš podaci su sigurni, a mi smo tu 24/7 za svako pitanje.
              </p>
              <button className="btn btn-glass mt-3">
                Kontaktirajte nas
              </button>

              <hr />

              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Email address">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Col>

                <Row>
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="E-mail je obavezan!"
                  ></FloatingLabel>
                  <FloatingLabel controlId="floatingSelect" >
                    <Form.Select aria-label="Floating label select example">
                      <option>Odaberite opciju:</option>
                      <option value="1">Obrtnik</option>
                      <option value="2">Tvrtka</option>
                      <option value="3">Ostalo</option>
                    </Form.Select>
                  </FloatingLabel>

                </Col>
                </Row>
              </Row>




              <FloatingLabel controlId="floatingTextarea" label="Hvala! ">
                <Form.Control
                  as="textarea"
                  placeholder="Ostavite upit ovdje"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </GlassCard>
          </Col>

        </Col>
      </Row>
    </Container>
  );
}