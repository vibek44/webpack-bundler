const path=require('path')

const config=()=>{
  return {
    entry:'./src/index.js',
    output:{
      path:path.resolve(__dirname, 'build'),
      filename:'main.js'
    },
    devServer:{  //devserver to create localhost server
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
    }

  }
}

module.exports=config