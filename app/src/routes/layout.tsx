import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header";

export default component$(() => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer></footer>
    </>
  );
});
