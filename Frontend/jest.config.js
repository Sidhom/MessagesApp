module.exports = {
  setupFilesAfterEnv: ['./setUpTests.js'],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  transform: {
    "\\.jsx$": "babel-jest",
    "\\.js$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./fileTransformer.js"
  }
};