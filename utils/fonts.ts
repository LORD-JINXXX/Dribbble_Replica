import localFont from "next/font/local";

const mona_init = localFont({
    src: [
        {
            path: '../public/fonts/Mona-Sans-UltraLight.woff',
            weight: '200'
        },

        {
            path: '../public/fonts/Mona-Sans-Light.woff',
            weight: '300'
        },

         {
            path: '../public/fonts/Mona-Sans-Regular.woff',
            weight: '400'
        },

        {
            path: '../public/fonts/Mona-Sans-Medium.woff',
            weight: '500'
        },

        {
            path: '../public/fonts/Mona-Sans-SemiBold.woff',
            weight: '600'
        },

        {
            path: '../public/fonts/Mona-Sans-Bold.woff',
            weight: '700'
        },

        {
            path: '../public/fonts/Mona-Sans-ExtraBold.woff',
            weight: '800'
        }

    ],

    variable: '--font-mona_sans'
});

const Ondyne_init = localFont({
    src: [
        {
            path: "../public/fonts/Ondyne.ttf"
        }
    ],

    variable: '--font-ondyne'
})

export const mona = mona_init.variable;
export const ondyne = Ondyne_init.variable;