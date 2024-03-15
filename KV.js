addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 解析请求URL以获取key
  let url = new URL(request.url)
  let key = url.pathname.split('/')[1] // 确保路径格式正确

  // 根据key从KV中读取数据，绑定变量名为API
  let data = await API.get(key)

  if (data === null) {
    // 如果找不到key，返回404
    return new Response('Key not found', { status: 404 })
  }

  // 返回KV中存储的数据
  return new Response(data, {
    headers: { 'content-type': 'application/json;charset=UTF-8' },
  })
}
