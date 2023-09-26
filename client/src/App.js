import React from 'react';
import Header from "./components/Header"
import Urlcontainer from "./components/Urlcontainer"
import Footer from "./components/Footer"
import Urloutput from "./components/Urloutput"

function App() {
  return (
    <>
    {/* re-learn how to do state management stuff so that the user can actually input text */}
    <Header> </Header>
    <Urlcontainer> </Urlcontainer>
    <Urloutput> </Urloutput>
    <Footer></Footer>
    </>
  );
}

export default App;