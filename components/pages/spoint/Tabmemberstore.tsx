import React from 'react'
import Image from 'next/image'
import Emarttable from '@/components/pages/spoint/Emarttable'
import Shintable from '@/components/pages/spoint/Shintable'
import SSGcomtable from '@/components/pages/spoint/SSGcomtable'
import Everytable from '@/components/pages/spoint/Everytable'
import Emart24table from '@/components/pages/spoint/Emart24table'
import Etctable from '@/components/pages/spoint/Etctable'

function Tabmemberstore(props:{types:string}) {
  const types=props.types;
  console.log(types);

  return (
    <section>
      {
        types==="emart"?
        <Emarttable />
        :types==="shinsegae"?
        <Shintable />
        :types==="SSGCOM"?
        <SSGcomtable />
        :types==="everyday"?
        <Everytable />
        :types==="emart24"?
        <Emart24table />
        :types==="etc"?
        <Etctable />
        :null
      }

    </section>
  )
}

export default Tabmemberstore