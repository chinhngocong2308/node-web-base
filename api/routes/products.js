const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
  
    // Create a transporter object using SMTP
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'chinhngocong2308@gmail.com', // Your email address
          pass: 'lfjt syvz gsbk yupw' // Your password
      }
    });

    // Define email content
    let mailOptions = {
      from: 'chinhngocong2308@gmail.com', // Sender address
      to: 'chinhngocong2308@gmail.com', // List of recipients
      subject: 'Test Email', // Subject line
      text: '', // Plain text body
      html: '<div ng-show="show_result" class="section"><p> Mức đóng: BHXH (8%), BHYT (1.5%), BHTN (1%) </p><p class="ng-hide"> Mức lương tối đa để đóng BHXH, BHYT là: 29,800,000 </p><p class="ng-hide"> Mức lương tối đa để đóng BHTN là: 85,172,000 </p><p class="ng-binding"><b class="text-bold">Bảo hiểm bắt buộc</b> = 200.000.000 x 8% + 200.000.000 x 1.5% + 200.000.000 x 1% = <b class="text-bold ng-binding">3,767,000đ</b></p><p> Giảm trừ bản thân = 11,000,000 </p><p class="ng-binding"> Giảm trừ người phụ thuộc = 0 x 4,400,000 = </p><p class="ng-binding"> Thu nhập tính thuế = 200.000.000 - 3,767,000 - 11,000,000 -  = 185,233,000</p><p class="ng-binding"> Mức thuế áp dụng đối với 185,233,000 là 35% - 9,850,000 (tham khảo bảng bên dưới) </p><p class="ng-hide" style="display: none;"> Mức thu nhập này không phải đóng thuế TNCN </p><p><b class="text-bold">Thuế thu nhập cá nhân phải nộp</b> = <span class="ng-binding">185,233,000 x 35% - 9,850,000 =</span> <b class="h2 text-bold ng-binding">54,981,550đ</b></p><div class="col-md-12"><ul><li><a href="https://thuvienphapluat.vn/van-ban/thue-phi-le-phi/Luat-thue-thu-nhap-ca-nhan-2007-04-2007-QH12-59652.aspx" class="font-weight-bold text-bold" target="_blank">Luật Thuế TNCN năm 2007 </a></li><li><a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Luat-thue-thu-nhap-ca-nhan-sua-doi-2012-26-2012-QH13-152719.aspx" class="font-weight-bold text-bold" target="_blank">Luật sửa đổi, bổ sung Luật thuế thu nhập cá nhân năm 2012 </a></li><li><a href="https://thuvienphapluat.vn/van-ban/thue-phi-le-phi/Luat-sua-doi-cac-Luat-ve-thue-2014-259208.aspx" class="font-weight-bold text-bold" target="_blank">Luật sửa đổi các Luật về Thuế năm 2014 </a></li><li><a href="https://thuvienphapluat.vn/van-ban/thue-phi-le-phi/Thong-tu-111-2013-TT-BTC-Huong-dan-Luat-thue-thu-nhap-ca-nhan-va-Nghi-dinh-65-2013-ND-CP-205356.aspx" class="font-weight-bold text-bold" target="_blank">Thông tư 111/2013/TT-BTC </a></li><li><a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-quyet-954-2020-UBTVQH14-dieu-chinh-muc-giam-tru-gia-canh-cua-thue-thu-nhap-ca-nhan-444106.aspx" class="font-weight-bold text-bold" target="_blank">Nghị quyết 954/2020/UBTVQH14 về điều chỉnh mức giảm trừ thuế thu nhập cá nhân </a></li></ul><hr><h2 class="h4">Bảng mức thuế thu nhập cá nhân</h2><p> Trong bảng bên dưới, chữ viết tắt TN là số tiền thu nhập chịu thuế theo tháng (sau khi đã trừ đi các khoản bảo hiểm và giảm trừ gia cảnh). </p><table class="table table-bordered table-hover"><thead><tr><th>Bậc</th><th>Thu nhập tháng</th><th>Số thuế phải nộp</th></tr></thead><tbody><tr><td class="text-center">1</td><td class="text-center">TN &lt;= 5tr</td><td class="text-center">TN x 5%</td></tr><tr><td class="text-center">2</td><td class="text-center">5tr &lt; TN &lt;= 10tr</td><td class="text-center">TN x 10% - 0.25tr</td></tr><tr><td class="text-center">3</td><td class="text-center">10tr &lt; TN &lt;= 18tr</td><td class="text-center">TN x 15% - 0.75tr</td></tr><tr><td class="text-center">4</td><td class="text-center">18tr &lt; TN &lt;= 32tr</td><td class="text-center">TN x 20% - 1.65tr</td></tr><tr><td class="text-center">5</td><td class="text-center">32tr &lt; TN &lt;= 52tr</td><td class="text-center">TN x 25% - 3.25tr</td></tr><tr><td class="text-center">6</td><td class="text-center">52tr &lt; TN &lt;= 80tr</td><td class="text-center">TN x 30% - 5.85tr</td></tr><tr><td class="text-center">7</td><td class="text-center">TN &gt; 80tr</td><td class="text-center">TN x 35% - 9.85tr</td></tr></tbody></table><div class="" style="margin-top: 20px; margin-bottom: 20px;"><p class="title-right" style="font-size: 12px; font-weight: bold; color: rgb(7, 109, 165); background-position: center bottom; background-repeat: no-repeat; text-transform: uppercase; margin-bottom: 10px; border-bottom: 2px solid rgb(248, 155, 26); padding: 0px;"><a target="_blank" href="https://www.youtube.com/channel/UCUHc4-RQRJslid4IgK7AVPQ?sub_confirmation=1">Video Pháp Luật</a></p> <iframe width="552" height="310" src="https://www.youtube.com/embed/ZpdrD-m1Kic?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe> <a target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=ZpdrD-m1Kic" title="Cách tính thuế thu nhập cá nhân từ tiền lương, tiền công" style="margin-top: 10px; display: block; color: rgb(7, 109, 165);"><strong>Cách tính thuế thu nhập cá nhân từ tiền lương, tiền công</strong></a></div></div></div>' // HTML body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });

  
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;