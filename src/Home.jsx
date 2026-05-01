import { Container, Row, Col } from "react-bootstrap";
import { IME_APLIKACIJE } from "../constants";
import GlassCard from "./components/GlassCard";

export default function Home() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#4a4a4a' }}>
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
            <p>
              Nude kompletno knjigovodstveno vođenje za firme svih veličina. 
              Od obrta do velikih korporacija.
            </p>
            <p>
              <em>• Porezno savjetovanje</em><br/>
              <em>• Vođenje evidencije</em><br/>
              <em>• Godišnji zaključci</em>
            </p>
          </GlassCard>
        </Col>

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
      </Row>
    </Container>
  );
}