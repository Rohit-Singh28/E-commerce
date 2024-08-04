const sample = [
    {
        "productName": "Boat Airdopes 111",
        "brandName": "Boat",
        "price": 1499,
        "sellingPrice": 1299,
        "description": "Wireless earbuds with high-quality sound.",
        "category": "airpodes",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819227/hwpiu5oii1nx0swt3lfe.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819273/ha7vwdtncwdgt2w7q6jr.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819284/nuidrl5x3halhvraqdyl.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819289/hvpcx8jl7r9rgkinzwqe.webp']
    },
    {
        "productName": "Boat Airdopes 131",
        "brandName": "Boat",
        "price": 999,
        "sellingPrice": 799,
        "description": "Wireless earbuds with touch controls.",
        "category": "airpodes",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819354/ymyzv38lfiuev4hxgvhw.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819358/njfze6qt6bnxaesdwbqu.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819362/cqcywodvirekxt7k4t73.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819365/o0nyhrdamqnikpsjz2wz.webp']
    },
    {
        "productName": "Boat Airdopes 411",
        "brandName": "Boat",
        "price": 1999,
        "sellingPrice": 1799,
        "description": "Wireless earbuds with IPX7 rating.",
        "category": "airpodes",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819399/f4m2rpalwy20m78brrn2.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819401/aqwe0o8muhwqdcrjqsjl.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819407/fhzcowfxqpqaph2tu1ug.webp']
    },
    {
        "productName": "Boat Airdopes 381",
        "brandName": "Boat",
        "price": 1599,
        "sellingPrice": 1399,
        "description": "Wireless earbuds with voice assistant support.",
        "category": "airpodes",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819442/khbai2aofgzqwuyoy6nq.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819444/kbyzdlvqkts3dppg9tsm.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819451/faqjxh5dpyx5tyclxgv3.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819452/j6ysoxra3k6kbktspvmo.webp']
    },
    {
        "productName": "Boat Airdopes 121",
        "brandName": "Boat",
        "price": 1799,
        "sellingPrice": 1599,
        "description": "Wireless earbuds with powerful bass.",
        "category": "airpodes",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819512/s7adobqjbjhrru0lhvac.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819516/f7doghezrtyji5rbvkpl.webp']
    },

    {
        "productName": "Canon EOS Rebel T7",
        "brandName": "Canon",
        "price": 37999,
        "sellingPrice": 35999,
        "description": "DSLR camera with 18-55mm lens.",
        "category": "camera",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819563/ivznz8zvqbjqgsvezrvy.jpg', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819565/ypyqghongvbzv4kpu8qt.jpg', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819567/rbty4h99bpjjjivxqivq.jpg']
    },
    {
        "productName": "Sony Alpha a6400",
        "brandName": "Sony",
        "price": 75999,
        "sellingPrice": 72999,
        "description": "Mirrorless camera with real-time eye autofocus.",
        "category": "camera",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819597/bp1zsyrzr6cablreynh9.jpg', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819601/agmggjxatmkrzddwqlez.jpg', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819607/fdiq5uco1ckum16z2cgl.jpg']
    },
    {
        "productName": "Oshaka",
        "brandName": "Oshaka",
        "price": 45999,
        "sellingPrice": 43999,
        "description": "DSLR camera with touchscreen LCD.",
        "category": "camera",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819667/qrzcu95xntpbtmmyt3c5.jpg', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819673/kte3xodpu6hm4jmckrus.jpg']
    },
    {
        "productName": "Canon PowerShot G7 X Mark III",
        "brandName": "Canon",
        "price": 51999,
        "sellingPrice": 49999,
        "description": "Compact camera with 4K video recording.",
        "category": "camera",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819725/yy6odhcjeagi9jlshlax.jpg', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819732/gnupvhyzbltqom5vxp5t.jpg', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819736/prrenvlpctkkmxkoisa4.jpg']
    },
    {
        "productName": "Sony Cyber-shot DSC-RX100 VII",
        "brandName": "Sony",
        "price": 86999,
        "sellingPrice": 84999,
        "description": "Compact camera with 1-inch sensor.",
        "category": "camera",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819597/bp1zsyrzr6cablreynh9.jpg', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819601/agmggjxatmkrzddwqlez.jpg', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819607/fdiq5uco1ckum16z2cgl.jpg']

    },


    {
        "productName": "Boat Rockerz 103",
        "brandName": "Boat",
        "price": 1499,
        "sellingPrice": 1299,
        "description": "Bluetooth earphones with deep bass.",
        "category": "earphones",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819829/akfhrkvzwt2kerahiycz.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819831/ljipjow7hrfo0pd3orat.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819834/j9zghcusczczgaukh68t.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819836/zka2t6x1f5taq3uxjwik.webp']
    },
    {
        "productName": "Boat Bassheads 400",
        "brandName": "Boat",
        "price": 399,
        "sellingPrice": 299,
        "description": "Wired earphones with HD sound.",
        "category": "earphones",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819874/v6zs6xkbmixaywsmn5xq.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819876/c54j8qvdibucv1ucr5yk.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819878/py634enospfsgb6ywq8f.webp']
    },
    {
        "productName": "Boat Rockerz 235 v2",
        "brandName": "Boat",
        "price": 1999,
        "sellingPrice": 1799,
        "description": "Bluetooth earphones with IPX7 rating.",
        "category": "earphones",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819905/cvvflkcmxgbc5y4cvefo.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819909/tvwsv9remxj4qt3tlzoe.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819913/m5pgr5mcmwmeu1rt3fo7.webp']
    },
    {
        "productName": "Boat Bassheads 242",
        "brandName": "Boat",
        "price": 599,
        "sellingPrice": 499,
        "description": "Wired earphones with super extra bass.",
        "category": "earphones",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819955/rwgjqc6wnpcplh27p29i.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819958/ccje8sv3d3ba8ubrz0io.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819961/aghoft4ioygb9bbeow7x.webp']
    },
    {
        "productName": "Boat Rockerz 375",
        "brandName": "Boat",
        "price": 1999,
        "sellingPrice": 1799,
        "description": "Bluetooth earphones with 8 hours playback.",
        "category": "earphones",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819988/ovbutu9dvvzlqcl0o4tw.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819990/eaifzuo5ixk2mpvbytmp.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721819993/cqrpossxbgqcpzciodgh.webp']
    },


    {
        "productName": "Realme 7 pro",
        "brandName": "Realme",
        "price": 20999,
        "sellingPrice": 19999,
        "description": "Smartphone with 6000mAh battery.",
        "category": "mobiles",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820042/apettk9b1nhwygrop4qt.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820043/zza04ws5yxt6rr7kdws6.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820046/w5abkoiy79ferw82qodp.webp']
    },
    {
        "productName": "Samsung Galaxy A13",
        "brandName": "Samsung",
        "price": 16999,
        "sellingPrice": 14999,
        "description": "Smartphone with 64MP quad camera.",
        "category": "mobiles",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820109/eh21788l9ttunknjmjgz.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820119/ekadgt95ebmhmodgqltt.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820125/apr1hqzr9p9ukjsgadne.webp']
    },
    {
        "productName": "Realme 9 Pro",
        "brandName": "Realme",
        "price": 18999,
        "sellingPrice": 17999,
        "description": "Smartphone with 108MP camera.",
        "category": "mobiles",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820174/oo4zngazs6kzu98eecj8.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820176/quhl8n5tco0fvkcgfysx.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820178/bpovzycsvz3ytzlay5nk.webp']
    },


    {
        "productName": "Asus 3",
        "brandName": "Asus",
        "price": 7499,
        "sellingPrice": 6999,
        "description": "Advanced wireless mouse.",
        "category": "Mouse",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820226/zjd5wpz2trd1iwuojkuy.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820228/b4wbbctbn6es7ejib9o3.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820231/d7aeowrygvgbzrnh0hes.webp']
    },
    {
        "productName": "HP Wireless Mouse X4000",
        "brandName": "HP",
        "price": 1299,
        "sellingPrice": 999,
        "description": "Stylish wireless mouse.",
        "category": "Mouse",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820269/zggsioz9lxsnx3qbvnpw.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820272/zqmhwo7zcqo6sktdkult.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820275/pbajgyqfecdlebdt88mn.webp']
    },
    {
        "productName": "HP X200 Wireless Mouse",
        "brandName": "HP",
        "price": 899,
        "sellingPrice": 799,
        "description": "Compact wireless mouse.",
        "category": "Mouse",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820307/wq0gqjhtlobm90kvupfc.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820310/wfrn7f9pybkiczaxrlas.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820312/plic75d12ye2upvu4rzx.webp']
    },




    {
        "productName": "Canon Pixma G2012",
        "brandName": "Canon",
        "price": 8999,
        "sellingPrice": 7999,
        "description": "All-in-one ink tank printer.",
        "category": "printers",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820361/oh3dgzkkprjbkxuycfma.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820363/mogokanrana63q2bkgp5.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820366/dxehoqqedtbkj8ztcqpl.webp']
    },
   



    {
        "productName": "AMD Ryzen 7 3700X",
        "brandName": "AMD",
        "price": 28000,
        "sellingPrice": 27000,
        "description": "8-core, 16-thread unlocked desktop processor.",
        "category": "processor",
        "productImage":['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820403/pawdxx9myhqwr2fmqu5m.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820405/mlhq7lhkvkv3ttetgktf.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820407/killhoflo6m8euobfiri.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820412/fuzhah9ugbivrcl6bdqr.webp']
    },
    


    {
        "productName": "LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator",
        "brandName": "LG",
        "price": 16999,
        "sellingPrice": 15999,
        "description": "Smart Inverter Compressor, Fast Ice Making.",
        "category": "refrigerator",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820470/efjlgnd7jghlqmgelgff.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820470/dt5ljnfcu9j1vcqesql5.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820470/etorppctnotoo7xlfmrx.webp']
    },
    {
        "productName": "Samsung 253 L 3 Star Frost Free Double Door Refrigerator",
        "brandName": "Samsung",
        "price": 23999,
        "sellingPrice": 22999,
        "description": "Digital Inverter Compressor, All Round Cooling.",
        "category": "refrigerator",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820500/uzbgbxlr2eajqz7petvz.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820508/ri1xsrqwrho7xmv9unjh.webp']
    },
   



    {
        "productName": "Boat Stone 1000",
        "brandName": "Boat",
        "price": 2999,
        "sellingPrice": 2799,
        "description": "14W Bluetooth Speaker with Powerful Bass.",
        "category": "speakers",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820585/vwrxklwqoubf3x5cnbup.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820588/nw1fvqo6m7xeaopmw3pd.webp']
    },
    {
        "productName": "Boat Stone 170",
        "brandName": "Boat",
        "price": 1299,
        "sellingPrice": 999,
        "description": "5W Bluetooth Speaker with SD Card Slot.",
        "category": "speakers",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820627/m8itrajkaoce1z1qq3s9.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820632/nfsejdn2wgrzsl9ydifo.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820632/tve1vodesxdjihdikvqz.webp']
    },
    


    {
        "productName": "Nova NHT 1071",
        "brandName": "Nova",
        "price": 799,
        "sellingPrice": 599,
        "description": "Rechargeable Cordless Beard Trimmer.",
        "category": "trimmers",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820671/hkvxca0pjm56skdfqs5g.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820674/qlo53jfvojqmgw0goorh.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820676/lmqqifwxihn5evmaeg51.webp']
    },
    {
        "productName": "Philips QT4001/15",
        "brandName": "Philips",
        "price": 1299,
        "sellingPrice": 1099,
        "description": "Cordless Rechargeable Beard Trimmer.",
        "category": "trimmers",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820713/qajxpozrjzqjcchytgtu.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820714/f5q4xohnb0patga0maor.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820715/hpoccxjnw8r8tfh4x8ya.webp']
    },
    {
        "productName": "Nova NHT 1045",
        "brandName": "Nova",
        "price": 499,
        "sellingPrice": 399,
        "description": "Cordless Beard Trimmer with Adjustable Comb.",
        "category": "trimmers",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820671/hkvxca0pjm56skdfqs5g.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820674/qlo53jfvojqmgw0goorh.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820676/lmqqifwxihn5evmaeg51.webp']
    },



    {
        "productName": "Samsung 43 Inch Smart LED TV",
        "brandName": "Samsung",
        "price": 35999,
        "sellingPrice": 32999,
        "description": "Full HD Smart LED TV with Voice Assistant.",
        "category": "televisions",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820754/ffjoxr0svfldirloyxgx.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820758/cw3bdobddgchrlpzqykd.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820761/kkz4f0ejonqiynhsgsbw.webp']
    },
    {
        "productName": "Mi 55 Inch 4K Ultra HD Smart LED TV",
        "brandName": "Mi",
        "price": 49999,
        "sellingPrice": 46999,
        "description": "4K Ultra HD Smart LED TV with Android OS.",
        "category": "televisions",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820786/m2hetu4olgnsbmwb2a2i.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820787/rbymaltfjjs4fltiam67.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820789/imljm8xrlh0zvyyxkl1v.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820791/xxutpzritdprn95k2egs.webp']
    },
    {
        "productName": "Acer 32 Inch HD Ready LED TV",
        "brandName": "Acer",
        "price": 15999,
        "sellingPrice": 13999,
        "description": "HD Ready LED TV with Wide Viewing Angle.",
        "category": "televisions",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820815/vnhifxsjlhwfikjs5il4.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820817/zoshglpqawvg5vfs9gvj.webp']
    },
    


    {
        "productName": "Boat Storm Smartwatch",
        "brandName": "Boat",
        "price": 2999,
        "sellingPrice": 2799,
        "description": "Smartwatch with heart rate and SpO2 monitor.",
        "category": "watches",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820872/jhboybqlryxp3iy4e6an.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820875/o3jaebkxidvvthfdc961.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820876/xkmqyt2burarrla4jt0g.webp']
    },
    {
        "productName": "Boat Flash Edition Smartwatch",
        "brandName": "Boat",
        "price": 2499,
        "sellingPrice": 2299,
        "description": "Smartwatch with LCD display and fitness tracking.",
        "category": "watches",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820906/ilw6lgnaeyy4zdrrppu7.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820908/xgqbzjcavb2cebhb4zzz.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820909/szdpdfvfvgcnpxui5kaw.webp']
    },
    {
        "productName": "Boat Xtend Smartwatch",
        "brandName": "Boat",
        "price": 3999,
        "sellingPrice": 3799,
        "description": "Smartwatch with built-in Alexa.",
        "category": "watches",
        "productImage": ['http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820934/ig9ysstxynuhunwxcx7f.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820937/bilz3njps7tzbdoaaaw0.webp', 'http://res.cloudinary.com/dr0lc5zxc/image/upload/v1721820939/vuafjdufouuzxktqqbyz.webp']
    },

]

module.exports = { data: sample };