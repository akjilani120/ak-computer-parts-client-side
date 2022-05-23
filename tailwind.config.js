module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#204047",
        
"secondary": "#fab915",
        
"accent": "#eaeaea",
        
"neutral": "#3D4451",
        
"base-100": "#FFFFFF",
        
"info": "#202474",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
