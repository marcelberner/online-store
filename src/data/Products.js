const PRODUCTS = [
    {
        id: `${Math.floor(Math.random() * 1000000000)}`,
        name: "Apple iPhone 13 128GB Alpine Green",
        img: "./images/iphone_green.png",
        category: "phone",
        price: "4 199",
        amount: 19,
        specyfication: {
            color: "green",
            memory: "128GB",
            screen: "6,1",
            OS: "IOS 15",
            processor: "Apple A15 Bionic"
        }
    },
    {
        id: `${Math.floor(Math.random() * 1000000000)}`,
        name: "realme Pad 10.4 LTE 6/128GB Real Grey",
        img: "./images/realmePad_grey.png",
        category: "tablet",
        price: "1 399",
        amount: 29,
        specyfication: {
            color: "grey",
            memory: "128GB",
            screen: "10,4",
            OS: "Android 11",
            processor: "MTK MT8786 (6 rdzeni, 1.8 GHz A55 + 2 rdzenie, 2.0 GHz A75)"
        }
    },
    {
        id: `${Math.floor(Math.random() * 1000000000)}`,
        name: "Gigabyte GeForce RTX 3050 GAMING OC 8GB GDDR6",
        img: "./images/gigabyte_RTX3050.png",
        category: "graphic-card",
        price: "2 199",
        amount: 8,
        specyfication: {
            color: "black",
            memory: "8GB",
            gddr: "GDDR6",
            outputs: "HDMI 2.1 - 2 szt., DisplayPort 1.4a - 2 szt.",
            PCIe: "PCIe 4.0 x16 (tryb x8)"
        }
    },
    {
        id: `${Math.floor(Math.random() * 1000000000)}`,
        name: "Apple MacBook Air M1/8GB/256/Space Gray",
        img: "./images/macbook_grey.png",
        category: "laptop",
        price: "4 599",
        amount: 16,
        specyfication: {
            color: "grey",
            memory: "256GB",
            screen: "13,3",
            OS: "macOS Big Sur",
            processor: "Apple M1"
        }
    },
    {
        id: `${Math.floor(Math.random() * 1000000000)}`,
        name: "HERO i5-11400F/16GB/1TB/RTX3060",
        img: "./images/computer_hero.png",
        category: "computer",
        price: "6 600",
        amount: 31,
        specyfication: {
            memory: "16GB",
            graphic: "NVIDIA GeForce RTX 3060",
            OS: "Microsoft Windows 11 Home",
            processor: "Intel Core i5-11400F"
        }
    },
    {
        id: `${Math.floor(Math.random() * 1000000000)}`,
        name: "ASUS ROG SWIFT PG32UQX 4K HDR",
        img: "./images/monitor_asus.png",
        category: "monitor",
        price: "15 999",
        amount: 3,
        specyfication: {
            color: "black",
            screen: "32",
            resolution: "3840 x 2160",
            panel: "LED, IPS 10-bit"
        }
    },
    {
        id: `${Math.floor(Math.random() * 1000000000)}`,
        name: "Microsoft Xbox Series X",
        img: "./images/xbox_x.png",
        category: "console",
        price: "2 449",
        amount: 12,
        specyfication: {
            color: "black",
            memory: "1TB",
            ram: "16 GB GDDR6",
            graphic: "AMD RDNA 2.0 (1825 MHz)",
            processor: "AMD Ryzen Zen 2 (8 rdzeni, 3.8 GHz)"
        }
    },
    {
        id: `${Math.floor(Math.random() * 1000000000)}`,
        name: "HTC VIVE Cosmos Elite",
        img: "./images/vr_htc.png",
        category: "vr",
        price: "4 649",
        amount: 8,
        specyfication: {
            color: "black",
            screen: "2 x 3,4",
            resolution: "2880 x 1700 (1440 x 1700 na każde oko)",
            compatybilyty: "PC",
            refresh: "90 Hz"
        }
    },
    
];

export default PRODUCTS;