const ls = window.localStorage

module.exports = {
    getItem,
    setItem,
    removeItem,
    clear,
    keys,
    getSize
};

function getItem(key) {
    try {
        return JSON.parse(ls.getItem(key))
    } catch (err) {
        return null
    }
}

function setItem(key, val) {
    try {
        ls.setItem(key, JSON.stringify(val))
    } catch (err) {
        return alert('保存出错')
    }
}

function removeItem(key) {
    ls.removeItem(key)
}

function clear() {
    ls.clear()
}

function keys() {
    return ls.keys()
}

function getSize() {
    var sizeStore = 0;
    if (window.localStorage) {
        // 遍历所有存储 
        for (var item in window.localStorage) {
            if (Object.prototype.hasOwnProperty.call(window.localStorage, item)) {
                sizeStore += window.localStorage.getItem(item).length;
            }
        }
    }
    let sizeStr = (sizeStore / 1024 / 1024).toFixed(2) + 'M'
    return sizeStr
}




/*
  使用方法：

  const torageUtils = require('@utils/torageUtils.js')
  const torageUtils = require('../../utils/torageUtils.js');

  torageUtils.setItem('key1', 'value1111')
  torageUtils.getItem('key1')
  console.log(torageUtils.getSize());

  */