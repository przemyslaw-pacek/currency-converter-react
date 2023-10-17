import { useState } from 'react';
import Form from "./Form";

function App() {
  return (
    <Container>
      <Header title="Kalkulator walut" />
      <Section
        title="Waluta do przeliczenia"
        body={ }
      />

      <Section
        title="Wprowadź kwotę"
        body={ }
      />

      <Section
        title="Przelicz na walutę"
        body={ }
      />

      <Section
        title="Kurs wymiany"
        body={ }
      />

      <Section
        title="Kwota po przeliczeniu"
        body={ }
      />
    </Container>
  );
}

export default App;