export interface ProductContent {
    keySellingPoints: {
        title: string;
        description: string;
        whyBetter: string[];
        scenario: string;
        image?: string;
        video?: string; // Supports .mp4 (loop) or .gif
    }[];
    secondaryFeatures?: {
        title: string;
        description: string;
        icon?: string; // FontAwesome icon name (without fa- prefix)
        image?: string;
    }[];
}

export const productContent: Record<string, ProductContent> = {
    'pivot-video-doorbell': {
        keySellingPoints: [
            {
                title: '30° Pan Lens + Smart Tracking',
                description: 'With our adjustable 30° pan lens and smart tracking technology, the Pivot Doorbell ensures you never miss a visitor, even if your doorbell is mounted on a side wall. It automatically follows movement to keep guests in clear view.',
                whyBetter: [],
                scenario: '',
                image: '/products/doorbell/pivot-ksp-1.png'
            },
            {
                title: 'Chime as Wi-Fi Extender + Storage Base',
                description: 'The indoor chime acts as a Wi-Fi booster for the doorbell and securely stores your recordings. Data is kept safe inside your home, protecting it from theft or damage to the outdoor unit.',
                whyBetter: [],
                scenario: '',
                image: '/products/doorbell/pivot-ksp-2.png'
            },
            {
                title: 'Built-in 5,000mAh Rechargeable Battery',
                description: 'Enjoy long-lasting protection with the powerful 5,000mAh battery. 100% wire-free installation makes setup a breeze, or connect to existing wiring for continuous power.',
                whyBetter: [],
                scenario: '',
                image: '/products/doorbell/pivot-ksp-3.png'
            }
        ],
        secondaryFeatures: [
            { title: '3MP 2K Video', description: 'Crystal clear video quality to see every detail.', icon: 'video', image: '/products/doorbell/pivot-feature-1.png' },
            { title: 'Loitering Detection', description: 'Get notified if someone lingers at your door.', icon: 'user-clock', image: '/products/doorbell/pivot-feature-2.png' },
            { title: '100% Wire-free', description: 'Easy installation with no wires needed.', icon: 'battery-full', image: '/products/doorbell/pivot-feature-3.png' },
            { title: 'Optional Hardwired', description: 'Can support hardwired power supply.', icon: 'plug', image: '/products/doorbell/pivot-feature-4.png' },
            { title: 'PIR + Human Detection', description: 'Accurate alerts with reduced false alarms.', icon: 'user-check', image: '/products/doorbell/pivot-feature-5.png' },
            { title: 'Two-way talk', description: 'Variable Voice options for privacy and fun.', icon: 'microphone-alt', image: '/products/doorbell/pivot-feature-6.png' }
        ]
    },
    'dualwatch-outdoor-camera': {
        keySellingPoints: [
            {
                title: 'Dual-Lens Design for Extended Coverage',
                description: 'With two independent lenses working simultaneously, Dual Watch provides a significantly wider field of view, capturing more than twice the scene content compared with standard single-lens cameras.',
                whyBetter: [
                    'Eliminates traditional blind spots.',
                    'Covers large front yards, driveways, gateways, and side areas.',
                    'Reduces the need for multiple cameras.'
                ],
                scenario: 'For homes with both a driveway and a walkway, a single DualWatch can monitor vehicles pulling in while still tracking people approaching the front door—meaning users don\'t need two cameras to cover the same space.',
                image: '/products/cameras/dualwatch-ksp-1.png'
            },
            {
                title: 'AI Human / Vehicle Detection + Smart Tracking',
                description: 'DualWatch uses advanced AI algorithms to precisely recognize people and vehicles, significantly reducing false notifications. Smart tracking ensures the subject remains visible throughout the event.',
                whyBetter: [
                    'People & vehicle differentiation.',
                    'Clear tracking for complete event context.'
                ],
                scenario: 'Delivery: When a delivery truck approaches, the camera identifies it as a vehicle, highlights it, and logs the plate area for reference—great for package theft investigations.\n\nSuspicious Vehicle: If a car stops briefly near your garage, DualWatch tracks it and records how long it stayed and who got in/out.\n\nPedestrian: If someone walks from the street toward your driveway, the camera tracks them continuously, capturing face + movement direction.',
                image: '/products/cameras/dualwatch-ksp-2.png'
            },
            {
                title: 'Built-In Deterrence: Rapid-Response Lighting & Siren',
                description: 'Dual Watch features high-intensity lighting and a powerful audio alarm that activate instantly when suspicious activity is detected, acting proactively rather than passively.',
                whyBetter: [
                    'Warns intruders immediately.',
                    'Boosts nighttime visibility for brighter, clearer recordings.',
                    'Protects property perimeter before crime begins.'
                ],
                scenario: 'At night, if someone approaches and looks into parked cars, the lights snap on and an alert sounds—intruders usually retreat before attempting theft.\n\nWhile you\'re on vacation, if someone lingers near a window, the deterrence system activates automatically to warn them and notify you instantly.',
                image: '/products/cameras/dualwatch-ksp-3.png'
            },
            {
                title: 'Dual-Band Wi-Fi: 2.4GHz & 5GHz',
                description: 'DualWatch works on both 2.4GHz and 5GHz, ensuring smooth transmission even in homes with heavy wireless usage.',
                whyBetter: [
                    'Reduced latency on 5GHz for clearer livestream.',
                    'Wider installation flexibility.',
                    'Better resistance to congestion.'
                ],
                scenario: 'In homes with many smart devices, 2.4GHz can be saturated; switching to 5GHz ensures smooth live monitoring and fast event playback.\n\nWhen placed near the exterior wall facing the street, 5GHz transmission helps maintain consistently clean video for plate-capture or detailed face recognition.',
                image: '/products/cameras/dualwatch-ksp-4.png'
            }
        ],
        secondaryFeatures: [
            { title: '3MP Fixed Lens + 5MP Pan & Tilt Lens', description: 'Combined dual-lens system for both wide-angle monitoring and detailed close-ups.', icon: 'camera', image: '/products/cameras/dualwatch-feature-1.png' },
            { title: 'Smart Color Night Vision', description: 'Capture vivid colors even in low-light conditions with built-in spotlights.', icon: 'eye', image: '/products/cameras/dualwatch-feature-2.png' },
            { title: 'IP66 Waterproof', description: 'Rugged design for reliable outdoor operation in rain or shine.', icon: 'umbrella', image: '/products/cameras/dualwatch-feature-3.png' },
            { title: 'Two-way Talk', description: 'Listen and talk back to visitors in real-time via the app.', icon: 'microphone-alt', image: '/products/cameras/dualwatch-feature-4.png' },
            { title: 'Smart Tracking', description: 'Automatically tracks moving people or vehicles to keep them in frame.', icon: 'running', image: '/products/cameras/dualwatch-feature-5.png' },
            { title: 'Built-in spotlight and 110dB security siren', description: 'Active deterrence system to warn off potential intruders immediately.', icon: 'bullhorn', image: '/products/cameras/dualwatch-feature-6.png' }
        ]
    },
    'alertflash-active-deterrence': {
        keySellingPoints: [
            {
                title: 'Red & Blue Warning Lights + Active Siren',
                description: 'Alert Flash is equipped with high-visibility red and blue LEDs along with an integrated audible siren, enabling the camera to actively deter suspicious activity rather than only recording it.',
                whyBetter: [
                    'Visually signals that the property is protected.',
                    'Interrupts intrusion attempts in real time.',
                    'Helps alert homeowners and neighbors instantly.',
                    'Adds an additional safety layer at night.'
                ],
                scenario: 'Late at night, if someone approaches your yard or tries to check door handles, the warning lights flash and the siren sounds, making it clear they\'ve been detected—discouraging further intrusion.\n\nWhen you\'re away on vacation, the system can automatically activate lighting + alarm if an unknown person lingers on your property, helping prevent trespassing before it escalates.\n\nPackage thieves looking for boxes near your front gate are quickly scared off by the flashing lights and audible alert.',
                image: '/products/cameras/alertflash-ksp-1.png'
            },
            {
                title: 'Captures More Area with Pan & Tilt (0-355° / 0-90°)',
                description: 'With a 0-355° pan and 0-90° tilt range, Alert Flash provides flexible all-around monitoring, ensuring minimal blind spots around the home.',
                whyBetter: [
                    'Allows users to remotely reposition the view.',
                    'Reduces the number of cameras needed.',
                    'Ideal for large open spaces or irregular layouts.'
                ],
                scenario: 'One camera can watch both the front driveway and side alley simply by rotating the head.\n\nWhen motion is detected near the garage, users can pan the camera to follow activity without physically moving the unit.\n\nPerfect for homes with large yards, patios, or fencing lines where fixed cameras can\'t cover every angle.',
                image: '/products/cameras/alertflash-ksp-2.png'
            },
            {
                title: 'Built-In Deterrence: Rapid-Response Lighting & Siren',
                description: 'Alert Flash features high-intensity lighting and a powerful audio alarm that activate instantly when suspicious activity is detected, acting proactively rather than passively.',
                whyBetter: [
                    'Warns intruders immediately.',
                    'Boosts nighttime visibility for brighter, clearer recordings.',
                    'Protects property perimeter before crime begins.'
                ],
                scenario: 'At night, if someone approaches and looks into parked cars, the lights snap on and an alert sounds—intruders usually retreat before attempting theft.\n\nWhile you\'re on vacation, if someone lingers near a window, the deterrence system activates automatically to warn them and notify you instantly.',
                image: '/products/cameras/alertflash-ksp-3.png'
            },
            {
                title: 'Dual-Band Wi-Fi: 2.4GHz & 5GHz',
                description: 'Alert Flash supports both 2.4GHz & 5GHz networks, ensuring more stable performance in modern households.',
                whyBetter: [
                    '5GHz provides higher bandwidth → smoother livestream & playback.',
                    'Less signal interference from neighboring Wi-Fi devices.',
                    'More installation flexibility across the property.'
                ],
                scenario: 'In neighborhoods with a high density of Wi-Fi routers, 5GHz ensures fewer dropouts and clearer video when monitoring critical zones.\n\nIf you place the camera outside facing the street to monitor roaming vehicles, 5GHz helps maintain cleaner footage for plate recognition and AI classification.',
                image: '/products/cameras/alertflash-ksp-4.png'
            }
        ],
        secondaryFeatures: [
            { title: '3MP H.265 Video', description: 'Crystal clear video quality to see every detail.', icon: 'video', image: '/products/cameras/alertflash-feature-1.png' },
            { title: 'Smart Color Night Vision', description: 'See real colors rather than low-detail grayscale.', icon: 'eye', image: '/products/cameras/alertflash-feature-2.png' },
            { title: 'IP66 Waterproof', description: 'Rugged design for reliable outdoor operation.', icon: 'umbrella', image: '/products/cameras/alertflash-feature-3.png' },
            { title: 'Two-way Talk', description: 'Listen and talk back through the camera.', icon: 'microphone', image: '/products/cameras/alertflash-feature-4.png' },
            { title: 'Smart Tracking & Human Detection', description: 'Automatically follows moving objects.', icon: 'user-check', image: '/products/cameras/alertflash-feature-5.png' },
            { title: 'Built-in spotlight and 110dB security siren', description: 'Active deterrence to warn off intruders.', icon: 'lightbulb', image: '/products/cameras/alertflash-feature-6.png' }
        ]
    },
    'voyager-indoor-pt': {
        keySellingPoints: [
            {
                title: '0-355° Pan & -5~80° Tilt + Two-Way Talk',
                description: 'Voyager provides wide-angle monitoring through 0-355° horizontal pan and -5~80° vertical tilt, enabling full-room visibility without blind spots. With built-in two-way communication, users can talk instantly with family members via the app.',
                whyBetter: [
                    'One camera can monitor an entire room.',
                    'Easy to check in on children, elderly family members, or pets.',
                    'Instantly respond through voice without needing to make a phone call.'
                ],
                scenario: 'While at work, parents can pan the camera to monitor kids playing in different corners of the living room and use two-way talk to remind them to stay safe.\n\nCaregivers can remotely check if elderly grandparents are moving around safely and speak to them instantly if assistance is needed.\n\nPet owners can talk to their dogs when they start barking or acting anxious, helping soothe them in real time.',
                image: '/products/cameras/voyager-ksp-1.png'
            },
            {
                title: 'Abnormal Sound Alarm',
                description: 'Voyager automatically recognizes unusual indoor sounds such as a crying baby, sudden loud impacts, barking, breaking objects, and more. When detected, it sends instant alerts to ensure the safety of family and property.',
                whyBetter: [
                    'Better protection for babies, elderly family members, and pets.',
                    'Faster awareness of emergencies.',
                    'Reduces worry when away from home.'
                ],
                scenario: 'If a baby wakes up crying during nap time, Voyager immediately notifies parents so they can check in and comfort the child.\n\nIf an elderly family member accidentally falls, the sudden noise can trigger an alert, allowing family members to respond quickly.\n\nWhen no one is home and someone breaks into the house, Voyager detects the unusual noise and sends real-time notifications for early response.',
                image: '/products/cameras/voyager-ksp-2.png'
            },
            {
                title: 'Privacy Mode - Automatic Home & Away',
                description: 'Voyager supports automatic privacy scheduling, letting users choose when the camera records or when the lens retracts to protect privacy. Users can set Home / Away modes so monitoring adapts seamlessly to daily routines.',
                whyBetter: [
                    'Full privacy when family members are home.',
                    'Enhanced security when away.',
                    'No need for manual switching every day.'
                ],
                scenario: 'When leaving home, Voyager automatically activates monitoring + alerts, safeguarding the home while everyone is away.\n\nWhen returning home, the camera automatically enters privacy mode, so the lens tilts into a non-viewing position, ensuring family activity isn\'t recorded.\n\nDuring nighttime or family gatherings, users can schedule privacy windows to ensure the camera is off at specific times.',
                image: '/products/cameras/voyager-ksp-3.png'
            }
        ],
        secondaryFeatures: [
            { title: 'Baby Crying Detect', description: 'Instant alerts when your baby needs attention.', icon: 'baby', image: '/products/cameras/voyager-feature-1.png' },
            { title: 'Pet Monitoring', description: 'Keep an eye on your pets while you are away.', icon: 'paw', image: '/products/cameras/voyager-feature-2.png' },
            { title: 'Privacy Shield', description: 'Physical lens cover for guaranteed privacy.', icon: 'user-secret', image: '/products/cameras/voyager-feature-3.png' },
            { title: '360° Coverage', description: 'Pan and tilt to overlook the entire room.', icon: 'arrows-alt', image: '/products/cameras/voyager-feature-4.png' },
            { title: 'Motion Tracking', description: 'Follows movement to keep subjects in frame.', icon: 'walking', image: '/products/cameras/voyager-feature-5.png' },
            { title: 'Sleep Mode', description: 'Schedule camera to turn off when you are home.', icon: 'bed', image: '/products/cameras/voyager-feature-6.png' }
        ]
    },
    'sentinel-smart-lock': {
        keySellingPoints: [
            {
                title: 'Five Unlocking Methods',
                description: 'Supports fingerprint, card, password, one-time password, and mechanical key.',
                whyBetter: [
                    'Multiple ways to unlock for different users & situations.',
                    'Increased accessibility for family members, tenants, & visitors.',
                    'Mechanical key backup ensures reliability during emergencies.'
                ],
                scenario: 'When returning with hands full (groceries or kids), users can unlock instantly with their fingerprint, without digging for keys.\n\nShort-term guests (e.g., cleaners, caregivers, temporary visitors) can unlock with password or temporary access, eliminating the need to hand over physical keys.\n\nElderly family members can use card unlocking, which is easier and more intuitive.\n\nIn case of power outage or dead battery, the mechanical key ensures you can still enter safely.',
                image: '/products/lock/sentinel-ksp-1.png'
            },
            {
                title: 'One-Time Password',
                description: 'Create temporary access codes that can be used once; time validity can be customized.',
                whyBetter: [
                    'Ideal for Airbnb, rental, or visitor access.',
                    'Eliminates security risks of shared permanent passwords.',
                    'Access can be granted remotely, anytime.'
                ],
                scenario: 'When a dog-walker or cleaner visits, the homeowner can generate a single-use code valid only during a specified timeframe—ensuring no unauthorized return.\n\nIf relatives arrive early, homeowners can share a one-time code remotely so they don\'t need to wait outside.\n\nImportant deliveries (e.g., package inside porch/garage) can be handled safely by assigning a one-time code, which expires immediately after use.',
                image: '/products/lock/sentinel-ksp-2.png'
            },
            {
                title: 'App Remote Management',
                description: 'Supports remote user access management, custom user groups, door-opening logs, and real-time status checks.',
                whyBetter: [
                    'Assign different permissions to family members, tenants, guests, or cleaners.',
                    'Clearly see who unlocked the door and at what time.',
                    'Manage, add, or remove users anytime through the app.',
                    'Instantly confirm whether the door is locked or left open.'
                ],
                scenario: 'Parents can check if children arrived home safely by viewing which user (e.g., "Tom") unlocked the door and at what time (e.g., 3:15 PM).\n\nA landlord can assign different access groups – e.g., tenants vs. cleaners with their own unlock schedules.\n\nFor short-term rental hosts, once the booking ends, they can revoke the guest\'s access remotely, without needing physical contact.\n\nIf a caregiver or housekeeper enters during the day, the app records exactly who accessed the home and when, providing peace of mind.',
                image: '/products/lock/sentinel-ksp-3.png'
            }
        ],
        secondaryFeatures: [
            { title: 'Easy Setup', description: 'Easy setup with ISEFY APP.', icon: 'mobile-alt', image: '/products/lock/sentinel-feature-1.png' },
            { title: 'Multidimensional Fingerprint', description: 'Advanced biometric recognition.', icon: 'fingerprint', image: '/products/lock/sentinel-feature-2.png' },
            { title: '12-Month Battery Life', description: '4* AA battery for 12 months.', icon: 'battery-full', image: '/products/lock/sentinel-feature-3.png' },
            { title: 'Abnormal Event Alert', description: 'Forced Lock, Anomaly, Low Battery.', icon: 'exclamation-triangle', image: '/products/lock/sentinel-feature-4.png' }
        ]
    },
    'guardianeye-ptz': {
        keySellingPoints: [
            {
                title: 'Smart Tracking (Automatically Follows Movement)',
                description: 'The camera uses intelligent motion analysis to detect and follow moving targets, ensuring the person or object stays within view.',
                whyBetter: [
                    'No need to manually adjust the camera angle.',
                    'Captures a complete sequence of events.',
                    'Reduces blind spots when monitoring large spaces.',
                    'Helps build clearer activity evidence.'
                ],
                scenario: 'When a stranger walks toward your driveway, the camera automatically pans and tilts to follow their movement from the gate to the doorstep, capturing their route clearly.\n\nA delivery driver approaches your home – smart tracking watches from the sidewalk to the front door, helping you verify if the package was dropped off properly.\n\nIf a suspicious person paces around a parked vehicle, smart tracking records their movement, producing more useful evidence than a fixed shot.',
                image: '/products/cameras/guardianeye-ksp-1.png'
            },
            {
                title: 'Captures More Area with Pan & Tilt (0-355° / 0-90°)',
                description: 'With a 0-355° pan and 0-90° tilt range, Guardian Eye provides flexible all-around monitoring, ensuring minimal blind spots around the home.',
                whyBetter: [
                    'Allows users to remotely reposition the view.',
                    'Reduces the number of cameras needed.',
                    'Ideal for large open spaces or irregular layouts.'
                ],
                scenario: 'One camera can watch both the front driveway and side alley simply by rotating the head.\n\nWhen motion is detected near the garage, users can pan the camera to follow activity without physically moving the unit.\n\nPerfect for homes with large yards, patios, or fencing lines where fixed cameras can\'t cover every angle.',
                image: '/products/cameras/guardianeye-ksp-2.png'
            },
            {
                title: 'Built-In Deterrence: Rapid-Response Lighting & Siren',
                description: 'Guardian Eye features high-intensity lighting and a powerful audio alarm that activate instantly when suspicious activity is detected, acting proactively rather than passively.',
                whyBetter: [
                    'Warns intruders immediately.',
                    'Boosts nighttime visibility for brighter, clearer recordings.',
                    'Protects property perimeter before crime begins.'
                ],
                scenario: 'At night, if someone approaches and looks into parked cars, the lights snap on and an alert sounds—intruders usually retreat before attempting theft.\n\nWhile you\'re on vacation, if someone lingers near a window, the deterrence system activates automatically to warn them and notify you instantly.',
                image: '/products/cameras/guardianeye-ksp-3.png'
            }
        ],
        secondaryFeatures: [
            { title: '3MP H.265 Video', description: 'Crystal clear video quality to see every detail.', icon: 'video', image: '/products/cameras/guardianeye-feature-1.png' },
            { title: 'Smart Color Night Vision', description: 'See real colors rather than low-detail grayscale.', icon: 'eye', image: '/products/cameras/guardianeye-feature-2.png' },
            { title: 'IP66 Waterproof', description: 'Rugged design for reliable outdoor operation.', icon: 'umbrella', image: '/products/cameras/guardianeye-feature-3.png' },
            { title: 'Two-way Talk', description: 'Listen and talk back through the camera.', icon: 'microphone-alt', image: '/products/cameras/guardianeye-feature-4.png' },
            { title: 'Alarm Notification', description: 'Instant alerts sent to your phone when events occur.', icon: 'bell', image: '/products/cameras/guardianeye-feature-5.png' },
            { title: 'Built-in spotlight and 110dB security siren', description: 'Active deterrence to warn off intruders.', icon: 'lightbulb', image: '/products/cameras/guardianeye-feature-6.png' }
        ]
    }
};

