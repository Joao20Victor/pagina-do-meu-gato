import Image from "next/image"


type Sectionprops = {
  src: string
  text: string
  className: string
}
export default function Section(props:Sectionprops) {
  return(
    <section className="flex justify-center items-center h-[80%] w-[80%] bg-P-purple text-gray-950 rounded-xl " >
          <div className={props.className}>        
            <Image 
              className='rounded-xl'
              src={props.src}
              alt=''
              width={200} 
              height={200} />
            <p>{props.text}</p>
          </div>
        </section>    
  )
}