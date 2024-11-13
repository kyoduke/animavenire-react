import Header from "../../components/Header";
import "./index.css";

export default function Root() {
  return (
    <>
      <Header isLogged={false} />
      <main id="root-main">
        <h1>Conteúdo</h1>
      </main>
    </>
  );
}
