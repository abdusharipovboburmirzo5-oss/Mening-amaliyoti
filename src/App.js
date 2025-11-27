import './App.css';
//1
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
//2
  const [rang, setRang] = useState("blue");
  function rangniAlmashtir() {
    setRang(rang === "blue" ? "yellow" : "blue");
  }
  const [olcham, setOlcham] = useState("100px");
  function olchamalmash() {
    setOlcham(olcham === "100px" ? "200px" : "100px");
  }
//3
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
//4
  const [parol, yulduzcha] = useState("123456");
  const ozgarishparol = () => {
    yulduzcha("*******")
  }
  const ozgparol = () => {
    yulduzcha("123456")
  }
//5
  const [til, almash] = useState("Salom")
  const ingliz = () => {
    almash("Hello")
  }
  const uzbek = () => {
    almash("Salom")
  }
//6
  const [harf, katta] = useState("frontend");
  const almashtirmatn = () => {
    katta("FRONTEND")
  }
  const kichikharf = () => {
    katta("frontend")
  }
//7
  const [chiroq, yoqoch] = useState("Yoqish");
  const Yoqish = () => {
    yoqoch("Yoqish")
  }
  const Ochish = () => {
    yoqoch("O'chirish")
  }

  const [Salom ,alik] = useState([
    {title: "salommlar", id: 1} ,
    {title: "ismim Bobur", id: 2},
    {title: "Abdusharipovv", id: 3},
  ]);
  const [Salomm ,alikk] = useState([
    {title: "Zarifboev Arturbek", id: 1} ,
    {title: "Vofoeva Dilshodbek", id: 2},
    {title: "Xushniduv Alisher", id: 3},
  ]);
  const deletee = (id) =>{
    alik ((pre) => {
      return pre.filter ((event) => {
        return event.id !== id;
      }

      )
    }
    )
    }
     const deleteee = (id) =>{
    alikk ((pre) => {
      return pre.filter ((event) => {
        return event.id !== id;
      }

      )
    }
    )
    }
    
   
  

  return (
    
    <div className="App">
      <h1>{matn}</h1>

      <button onClick={matnniAlmashtir}>Matnni almashtir</button>
      <div style={{backgroundColor: rang, padding: "40px"}}>
        <h1>Fon rangi: {rang}</h1>
        <button onClick={rangniAlmashtir}>Rangni almashtir</button>
      </div>
    <div>
          {Salom.map((sat) => {
            return (
              <div key={sat.id}>
                <h1>{sat.title}</h1>
                <button onClick={() => deletee(sat.id)}>Delete</button>
              </div>
            );
          })} 
        </div>
        <div>
          {Salomm.map((sat) => {
            return (
              <div key={sat.id}>
                <h1>{sat.title}</h1>
                <button onClick={() => deleteee(sat.id)}>Delete</button>
              </div>
            );
          })} 
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

