// Grocery
import Arabica1 from "../public/images/Arabica-1.png"
import Arabica2 from "../public/images/Arabica-4.jpg"
import Arabica3 from "../public/images/Arabica-3.png"
import Arabica4 from "../public/images/Arabica-2.png"

import Robusta1 from "../public/images/Robusta-1.jpg"
import Robusta2 from "../public/images/Robusta-2.jpg"
import Robusta3 from "../public/images/Robusta-3.png"
import Robusta4 from "../public/images/Robusta-4.jpg"
import Robusta5 from "../public/images/Robusta-5.jpg"
import Robusta6 from "../public/images/Robusta-6.jpg"

// Coffee Machine
import coffeMachine1 from "../public/images/coffeeMachine-1.jpg"
import coffeMachine2 from "../public/images/coffeeMachine-2.jpg"
import coffeMachine3 from "../public/images/coffeeMachine-3.jpg"
import coffeMachine4 from "../public/images/coffeeMachine-4.jpg"
import coffeMachine5 from "../public/images/coffeeMachine-5.jpg"
import coffeMachine6 from "../public/images/coffeeMachine-6.jpg"
import coffeMachine7 from "../public/images/coffeeMachine-7.jpg"
import coffeMachine8 from "../public/images/coffeeMachine-8.png"
import coffeMachine9 from "../public/images/coffeeMachine-9.jpg"
import coffeMachine10 from "../public/images/coffeeMachine-10.jpg"
import coffeMachine11 from "../public/images/coffeeMachine-11.jpg"
import coffeMachine12 from "../public/images/coffeeMachine-12.jpg"

// Brewer
import brewer1 from "../public/images/Brewer-1.jpg"
import brewer2 from "../public/images/Brewer-2.png"
import brewer3 from "../public/images/Brewer-3.jpg"
import brewer4 from "../public/images/Brewer-4.jpg"
import brewer5 from "../public/images/Brewer-5.jpg"
import brewer6 from "../public/images/Brewer-6.jpg"

// Grinder
import grinder1 from "../public/images/Grinder-1.jpg"
import grinder2 from "../public/images/Grinder-2.webp"
import grinder3 from "../public/images/Grinder-3.jpg"
import grinder4 from "../public/images/Grinder-4.png"
import grinder5 from "../public/images/Grinder-5.jpg"
import grinder6 from "../public/images/Grinder-6.jpg"

// Barista tool 
import baristaTool1 from "../public/images/BaristaTool-1.jpg"
import baristaTool2 from "../public/images/BaristaTool-2.jpg"
import baristaTool3 from "../public/images/BaristaTool-3.jpg"
import baristaTool4 from "../public/images/BaristaTool-4.jpg"

// Coffeeware
import coffeeware1 from "../public/images/coffeeware-1.jpg"
import coffeeware2 from "../public/images/coffeeware-2.jpg"
import coffeeware3 from "../public/images/coffeeware-3.jpg"
import coffeeware4 from "../public/images/coffeeware-4.png"

// Part & Upgrade
import partUpgrade1 from "../public/images/partUpgrade-1.webp"
import partUpgrade2 from "../public/images/partUpgrade-2.jpg"
import partUpgrade3 from "../public/images/partUpgrade-3.jpg"
import partUpgrade4 from "../public/images/partUpgrade-4.jpg"

// Category
import category1 from "../public/images/category-1.png"
import category3 from "../public/images/category-2.png"
import category4 from "../public/images/category-3.png"
import category5 from "../public/images/category-4.png"
import category6 from "../public/images/category-5.png"
import category7 from "../public/images/category-6.png"
import category8 from "../public/images/category-7.png"
import category2 from "../public/images/category-8.png"

