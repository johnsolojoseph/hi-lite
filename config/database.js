if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'YOUR-CREDENTIALS-HERE-'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/hilite-dev'}
}
