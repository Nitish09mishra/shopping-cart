const products = [
        new Product({
            imagePath: 'https://shoppingrechargeoffers.com/wp-content/uploads/2019/08/Mobiles-Flipkart.jpg',
            title: 'Honor 9N',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis quidem alias exercitationem,  autem saepe! Quisquam, quia quas aliquid ex minus molestiae voluptatem dignissimos aperiam, perferendis praesentium  voluptates inventore sunt.',
            price: 190
        }),
        new Product({
            imagePath: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/138137-phones-buyer-s-guide-which-is-the-best-mid-range-phone-under-400-image1-w3pdengkrc.jpg',
            title: 'Motorola',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis quidem alias exercitationem,  autem saepe! Quisquam, quia quas aliquid ex minus molestiae voluptatem dignissimos aperiam, perferendis praesentium  voluptates inventore sunt.',
            price: 480
        }),
        new Product({
            imagePath: 'https://cdn.mos.cms.futurecdn.net/TbFEdJb6E7cJ5EonZB9eSS.jpg',
            title: 'iPhone 11 pro',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis quidem alias exercitationem,  autem saepe! Quisquam, quia quas aliquid ex minus molestiae voluptatem dignissimos aperiam, perferendis praesentium  voluptates inventore sunt.',
            price: 1540
        }),
        new Product({
            imagePath: 'https://www.imagup.com/wp-content/uploads/2019/10/Smartphone.jpg',
            title: 'Oppo',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis quidem alias exercitationem,  autem saepe! Quisquam, quia quas aliquid ex minus molestiae voluptatem dignissimos aperiam, perferendis praesentium  voluptates inventore sunt.',
            price: 190
        }),
        new Product({
            imagePath: 'https://cdn.vox-cdn.com/thumbor/S_KKOyNEqDs27n0C32aHCkjK8Y8=/0x0:2040x1360/1200x675/filters:focal(953x597:1279x923)/cdn.vox-cdn.com/uploads/chorus_image/image/65392508/akrales_191001_3687_0003.0.jpg',
            title: '1+5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis quidem alias exercitationem,  autem saepe! Quisquam, quia quas aliquid ex minus molestiae voluptatem dignissimos aperiam, perferendis praesentium  voluptates inventore sunt.',
            price: 650
        }),
        new Product({
            imagePath: 'https://cdn.vox-cdn.com/thumbor/zQl7AEyXAyVhPBvxE2vQVKH3uEc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19206380/akrales_190913_3666_0391.jpg',
            title: 'iPhone pro',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis quidem alias exercitationem,  autem saepe! Quisquam, quia quas aliquid ex minus molestiae voluptatem dignissimos aperiam, perferendis praesentium  voluptates inventore sunt.',
            price: 1900
        }),
        new Product({
            imagePath: 'https://www.journaldugeek.com/content/uploads/2020/02/capture-decran-2020-02-12-a-15-54-20-640x404.png',
            title: 'Samsung galaxy S20',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis quidem alias exercitationem,  autem saepe! Quisquam, quia quas aliquid ex minus molestiae voluptatem dignissimos aperiam, perferendis praesentium  voluptates inventore sunt.',
            price: 240
        }),
        new Product({
            imagePath: 'https://cdn.mos.cms.futurecdn.net/KqYm26XXvv3ZFadHRkd32G-768-80.jpg',
            title: 'Google pixel',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis quidem alias exercitationem,  autem saepe! Quisquam, quia quas aliquid ex minus molestiae voluptatem dignissimos aperiam, perferendis praesentium  voluptates inventore sunt.',
            price: 1689
        }),
        new Product({
            imagePath: 'https://cdn.vox-cdn.com/thumbor/S_KKOyNEqDs27n0C32aHCkjK8Y8=/0x0:2040x1360/1200x675/filters:focal(953x597:1279x923)/cdn.vox-cdn.com/uploads/chorus_image/image/65392508/akrales_191001_3687_0003.0.jpg',
            title: '1+5a',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis quidem alias exercitationem,  autem saepe! Quisquam, quia quas aliquid ex minus molestiae voluptatem dignissimos aperiam, perferendis praesentium  voluptates inventore sunt.',
            price: 700
        })
]

var k=0
for(var i; i<products.length; i++) {
    product[i].save((err, result) => {
        k++
        if(k===products.length){
            mongoose.disconnect()
        }
    })
}