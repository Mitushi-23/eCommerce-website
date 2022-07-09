const Products = [
  {
    // _id: '1',
    name: "Milton Duo Deluxe 1000 Thermosteel 24 Hours Hot and Cold Water Bottle, 1 Litre, Silver",
    image: "/images/thermosteelBottle.jpg",
    description:
      "Warrant 1 year , Capacity : 1000 ml,Vacuum insulation Keeps liquid Hot for 24 hours & Cold for 24 Hours,Ideal for Using tea, coffee,juice etc,100% leake proof & All weather season product,Ideal for liquids to keep Hot and Cold up to 24 hr, Break resistance tough stainless for indore and out door purpose.",
    brand: "Milton",
    category: "Kitchen & Dining",
    price: "1008",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
  },
  {
    // _id: '2',
    name: "Titan Raga Moments of Joy Analog Pink Dial Women's Watch-NP2606WM09",
    image: "/images/titanWatch.jpeg",
    description:
      "Unique flippable Swarovski crystal butterfly to play with on the strap,Stunning solo Swarovski crystal studded strap,Beautiful Rose Gold colored timepiece,Warranty: 2 years.",
    brand: "Titan",
    category: "jewelery & watches",
    price: "5599",
    countInStock: "6",
    rating: "4.5",
    numReviews: "12",
  },
  {
    // _id: '3',
    name: "boAt Bassheads 900 Wired On Ear Headphones with Mic (Carbon Black)",
    image: "/images/boatHeadphones.png",
    description:
      "Enjoy powerful, dynamic sound with punchy bass and clear, natural vocals with the responsive 40mm Neodymium drivers, balanced sound for a complete listening experience.",
    brand: "Boat",
    category: "electronics",
    price: "599",
    countInStock: "5",
    rating: "4",
    numReviews: "5",
  },
  {
    // _id: '4',
    name: "OM SAI LATEST CREATION Women's Ruby Cotton Mor Pankh Printed Anarkali Kurti",
    image: "/images/Kurti.jpeg",
    description:
      "Care Instructions: Hand Wash Only,Fit Type: Reguler,Fabric :- Slub Rayon || Pattern :- Printed || Style :- Anarkli Kurti,Team it with a pair of jeggings and flats to step out in style.",
    brand: "OM SAI LATEST CREATION",
    category: "women's clothing",
    price: "379",
    countInStock: "12",
    rating: "4",
    numReviews: "7",
  },
  {
    // _id: '5',
    name: "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
    image: "/images/smartphone.jpeg",
    description:
      "5G Ready powered by Qualcomm Snapdragon 865 Octa-Core processor, 8GB RAM, 128GB internal memory expandable up to 1TB, Android 11.0 operating system and dual SIM.",
    brand: "Samsung",
    category: "electronics",
    price: "39990",
    countInStock: "3",
    rating: "4.5",
    numReviews: "16",
  },
  {
    // _id: '6',
    name: "ASIAN Men's Bouncer-01 Sports,Walking,Gym,Training,Running Shoes",
    image: "/images/sportsShoes.jpeg",
    description:
      "Sole: Ethylene Vinyl Acetate,Closure: Lace-Up,Heel Height: 1.2 inches,Shoe Width: Medium.",
    brand: "ASIAN",
    category: "bags & shoes",
    price: "849",
    countInStock: "6",
    rating: "4",
    numReviews: "10",
  },
  {
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "bags & shoes",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: 3.9,
    countInStock: 120,
    numReviews: "10",
  },
  {
    name: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: 4.1,
    countInStock: 259,
    numReviews: "10",
  },
  {
    name: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: 4.7,
    countInStock: 500,
    numReviews: "10",
  },
  {
    name: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: 2.1,
    countInStock: 430,
    numReviews: "10",
  },
  {
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: 4.6,
    countInStock: 400,
    numReviews: "10",
  },
  {
    name: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: 3.9,
    countInStock: 70,
    numReviews: "10",
  },
  {
    name: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: 3,
    countInStock: 400,
    numReviews: "10",
  },
  {
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: 1.9,
    countInStock: 100,
    numReviews: "10",
  },
  {
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: 3.3,
    countInStock: 203,
    numReviews: "10",
  },
  {
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: 2.9,
    countInStock: 470,
    numReviews: "10",
  },
  {
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: 4.8,
    countInStock: 319,
    numReviews: "10",
  },
  {
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: 4.8,
    countInStock: 400,
    numReviews: "10",
  },
  {
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: 2.9,
    countInStock: 250,
    numReviews: "10",
  },
  {
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: 2.2,
    countInStock: 140,
    numReviews: "10",
  },
  {
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: 2.6,
    countInStock: 235,
    numReviews: "10",
  },
  {
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: 2.9,
    countInStock: 340,
    numReviews: "10",
  },
  {
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: 3.8,
    countInStock: 679,
    numReviews: "10",
  },
  {
    name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: 4.7,
    countInStock: 130,
    numReviews: "10",
  },
  {
    name: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: 4.5,
    countInStock: 146,
    numReviews: "10",
  },
  {
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: 3.6,
    countInStock: 145,
    numReviews: "10",
  },
  //----------------------------------
  {
    _id: "61ab420c0f34753bcedfa787",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "special cotton shirt for men",
    price: 15,
    category: "men's fashion",

    description: "special-cotton-shirt-for-men",
    image:
      "https://getketchadmin.getketch.com/product/8905404323248/660/KHSH000336_1.jpg",
  },
  {
    _id: "61ab42600f34753bcedfa78b",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "high quality men distress skinny blue jeans",
    price: 90,
    category: "men's fashion",
    image:'https://www.muftijeans.in/media/catalog/product/cache/b3ce8a25f68bdf1c300bd86c85bcf4d2/1/_/1_mft-32125-o-59-blue-mid.jpg',
    description: "high-quality-men-distress-skinny-blue-jeans",
  },
  {
    _id: "61ab42790f34753bcedfa78f",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "cotton o neck mens clothing t shirts",
    price: 30,
    category: "men's fashion",
    image:'https://cdn.shopify.com/s/files/1/0014/3219/1047/products/A10059GY_-_Front_2000x.jpg?v=1633351183',
    description: "cotton-o-neck-mens-clothing-t-shirts",
  },
  {
    _id: "61ab42d00f34753bcedfa79e",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "cotton pullover embroidery sweatshirt women",
    price: 100,
    category: "women's fashion",
    image:'https://img101.urbanic.com/goods-pic/5f81e98bcdfd4ab2853256cbedcb761b_w1000_q90',
    description: "cotton-pullover-embroidery-sweatshirt-women",
  },
  {
    _id: "61ab42e90f34753bcedfa7a2",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "breast button belt sur collar winter coat women",
    price: 120,
    category: "women's fashion",
    image:'https://cdn.shopify.com/s/files/1/0494/2600/6171/products/DoubleBreastedKnotSleeveBeltedTrenchCoat1_590x.jpg?v=1602921657',
    description: "breast-button-belt-sur-collar-winter-coat-women",
  },
  {
    _id: "61ab431c0f34753bcedfa7a6",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "running sneaker",
    price: 200,
    category: "bags & shoes",
    image:'https://b4basket.in/wp-content/uploads/2022/04/5f37392d3a9600004f4ee539-5-large.jpg',
    description: "running-sneaker",
  },
  {
    _id: "61ab43350f34753bcedfa7aa",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "men casual shoes sports running sneakers",
    price: 100,
    category: "bags & shoes",
    image:'https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwbdbb53cf/images/large/8396295_1.jpeg?sw=817',
    description: "men-casual-shoes-sports-running-sneakers",
  },
  {
    _id: "61ab434b0f34753bcedfa7ae",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "premium leather matt black casual boot",
    price: 250,
    category: "bags & shoes",
    image:'https://cdn.moglix.com/p/RmG0fVb5qmZxM-xxlarge.jpg',
    description: "premium-leather-matt-black-casual-boot",
  },
  {
    _id: "61ab44f40f34753bcedfa819",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "waterproof fitness racker sports watch",
    price: 140,
    category: "jewelery & watches",
    image:'https://contents.mediadecathlon.com/p1524406/dd805a97cd5e4906aa6af2298d4cf514/p1524406.jpg?format=auto&quality=70&f=1024x0',
    description: "waterproof-fitness-racker-sports-watch",
  },
  {
    _id: "61ab450a0f34753bcedfa81d",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "bracelet blood pressure sport fitness smartwatch",
    price: 120,
    category: "jewelery & watches",
    image:'https://appcdn.goqii.com/storeimg/84650_1619606506.PT03',
    description: "bracelet-blood-pressure-sport-fitness-smartwatch",
  },
  {
    _id: "61ab47110f34753bcedfa83f",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "Sceptre LED curved 2xHDMI display port monitor",
    price: 149,
    category: "electronics computers",
    image:'https://m.media-amazon.com/images/I/81ncZ64JDCL._SX679_.jpg',
    description: "sceptre-led-curved-2xhdmi-display-port-monitor",
  },
  {
    _id: "61ab472c0f34753bcedfa843",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "ASUS Full HD HDMI Sync Eye Care eSports Gaming Monitor",
    price: 159,
    category: "electronics computers",
    image:'https://m.media-amazon.com/images/I/81-HxZUOS7L._SX679_.jpg',
    description: "asus-full-hd-hdmi-sync-eye-care-esports-gaming-monitor",
  },
  {
    _id: "61ab475a0f34753bcedfa847",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "iphone 13 pro black color 512gb storage",
    price: 999,
    category: "electronics phone & tablets",
    image:'https://images-eu.ssl-images-amazon.com/images/I/31tyUh1todL._SY445_SX342_QL70_FMwebp_.jpg',
    description: "iphone-13-pro-black-color-512gb-storage",
  },
  {
    _id: "61ab47c20f34753bcedfa853",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "Dual 3G Phone Call Octa Core 10 Inch Android Tablet",
    price: 700,
    category: "electronics phone & tablets",
    image:'https://secureservercdn.net/160.153.138.217/gvt.827.myftpupload.com/wp-content/uploads/2022/06/61X3dRUYDML._SL1000-600x600.jpg',
    description: "dual-3g-phone-call-octa-core-10-inch-android-tablet",
  },
  {
    _id: "61ab47e70f34753bcedfa857",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "RGB Gaming Chair with Lights and Speakers",
    price: 600,
    category: "home & furniture",
    image:'https://nine11mall.com/wp-content/uploads/2022/03/3-59.png',
    description: "rgb-gaming-chair-with-lights-and-speakers",
  },
  {
    _id: "61ab47fd0f34753bcedfa85b",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "Bed Storage Leather Italian Furniture Sofa Luxury",
    price: 750,
    category: "home & furniture",
    image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_TSj3Vyw94Ci-SOPp3PsLnyA1tD2xLqFUGbG2I2qQ8yR7oqMhKXm_LDzJMzDn1QT2U63sMSk8MqzJCjIYAxpUcDHwnkBnCpuwW16nIcc&usqp=CAE',
    description: "bed-storage-leather-italian-furniture-sofa-luxury",
  },
  {
    _id: "61ab48350f34753bcedfa862",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "electrical maintenance tools kit boxes with plastic box",
    price: 90,
    category: "tools & hardware",
    image:'https://cdn.moglix.com/p/4yy61soESs2dQ-xxlarge.jpg',
    description: "electrical-maintenance-tools-kit-boxes-with-plastic-box",
  },
  {
    _id: "61ab484d0f34753bcedfa866",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "Drill Tool Set High Quality Powerful Multifunction Portable Drill",
    price: 70,
    category: "tools & hardware",
    image:'https://cdn.moglix.com/p/WGTonqugH1ErJ-xxlarge.jpg',
    description:
      "drill-tool-set-high-quality-powerful-multifunction-portable-drill",
  },
  {
    _id: "61ab68a30f34753bcedfa898",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    image:"https://cdn.shopify.com/s/files/1/0477/1358/3267/products/flexmonitora_900x.jpg?v=1636799665",
    name: "heart rate monitor gps fitness smartwatch",
    price: 200,
    category: "jewelery & watches",

    description: "heart-rate-monitor-gps-fitness-smartwatch",
  },
  {
    _id: "61ebbfe64efdea94da60a734",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "Polo Ralph Lauren Multicoloured Cocktail Dress",
    price: 45,
    category: "women's fashion",
    image:'https://the-collective.imgix.net/img/app/product/6/630099-6171027.jpg?w=1600&auto=format',
    description: "This multicoloured cocktail dress by Polo Ralph Lauren is chic and eye catchy for its all over floral print and wrap on bodice. The maxi dress further speaks for its superior wearing comfort courtesy of its premium viscose fabric. You can best team this dress with ruffle tie up flats.",
  },
  {
    _id: "61ebc0034efdea57a860a746",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "HORIZ. SHOULDER BAG S",
    price: 45,
    category: "bags & shoes",
    image:'https://www.samsonite.in/dw/image/v2/AAWQ_PRD/on/demandware.static/-/Sites-Samsonite/default/dwc78e97f5/images/move-3-horiz-shoulder-bag/hi-res/124087_2251_hi-res_FRONT_2.jpg?sw=500&sh=750',
    description: "A line to carry with you wherever you want, even in a luggage, as it can be easily flattened. The multi-pocket concept is the best way to keep everything organized, simple in design but the most practical line. This season we decided to renovate the look of Move, launching the 3.0 version where we changed some details which will make the difference! A new metal puller gives a modern touch to the styles together with the two rivets framing the logo",
  },
  {
    _id: "61ebc05f4efdea55d360a756",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "Tooba Handicraft Beautiful Bling Box Clutch Bag Purse For Bridal, Casual, Party, Wedding",
    price: 45,
    category: "jewelery & watches",
    image:'https://m.media-amazon.com/images/I/61cVvydO3qL.jpg',
    description: "Synthetic material sparkling gold colored clutch, 4 inches height x 7 inches length x 2 inches width ,Clasp closure ,Wipe it with soft cloth, keep away from water and direct sun light. After using it, please store it into dust free bag., do not expose to extreme heat",
  },
  {
    _id: "61ebc0644efdea030e60a76a",
    countInStock: "10",
    rating: "4.5",
    numReviews: "9",
    name: "ERIDANI Veronic Black Heels",
    price: 45,
    category: "bags & shoes",
    image:'https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/v/e/veronic-heels-404-black_1_a591fdaa.jpg?rnd=20200526195200',
    description: "Crafted in faux leather, these metallic block heels feature an open toe strappy front, and a buckle ankle strap for closure. Style with a mini dress handbag and sunglasses for the perfect brunch look.",
  },
  {
    name:'Berlynoak Dolphin Faux Marble 4 Seater Dining Table Set',
    description:'Faux Marble Top, Wooden Legs, Leatherette Upholstered Chair, Modern Design',
    price:'17999',
    image:'https://royaloakindia.com/media/catalog/product/cache/9f2cca334f24bf1e4c4fd3bc2c254f55/r/o/royaloak-dolphin-faux-marble-4-seater-dining-table-set-1.jpg',
    category:'Kitchen & Dining',
    countInStock: "101",
    rating: "4.5",
    numReviews: "12",
  },
  {
    image:'https://n4.sdlcdn.com/imgs/b/6/o/Kpro-Stainless-Steel-Dinner-Set-SDL945932759-1-27452.jpg',
    name:'Kpro Stainless Steel Dinner Set - 44 Pcs',
    description:'Color : Silver Finish : Mirror Finish Other Features : Inclusive of: Set of 44 Pieces Superior built quality Elegant design',
    price:'2158',
    category:'Kitchen & Dining',
    countInStock: "56",
    rating: "5.5",
    numReviews: "14",
  },
  {
    image:'https://images.meesho.com/images/products/41864391/rn1ol_512.webp',
    name:'NEXUS Modular Kitchen Heavy Stainless Steel Tea Cup Stand Coffee Cup Holder for Kitchen Dining Showcase',
    description:'Quality Cups Stainless steel cup stand 100% stainless steel with quality finish and designing at its best. This cup stand can carry 12 cup at once. Very good looking product on dining table and kitchen. it will be good for a low space kitchan also. It will give an attractive look to your kitchan.',
    price:'185',
    category:'Kitchen & Dining',
    countInStock: "34",
    rating: "5.5",
    numReviews: "12",
  },
  {
    image:'https://static.grainger.com/rp/s/is/image/Grainger/39EL96_AS01?hei=536&wid=536&$adapimg$=',
    name:'Impact Wrench: 1/2 in Square Drive Size, 700 ft-lb Fastening Torque, 1,200 ft-lb Breakaway Torque',
    description:'These battery-powered impact wrenches are made by DEWALT. Impact wrenches have a square drive and use impact-rated sockets to drive nuts and bolts. Tool batteries can often be used with tools of the same brand, battery series, and voltage. Voltage describes the level of power the battery provides. Tools with low-voltage batteries are light and compact, making them suitable for maintenance tasks. Tools with high-voltage batteries are heavy but deliver ample power for demanding tasks. Amp-hours (Ah) describes the amount of power the battery holds (its capacity), which determines how long a fully charged battery can perform before needing a recharge. The higher the Ah rating of the battery, the greater its storage capacity. As voltage and Ah ratings increase so do the weight and bulk of the battery and the tool it powers.',
    price:'3200',
    category:'tools & hardware',
    countInStock: "25",
    rating: "3.5",
    numReviews: "12",
  },
  {
    image:'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1652955842/Croma%20Assets/Small%20Appliances/Food%20Processors/Images/228584_bvswas.png/mxw_2048,f_auto',
    name:'Philips Daily Collection 300 Watts Hand Mixer (Large Eject Button, HR3705/10, Black)',
    description:'Hand Mixer, Functions: Blending, Wattage: 300 Watts, 5 Speeds Plus Turbo, Cone-Shaped Beaters, 24 Months Warranty',
    price:'1948',
    category:'Kitchen & Dining',
    countInStock: "5",
    rating: "3.5",
    numReviews: "8",
  }
];

module.exports = Products;
