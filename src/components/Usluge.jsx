import GlassCard from "./GlassCard";


// Unutar tvog componenta:
<Row className="g-4">
  <Col md={6}>
    <GlassCard title="Knjigovodstvo">
      <p>Opis usluge knjigovodstva...</p>
      <ul>
        <li>Vođenje poslovnih knjiga</li>
        <li>Porezne prijave</li>
      </ul>
    </GlassCard>
  </Col>
  <Col md={6}>
    <GlassCard title="Računovodstvo">
      <p>Opis usluge računovodstva...</p>
      <p>Detaljan opis...</p>
    </GlassCard>
  </Col>
</Row>