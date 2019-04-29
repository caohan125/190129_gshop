/*
* ajax请求函数模块
* 返回值:promise对象(异步返回的数据是:response.data)*/
//promise模式就是解决回调函数对一种方法,判断成功失败,用起来返回回来的东西会简单一些
//axios事处理ajax请求用的
import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    //执行异步ajax请求
    let promise
    if (type === 'GEt') {//判断请求方式是不是GET
      let dataStr = ''//用let 声明一个叫dataStr的字符串变量
      Object.keys(data).forEach(key => {//Object.keys枚举自身的属性的对象  //forEach调用数组的每个元素，并将元素传递给回调函数
        dataStr += key + '=' + data[key] + '&'//
      })
      if (dataStr !== '') {//
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('$'))//substring(0,lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索)方法用于提取字符串中介于两个指定下标之间的字符
        url = url + '?' + dataStr//拼接字符串,制作一个路径
      }
      //发送get请求
      promise = axios.get(url)//这里就是get情况嘛,就这么写就OK啦
    } else {
      //发送post请求
      promise = (axios.post(url, data))//这里就是post情况,这个时候就这么写就行啦,大致可以理解为data他会自己给我加到URL里面去
    }
    //所以这里应该就明白了promise是用来处理我请求数据之后后台服务器发送给我的回调函数
    promise.then(function(response){
      //成功了调用resolve
      resolve(response.data)
    }).catch(function(error){
      //失败了调用reject
      reject(error)
    })
  })

}