export const product =[
    {
        category: "Grocery",
        image:category2,
        subCategories:[
            {
                subCategory:"Arabica",
                product:[
                    {
                        id: 1,
                        title: 'ARUTALA Kopi Arabika Gayo Arabica Coffee 200 gram - Giling Halus',
                        image: Arabica1,
                        price: '68900',
                      },
                      {
                        id: 2,
                        title: "Kopi Kintamani Bali Arabika 250gr - Bubuk Halus",
                        image: Arabica2,
                        price: '75000'
                      },
                      {
                        id: 3,
                        title: '1KG KOPI ARABIKA TORAJA KALOSI SINGLE ORIGIN - BIJI, 500gram',
                        image: Arabica3,
                        price: '125000',
                      },
                      {
                        id: 4,
                        title: "TUKU - Biji Kopi Arabika: Tetangga Blend (250 gram) - Giling kasar",
                        image: Arabica4,
                        price: '92000'
                      },
                ]
            },
            {
                subCategory:"Robusta",
                product:[
                    {
                        id: 5,
                        title: 'Kopi Fajarasa Robusta Temanggung Biji Kopi Robusta 500 gram - Biji Utuh',
                        image: Robusta1,
                        price: '80000',
                      },
                      {
                        id: 6,
                        title: "KOPI ROBUSTA GAYO SUPER 1 KG KOPI HITAM KUALITAS TERBAIK - KASAR",
                        image: Robusta2,
                        price: '115000'
                      },
                      {
                        id: 7,
                        title: 'Kopi Robusta Natural Dampit Biji Atau Bubuk - 200 gr, Biji',
                        image: Robusta3,
                        price: '47000',
                      },
                      {
                        id: 8,
                        title: "Kopi Robusta Dampit Istimewa 1 Kg - Bubuk",
                        image: Robusta4,
                        price: '125300'
                      },
                      {
                        id: 9,
                        title: "Kopi Hayasa Toraja Robusta - 1Kg - 1Kg, BUBUK KASAR",
                        image: Robusta5,
                        price: '139000'
                      },
                      {
                        id: 10,
                        title: "Kopi Robusta Temanggung Coffee Bean Espresso Roasted Beans Biji Bubuk - 100 gram, Biji Kopi",
                        image: Robusta6,
                        price: '39900'
                      },
                ]
            }
        ]
    },
    {
        category: "Coffee Machine",
        image:category3,
        subCategories:[
            {
                subCategory:"Automatic Coffee Machine",
                product:[
                    {
                        id: 11,
                        title: 'NESPRESSO Vertuo Creatista Coffee Machine , Brushed Stainless Steel ( Mesin Kopi )',
                        image: coffeMachine1,
                        price: '11700000',
                      },
                      {
                        id: 12,
                        title: "NESPRESSO Essenza Mini C30 Coffee Machine, Black (Mesin Kopi)",
                        image: coffeMachine2,
                        price: '75000'
                      },
                      {
                        id: 13,
                        title: 'Cafeler Mesin Kopi Digital Americano/ Touch Screen/ Tetap Hangat/ 1.5L',
                        image: coffeMachine3,
                        price: '585000',
                      },
                      {
                        id: 14,
                        title: "HiBREW Mesin Kopi 3 in 1 Capsule Espresso Nespresso Dolce Gusto ST-504 - ZZUOM 3in1",
                        image: coffeMachine4,
                        price: '92000'
                      },
                      {
                        id: 15,
                        title: 'Mesin Kopi Espresso / Espresso Machine Ferratti Ferro FCM-5403E',
                        image: coffeMachine5,
                        price: '1508429',
                      },
                      {
                        id: 16,
                        title: "DeLonghi - Espresso Machine Stilosa EC230.BK - Mesin Kopi Espresso",
                        image: coffeMachine6,
                        price: '2540000'
                      },
                      
                ]
            },
            {
                subCategory:"Commercial Espresso",
                product:[
                    {
                        id: 17,
                        title: 'OSVO Mesin Kopi Espresso Coffee Maker Frothing 20 Bar 850W 1.8L CM3120',
                        image: coffeMachine7,
                        price: '1093100',
                      },
                      {
                        id: 18,
                        title: "Cypruz Coffee Capsule Machine Alat Pembuat Kopi 3 In 1",
                        image: coffeMachine8,
                        price: '799000'
                      },
                      {
                        id: 19,
                        title: "Danhan Smart Coffee Maker Mesin Kopi Otomatis Wireless Wifi Tuya",
                        image: coffeMachine9,
                        price: '1499000'
                      },
                      {
                        id: 20,
                        title: "Ace Kris 650 ml Coffee Drip Maker Oe - Hitam Mesin Kopi Espresso Machine Alat Pembuat Minuman Kopi",
                        image: coffeMachine10,
                        price: '199900'
                      },
                    {
                        id: 21,
                        title: 'LA PAVONI New Domus Ba with Grinder',
                        image: coffeMachine11,
                        price: '14700000',
                      },
                      {
                        id: 22,
                        title: "Kate Coffee Machine with Grinder",
                        image: coffeMachine12,
                        price: '21600000'
                      },
                ]
            }
        ]
    },
    {
        category: "Brewer",
        image:category4,
        subCategories:[
            {
                subCategory:"Coffee Maker",
                product:[
                    {
                        id: 23,
                        title: 'NextLevel Pulsar™ Brewer, Black',
                        image: brewer1,
                        price: '995000',
                      },
                      {
                        id: 24,
                        title: "Hoop Coffee Brewer, Aqua Marine",
                        image: brewer2,
                        price: '640000'
                      },
                      {
                        id: 25,
                        title: 'Tricolate Coffee Dripper (Ver.3), Black Pearl',
                        image: brewer3,
                        price: '750000',
                      },
                ]
            },
            {
                subCategory:"Cold Brewer & Ice Dripper",
                product:[
                    {
                        id: 26,
                        title: '400ml Dingyuan Mini Coffee Ice Dripper',
                        image: brewer4,
                        price: '990000',
                    },
                    {
                        id: 27,
                        title: "600ml BARO Ice Dripper",
                        image: brewer5,
                        price: '747.000'
                    },
                    {
                        id: 28,
                        title: "1.2L Cold Brew Coffee Maker",
                        image: brewer6,
                        price: '747.000'
                    },
                ]
            }
        ]
    },
    {
        category: "Grinder",
        image:category5,
        subCategories:[
            {
                subCategory:"Commercial Grinder",
                product:[
                    {
                        id: 29,
                        title: 'Mignon Crono (Brew Grinder with timer 5-60 sec)',
                        image: grinder1,
                        price: '5700000',
                      },
                      {
                        id: 30,
                        title: "Nadir Touch 65, Matt Black",
                        image: grinder2,
                        price: '9900000'
                      },
                ]
            },
            {
                subCategory:"Home Grinder",
                product:[
                    {
                        id: 31,
                        title: 'RUI E-Grinder with 800mAh Battery, Black',
                        image: grinder3,
                        price: '2880000',
                    },
                    {
                        id: 32,
                        title: "Mechanic E-Grinder, Black",
                        image: grinder4,
                        price: '5400000'
                    },
                ]
            },
            {
                subCategory:"Manual Grinder",
                product:[
                    {
                        id: 33,
                        title: 'Stainless steel Manual Coffee Grinder',
                        image: grinder5,
                        price: '183000',
                    },
                    {
                        id: 34,
                        title: "EVO Hand Grinder",
                        image: grinder6,
                        price: '2850000'
                    },
                ]
            }
        ]
    },
    {
        category: "Barista Tool",
        image:category6,
        subCategories:[
            {
                subCategory:"Barista Apparel",
                product:[
                    {
                        id: 35,
                        title: 'The Nomadic Travel Bag',
                        image: baristaTool1,
                        price: '3090000',
                      },
                      {
                        id: 36,
                        title: "Premium Quality Multi Function Canvas Barista Apron",
                        image: baristaTool2,
                        price: '180000'
                      },
                ]
            },
            {
                subCategory:"Barista Gear & Gadget",
                product:[
                    {
                        id: 37,
                        title: 'Wall Mount Barista Tools Storage',
                        image: baristaTool3,
                        price: '250000',
                    },
                    {
                        id: 38,
                        title: "Paragon Filter Brewing Tool, Black",
                        image: baristaTool4,
                        price: '2150000'
                    },
                ]
            },
        ]
    },
    {
        category: "Coffeeware",
        image:category7,
        subCategories:[
            {
                subCategory:"Cocktail Tools",
                product:[
                    {
                        id: 39,
                        title: '750ml Cocktail Shaker, Rose Gold',
                        image: coffeeware1,
                        price: '145000',
                      },
                      {
                        id: 40,
                        title: "20oz|591ml Cocktail Shaker Set, Black",
                        image: coffeeware2,
                        price: '910000'
                      },
                ]
            },
            {
                subCategory:"Cup, Mug & Tumbler",
                product:[
                    {
                        id: 41,
                        title: '350ml Stainless steel Portable French Press',
                        image: coffeeware3,
                        price: '360000',
                    },
                    {
                        id: 42,
                        title: "160z|473ml Camp Cup",
                        image: coffeeware4,
                        price: '589000'
                    },
                ]
            },
        ]
    },
    {
        category: "Part & Upgrade",
        image:category8,
        subCategories:[
            {
                subCategory:"Body & Electrical Part",
                product:[
                    {
                        id: 43,
                        title: 'Picopresso Gauge',
                        image: partUpgrade1,
                        price: '969000',
                      },
                      {
                        id: 44,
                        title: "Set of 4pcs Adjustable Leg for Coffee Machine, Black",
                        image: partUpgrade2,
                        price: '225000'
                      },
                ]
            },
            {
                subCategory:"Upgrade Kit",
                product:[
                    {
                        id: 45,
                        title: 'Walnut Side Panels for Pura R, Costanza and Costanza R',
                        image: partUpgrade3,
                        price: '3600000',
                    },
                    {
                        id: 46,
                        title: "Nano Basket Plus Upgrade Kit",
                        image: partUpgrade4,
                        price: '629000'
                    },
                ]
            },
        ]
    },
    
]