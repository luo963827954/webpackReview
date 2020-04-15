module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7',"> 0.01%"]
    },
    'postcss-pxtorem': {
      rootValue:37.5, // rem 单位
      propList: ['*']
    }
  }
 }
