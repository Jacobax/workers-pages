# worker-pages
cf workers相关代码  
## KV.js：worker读取储存到KV中的IP
11行中`API`修改为worker绑定命名空间的变量名  
`worker_domain/key`即为订阅器所用的API