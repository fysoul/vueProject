// module.exports={
//     configureWebpack:{

//         resolve:{
//             alias:{
//                 '@':'./src', 
//                 'assets':'@/assets',
//                 'asset':'./src/assets',
//                 'common':'@/common',
//                 'components':'@/components',
//                 'network':'@/network',
//                 'pages':'@/pages'
//             }
//         }
//     }
// }

const path = require('path')
// const { config } = require('process')
function resolve(dir){
   return path.join(__dirname,dir)
}

module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))
        .set('assets',resolve('./src/assets'))
        .set('common',resolve('./src/common'))
        .set('components',resolve('./src/components'))
        .set('network',resolve('./src/network'))
        .set('pages',resolve('./src/pages'))

    }
}