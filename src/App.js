import './App.css';

import { useState } from 'react';
function App() {

    const [matn, setMatn] = useState("Assalomu aleykum");
  function matnniAlmashtir(){
    if (matn === "Assalomu aleykum"){
      setMatn("Xush kelibsiz")
    } else {
      setMatn("Assalomu aleykum")
    }
  }
  
  const [rang, setRang] = useState("blue");
  function rangniAlmashtir() {
    setRang(rang === "blue" ? "yellow" : "blue");
  }
  const [olcham, setOlcham] = useState("100px");
  function olchamalmash() {
    setOlcham(olcham === "100px" ? "200px" : "100px");
  }

  const [name, yangi_ism] = useState("Frontend dasturchi")

  const ozgartir = () => {
    yangi_ism("React dasturchi")
  }
  const Kamoladdin = () => {
    yangi_ism("JavaScript dasturchi")
  }
  const Frontend = () => {
    yangi_ism("Frontend dasturchi")
  }
  const [parol, yulduzcha] = useState("123456");
  const ozgarishparol = () => {
    yulduzcha("*******")
  }
  const ozgparol = () => {
    yulduzcha("123456")
  }
  const [til, almash] = useState("Salom")
  const ingliz = () => {
    almash("Hello")
  }
  const uzbek = () => {
    almash("Salom")
  }
  const [harf, katta] = useState("frontend");
  const almashtirmatn = () => {
    katta("FRONTEND")
  }
  const kichikharf = () => {
    katta("frontend")
  }
  const [chiroq, yoqoch] = useState("Yoqish");
  const Yoqish = () => {
    yoqoch("Yoqish")
  }
  const Ochish = () => {
    yoqoch("O'chirish")
  }

  return (
    <div className="App">
      <h1>{matn}</h1>
      <button onClick={matnniAlmashtir}>Matnni almashtir</button>
      <div style={{backgroundColor: rang, padding: "40px"}}>
        <h1>Fon rangi: {rang}</h1>
        <button onClick={rangniAlmashtir}>Rangni almashtir</button>
      </div>

        <div className="content">
        <h1> {name}</h1>
        <button onClick={Frontend}>Frontend dasturchi</button>
        <button onClick={ozgartir}>React dasturchi</button>
        <button onClick={Kamoladdin}>JavaScript dasturchi</button>
        <h1>{parol}</h1>
        <button onClick={ozgparol}>Ko'rsat</button>
        <button onClick={ozgarishparol}>Ko'rsatilmasin</button>
        <h1>{til}</h1>
        <button onClick={ingliz}>Ingliz</button>
        <button onClick={uzbek}>Uzbek</button>
        <h1>{harf}</h1>
        <button onClick={almashtirmatn}>Katta matn</button>
        <button onClick={kichikharf}>Kichik matn</button>
        <h1>{chiroq}</h1>
        <button onClick={Yoqish}>Yoqish</button>
        <button onClick={Ochish}>O'chirish</button>
        <div style={{padding: olcham, backgroundColor: "blue"}}>
        <button onClick={olchamalmash}>Ozgarish </button>
        </div>

 
      </div>

    </div>
  );
}

export default App;

