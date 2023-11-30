import localFont from 'next/font/local'

export const FONT_UBUNTU = localFont({
    src: [
      {
        path: "./ubuntu/Ubuntu-Light.ttf",
        weight: "300",
        style: "normal",
      },
      {
        path: "./ubuntu/Ubuntu-LightItalic.ttf",
        weight: "300",
        style: "italic",
      },
      {
        path: "./ubuntu/Ubuntu-Regular.ttf",
        weight: "400",
        style: "normal",
      },
      {
        path: "./ubuntu/Ubuntu-Medium.ttf",
        weight: "500",
        style: "nomal",
      },
      {
        path: "./ubuntu/Ubuntu-MediumItalic.ttf",
        weight: "500",
        style: "italic",
      },
      {
        path: "./ubuntu/Ubuntu-Bold.ttf",
        weight: "700",
        style: "normal",
      },
      {
        path: "./ubuntu/Ubuntu-BoldItalic.ttf",
        weight: "700",
        style: "italic",
      },
    ],
    variable: "--font-ubuntu",
    display: 'swap'
  });
  
  export const FONT_NUNITO_SANS = localFont({
    src: [
      {
        path: "./nunito_Sans/static/NunitoSans_10pt-Light.ttf",
        weight: "300",
        style: "normal",
      },
      {
        path: "./nunito_Sans/static/NunitoSans_10pt-LightItalic.ttf",
        weight: "300",
        style: "italic",
      },
      {
        path: "./nunito_Sans/static/NunitoSans_10pt-Regular.ttf",
        weight: "400",
        style: "normal",
      },
      {
          path: "./nunito_Sans/static/NunitoSans_10pt-Italic.ttf",
          weight: "400",
          style: "italic",
        },
      {
        path: "./nunito_Sans/static/NunitoSans_10pt-Medium.ttf",
        weight: "500",
        style: "nomal",
      },
      {
        path: "./nunito_Sans/static/NunitoSans_10pt-MediumItalic.ttf",
        weight: "500",
        style: "italic",
      },
      {
        path: "./nunito_Sans/static/NunitoSans_10pt-SemiBold.ttf",
        weight: "600",
        style: "normal",
      },
      {
        path: "./nunito_Sans/static/NunitoSans_10pt-SemiBoldItalic.ttf",
        weight: "600",
        style: "italic",
      },
      {
        path: "./nunito_Sans/static/NunitoSans_10pt-Bold.ttf",
        weight: "700",
        style: "normal",
      },
      {
        path: "./nunito_Sans/static/NunitoSans_10pt-BoldItalic.ttf",
        weight: "700",
        style: "italic",
      },
      {
          path: "./nunito_Sans/static/NunitoSans_10pt-ExtraBold.ttf",
          weight: "900",
          style: "normal",
        },
        {
          path: "./nunito_Sans/static/NunitoSans_10pt-ExtraBoldItalic.ttf",
          weight: "900",
          style: "italic",
        },
    ],
    variable: "--font-nunito_Sans",
    display:'swap'
  });