import React from 'react'

function Component({ girls }) {
  // destructuring
  return (
    <>
    {
      girls.map((item, index)=>{
        return (
          <div key={index} className='item'>
            {item?.name}
            {item.accessories.bags.map((bag, index) => {
              return (
                <div key={index}>
                  <h2>{bag}</h2>
                </div>
              )
            })}
          </div>
        )
      })
    }
      
    </>
  )
}

export default Component


// component har doim bizga  sifatida fragmentga o'ralgan html codelarni va state malumotlarini qaytarib turadi.

// props huddi functionda bor argumetndan qiymat kutishga o'xshaydi.
//  component qayerda chaqirilgan bo'lsa unga object sifatida name va value berib yuboriladi.