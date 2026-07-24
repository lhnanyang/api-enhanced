// 云小编每日抽奖
//
// activityId:
// 默认 6501202
//
// drawCount:
// 默认 1
//
// checkToken:
// 易盾反作弊 Token

const createOption = require('../util/option.js')

module.exports = (query, request) => {
  const data = {
    activityId: query.activityId || '6501202',
    drawCount: query.drawCount || '1',
  }
  // TODO: 如何传递 checkToken
  const optionQuery = { ...query }
  if (query.checkToken) {
    data.checkToken = query.checkToken
    delete query.checkToken
  }
  return request(
    `/api/middle/play/do/lottery`,
    data,
    createOption(optionQuery, 'eapi', 'v2'),
  )
}
