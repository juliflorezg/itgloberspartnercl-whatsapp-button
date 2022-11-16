📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# WhatsApp Button

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

This component lets you add a whatsapp button to your store theme for direct communication via WhatsApp, it can be customized with a logo url, phone number, a message, width & height


![Media Placeholder](/docs/button_showcase.png)

## Configuration 

1. Add the app as a peer dependency in your `manifest.json` file:

```JSON
"peerDependencies": {
    "itgloberspartnercl.whatsapp-button": "0.x"
  }
```

Now, you are able to use all the blocks exported by the whatsapp-button app. Check out the full list below:

| Block name      | Description    |
| --------------- | -------------- |
| whatsapp-button | This block will render the whatsapp button of your choice, giving it the logo, phone, message, width and height props available |


2. Now, in your desired store template, such as the ```store.home```, add the  ```whatsapp-button``` block and customize it to your needs:

```JSON
  {
  "store.home": {
    "children": ["whatsapp-button"]
  },

  "whatsapp-button": {
    "title": "custom component for whatsapp button",
    "props": {
      "logo": "assets/icons/whatsapp-logo.png",
      "phone": "22323444",
      "message": "Hola, estás comunicándote con ITGloberspartnercl, por favor ingresa tu duda."
    }
  }
}
```
### `whatsapp-button` props

| Prop name    | Type            | Description                                 | Default value |
| ------------ | --------------- | ------------------------------------------- | ------------- | 
| `logo`      | `string`         | url to use for customizing the button image | `mi-logo.png` |
| `message`      | `string`         | phone number you will send the message to | `1234567` |
| `message`      | `string`         | text you will send through whatsapp | `Estás comunicándote con ITGlobersPartnercl` |
| `width`      | `number`         | width of your chosen logo | `80` |
| `height`      | `number`         | height of your chosen logo | `80` |
 



## Customization

`No CSS Handles are available yet for the app customization.`
## Contributors ✨

 [Julian Florez](https://github.com/juliflorezg)