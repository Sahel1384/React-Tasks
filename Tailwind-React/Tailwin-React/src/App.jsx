import Card1 from "./Card1/Card1";
import Card2 from "./Card1/Card2";
import "./index.css";

function App() {
  return (
    <>
      {/* first Card */}
      <div className="flex justify-center items-center gap-3 bg-gray-800 h-full flex-wrap">
        <Card1
          course="Front-End"
          teacher="Said Shah Ahmadi"
          text="Only Some Texts For Practice Try To Use It More"
          image="https://images.unsplash.com/photo-1599950753725-ea5d8aba0d29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fHww"
        />
        <Card1
          course="Laravel"
          teacher="Said Mohammad"
          text="Only Some Texts For Practice Try To Use It More"
          image="https://images.unsplash.com/photo-1598708521413-feaa4e69c01b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Card1
          course="Amazon"
          teacher="Ustad Noman"
          text="Only Some Texts For Practice Try To Use It More"
          image="https://images.unsplash.com/photo-1596397140655-25186db86832?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Card1
          course="Back-End"
          teacher="Ustad Gula Khan"
          text="Only Some Texts For Practice Try To Use It More"
          image="https://images.unsplash.com/photo-1599950753725-ea5d8aba0d29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fHww"
        />
        <Card1
          course="Hardware"
          teacher="Ustad Zabih Zahid"
          text="Only Some Texts For Practice Try To Use It More"
          image="https://images.unsplash.com/photo-1598708521413-feaa4e69c01b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Card1
          course="PHP"
          teacher="Moh Sahel Yousufzoy"
          text="Only Some Texts For Practice Try To Use It More"
          image="https://images.unsplash.com/photo-1596397140655-25186db86832?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Card2
          text="Delicious Food Of Afg"
          ingredients='["Palo", "Rice", "Bean"]'
          image="https://images.unsplash.com/photo-1599950753725-ea5d8aba0d29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fHww"
        />
      </div>
    </>
  );
}

export default App;
