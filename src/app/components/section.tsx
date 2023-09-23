import Image from "next/image"


type Sectionprops = {
  src: string
  text: string
  className: string
}
export default function Section(props:Sectionprops) {
  return(
    <section className={props.className} >
          <div className='flex w-3/6 items-center'>        
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