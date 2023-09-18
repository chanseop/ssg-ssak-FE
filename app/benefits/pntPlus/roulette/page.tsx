import React from 'react'
import Image from 'next/image'

function roulette() {
  return (
    <>
      <div>
        <Image
          src={`/images/benefits/roulette.png`}
          alt='럭키룰렛'
          width={390}
          height={333}>
        </Image>
      </div>

      <div>
        <Image
          src={`/images/benefits/roulettebody.png`}
          alt='럭키룰렛 본체'
          width={305}
          height={305}
          className='absolute left-10 top-[490px]'>
        </Image>
      </div>

      <div>
        <Image
          src={`/images/benefits/button.png`}
          alt='버튼'
          width={78}
          height={96}
          className='absolute left-[150px] top-[590px]'>
        </Image>
      </div>

      <div>
        <Image
          src={`/images/benefits/roulettemiddle.jpg`}
          alt='럭키룰렛 방법'
          width={390}
          height={333}>
        </Image>
      </div>

      <div>
        <Image
          src={`/images/benefits/rouletteguide.png`}
          alt='럭키룰렛 방법'
          width={390}
          height={333}>
        </Image>
      </div>
    </>
  )
}

export default roulette