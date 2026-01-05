export interface Product {
    id: string;
    slug: string;
    name: string;
    category: 'Outdoor' | 'Indoor' | 'Doorbells' | 'Locks' | 'Accessories';
    price: number;
    rating: number;
    reviews: number;
    image: string;
    badges: string[];
    description: string;
    features: string[];
    specs: { [key: string]: string };
    tagline?: string;
    gallery?: string[];
    highlights?: { title: string; desc: string }[];
    longDesc?: string[];
    boxContent?: string[];
    faqs?: { question: string; answer: string }[];
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'dualwatch-outdoor-camera',
        name: 'DualWatch Outdoor Camera',
        category: 'Outdoor',
        price: 129.99,
        rating: 4.8,
        reviews: 124,
        image: '/images/product-cameras.png',
        badges: ['Best Seller', 'New Arrival'],
        tagline: 'Two Lenses. Zero Blind Spots.',
        description: '8MP Dual-Lens PTZ Camera with Auto-Tracking and Color Night Vision.',
        features: ['8MP Dual-Lens', '360° Tracking', 'Color Night Vision', 'Active Deterrence'],
        longDesc: [
            "DualWatch revolutionizes outdoor security with its unique dual-lens design. One fixed lens keeps an eye on the overall area, while the PTZ lens tracks moving objects in high detail. With 8MP total resolution, you never miss a thing.",
            "DualWatch has two lenses (3MP fixed lens and 5MP pan & tilt lens). The two lenses monitor scenes independently from different angles—making one DualWatch worth two traditional single‑lens cameras.",
            "Fixed Lens: Manually adjustable (Pan 0–260°, Tilt 0–30°)",
            "Pan & Tilt Lens: Motorized control (Pan 0–355°, Tilt 0–90°)",
            "DualWatch supports four night vision modes for clear‑as‑day clarity even in pitch dark. With IP66 weatherproofing, a built‑in spotlight and 110dB siren, DualWatch provides proactive outdoor protection with high‑quality two‑way talk."
        ],
        highlights: [
            { title: '8MP Dual-Lens', desc: 'See both the big picture and the details.' },
            { title: '360° Tracking', desc: 'AI automatically tracks moving subjects.' },
            { title: 'Color Night Vision', desc: 'True color even in pitch darkness.' },
            { title: 'Active Deterrence', desc: 'Siren and spotlight warn off intruders.' }
        ],
        specs: {
            'Resolution': '3MP Fixed + 5MP PTZ (Total 8MP)',
            'Field of View': '360° Pan, 90° Tilt',
            'Connectivity': '2.4/5 GHz WiFi 6',
            'Power': 'DC 12V 1A',
            'Weatherproof': 'IP66',
            'Audio': 'Two-way Talk, 110dB Siren',
            'Night Vision': 'Up to 30m, 4 Modes'
        },
        boxContent: [
            'DualWatch Camera', 'Power Adapter', 'Mounting Template', 'Screw Pack', 'Waterproof Connector', 'Quick Start Guide'
        ],
        faqs: [
            { question: 'Does DualWatch support 5GHz WiFi?', answer: 'Yes, DualWatch supports both 2.4GHz and 5GHz WiFi 6 for stable connection.' },
            { question: 'Can it record 24/7?', answer: 'Yes, if you use a microSD card or NVR, it supports continuous recording.' },
            { question: 'Can I set detection zones separately?', answer: 'Yes. In Detection Zone settings, you can switch between the two lenses and set different detection areas for each view.' }
        ]
    },
    {
        id: '2',
        slug: 'alertflash-active-deterrence',
        name: 'AlertFlash Active Deterrence',
        category: 'Outdoor',
        price: 89.99,
        rating: 4.7,
        reviews: 85,
        image: '/images/product-cameras.png',
        badges: ['Active Deterrence'],
        tagline: 'Stop Crime Before It Happens.',
        description: 'Active deterrence camera with red/blue strobes and 110dB siren.',
        features: ['Red & Blue Strobe', '110dB Siren', 'Color Night Vision', 'Human Detection'],
        longDesc: [
            "AlertFlash is not just a camera; it is a guard. With active visual and audio deterrents, it prevents potential crimes effectively.",
            "AlertFlash delivers 3MP live monitoring with a choice of 3.6mm lens option. With 0–355° pan & 0–90° tilt, AlertFlash ensures every corner of your home completely covered.",
            "AlertFlash supports red‑blue warning lights for a stronger deterrent to intruders. It supports four night vision modes for clear‑as‑day clarity even in pitch dark."
        ],
        highlights: [
            { title: 'Red & Blue Strobe', desc: 'Police-style flashing lights to deter.' },
            { title: '110dB Siren', desc: 'Loud alarm triggered by motion.' },
            { title: 'Pan & Tilt', desc: '0–355° pan and 0–90° tilt to reduce blind spots.' }
        ],
        specs: {
            'Resolution': '3MP (2304×1296)',
            'Field of View': '110°',
            'Connectivity': '2.4/5 GHz WiFi 6',
            'Audio': 'Two-way, 110dB Siren',
            'Deterrence': 'Spotlight + Red/Blue Strobe'
        },
        boxContent: [
            'AlertFlash Camera', 'Power Cable', 'Mounting Kit', 'Manual', 'Waterproof Connector'
        ],
        faqs: [
            { question: 'Is the siren adjustable?', answer: 'Yes, you can adjust the volume or turn it off via the app.' },
            { question: 'How do I switch to Night Vision mode?', answer: 'Ensure the device is online → Device Details → Night Vision Function → select your preferred mode.' }
        ]
    },
    {
        id: '3',
        slug: 'guardianeye-ptz',
        name: 'GuardianEye PTZ',
        category: 'Outdoor',
        price: 69.99,
        rating: 4.6,
        reviews: 210,
        image: '/images/product-cameras.png',
        badges: ['Best Value'],
        tagline: 'See Everything, Miss Nothing.',
        description: '360° coverage weatherproof PTZ camera for total home security.',
        features: ['360° Pan/Tilt', 'IP66 Weatherproof', 'Smart Tracking', 'Color Night Vision'],
        longDesc: [
            "GuardianEye provides affordable 360-degree protection with reliable PTZ mechanics and clear 3MP video.",
            "GuardianEye delivers 3MP live monitoring with a choice of 3.6mm lens option. With 0–355° pan & 0–90° tilt, GuardianEye ensures every corner of your home completely covered.",
            "It supports four night vision modes for clear‑as‑day clarity even in pitch dark. With IP66 certified, the camera can be used outdoors under different weather conditions."
        ],
        highlights: [
            { title: '360° Pan/Tilt', desc: 'Full coverage of your yard.' },
            { title: 'IP66 Weatherproof', desc: 'Built for rain and snow.' },
            { title: 'Smart Tracking', desc: 'Automatically tracks moving objects.' }
        ],
        specs: {
            'Resolution': '3MP (2304×1296)',
            'Field of View': '360° Pan, 90° Tilt',
            'Connectivity': '2.4 GHz WiFi',
            'Weatherproof': 'IP66',
            'Storage': 'SD Card / Cloud / NVR'
        },
        boxContent: [
            'GuardianEye Camera', 'Power Adapter', 'Screw Pack', 'Manual', 'Mounting Bracket'
        ],
        faqs: [
            { question: 'Does it work with Alexa?', answer: 'Yes, it is compatible with Alexa and Google Assistant.' },
            { question: 'Can I set a schedule for detection?', answer: 'Yes. In Detection Settings, configure detection schedules for specific days and times.' }
        ]
    },
    {
        id: '4',
        slug: 'voyager-indoor-pt',
        name: 'Voyager Indoor PT',
        category: 'Indoor',
        price: 49.99,
        rating: 4.9,
        reviews: 340,
        image: '/images/product-cameras.png',
        badges: ['Pet Friendly'],
        tagline: 'Your Smart Home Observer.',
        description: 'Smart indoor pan/tilt camera with privacy mode and baby crying detection.',
        features: ['Baby Crying Detect', 'Privacy Mode', '360° Coverage', 'Two-Way Audio'],
        longDesc: [
            "Perfect for pet owners and parents, Voyager keeps you connected to your home with smart audio detection and interaction.",
            "With 3MP 2K live monitoring and 0–355° pan & -5–80° tilt features, Voyager ensures every corner of your home completely covered.",
            "Human Detection quickly finds human targets in images and immediately sends a notification to you. Privacy Mode helps protect your personal privacy when you are home."
        ],
        highlights: [
            { title: 'Baby Crying Detect', desc: 'Instant alerts when baby cries.' },
            { title: 'Privacy Mode', desc: 'Lens hides away when you are home.' },
            { title: 'Full-room Coverage', desc: '0–355° pan & -5–80° tilt.' }
        ],
        specs: {
            'Resolution': '3MP / 2K',
            'Field of View': '360° Pan',
            'Connectivity': '2.4 GHz WiFi',
            'Audio': 'Two-way Audio',
            'Power': 'DC 5V 1A'
        },
        boxContent: [
            'Voyager Camera', 'USB Cable', 'Power Adapter', 'Mounting Plate', 'Manual'
        ],
        faqs: [
            { question: 'Can I mount it on the ceiling?', answer: 'Yes, it comes with a mounting plate and supports image flip.' },
            { question: 'What is Privacy Mode?', answer: 'When Privacy Mode is enabled, the camera lens is physically blocked and the device will not capture video.' }
        ]
    },
    {
        id: '5',
        slug: 'pivot-video-doorbell',
        name: 'Pivot Video Doorbell',
        category: 'Doorbells',
        price: 149.99,
        rating: 4.8,
        reviews: 98,
        image: '/images/product-doorbell.png',
        badges: ['Wire-Free', '2K Resolution'],
        tagline: 'Answer Your Door, Anywhere.',
        description: 'Battery video doorbell with wide angle view and package detection.',
        features: ['2K Resolution', 'Battery Powered', 'Package Detection', 'Head-to-Toe View'],
        longDesc: [
            "Pivot combines a high-def camera with a smart doorbell. It includes a Chime that also acts as a WiFi extender.",
            "With 3MP/2K live monitoring, an ultra wide‑view lens with 30° pan, Pivot ensures every corner in front of your door completely covered.",
            "With a 5000mAh rechargeable battery, Pivot is 100% wire‑free, waterproof and easy to install."
        ],
        highlights: [
            { title: '2K Resolution', desc: 'Crisp video to see every detail.' },
            { title: 'Battery Powered', desc: 'Easy installation without wires.' },
            { title: 'Package Detection', desc: 'Know when deliveries arrive.' }
        ],
        specs: {
            'Resolution': '2K 3MP (2048×1536)',
            'Field of View': '160° (125° H)',
            'Battery': '5000mAh',
            'Connectivity': '2.4 GHz WiFi',
            'Chime': 'Included (WiFi Extender)'
        },
        boxContent: [
            'Pivot Doorbell', 'Chime (WiFi Extender)', 'Battery Pack', 'Mounting Wedge', 'Screw Pack', 'Manual'
        ],
        faqs: [
            { question: 'How long does the battery last?', answer: 'Up to 120 days based on typical usage.' },
            { question: 'Do I need an angled bracket?', answer: 'No. The Pivot doorbell lens can be remotely rotated in the ISEFY app.' },
            { question: 'Review detection mode?', answer: 'We recommend Human Detection. It uses PIR to reduce false alarms.' }
        ]
    },
    {
        id: '6',
        slug: 'sentinel-smart-lock',
        name: 'Sentinel Smart Lock',
        category: 'Locks',
        price: 199.99,
        rating: 4.9,
        reviews: 56,
        image: '/images/product-lock.png',
        badges: ['Keyless Entry', 'Fingerprint'],
        tagline: 'Keyless Freedom. Total Security.',
        description: '5-in-1 keyless entry smart lock with fingerprint and app control.',
        features: ['5 Unlocking Ways', 'Remote Control', 'Auto-Lock', 'IP54 Weatherproof'],
        longDesc: [
            "Sentinel brings modern convenience to your front door. Never worry about losing keys again.",
            "Unlock in seconds with Instant Biometrics, or choose from various access methods including cards, passwords, and keys.",
            "Manage your lock effortlessly through a Wi‑Fi enabled mobile app, featuring user management and real‑time alerts."
        ],
        highlights: [
            { title: '5 Unlocking Ways', desc: 'Fingerprint, Code, App, Card, Key.' },
            { title: 'Remote Control', desc: 'Manage access from anywhere.' },
            { title: 'Auto-Lock', desc: 'Secure your home automatically.' }
        ],
        specs: {
            'Battery': '4xAA (12 Months)',
            'Connectivity': 'Direct WiFi',
            'Weatherproof': 'IP54',
            'Installation': '15 Minutes (Standard Latch)'
        },
        boxContent: [
            'Sentinel Lock', 'Latch', 'Strike Plate', 'Mounting Hardware', '2 Physical Keys', '2 IC Cards'
        ],
        faqs: [
            { question: 'Is it waterproof?', answer: 'Yes, the exterior part is IP54 rated (-30°F to 55°F).' },
            { question: 'How many fingerprints can it store?', answer: 'It can store up to 50 unique fingerprints.' }
        ]
    }
];
