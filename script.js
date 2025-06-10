document.addEventListener('DOMContentLoaded', function() {
  // 选取所有的图片元素
  var images = document.querySelectorAll('.item-image');

  // 遍历每一个图片元素
  images.forEach(function(image) {
    // 获取图片的src属性
    var src = image.getAttribute('src');
    // 使用正则表达式提取文件名，忽略路径和后缀
    // 正则表达式现在匹配.jpg, .jpeg, .png, .gif, 和.webp后缀的文件
    var filenameMatch = /([^\/]+?)(?:_\半身像)?\.(jpg|jpeg|png|gif|webp)$/i.exec(src);
    if (filenameMatch && filenameMatch.length > 1) {
      // 提取文件名（不包含路径和后缀）
      var filename = filenameMatch[1];
      // 替换下划线为其他字符（例如空格）并设置为标题
      var title = filename.replace(/_/g, ' ');
      // 找到与图片对应的标题元素，并设置其内容
      var titleElement = image.closest('.item').querySelector('.item-title');
      if (titleElement) {
        titleElement.textContent = title;
      }
    }
  });
});

//折扣计算
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('apply-discount').addEventListener('click', function() {
    // 获取用户输入的折扣率并转换为小数形式（例如，90变成0.9）
    var discountRate = document.getElementById('discount-rate').value / 100;

    // 检查折扣率是否在合理范围内
    if (discountRate > 0 && discountRate <= 1) {
      // 选择所有的.item-price元素
      var prices = document.querySelectorAll('.item-price');

      // 遍历所有价格元素
      prices.forEach(function(priceElement) {
        // 获取当前价格，并去除"元"字，然后转换为数字
        var currentPrice = parseFloat(priceElement.textContent.replace('元', ''));
        // 计算打折后的价格
        var discountedPrice = (currentPrice * discountRate).toFixed(2); // 保留两位小数
        // 更新价格显示
        priceElement.textContent = discountedPrice + '元';
      });
    } else {
      alert('请输入有效的折扣率（1到100之间）');
    }
  });
});
