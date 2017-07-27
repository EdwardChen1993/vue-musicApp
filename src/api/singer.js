import jsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    needNewCode: 0,
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    loginUin: 0,
    hostUin: 0,
    inCharset: 'utf8',
    g_tk: 5381
  })

  return jsonp(url, data, options)
}
