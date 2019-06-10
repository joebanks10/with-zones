const { DEPLOY } = process.env
const alias = 'with-zones.nextjs.org/blog'

module.exports = {
  target: 'serverless',
  assetPrefix: DEPLOY ? `https://${alias}` : 'http://localhost:5000'
}
