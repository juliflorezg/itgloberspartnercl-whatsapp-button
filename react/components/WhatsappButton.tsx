import React from 'react'

type Props = {
  logo: string // whatsapp.png
  phone: string // 1234554
  message?: string // estás comunicándote con ITGlobersPartnercl
  width?: number // 80
  height?: number // 80
}

const WhatsappButton = ({
  logo = 'mi-logo.png',
  phone = '1234567',
  message = 'Estás comunicándote con ITGlobersPartnercl',
  width = 80,
  height = 80,
}: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')
  // const messageArray = message.split('').map((item) => item + '6')
  // console.log(messageArray)

  return (
    <>
      <div className="fixed bottom-2 right-2 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={logo} alt="whatsapp logo" width={width} height={height} />
        </a>
      </div>
    </>
  )
}

WhatsappButton.schema = {
  title: 'WhatsApp Button',
  type: 'object',
  properties: {
    logo: {
      title: 'Brand retaled whatsapp logo',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Phone number',
      description: 'Agrega por favor el número de teléfono',
      type: 'string',
    },
    message: {
      title: 'Message',
      description: 'Agrega por favor el mensaje que se verá para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Logo width',
      description: 'logo width',
      type: 'number',
    },
    height: {
      title: 'Logo height',
      description: 'logo height',
      type: 'number',
    },
  },
}

export default WhatsappButton
