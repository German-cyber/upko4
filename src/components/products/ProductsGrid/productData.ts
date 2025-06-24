const productData = [
  {
    index: 1,
    img: "/product-images/01_model-2_grande_8e3fd70b-c7aa-4796-8192-6b25c48c6719.webp",
    imgHover: "/product-images-hover/01_LEE_6885.jpg",
    title: "UPKO Sade Trunk",
    price: "$611.10",
    newPrice: "$549.99",
    slug: "upko-sade-trunk",
  },
  {
    index: 2,
    img: "/product-images/02_UPKO_14_-2.jpg",
    imgHover: "/product-images-hover/02_UPKO_14_-1.jpg",
    title: "UPKO Luxury BDSM Vertical Trunk Kit",
    price: "$1,699.99",
    newPrice: "$1,499.99",
    slug: "upko-luxury-bdsm-vertical-trunk-kit",
  },
  {
    index: 3,
    img: "/product-images/03_4_b0f543ee-49bb-4188-91b0-02021b156217.jpg",
    imgHover: "/product-images-hover/03_1_45c51bd8-cbec-4e18-8fa0-60315ca0c55f.jpg",
    title:
      'UPKO Finger Bound Play Collection-"Migratory Bird" Metal Collar&Fingers Clamps Set',
    price: "$139.00",
    newPrice: "$129.00",
    slug: "upko-finger-bound-play-collection-migratory-bird-metal-collar-fingers-clamps-set",
  },
  {
    index: 4,
    img: "/product-images/04_7_fedbb8e5-9fdd-4459-8661-01aab25598f1.jpg",
    imgHover: "/product-images-hover/04_10_8d3ca65e-e229-484a-9a40-6224a8ce921c.jpg",
    title: "UPKO Bowknot Bed Restraint Straps",
    price: "$129.00",
    newPrice: "$119.00",
    slug: "upko-bowknot-bed-restraint-straps",
  },
  {
    index: 5,
    img: "/product-images/05_3_d7adf329-1908-414a-a224-654e9c8aa402.jpg",
    imgHover: "/product-images-hover/05_6_9b0a3cac-095d-4147-b5a0-9e606231688b.jpg",
    title: "UPKO Bowknot Hogtie Portable Bondage Gear",
    price: "$109.00",
    newPrice: "$99.00",
    slug: "upko-bowknot-hogtie-portable-bondage-gear",
  },
  {
    index: 6,
    img: "/product-images/06_5_73942a84-4d01-47d2-804d-d6da5d1e7c48.jpg",
    imgHover: "/product-images-hover/06_7_1b79c824-4cd8-44f2-9566-f2fa2d077037.jpg",
    title: "Finger Bound Play Collection-Metal Thumb Cuffs",
    price: "$59.00",
    newPrice: "$49.00",
    slug: "finger-bound-play-collection-metal-thumb-cuffs",
  },
  {
    index: 7,
    img: "/product-images/07_Playscenario-1.jpg",
    imgHover: "/product-images-hover/07_Playscenario-4.jpg",
    title: "Portable Bowknot Spreader Bar and Restraint Set",
    price: "$159.00",
    newPrice: "From $20.00",
    slug: "portable-bowknot-spreader-bar-and-restraint-set",
    besides: [
      {
        productName: 'Spreader Bar',
        price: '$159.00',
        newPrice: '$119.00',
        productImgList: ['/product-images-all/7/Productdetail-2.jpg', '/product-images-all/7/Playscenario-1.jpg', '/product-images-all/7/Playscenario-4.jpg', '/product-images-all/7/Playscenario-2.jpg', '/product-images-all/7/Playscenario-6.jpg', '/product-images-all/7/3_0cda164e-aead-45d6-b644-3326c67d1b4e.gif', '/product-images-all/7/4_ba8a37ff-ff7f-418a-98db-5892918958fa.gif', '/product-images-all/7/5_53c74971-68dc-4c83-a2c6-f40a5356ef80.gif', '/product-images-all/7/6.gif', '/product-images-all/7/Productdetail-3.jpg']
      },
      {
        productName: 'Spreader Bar + Small Size Silicone Dildo & Connection Accessories',
        price: '',
        newPrice: '$159.00',
        productImgList: ['/product-images-all/7/Sku-set_dildo.jpg']
      },
      {
        productName: 'Spreader Bar + Large Size Silicone Dildo & Connection Accessories',
        price: '',
        newPrice: '$159.00',
        productImgList: ['/product-images-all/7/Sku-set_dildo.jpg']
      },
      {
        productName: 'Spreader Bar + Remote Control Wand Vibrator & Connection Accessories',
        price: '',
        newPrice: '$229.00',
        productImgList: ['/product-images-all/7/Sku-set_wandvibrator.jpg']
      },
      {
        productName: 'Spreader Bar + Connection Accessories For Dildo',
        price: '$159.00',
        newPrice: '$139.00',
        productImgList: ['/product-images-all/7/Sku-set_wandvibrator.jpg', '/product-images-all/7/Productdetail-3.jpg', '/product-images-all/7/Productdetail-5.jpg', '/product-images-all/7/Sku-dildomountingaccessory.jpg', '/product-images-all/7/Sku-singleset.jpg', '/product-images-all/7/Sku-wandvibratormountingaccessory.jpg', '/product-images-all/7/7_e7409c8a-f764-4900-9e2a-cc4bdf6ca4bd.jpg', '/product-images-all/7/7_e7409c8a-f764-4900-9e2a-cc4bdf6ca4bd.jpg']
      },
      {
        productName: 'Spreader Bar + Connection Accessories For Vibrator',
        price: '$159.00',
        newPrice: '$139.00',
        productImgList: ['/product-images-all/7/Sku-set_wandvibrator.jpg', '/product-images-all/7/Productdetail-3.jpg', '/product-images-all/7/Productdetail-5.jpg', '/product-images-all/7/Sku-dildomountingaccessory.jpg', '/product-images-all/7/Sku-singleset.jpg', '/product-images-all/7/Sku-wandvibratormountingaccessory.jpg', '/product-images-all/7/7_e7409c8a-f764-4900-9e2a-cc4bdf6ca4bd.jpg', '/product-images-all/7/7_e7409c8a-f764-4900-9e2a-cc4bdf6ca4bd.jpg']
      },
    ]
  },
  {
    index: 8,
    img: "/product-images/08_b61988fc2dd8f05fa04f5a0e73aeabb0.jpg",
    imgHover: "/product-images-hover/08_8415c00a801c41f7aa4dc4bb2d9ca1ec_111db767-e7f4-4220-b10a-1b443663068c.jpg",
    title: "Mystic Bond Collection - Collar With Pulling Nipple Clamps",
    price: "$99.00",
    newPrice: "$89.00",
    slug: "mystic-bond-collection-collar-with-pulling-nipple-clamps",
  },
  {
    index: 9,
    img: "/product-images/09_c4398e53d325901f56192b72d944f9bf.jpg",
    imgHover: "/product-images-hover/09_8415c00a801c41f7aa4dc4bb2d9ca1ec_111db767-e7f4-4220-b10a-1b443663068c.jpg",
    title: "Mystic Bond Collection - Belt With Labia Extender Clamps",
    price: "$119.00",
    newPrice: "$109.00",
    slug: "mystic-bond-collection-belt-with-labia-extender-clamps",
  },
  {
    index: 10,
    img: "/product-images/10_4_179058ab-c580-4b62-80e1-8e2719991684.jpg",
    imgHover: "/product-images-hover/10_6_43d6c8aa-d199-4053-b36b-c8cfaf2bb292.jpg",
    title: "FUXI Sunset Scenery Wooden Shackles Collection",
    price: "$159.00",
    newPrice: "From $129.00",
    slug: "fux-sunset-scenery-wooden-shackles-collection",

    besides: [
      {
        productName: 'Hand Shackles',
        price: '$159.00',
        newPrice: '$129.00',
        productImgList: ['/product-images-all/10/6_43d6c8aa-d199-4053-b36b-c8cfaf2bb292.jpg', '/product-images-all/10/4_179058ab-c580-4b62-80e1-8e2719991684.jpg']
      },

      {
        productName: 'Neck Shackles + Hand Shackles',
        price: '',
        newPrice: '$269.00',
        productImgList: ['/product-images-all/10/3_299e7960-15dc-48ac-8023-619f3f3b40d6.jpg', '/product-images-all/10/5_9c0f7679-4fa4-463c-bcd4-3fd16349b180.jpg',]
      },

      {
        productName: 'Foot Shackles',
        price: '',
        newPrice: '$369.00',
        productImgList: ['/product-images-all/10/2_6c5f6981-62fe-4693-9654-f119748a4877.jpg', '/product-images-all/10/1_322a24d8-63eb-45f7-a409-43ef0973bf85.jpg', '/product-images-all/10/7_751ac319-9b97-4185-86df-98aeae02f2b7.jpg', '/product-images-all/10/8_e0e90198-b328-4fb3-a96e-420180ea927d.jpg', '/product-images-all/10/9_10d3232c-3465-42f2-84b6-4925b69ce8fb.jpg', '/product-images-all/10/10_b84a9867-fed3-4e29-aacf-8c3db2ec3886.jpg', '/product-images-all/10/11_99867f93-bd40-4d00-a722-604a48440999.jpg', '/product-images-all/10/12_f0648172-bcd8-478b-9059-dcf620f1e797.jpg', '/product-images-all/10/13_71109c51-1b92-461d-b731-0df856e9ce5f.jpg']
      },
    ]
  },
  {
    index: 11,
    img: "/product-images/11_8415c00a801c41f7aa4dc4bb2d9ca1ec.jpg",
    imgHover: "/product-images-hover/11_8415c00a801c41f7aa4dc4bb2d9ca1ec_c1028a50-7218-4e6a-95f3-4f78b8e67f5f.jpg",
    title: "UEROS Multi-motor Pulse Vibrator",
    price: "$99.00",
    newPrice: "$89.00",
    slug: "ueros-multi-motor-pulse-vibrator",
  },
  {
    index: 12,
    img: "/product-images/12_3_a63a7e46-3e00-451f-95fa-aaa1a95db013.jpg",
    imgHover: "/product-images-hover/12_1_49365997-ede7-4477-bad1-ae4f6d88e704.jpg",
    title: '"The Chess" Collection- 「King」Butt Plug',
    price: "$79.00",
    newPrice: "$59.00",
    slug: "the-chess-collection-king-butt-plug",
  },
  {
    index: 13,
    img: "/product-images/13_Playscenario-1.png",
    imgHover: "/product-images-hover/13_Playscenario-2.png",
    title: "Portable Bowknot Over-the-door Hand Restraint Gear",
    price: "$109.00",
    newPrice: "$89.00",
    slug: "portable-bowknot-over-the-door-hand-restraint-gear",
  },
  {
    index: 14,
    img: "/product-images/14_Illustration-1.jpg",
    imgHover: "/product-images-hover/14_Product-1_5832bd1b-ef6a-4216-982e-a9d711658e38.jpg",
    title: "「Clack」Bondage Restraints Gear",
    price: "$129.00",
    newPrice: "$109.00",
    slug: "clack-bondage-restraints-gear",
  },
  {
    index: 15,
    img: "/product-images/15_1_b9ee53d9-d256-427c-9ea6-24e26858d1d7.jpg",
    imgHover: "/product-images-hover/15_3_7785e754-aeea-4ebd-b0c4-58d646e39b35.jpg",
    title: "UPKO Bowknot Binder Clip Style Nipple Clamps",
    price: "$49.00",
    newPrice: "$29.00",
    slug: "upko-bowknot-binder-clip-style-nipple-clamps",
  },
  {
    index: 16,
    img: "/product-images/16_1_618ed1e2-42fc-4c46-8456-5518c138ad5a.jpg",
    imgHover: "/product-images-hover/16_2_a4ced087-a96a-4c8b-a920-3c71adec5656.jpg",
    title: "UPKO Pulling Chain Nipple Clamps",
    price: "$99.00",
    newPrice: "$79.00",
    slug: "upko-pulling-chain-nipple-clamps",
  },
  {
    index: 17,
    img: "/product-images/17_AI-2.jpg",
    imgHover: "/product-images-hover/17_AI-1.jpg",
    title:
      "Spreader Bar With Wrist And Ankle Cuffs Matching With Various Accessories",
    price: "From $79.00",
    slug: "spreader-bar-with-wrist-and-ankle-cuffs-matching-with-various-accessories",
    besides: [
      {
        productName: 'Spreader bar+clitoral chain dangle with bell',
        price: '',
        newPrice: '',
        productImgList: ['/product-images-all/17/Accessory-clitoralchainclamps.jpg', '/product-images-all/17/Accessory-pleasureball.jpg', '/product-images-all/17/Spreaderbar-blackbackground.jpg', '/product-images-all/17/Style-Spreaderbar_clitoralchaindanglewithbell.jpg', '/product-images-all/17/Style-Spreaderbar_pleasureball.jpg']
      },
      {
        productName: 'Spreader bar+pleasure ball',
        price: '$159.00',
        newPrice: '$119.00',
        productImgList: ['/product-images-all/17/Accessories-1.jpg', '/product-images-all/17/AI-1.jpg', '/product-images-all/17/Illustration-1_547e17c4-b3ac-4759-bed4-73cacb2e4aaa.jpg', '/product-images-all/17/Accessories-2.jpg', '/product-images-all/17/AI-2.jpg']
      },
      {
        productName: 'Spreader bar+clitoral chain dangle with bell+pleasure ball',
        price: '$159.00',
        newPrice: '$119.00',
        productImgList: ['/product-images-all/17/Illustration-2_ea25c5fb-9e47-4303-81b2-3c677e4dbe8f.jpg', '/product-images-all/17/AI-3.jpg', '/product-images-all/17/Illustration-3_ef58efb9-d84d-4190-8e2d-e33291adef4a.jpg', '/product-images-all/17/Package_ff3ec05a-b210-45d4-8172-2c4bb94c2298.jpg', '/product-images-all/17/AI-4.jpg', '/product-images-all/17/AI-5.jpg']
      },
    ]
  },
  {
    index: 18,
    img: "/product-images/18_2_4adbac29-9a72-4c7d-a40c-cdda12ce12eb.jpg",
    imgHover: "/product-images-hover/18_3_842dfdf8-3adc-4938-8169-de9691277d14.jpg",
    title: '"The Chess" Collection- 「Queen」Premium Metal Pleasure Balls',
    price: "$79.00",
    newPrice: "$59.00",
    slug: "the-chess-collection-queen-premium-metal-pleasure-balls",
  },
  {
    index: 19,
    img: "/product-images/19_Masterphoto_b92c532e-85d2-4560-b36b-af155d9d1892.jpg",
    imgHover: "/product-images-hover/19_1_b55a7401-c8cf-4de9-a597-341cc7c02497.jpg",
    title: '"The Chess" Collection- 「Knight」Urethral Sound 2-piece Plugs Set',
    price: "$92.00",
    newPrice: "$69.00",
    slug: "the-chess-collection-knight-urethral-sound-2-piece-plugs-set",
  },
  {
    index: 20,
    img: "/product-images/20_Outdoorwear0823.png",
    imgHover: "/product-images-hover/20_Hands-free0823.png",
    title: "Remote-control Wand Vibrator & Thigh Harness Combo",
    price: "$129.00",
    newPrice: "From $90.00",
    slug: "remote-control-wand-vibrator-thigh-harness-combo",

    besides: [
      {
        productName: 'Wand Vibrator & Thigh Harness',
        price: '$128.00',
        newPrice: '$99',
        productImgList: ['/product-images-all/20/Outdoorwear0823.png', '/product-images-all/20/Hands-free0823.png', '/product-images-all/20/Hands-free-0823.png', '/product-images-all/20/controlplay0823.png', '/product-images-all/20/Product-5_8bb60523-28d0-48e2-beb9-d8af8aa07616.jpg', '/product-images-all/20/Product-4_2e93cc8a-4b61-4755-8cd5-082c078dfd24.jpg', '/product-images-all/20/Product-3_2f8be3ed-2cdf-47b2-8d74-1a24020c231d.jpg', '/product-images-all/20/Product-2_15747a45-4169-40fe-a0f9-e43fef0e63ee.jpg', '/product-images-all/20/Product-1_c79426cc-e54f-4a3d-86e0-8cb30146badf.jpg', '/product-images-all/20/Weardemonstration.gif']
      },

      {
        productName: 'Wand Vibrator & Thigh Harness',
        price: '$129.00',
        newPrice: '$90.00',
        productImgList: ['/product-images-all/20/Package.jpg']
      },
    ]
  },
  {
    index: 21,
    img: "/product-images/21_Product-2_50e00404-c1f5-47ff-a884-c9139b536ce5.jpg",
    imgHover: "/product-images-hover/21_Product-4_682ec09c-85a2-4884-aad0-c74a74300f31.jpg",
    title: '"Moist Eyes" G-string Clitoral Jewelry With Bead Stimulator',
    price: "$59.00",
    newPrice: "$49.00",
    slug: "moist-eyes-g-string-clitoral-jewelry-with-bead-stimulator",
  },
  {
    index: 22,
    img: "/product-images/22_Product-3_0788a89b-75c7-4858-83a5-7f93e3f265b4.jpg",
    imgHover: "/product-images-hover/22_Product-4_e5ebf75d-761d-4814-ad4f-2e82a3372a10.jpg",
    title: '"Moist Eyes" Pearl Nipple Clamps',
    price: "$89.00",
    newPrice: "$59.00",
    slug: "moist-eyes-pearl-nipple-clamps",
  },
  {
    index: 23,
    img: "/product-images/23_1_bbf67a15-5b72-40f3-8ffa-ed73fbe39bf6.jpg",
    imgHover: "/product-images-hover/23_gif1.gif",
    title:
      "UPKO Double Bar Vibration Nipple Clamps and Clitoral Chain Accessories Set",
    price: "$109.99",
    newPrice: "From $89.00",
    slug: "upko-double-bar-vibration-nipple-clamps-and-clitoral-chain-accessories-set",
  },
  {
    index: 24,
    img: "/product-images/24_UPKOInvisiblemouthgag.jpg",
    imgHover: "/product-images-hover/24_model-1.jpg",
    title: "UPKO Invisible Mouth Gag",
    price: "$88.88",
    newPrice: "$79.99",
    slug: "upko-invisible-mouth-gag",
  },
  {
    index: 25,
    img: "/product-images/25_42_520b6cf5-1b61-468a-b45e-850c9a5fa841.jpg",
    imgHover: "/product-images-hover/25_6.jpg",
    title: "UPKO Leather Thorn Whip",
    price: "$199.99",
    newPrice: "$179.99",
    slug: "upko-leather-thorn-whip",
  },
  {
    index: 26,
    img: "/product-images/26_22.jpg",
    imgHover: "/product-images-hover/26_UPKOLeatherSoftWhip.jpg",
    title: "UPKO Leather Soft Whip",
    price: "$144.43",
    newPrice: "$129.99",
    slug: "upko-leather-soft-whip",
  },
  {
    index: 27,
    img: "/product-images/27_WechatIMG253.jpg",
    imgHover: "/product-images-hover/27_WechatIMG252.jpg",
    title: "UPKO Rose Ball Gag",
    price: "$84.99",
    newPrice: "$64.99",
    slug: "upko-rose-ball-gag",
  },
  {
    index: 28,
    img: "/product-images/28_Illustration-1_ce286604-806b-4f09-95b8-cad0eedb092e.jpg",
    imgHover: "/product-images-hover/28_Illustration-2_624d29ec-7ad9-404b-a350-7a5fcd26c066.jpg",
    title: "Multi-functional clamps set",
    price: "$89.00",
    newPrice: "$59.00",
    slug: "multi-functional-clamps-set",
  },
  {
    index: 29,
    img: "/product-images/29_upko05761.jpg",
    imgHover: "/product-images-hover/29_WechatIMG327.jpg",
    title:
      "UPKO Leather Cosplay Choker & Leash (Leash should be purchased separately）",
    price: "$132.22",
    newPrice: "From $49.99",
    slug: "upko-leather-cosplay-choker-leash-leash-should-be-purchased-separately",

    besides: [
      {
        productName: 'Choker-regular size',
        price: '$132.22',
        newPrice: '$69.99',
        productImgList: ['/product-images-all/29/WechatIMG326.jpg', '/product-images-all/29/WechatIMG327.jpg', '/product-images-all/29/upko05761.jpg']
      },

      {
        productName: 'Choker-large size',
        price: '$132.22',
        newPrice: '$89.99',
        productImgList: ['/product-images-all/29/WechatIMG326.jpg', '/product-images-all/29/WechatIMG327.jpg']
      },

      {
        productName: 'Leash',
        price: '$132.22',
        newPrice: '$149.99',
        productImgList: ['/product-images-all/29/WechatIMG328.jpg', '/product-images-all/29/6_e26aba40-a92a-4402-8faa-6b455004bfd0.jpg', '/product-images-all/29/03_800x800_b411b5c5-b1c8-4a0a-9bac-93fc585d2216.jpg', '/product-images-all/29/03.jpg', '/product-images-all/29/02_800x800_3abc3746-61c7-4dc2-aef3-c32bc2a542de.jpg', '/product-images-all/29/02.jpg', '/product-images-all/29/01_800x800_b73caf95-5c35-4158-a89c-2d34c52fc08c.jpg', '/product-images-all/29/01.jpg']
      },
    ]
  },
  {
    index: 30,
    img: "/product-images/30_1187.jpg",
    imgHover: "/product-images-hover/30_1208.jpg",
    title: "UPKO Leather Handcuffs/Ankle cuffs",
    price: "$88.88",
    newPrice: "From $79.99",
    slug: "upko-leather-handcuffs-ankle-cuffs",

    besides: [
      {
        productName: 'Handcuffs',
        price: '$88.88',
        newPrice: '$79.99',
        productImgList: ['/product-images-all/30/1187.jpg', '/product-images-all/30/201-12-1_00929.jpg', '/product-images-all/30/201-12-1_00928.jpg', '/product-images-all/30/f9bec11a867e67d39b125ffbe1792e2c.jpg','/product-images-all/30/4.jpg', '/product-images-all/30/2_89751992-eec0-4cdf-89bb-4705b14ca245.jpg','/product-images-all/30/1_582facd5-2450-41ab-9d2a-f6bf6638cf95.jpg']
      },

      {
        productName: 'Ankle cuffs',
        price: '$94.43',
        newPrice: '$84.99',
        productImgList: ['/product-images-all/30/1208.jpg', '/product-images-all/30/201-12-1_00926.jpg', '/product-images-all/30/201-12-1_00924.jpg', '/product-images-all/30/Newpackinglayout.jpg','/product-images-all/30/NewPacking.jpg']
      },
    ]
  },
  {
    index: 31,
    img: "/product-images/31_WechatIMG258.jpg",
    imgHover: "/product-images-hover/31_WechatIMG262.jpg",
    title: "UPKO Leather Kinky Tools Set",
    price: "$549.99",
    slug: "upko-leather-kinky-tools-set",

    besides: [
      {
        productName: 'Black',
        price: '$611.10',
        newPrice: '$549.99',
        productImgList: ['/product-images-all/31/WechatIMG262.jpg', '/product-images-all/31/Insideofthelidwordingchanged.jpg', '/product-images-all/31/Logo.jpg', '/product-images-all/31/Blackset_6df76bab-209e-49a0-8350-816e3b1b1f9a.jpg', '/product-images-all/31/Blackset_6df76bab-209e-49a0-8350-816e3b1b1f9a.jpg', '/product-images-all/31/Masterpic_934a8496-a466-4c42-b6da-9527d08bcf06.jpg']

      },

      {
        productName: 'Red',
        price: '$611.10',
        newPrice: '$549.99',
        productImgList: ['/product-images-all/31/WechatIMG260.jpg', '/product-images-all/31/Redset.jpg', '/product-images-all/31/WechatIMG259.jpg', '/product-images-all/31/WechatIMG261.jpg']

      },
    ]
  },
  {
    index: 32,
    img: "/product-images/32_1_2b0f5d8f-8b9b-43ec-9857-6f9ba93c6973.jpg",
    imgHover: "/product-images-hover/32_1200.jpg",
    title: "Black Label Deluxe Kit",
    price: "$2,599.00",
    newPrice: "$2,379.00",
    slug: "black-label-deluxe-kit",
  },
  {
    index: 33,
    img: "/product-images/33_model-2_f296ea5d-3274-4215-bf47-b0bfea6da823.jpg",
    imgHover: "/product-images-hover/33_detail.jpg",
    title: "UPKO Bondage Boutique Leather Hogtie",
    price: "$77.77",
    newPrice: "$69.99",
    slug: "upko-bondage-boutique-leather-hogtie",
  },
  {
    index: 34,
    img: "/product-images/34_3_76bf607d-815d-4812-ae8e-1a994f3743a0.jpg",
    imgHover: "/product-images-hover/34_6_e5db0095-af82-4c50-b97c-12fac88276e6.jpg",
    title: "UPKO Leather Thigh Cuffs",
    price: "$122.21",
    newPrice: "From $109.99",
    slug: "upko-leather-thigh-cuffs",
  },
  {
    index: 35,
    img: "/product-images/35_222.jpg",
    imgHover: "/product-images-hover/35_2_feca5059-262e-4dc9-a00d-95bfb33ed72f.jpg",
    title: "UPKO Leather Spanking Paddle",
    price: "$83.32",
    newPrice: "$74.99",
    slug: "upko-leather-spanking-paddle",
  },
  {
    index: 36,
    img: "/product-images/36_10_1024x_1070fc70-41da-4872-90b7-764b329d1119.webp",
    imgHover: "/product-images-hover/36_6391ace427ade714b70fb966024ae804.jpg",
    title: "UPKO Leather Flogger",
    price: "$155.54",
    newPrice: "$139.99",
    slug: "upko-leather-flogger",
  },
  {
    index: 37,
    img: "/product-images/37_6_7807538b-043b-46c1-ba14-a241891ee462.jpg",
    imgHover: "/product-images-hover/37_2_14d12cbf-257d-46d8-a852-2855a61a860e.jpg",
    title: "UPKO Spanking Stick",
    price: "$55.54",
    newPrice: "$49.99",
    slug: "upko-spanking-stick",
  },
  {
    index: 38,
    img: "/product-images/38_1451.jpg",
    imgHover: "/product-images-hover/38_1431.jpg",
    title: "UPKO Leather Spreader Bar",
    price: "$119.99",
    slug: "upko-leather-spreader-bar",
  },
  {
    index: 39,
    img: "/product-images/39_7_1024x_2c3d216b-c55a-491c-aaa3-3cea3ae18874.webp",
    imgHover: "/product-images-hover/39_1_893018a2-a491-4028-8a1b-29fdd9011509.jpg",
    title: "UPKO Leather Riding Crop",
    price: "$133.32",
    newPrice: "$119.99",
    slug: "upko-leather-riding-crop",
  },
  {
    index: 40,
    img: "/product-images/40_Product-5.png",
    imgHover: "/product-images-hover/40_Product-2.png",
    title: '"The Mushroom" Butt Plugs Three-piece Set',
    price: "$49.00",
    newPrice: "$39.00",
    slug: "the-mushroom-butt-plugs-three-piece-set",
  },
  {
    index: 41,
    img: "/product-images/41_U005.jpg",
    imgHover: "/product-images-hover/41_1_9d011af5-087d-4b2f-a0ec-2b3ba56f8866.jpg",
    title: "UPKO Leather Blindfold",
    price: "$77.77",
    newPrice: "$69.99",
    slug: "upko-leather-blindfold",
  },
  {
    index: 42,
    img: "/product-images/42_UPKOLeatherbondagebelt-1_1_44810af6-14c3-401d-818a-9721c28d1f5e.jpg",
    imgHover: "/product-images-hover/42_1_8804c58f-0733-4615-80c1-4b5d1060da3c.webp",
    title: "UPKO Leather Bondage Belt",
    price: "$143.33",
    newPrice: "From $129.99",
    slug: "upko-leather-bondage-belt",

    besides: [
      {
        productName: 'Regular Size',
        price: '$143.33',
        newPrice: '$143.33',
        productImgList: ['/product-images-all/42/1_8804c58f-0733-4615-80c1-4b5d1060da3c.webp', '/product-images-all/42/UPKOLeatherbondagebelt-1_1.jpg', '/product-images-all/42/UPKOLeatherbondagebelt-2.jpg', '/product-images-all/42/3_1be2866f-8e0d-4a41-9f1d-c80fe4f4580f.jpg', '/product-images-all/42/4_94b2a179-9382-4511-9f4e-54436d32b75b.jpg', '/product-images-all/42/5_5fe0a3df-5b3c-4ed6-aafe-2271a9678505.jpg']

      },

      {
        productName: 'Large Size',
        price: '$143.33',
        newPrice: '$139.00',
        productImgList: ['/product-images-all/42/1_8804c58f-0733-4615-80c1-4b5d1060da3c.webp', '/product-images-all/42/Masterpic_d7db1779-3a4d-461f-b90a-86760fb68052.webp']

      },
    ]
  },
  {
    index: 43,
    img: "/product-images/43_WechatIMG165.jpg",
    imgHover: "/product-images-hover/43_3_c46bc0bf-d40e-498a-aeaa-89c4e329a9b5.jpg",
    title: "UPKO Carpe Diem Premium Bondage Set",
    price: "$88.88",
    newPrice: "$79.99",
    slug: "upko-carpe-diem-premium-bondage-set",
  },
  {
    index: 44,
    img: "/product-images/44_800.jpg",
    imgHover: "/product-images-hover/44_17869dc9751849b011b4a62f8ed925e3.jpg",
    title: "UPKO Fox Fur Tail Small Butt Plug",
    price: "$105.54",
    newPrice: "$94.99",
    slug: "upko-fox-fur-tail-small-butt-plug",
  },
  {
    index: 45,
    img: "/product-images/45_2021-04-2910_18_39.963_0200.jpg",
    imgHover: "/product-images-hover/45_3_734e403c-5994-4910-b39e-b22c9ea590bd.jpg",
    title: "UPKO Rabbit Fur Bunny Tail Small Butt Plug",
    price: "$49.99",
    slug: "upko-rabbit-fur-bunny-tail-small-butt-plug",
  },
  {
    index: 46,
    img: "/product-images/46_3_a973f921-1a21-4cde-a6a2-e466844fd781.jpg",
    imgHover: "/product-images-hover/46_4_2951d8ba-0777-4b57-85db-8089c6ecd43d.jpg",
    title: "UPKO Leather Thin choker",
    price: "$55.54",
    newPrice: "$49.99",
    slug: "upko-leather-thin-choker",
  },
  {
    index: 47,
    img: "/product-images/47_3_e847413e-3b2a-4891-95d5-bb8f63b53bd9.jpg",
    imgHover: "/product-images-hover/47_model.jpg",
    title: "UPKO Leather Thin Bracelets",
    price: "$61.10",
    newPrice: "$54.99",
    slug: "upko-leather-thin-bracelets",
  },
  {
    index: 48,
    img: "/product-images/48_2_9af5eebd-41f7-442b-8d2e-d9392ea87794.jpg",
    imgHover: "/product-images-hover/48_0402-UPKO6220xiu.jpg",
    title: "UPKO Feather tickler",
    price: "$44.44",
    newPrice: "$39.99",
    slug: "upko-feather-tickler",
  },
  {
    index: 49,
    img: "/product-images/49_scenarioreference1.jpg",
    imgHover: "/product-images-hover/49_36911c0904db1d481a24384dac5a57ea.jpg",
    title: "UPKO Standard static bondage tape",
    price: "$38.88",
    newPrice: "$34.99",
    slug: "upko-standard-static-bondage-tape",

        besides: [
      {
        productName: 'Black',
        price: '$38.88',
        newPrice: '$34.99',
        productImgList: ['/product-images-all/49/5_9eb8b9e8-3183-4687-8a68-48e73270b917.jpg', '/product-images-all/49/scenarioreference4.jpg', '/product-images-all/49/scenarioreference5.jpg', '/product-images-all/49/3_30765919-e934-4f41-be07-449cf9ab2038.jpg', '/product-images-all/49/3_30765919-e934-4f41-be07-449cf9ab2038.jpg']

      },

      {
        productName: 'Transparent',
        price: '$38.88',
        newPrice: '$34.99',
        productImgList: ['/product-images-all/49/6_db94948e-c3ce-4178-a30a-37c1515366f7.jpg', '/product-images-all/49/12.jpg', '/product-images-all/49/36911c0904db1d481a24384dac5a57ea.jpg']
      },
      {
        productName: 'Red',
        price: '$38.88',
        newPrice: '$34.99',
        productImgList: ['/product-images-all/49/1_382a1677-2071-4145-ab15-4d9cdd5e9a28.jpg', '/product-images-all/49/scenarioreference1.jpg']

      },
      {
        productName: 'Silver',
        price: '$38.88',
        newPrice: '$34.99',
        productImgList: ['/product-images-all/49/3_30765919-e934-4f41-be07-449cf9ab2038.jpg', '/product-images-all/49/1_55fec38c-6dc0-4e58-9030-8fb6839dbaca.jpg']

      },
    ]
  },
  {
    index: 50,
    img: "/product-images/50_2I3A4749copy.jpg",
    imgHover: "/product-images-hover/50_2I3A5258copy.jpg",
    title: "UPKO Restraints bondage rope(including instructional videos)",
    price: "$38.88",
    newPrice: "$34.99",
    slug: "upko-restraints-bondage-rope-including-instructional-videos",

    besides: [
      {
        productName: 'Gold',
        price: '$38.88',
        newPrice: '$34.99',
        productImgList: ['/product-images-all/50/1_108dee62-3477-46d7-bcae-4b194278e93f.jpg', '/product-images-all/50/2I3A5258copy.jpg', '/product-images-all/50/2I3A5272copy.jpg', '/product-images-all/50/packaging_bef59b8e-05e3-4bd3-bc20-e467d2f192f7.jpg']
      },
      {
        productName: 'Black',
        price: '$38.88',
        newPrice: '$34.99',
        productImgList: ['/product-images-all/50/2_4913fad9-b343-441c-9492-3f17eb1a406f.jpg']
      },
      {
        productName: 'Red',
        price: '$38.88',
        newPrice: '$34.99',
        productImgList: ['/product-images-all/50/5_63fc93e2-f95d-4b5d-80da-5b99df99fb33.jpg', '/product-images-all/50/2I3A4749copy.jpg', '/product-images-all/50/6_1b7d7567-cb64-41a5-8e1b-e6b4d5d1a6b5.jpg']
        
      },
    ]
  },
  {
    index: 51,
    img: "/product-images/51_3_b8a246e0-68d0-4d38-a074-84d6f74c2fa2.jpg",
    imgHover: "/product-images-hover/51_1_f3c751f2-bc5c-41e9-b127-6e438a0dbd66.jpg",
    title: "UPKO Snowflake chain nipple clamps",
    price: "$44.44",
    newPrice: "$39.99",
    slug: "upko-snowflake-chain-nipple-clamps",
  },
  {
    index: 52,
    img: "/product-images/52_4_e0fec5f6-92e9-40f4-8c88-087051e46625.jpg",
    imgHover: "/product-images-hover/52_cf9297a0e939385ac9804f0d61d54fc6.jpg",
    title: "UPKO Crown and dangling side decorations chain nipple clamps",
    price: "$79.99",
    slug: "upko-crown-and-dangling-side-decorations-chain-nipple-clamps",
  },
  {
    index: 53,
    img: "/product-images/53_DSC09768copy.jpg",
    imgHover: "/product-images-hover/53_masterpicture.jpg",
    title: "UPKO Luxury Baroque Leather Pasties",
    price: "$111.10",
    newPrice: "$99.99",
    slug: "upko-luxury-baroque-leather-pasties",
  },
  {
    index: 54,
    img: "/product-images/54_2_04.jpg",
    imgHover: "/product-images-hover/54_1_eb1bff04-03f0-4d71-9550-a7b308863b94.jpg",
    title: "UPKO Black Overbust Corset",
    price: "$110.99",
    newPrice: "$79.99",
    slug: "upko-black-overbust-corset",
  },
  {
    index: 55,
    img: "/product-images/55_1371.jpg",
    imgHover: "/product-images-hover/55_SKU2.jpg",
    title:
      "Your Name Collection-Choker(Letters should be purchased separately)",
    price: "$102.21",
    newPrice: "From $91.99",
    slug: "your-name-collection-choker-letters-should-be-purchased-separately",

        besides: [
      {
        productName: 'Regular Size',
        price: '$102.21',
        newPrice: '$91.99',
        productImgList: ['/product-images-all/55/1371.jpg', '/product-images-all/55/7_4f48a133-950e-403e-bed3-25185bc71ab1.jpg', '/product-images-all/55/6_6eb3de02-4533-4127-854e-961364cfd8de.jpg', '/product-images-all/55/3_4688b3a8-9af8-45cc-be42-8b085bfae562.jpg','/product-images-all/55/SKU2.jpg','/product-images-all/55/2_9b7ef8d1-7ab6-4572-b184-79726ba819d8.jpg','/product-images-all/55/1_83b39d33-d257-46d6-b9de-027214fc4129.jpg']
      },
      {
        productName: 'Large Size',
        price: '$123.32',
        newPrice: '$110.99',
        productImgList: ['/product-images-all/55/1371.jpg', '/product-images-all/55/7_4f48a133-950e-403e-bed3-25185bc71ab1.jpg', '/product-images-all/55/6_6eb3de02-4533-4127-854e-961364cfd8de.jpg', '/product-images-all/55/3_4688b3a8-9af8-45cc-be42-8b085bfae562.jpg','/product-images-all/55/SKU2.jpg','/product-images-all/55/2_9b7ef8d1-7ab6-4572-b184-79726ba819d8.jpg','/product-images-all/55/1_83b39d33-d257-46d6-b9de-027214fc4129.jpg']
      },
    ]
  },
  {
    index: 56,
    img: "/product-images/56_9_3daadf68-9311-4c85-ade1-3271641ba667.jpg",
    imgHover: "/product-images-hover/56_SKU3.jpg",
    title:
      "Your Name Collection-Bracelets(Letters should be purchased separately)",
    price: "$166.66",
    newPrice: "$119.99",
    slug: "your-name-collection-bracelets-letters-should-be-purchased-separately",
  },
  {
    index: 57,
    img: "/product-images/57_WechatIMG164.jpg",
    imgHover: "/product-images-hover/57_1_a8e21e1b-4fe8-44d8-bb67-1203efb7f939.jpg",
    title: "Your name collection-individual letters",
    price: "$5.99",
    slug: "your-name-collection-individual-letters",
  },
  {
    index: 58,
    img: "/product-images/58_WechatIMG248.jpg",
    imgHover: "/product-images-hover/58_Productphoto-1-red_bf873379-e3ef-42ec-8905-6c9ac1f0739d.jpg",
    title:
      "Desire for Mouth Bondage Collection-Middle Heart-shaped Breathable Mouth Gag",
    price: "$69.99",
    newPrice: "$49.99",
    slug: "desire-for-mouth-bondage-collection-middle-heart-shaped-breathable-mouth-gag",

    besides: [
      {
        productName: 'Red',
        price: '$69.99',
        newPrice: '$49.99',
        productImgList: ['/product-images-all/58/Productphoto-1-red_bf873379-e3ef-42ec-8905-6c9ac1f0739d.jpg','/product-images-all/58/Productphoto-2-red_a2abb8a7-5970-40d1-b677-2b6906e2ecc1.jpg', '/product-images-all/58/Package_17cd33c6-30d0-4725-a12a-01a54b035f0b.jpg','/product-images-all/58/WechatIMG248.jpg']
      },
      {
        productName: 'Black',
        price: '$69.99',
        newPrice: '$49.99',
        productImgList: ['/product-images-all/58/Sku-black_ed1f3fb9-ae41-4eb5-9136-3732ad474f0f.jpg', '/product-images-all/58/WechatIMG248.jpg']
      },
    ]
  },
  {
    index: 59,
    img: "/product-images/59_WechatIMG250.jpg",
    imgHover: "/product-images-hover/59_Productphoto-1-black_85d198a0-25ce-4eb3-a4de-6b0baecc6b88.jpg",
    title: "Desire for Mouth Bondage Collection-Dildo-shaped Mouth Gag",
    price: "$49.99",
    slug: "desire-for-mouth-bondage-collection-dildo-shaped-mouth-gag",

    besides: [
      {
        productName: 'Red',
        price: '$69.99',
        newPrice: '$49.99',
        productImgList: ['/product-images-all/59/Sku-red_b0f30d43-1898-49cc-9acd-3022a6d016d5.jpg', '/product-images-all/59/Productphoto-1-red_1a406f5a-daa2-4097-95e0-56cb30c2dc91.jpg', '/product-images-all/59/Productphoto-2-red_17001a0f-6b10-4337-bf4c-af07ed49e19f.jpg']

      },
      {
        productName: 'Black',
        price: '$69.99',
        newPrice: '$49.99',
        productImgList: ['/product-images-all/59/Sku-black_5dab140f-aa42-4bf3-a0cb-4c53da89c517.jpg', '/product-images-all/59/WechatIMG250.jpg']
      },
    ]
  },
  {
    index: 60,
    img: "/product-images/60_WechatIMG251.jpg",
    imgHover: "/product-images-hover/60_Collectivephoto-1.jpg",
    title: "Desire for Mouth Bondage Collection-Knot-shaped Mouth Gag",
    price: "$69.99",
    newPrice: "$49.99",
    slug: "desire-for-mouth-bondage-collection-knot-shaped-mouth-gag",

    besides: [
      {
        productName: 'Red',
        price: '$69.99',
        newPrice: '$49.99',
        productImgList: ['/product-images-all/60/Productphoto-1-red.jpg', '/product-images-all/60/Productphoto-2-red.jpg', '/product-images-all/60/Sku-red_740b4b6b-be1f-4c85-8067-8e76fd2b7869.jpg', '/product-images-all/60/Package_9f21e3ba-c63a-4aa8-b5c6-9dd0c2fdbfe3.jpg', '/product-images-all/60/Collectivephoto-2.jpg']

      },
      {
        productName: 'Black',
        price: '$69.99',
        newPrice: '$49.99',
        productImgList: ['/product-images-all/60/Productphoto-1-black.jpg', '/product-images-all/60/Collectivephoto-1.jpg', '/product-images-all/60/Productphoto-2-black.jpg', '/product-images-all/60/Sku-black_b641285d-c023-4dd0-8fff-11580af6f861.jpg']
      },
    ]
  },
  {
    index: 61,
    img: "/product-images/61_3_9f1dad76-5b0e-4b93-a829-ad1625fb6d07.jpg",
    imgHover: "/product-images-hover/61_5_0b43763d-059a-4e57-b593-9fc4040df166.jpg",
    title: '"The Chess" Collection- 「Bishop」Mini Vibrator',
    price: "$79.00",
    newPrice: "$59.00",
    slug: "the-chess-collection-bishop-mini-vibrator",
  },
  {
    index: 62,
    img: "/product-images/62_4_a4ce4903-2f26-4aed-bfec-92b0072fea4c.jpg",
    imgHover: "/product-images-hover/62_sku.jpg",
    title: "UPKO Butterfly Effect Body Accessories Set",
    price: "$887.78",
    newPrice: "$799.00",
    slug: "upko-butterfly-effect-body-accessories-set",
  },
  {
    index: 63,
    img: "/product-images/63_2_1024x_42dc9085-cd86-45a2-8e1e-0330a0713211.webp",
    imgHover: "/product-images-hover/63_1736_2.jpg",
    title: "UPKO Butterfly Effect Body Accessory-Choker",
    price: "$110.00",
    newPrice: "$99.00",
    slug: "upko-butterfly-effect-body-accessory-choker",
  },
  {
    index: 64,
    img: "/product-images/64_1200_6af0ab83-ab2c-4d51-a253-546ac1d72081.jpg",
    imgHover: "/product-images-hover/64_2_ef8ec4ad-7f68-4082-84a4-69b1e6833de5.jpg",
    title: "UPKO Role Play Costume Collection-Bunny Girl Bodysuit Set",
    price: "$105.54",
    newPrice: "$89.00",
    slug: "upko-role-play-costume-collection-bunny-girl-bodysuit-set",
  },
  {
    index: 65,
    img: "/product-images/65_3_0221c7df-b6ce-4de5-be5e-c0d9dfa7e795.jpg",
    imgHover: "/product-images-hover/65_master_25b47cf4-38fb-4ebf-85f4-3cf4290594b7.jpg",
    title: "Non-Pierced Clitoral Jewelry Dangle With Snowflake/Snowman",
    price: "From $68.99",
    slug: "non-pierced-clitoral-jewelry-dangle-with-snowflake-snowman",
  },
  {
    index: 66,
    img: "/product-images/66_5_71c6d45c-21e5-4cd9-9d83-2e0081e1f719.jpg",
    imgHover: "/product-images-hover/66_10_fa73d576-0879-4e83-8ad5-18d2398f4e21.jpg",
    title: "Bondage Gear-Sling With Cuffs",
    price: "$98.89",
    newPrice: "$89.00",
    slug: "bondage-gear-sling-with-cuffs",
  },
  {
    index: 67,
    img: "/product-images/67_7_24b01e13-2ada-4580-a577-e8f5fdbac54a.jpg",
    imgHover: "/product-images-hover/67_10_bdd83ae5-a568-4346-a914-0d38c41dec65.jpg",
    title:
      '"Moist Eyes" Pearl Collar & Leash（Leash should be purchased separately）',
    price: "$54.44",
    newPrice: "From $49.00",
    slug: "moist-eyes-pearl-collar-leash-leash-should-be-purchased-separately",

    besides: [
      {
        productName: 'Collar',
        price: '$87.78',
        newPrice: '$79.00',
        productImgList: ['/product-images-all/67/7_24b01e13-2ada-4580-a577-e8f5fdbac54a.jpg', '/product-images-all/67/10_bdd83ae5-a568-4346-a914-0d38c41dec65.jpg', '/product-images-all/67/2_196a474c-7ffa-4f31-9e11-17211d3d4b63.jpg', '/product-images-all/67/5_47c7b748-dc3a-4cff-a6bc-5e23f1622506.jpg', '/product-images-all/67/Packaging_4a413772-1afa-4b8e-a133-c7f1f3d21b9d.jpg']

      },
      {
        productName: 'Leash',
        price: '$54.44',
        newPrice: '$49.00',
        productImgList: ['/product-images-all/67/11_842430a7-91ae-4d39-b454-91503587c060.jpg', '/product-images-all/67/8_468b7755-2508-4a71-b824-f1b4391da781.jpg', '/product-images-all/67/8_468b7755-2508-4a71-b824-f1b4391da781.jpg', '/product-images-all/67/1_52aa5f2a-3747-4442-a62f-7ae73cbd1949.jpg']
      },
    ]
  },
  {
    index: 68,
    img: "/product-images/68_4_91fcb6d1-c87d-461f-aac5-c20e645ec9ec.jpg",
    imgHover: "/product-images-hover/68_fa49a43a86136767a69c34a76af7633a.jpg",
    title: '"Moist Eyes" Pearl Bracelet/Anklet',
    price: "$98.89",
    newPrice: "From $89.00",
    slug: "moist-eyes-pearl-bracelet-anklet",

    besides: [
      {
        productName: 'Bracelet',
        price: '$98.89',
        newPrice: '$89.00',
        productImgList: []

      },
      {
        productName: 'Anklet',
        price: '',
        newPrice: '$109.00',
        productImgList: []
      },
    ]
  },
  {
    index: 69,
    img: "/product-images/69_2_fc837bf2-b47c-4fcd-96dc-611f2cf807c4.jpg",
    imgHover: "/product-images-hover/69_2jpg.jpg",
    title: "Vaginal/Anal Hook",
    price: "$54.44",
    newPrice: "$49.00",
    slug: "vaginal-anal-hook",
  },
  {
    index: 70,
    img: "/product-images/70_4_40110677-8a58-49ff-9eb6-723e710a0ac4.jpg",
    imgHover: "/product-images-hover/70_3_1de537a2-916d-4ebf-af90-3da7dd86e1fd.jpg",
    title: "UPKO Role play costume collection-PLEASE",
    price: "$89.00",
    slug: "upko-role-play-costume-collection-please",
  },
  {
    index: 71,
    img: "/product-images/71_1_eabd8507-7204-400f-a568-92188f369f18.jpg",
    imgHover: "/product-images-hover/71_5_b50b2c0c-5935-40c7-aeb1-76e075289e1f.jpg",
    title: "Black Label Collection-Riding Crop",
    price: "$449.00",
    slug: "black-label-collection-riding-crop",
  },
  {
    index: 72,
    img: "/product-images/72_1_2a3c49a0-5a91-4757-b995-e1a24b983982.jpg",
    imgHover: "/product-images-hover/72_5_1571ea2f-f182-4b89-adc0-542933f23bf8.jpg",
    title: "Black Label Collection-Flogger",
    price: "$499.00",
    slug: "black-label-collection-flogger",
  },
  {
    index: 73,
    img: "/product-images/73_5_a55d4ba6-0531-4a31-89aa-851bfd426890.jpg",
    imgHover: "/product-images-hover/73_6_108d3307-c082-44b6-8724-7d745d48a73a.jpg",
    title: "Black Label Collection-Paddle",
    price: "$349.00",
    slug: "black-label-collection-paddle",
  },
  {
    index: 74,
    img: "/product-images/74_7_ec5b4048-662a-4bdf-9db4-6e37517c617c.jpg",
    imgHover: "/product-images-hover/74_2_ecfe4b35-b430-433e-b979-8820b2be788d.jpg",
    title: "Black Label Collection-Whip",
    price: "$399.00",
    slug: "black-label-collection-whip",
  },
  {
    index: 75,
    img: "/product-images/75_1_3d613a94-decb-4530-82fa-1ddf15ff4fdc.jpg",
    imgHover: "/product-images-hover/75_7_bd71dd02-031f-474e-8b6d-8817524d8df7.jpg",
    title: "UPKO Role play costume collection-Nurse",
    price: "$89.00",
    slug: "upko-role-play-costume-collection-nurse",
  },
  {
    index: 76,
    img: "/product-images/76_5_17b1bb49-d6ea-4da8-8a25-3ba031f63a85.jpg",
    imgHover: "/product-images-hover/76_7_8c5c17ae-2fba-42ff-9756-34c174d72d09.jpg",
    title: "UPKO Role Play Costume Collection-Maid",
    price: "$89.00",
    slug: "upko-role-play-costume-collection-maid",
  },
  {
    index: 77,
    img: "/product-images/77_4_8d86abcf-a7cd-48c8-9d46-842aafd5416f.jpg",
    imgHover: "/product-images-hover/77_1_f67abd62-29b3-406f-9b0c-51c31acc6066.jpg",
    title: "Candle Wax Scraper",
    price: "$38.99",
    slug: "candle-wax-scraper",
  },
  {
    index: 78,
    img: "/product-images/78_Strap-onHarnessKit-modelimage-1_0c56aa2a-0848-4a65-b80d-f1b0542b68d0.jpg",
    imgHover: "/product-images-hover/78_Strap-onHarnessKit-modelimage-2_178ed3f4-8f3c-4043-a590-e5fe71239be9.jpg",
    title: "UPKO Strap-on Harness Kit(Dildo should be purchased separately)",
    price: "From $21.99",
    slug: "upko-strap-on-harness-kit-dildo-should-be-purchased-separately",

    besides: [
      {
        productName: 'Silicone dildo-large size',
        price: '',
        newPrice: '$25.99',
        productImgList: ['/product-images-all/78/Siliconedildo-largesize.jpg']
      },
      {
        productName: 'Harness kit',
        price: '',
        newPrice: '$79.99',
        productImgList: ['/product-images-all/78/Strap-onHarnessKit-masterphotowithdildo.jpg', '/product-images-all/78/Strap-onHarnessKit-detail-1.jpg', '/product-images-all/78/Strap-onHarnessKit-detail-2.jpg', '/product-images-all/78/Strap-onHarnessKit-detail-4.jpg', '/product-images-all/78/13.jpg']
      },
      {
        productName: 'Silicone dildo-small size',
        price: '',
        newPrice: '$21.99',
        productImgList: ['/product-images-all/78/Siliconedildo-smallsize.jpg', '/product-images-all/78/Collectionphotoofthreesizes-1.jpg']
      },

    ]
  },
  {
    index: 79,
    img: "/product-images/79_Adjustablecockring-4.jpg",
    imgHover: "/product-images-hover/79_Adjustablecockring-masterphoto.jpg",
    title: "UPKO Adjustable cock ring",
    price: "$25.99",
    slug: "upko-adjustable-cock-ring",
  },
  {
    index: 80,
    img: "/product-images/80_EmbroideredSilkBlindfold-masterphoto.jpg",
    imgHover: "/product-images-hover/80_EmbroideredSilkBlindfold-black-1.jpg",
    title: "UPKO Embroidered Silk Blindfold",
    price: "$49.99",
    slug: "upko-embroidered-silk-blindfold",
  },
  {
    index: 81,
    img: "/product-images/81_SpikedMetalPinwheel-1.jpg",
    imgHover: "/product-images-hover/81_SpikedMetalPinwheel-3.jpg",
    title: "UPKO Spiked Metal Pinwheel",
    price: "$49.99",
    slug: "upko-spiked-metal-pinwheel",
  },
  {
    index: 82,
    img: "/product-images/82_Leathertag-7.jpg",
    imgHover: "/product-images-hover/82_Leathertag_withoutletters.jpg",
    title:
      "Your Name Collection-Leather tag(Letters should be purchased separately)",
    price: "$39.99",
    newPrice: "$35.99",
    slug: "your-name-collection-leather-tag-letters-should-be-purchased-separately",
  },
  {
    index: 83,
    img: "/product-images/83_giftcard.png",
    imgHover: "/product-images-hover/83_giftcard.png",
    title: "UPKO Gift Card",
    newPrice: "$200.00",
    slug: "upko-gift-card",

    besides: [
      {
        productName: '$ 200',
        price: '',
        newPrice: '$200',
        productImgList: []
      },
      {
        productName: '$ 500',
        price: '',
        newPrice: '$500',
        productImgList: []
      },
      {
        productName: '$ 1000',
        price: '',
        newPrice: '$1000',
        productImgList: []
      },
      {
        productName: '$ 1500',
        price: '',
        newPrice: '$1500',
        productImgList: []
      },
      {
        productName: '$ 2000',
        price: '',
        newPrice: '$2000',
        productImgList: []
      },
    ]
  },
  {
    index: 84,
    img: "/product-images/84_1_5bd597ee-eef0-4831-95bb-3e45aae2b9d3.jpg",
    imgHover: "/product-images-hover/84_2_0239e01b-ac3c-4305-98ef-896cf8bcc274.jpg",
    title: "UPKO Mini Vibrator Clitoral Stimulator",
    price: "$49.00",
    slug: "upko-mini-vibrator-clitoral-stimulator",
  },
  {
    index: 85,
    img: "/product-images/85_1_5ad56149-52db-4d51-a225-b9686e31e033.jpg",
    imgHover: "/product-images-hover/85_12_9014f9ae-5d97-4247-af43-a2ef58985d1a.jpg",
    title: "UPKO Ultra-thin Tearable Tights",
    price: "$54.99",
    slug: "upko-ultra-thin-tearable-tights",

    besides: [
      {
        productName: 'Black',
        price: '',
        newPrice: '$34.99',
        productImgList: ['/product-images-all/85/WechatIMG412.jpg', '/product-images-all/85/13_7ed1da63-d4ce-47e9-8131-c16411e4f170.jpg', '/product-images-all/85/11_19b764b7-c09d-4791-a8b2-0b07d58b8942.jpg', '/product-images-all/85/10_0ddfc01a-1450-4504-ba1d-c0a440953dee.jpg', '/product-images-all/85/8_344f42ad-77c3-481d-800a-e8d45b3636fc.jpg', '/product-images-all/85/3_eab5301b-c77e-42e2-b2bd-64761c4fe852.jpg']
      },
      {
        productName: 'Soft Black',
        price: '',
        newPrice: '$34.99',
        productImgList: ['/product-images-all/85/WechatIMG414.jpg', '/product-images-all/85/2_20b56594-7958-47f2-a8b2-49c99de6d109.jpg']
      },
      {
        productName: 'Grayish Blue',
        price: '',
        newPrice: '$34.99',
        productImgList: ['/product-images-all/85/WechatIMG413.jpg']
      },
      {
        productName: 'Icy Nude',
        price: '',
        newPrice: '$34.99',
        productImgList: ['/product-images-all/85/WechatIMG415.jpg', '/product-images-all/85/15.jpg']
      }
    ]
  },
  {
    index: 86,
    img: "/product-images/86_4_2b314e9f-a3fc-4a42-ae85-6cc8b5e22bcf.jpg",
    imgHover: "/product-images-hover/86_5_9abf2db2-e14b-4d11-95f5-3dba15c49da7.jpg",
    title: "UPKO Ultra-thin Tearable Stocking",
    price: "$29.00",
    newPrice: "$19.00",
    slug: "upko-ultra-thin-tearable-stocking",

    besides: [
      {
        productName: 'Black',
        price: '$29.00',
        newPrice: '$19.00',
        productImgList: ['/product-images-all/86/4_2b314e9f-a3fc-4a42-ae85-6cc8b5e22bcf.jpg', '/product-images-all/86/5_9abf2db2-e14b-4d11-95f5-3dba15c49da7.jpg', '/product-images-all/86/6_45729456-f24d-40e7-af61-a9c55d50ad0e.jpg', '/product-images-all/86/13_30b06e6e-883d-43d3-81f1-d21ee680b87c.jpg', '/product-images-all/86/19.jpg']
      },
      {
        productName: 'Black + Red',
        price: '$29.00',
        newPrice: '$19.00',
        productImgList: ['/product-images-all/86/17.jpg', '/product-images-all/86/7_e6522038-b045-4c6a-ac2c-71c958dbc6b0.jpg', '/product-images-all/86/8_d7f8663a-836a-41c0-989b-d2783f03dcd0.jpg']
      },
      {
        productName: 'Gray',
        price: '$29.00',
        newPrice: '$19.00',
        productImgList: ['/product-images-all/86/18.jpg', '/product-images-all/86/12_f2524ed9-84cf-4e28-9d6c-8669502c3cbf.jpg']
      },
      {
        productName: 'White',
        price: '$29.00',
        newPrice: '$19.00',
        productImgList: ['/product-images-all/86/15_7d3e9b57-2877-4b97-bc27-e6b298d1af66.jpg', '/product-images-all/86/10_10ee67bd-136c-4655-bfe2-3e974d81ccb5.jpg']
      }
    ]
  },
  {
    index: 87,
    img: "/product-images/87_2_8a88c992-c393-4940-b45e-581a0edc9ef0.png",
    imgHover: "/product-images-hover/87_mnggiflab-compressed.gif",
    title: "UEROS Nexus Power Sex Machine",
    price: "",
    slug: "ueros-nexus-power-sex-machine",
  },
  {
    index: 88,
    img: "/images/starter-pack.jpg",
    imgHover: "/images/starter-pack.jpg",
    title: `Starter Kit "Maximum Pleasure"`,
    price: "$75.00",
    newPrice: "$9.99",
    slug: `Starter Kit "Maximum Pleasure"`,
    show: false,
  },
];

export default productData;
