const path=require('path')
const webpack=require('webpack')


const config=(env,argv)=>{
  const backend_url=argv.mode==='production'
    ? 'https://notes2023.fly.dev/api/notes'
    : 'http://localhost:3001/notes'
  
  return {
    entry:'./src/index.js',
    output:{
      path:path.resolve(__dirname, 'build'),
      filename:'main.js'
    },
    devServer:{  //devserver to create localhost server,bundling exist in memory
      static:path.resolve(__dirname, 'build'),
      compress:true,
      port:3000
    },
    devtool:'source-map',//use only for development
    module:{
      rules:[  // rules to allow jsx to plain javascript
        {
          test:/\.js$/,
          loader:'babel-loader',
          options:{
            presets:[ '@babel/preset-env','@babel/preset-react']
          }
          
        },
        {    //css loader to load css file and style loader to inject and create element using css
          test:/\.css$/,
          use:['style-loader', 'css-loader']

        }
      ],
    },
    plugins:[ 
      new webpack.DefinePlugin({ //this plugin is used to define global default constants used in bundled code
        BACKEND_URL:JSON.stringify(backend_url)
      })
    ]

  }
}

module.exports=config