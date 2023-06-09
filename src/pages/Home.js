import PaintPage from "../components/PaintPage/PaintPage/PaintPage";
import PasarelaImagenes from "../components/PasarelaImagenes/PasarelaImagenes";
import Group from "../components/Group/Group";
import { MyContext } from "../Context";
import { useContext } from "react";

const Home = () => {
  const {
    state,
    handleState,
    handleShowBlog,
    handleShowQuizz,
    handleShowForm,
  } = useContext(MyContext);
  return (
    <>
      {/* <Header handleLogin={handleLogin}></Header> */}
      {/* <Header1 handleLogin={handleLogin} handleState={handleState}></Header1> */}
      <PasarelaImagenes />
      <Group />
      <PaintPage
        handleShowQuizz={handleShowQuizz}
        state={state}
        handleState={handleState}
        handleShowBlog={handleShowBlog}
        handleShowForm={handleShowForm}
      />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