export interface CloudPageContent {
    visualFeatures: {
        title: string;
        description: string;
        image: string;
    }[];
    pricingPlans: {
        name: string;
        price: string;
        storage: string;
        ai: string;
        reporting: string;
        commonFeatures: string[];
        highlight: boolean;
    }[];
    subscriptionGuide: {
        step: number;
        title: string;
        description: string;
        image: string;
    }[];
}

export const cloudPageContent: CloudPageContent = {
    visualFeatures: [
        {
            title: "Cloud Playback",
            description: "Review footage from anywhere, anytime. Your data is securely stored in the cloud, ensuring you never miss a moment even if your device is offline.",
            image: "/cloud/cloud-playback-1.png"
        },
        {
            title: "AI Analysis",
            description: "Advanced AI algorithms analyze your video feeds to detect humans, vehicles, pets, and packages, reducing false alarms and providing smarter insights.",
            image: "/cloud/ai-analysis-1.png"
        },
        {
            title: "Cloud Playback (2)",
            description: "Review footage from anywhere, anytime. Your data is securely stored in the cloud, ensuring you never miss a moment even if your device is offline.",
            image: "/cloud/cloud-playback-2.png"
        },
        {
            title: "AI Analysis (2)",
            description: "Advanced AI algorithms analyze your video feeds to detect humans, vehicles, pets, and packages, reducing false alarms and providing smarter insights.",
            image: "/cloud/ai-analysis-2.png"
        }
    ],
    pricingPlans: [
        {
            name: "Cloud Starter",
            price: "$5.99/Camera",
            storage: "7 Days Storage",
            ai: "Basic AI",
            reporting: "Basic Reporting",
            commonFeatures: ["Live Streaming", "Home Safeguard Mode"],
            highlight: false
        },
        {
            name: "Cloud Elite",
            price: "$11.99/Camera",
            storage: "30 Days Storage",
            ai: "Advanced AI (Human/Vehicle/Pets/Package)",
            reporting: "Standard Reporting",
            commonFeatures: ["Live Streaming", "Home Safeguard Mode"],
            highlight: true
        }
    ],
    subscriptionGuide: [
        {
            step: 1,
            title: "Open App",
            description: "Launch the ISEFY App on your smartphone.",
            image: "/cloud/guide-step-1.png"
        },
        {
            step: 2,
            title: "Go to Profile",
            description: "Tap on your profile icon to access account settings.",
            image: "/cloud/guide-step-2.png"
        },
        {
            step: 3,
            title: "Select Cloud",
            description: "Choose the Cloud section to view and subscribe to plans.",
            image: "/cloud/guide-step-3.png"
        }
    ]
};
