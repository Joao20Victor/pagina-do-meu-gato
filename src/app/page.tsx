
import Header from "./components/header"
import Banner from "./components/banner"
import Section from "./components/section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <div className="flex flex-col justify-center items-center bg-P-blue h-[75vh] w-[100%]">
        <Section className="flex flex-col text-xs lg:flex-row gap-3 w-3/6 items-center" src="/Bruno/BrunoMaisNovo.png" text="Bruno é um gato preto com olhos amarelos, e sua beleza única e personalidade cativante o tornam um membro especial da nossa família. Seus olhos amarelos brilham como pérolas douradas em contraste com sua pelagem escura, revelando sua curiosidade e astúcia. "/>
      </div>
      <div className="flex justify-center items-center bg-P-blue h-[75vh] w-[100%] ">
        <Section className='flex flex-col text-xs lg:flex-row-reverse gap-3 w-3/6 items-center' src="/Bruno/BrunoMaisVelho.png" text="Além de sua aparência encantadora, ele é leal e afetuoso, adorando carinho e proporcionando tranquilidade em nossa casa. Bruno é uma joia rara que enriquece nossas vidas com amor e mistério." />
      </div>
      <Footer/>
    </>
  )
}
