import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string, //whatsapp.png
  phone: string, //1234554
  message?: string // estás comunicandote con ITGlobersPartnercl
  width?: number // 80
  height?: number // 80
}

const WhatsappButton = ({
  logo = "mi-logo.png", 
  phone ="1234567", 
  message="Estás comunicándote con ITGlobersPartnercl", 
  width=80, 
  height=80
}: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')
  console.log({
    logo, phone, formattedMessage
  })
  return <>
  {/* <p>{logo}</p>
  <p>{phone}</p>
  <p>{message}</p> */}
  <div className='fixed bottom-2 right-2 flex flexColumn'>
    <a 
      href={`https://wa.me/${phone}?text=${formattedMessage}`}
      target="_blank"
    >
      <img src={logo} alt="whatsapp logo" width={width} height={height}/>
    </a>
  </div>
  </>

}

export default WhatsappButton