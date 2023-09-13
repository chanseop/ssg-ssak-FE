import { StepperNumberType } from "@/types/signup/StepperNumberType"

export const StepperNumber = ({stepId,StepperNumberData}:{stepId:number , StepperNumberData:StepperNumberType[]}) => {
  const {title,contents}=StepperNumberData[stepId-1]
  // console.log(stepId);
  // console.log(title,contents);
  
  

  const iafter="after:bg-[url('/images/signup/ilogo.png')] after:bg-[98%_auto]"

  const stepcss='bg-[url("/images/signup/libackground.png")] bg-cover'
  const beforecss='bg-[#ff8843] bg-cover'
  const aftercss='bg-[#e8e8e8]'

  return (
    <section className='pt-[56px]'>
      <div className='py-10 px-5'>
        <div className='relative'>
          <ol className='flex relative mb-4'>
            {
              StepperNumberData.map((e:StepperNumberType)=>(
                <li key={e.id} className={`relative rounded-[50%] w-5 h-5 mr-[10px] ${ stepId===e.id ? stepcss : stepId > e.id ? beforecss : aftercss}`}>
                  <span className='indent-[-999rem] text-[0px]'>1</span>
                  <i className={`overflow-hidden absolute z-[-1px] w-[1px] h-[1px]  ${iafter}`}>현재 {e.id}단계</i>
                </li>
              ))
              
            }
            
            
          </ol>
          <p className='text-[22px] leading-8 font-semibold'>{title}</p>
          <p className='text-[12px] leading-5 mt-2 text-[#767676]'>{contents}</p>
        </div>
      </div>
    </section>
  );
}