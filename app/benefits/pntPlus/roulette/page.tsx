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