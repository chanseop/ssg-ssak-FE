import React from 'react'

function TalbeForm(props:{types:String}) {
  const {types}=props
  // console.log(types);
  const allianceCardData=false;

  const noTxtLogo="after:absolute after:left-[50%] after:w-[48px] after:h-[48px] after:bg-[url('/images/mypoint/noTxtLogo.jpg')] after:bg-cover after:translate-x-[-50%] after:top-0"
  
  return (
    <>
      {
        // 온라인 카드 컴포넌트
        types == "onlinecard" ?
        <>
        <p className='pb-4 text-[16px] font-semibold leading-6'>온라인 카드</p>
        <div className='table_box0 pb-[40px] relative'>
          <table className='w-full table-fixed border-t border-solid border-t-black'>
            <caption className='overflow-hidden absolute z-[-1px] w-[1px] h-[1px]'>온라인/모바일 카드</caption>
            <colgroup>
            <col width={"40%"}/>
            <col width={"auto"}/>
            <col width={"81px"}/>
            </colgroup>
            <thead >
              <tr className='font-normal align-middle text-center border-b border-solid border-b-[#e8e8e8]  text-[13px] leading-[21px] break-keep'>
                <th className='py-3' scope='col'>카드번호</th>
                <th className='py-3' scope='col'>발급처</th>
                <th className='py-3' scope='col'>발급일자</th>
              </tr>
            </thead>
            <tbody className='' >
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center leading-[21px] break-keep'>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 9350-****-****-5388 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 신세계포인트닷컴 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 2023-07-27 </td>
              </tr>
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center  leading-[21px] break-keep'>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 9350-****-****-2660 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 신세계포인트XSSG.COM </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 2019-10-30 </td>
              </tr>
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center leading-[21px] break-keep'>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 9350-****-****-9943 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> SSG PAY </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 2017-03-24 </td>
              </tr>
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center leading-[21px] break-keep hidden'>
                <td>
                  <div>
                    <p>보유하신 온라인 카드가 없습니다.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
      :types ==="제휴신용카드"?
      <>
        <p className='pb-4 text-[15px] font-semibold leading-6'>제휴 신용카드</p>
        <div className='table_box0 pb-[40px] relative'>
          <table className='w-full table-fixed border-t border-solid border-t-black'>
            <caption className='overflow-hidden absolute z-[-1px] w-[1px] h-[1px]'>제휴 신용카드</caption>
            <colgroup>
            <col width={"56%"}/>
            <col width={"auto"}/>
            <col width={"81px"}/>
            </colgroup>
            <thead >
              <tr className='font-normal align-middle text-center border-b border-solid border-b-[#e8e8e8]  text-[13px] leading-[21px] break-keep'>
                <th className='py-3' scope='col'>카드명</th>
                <th className='py-3' scope='col'>발급처</th>
                <th className='py-3' scope='col'>발급일자</th>
              </tr>
            </thead>
            {
            allianceCardData?
            <tbody>
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center leading-[21px] break-keep'>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 9350-****-****-5388 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 신세계포인트닷컴 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 2023-07-27 </td>
              </tr>
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center  leading-[21px] break-keep'>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 9350-****-****-2660 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 신세계포인트XSSG.COM </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 2019-10-30 </td>
              </tr>
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center leading-[21px] break-keep'>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 9350-****-****-9943 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> SSG PAY </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 2017-03-24 </td>
              </tr>
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center leading-[21px] break-keep hidden'>
                <td>
                  <div>
                    <p>보유하신 제휴 신용카드가 없습니다.</p>
                  </div>
                </td>
              </tr>
            </tbody>
            :
            <tbody>
              <tr>
                <td colSpan={3} className='text-[#767676] font-normal align-middle text-center border-b border-solid border-b-[#e8e8e8] py-3 px-0 text-[13px] break-keep'>
                  <div className='py-7'>
                    <p className={`relative pt-16 ${noTxtLogo}`}>보유하신 제휴 신용카드가 없습니다.</p>
                  </div>
                </td>
              </tr>
            </tbody>
            
            }
          </table>
        </div>
      </>
      :types === "오프라인카드"?
      <>
        <p className='pb-4 text-[15px] font-semibold leading-6'>오프라인 카드</p>
        <div className='table_box0 pb-[40px] relative'>
          <table className='w-full table-fixed border-t border-solid border-t-black'>
            <caption className='overflow-hidden absolute z-[-1px] w-[1px] h-[1px]'>오프라인 카드</caption>
            <colgroup>
            <col width={"56%"}/>
            <col width={"auto"}/>
            <col width={"81px"}/>
            </colgroup>
            <thead >
              <tr className='font-normal align-middle text-center border-b border-solid border-b-[#e8e8e8]  text-[13px] leading-[21px] break-keep'>
                <th className='py-3' scope='col'>카드명</th>
                <th className='py-3' scope='col'>발급처</th>
                <th className='py-3' scope='col'>발급일자</th>
              </tr>
            </thead>
            {
            allianceCardData?
            <tbody>
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center leading-[21px] break-keep'>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 9350-****-****-5388 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 신세계포인트닷컴 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 2023-07-27 </td>
              </tr>
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center  leading-[21px] break-keep'>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 9350-****-****-2660 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 신세계포인트XSSG.COM </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 2019-10-30 </td>
              </tr>
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center leading-[21px] break-keep'>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 9350-****-****-9943 </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> SSG PAY </td>
                <td className='py-3 border-b border-b-[#e8e8e8]'> 2017-03-24 </td>
              </tr>
              <tr className='text-[#767676] text-[12px] font-normal align-middle text-center leading-[21px] break-keep hidden'>
                <td>
                  <div>
                    <p>보유하신 제휴 신용카드가 없습니다.</p>
                  </div>
                </td>
              </tr>
            </tbody>
            :
            <tbody>
              <tr>
                <td colSpan={3} className='text-[#767676] font-normal align-middle text-center border-b border-solid border-b-[#e8e8e8] py-3 px-0 text-[13px] break-keep'>
                  <div className='py-7'>
                    <p className={`relative pt-16 ${noTxtLogo}`}>보유하신 제휴 신용카드가 없습니다.</p>
                  </div>
                </td>
              </tr>
            </tbody>
            
            }
          </table>
        </div>
      </>
      :null
      }
    </>
      
  )
}

export default TalbeForm