import Clock from "./Clock/Clock";
import Logo from "../Logo/Logo";
import User from "./User/User";

function UserSelect() {
  return (
    <div className="bg-dark10 flex items-center flex-col min-h-[100svh]">
      <header className="py-4 px-16 flex text-white w-full justify-between md:py-8">
        <Logo size="2xl"/>
        <Clock/>
      </header>
      <main className="text-center text-dark40 m-auto xl:m-0">
        <div className="m-14 select-none xl:mb-44">
          <h1 className="text-xl mb-4 xl:text-6xl xl:font-light">Bem-vindo de volta ao Kenai</h1>
          <h2 className="font-light text-lg xl:text-4xl">Quem está usando?</h2>
        </div>
        <div className="grid gap-12 md:grid-flow-col">
          <User name='Matheus Queiroz'/>
          <User name='Gabriel Vasconcelos'/>
          <User name='Letícia Alves'/>
        </div>
        <div className="button my-14 xl:mt-44">
          <button className="w-[312px] h-14 bg-dark20 xl:w-56 xl:h-14">Adicionar Perfil</button>
        </div>
      </main>
    </div>
  );
}

export default UserSelect;
