export interface ProductContent {
    keySellingPoints: {
        title: string;
        description: string;
        whyBetter: string[];
        scenario: string;
        image?: string; // Placeholder or mapped image
    }[];
    secondaryFeatures?: {
        title: string;
        description: string;
        image?: string;
    }[];
}

export const productContent: Record<string, ProductContent> = {
    'pivot-video-doorbell': {
        keySellingPoints: [
            {
                title: '30° Pan Lens + Wide Angle View',
                description: 'In some residential settings, the doorbell may need to be installed on the side of the doorway rather than directly facing the entrance. With our 30° pan-adjustable lens, users can easily adjust the viewing angle to ensure the doorway is fully covered—without needing a physical wedge plate behind the doorbell.',
                whyBetter: [
                    'Eliminates complicated physical installation.',
                    'Offers more ideal framing even in corner-mounted scenarios.',
                    'Wide angle ensures full head-to-toe visibility.'
                ],
                scenario: 'If the doorbell must be mounted on a side wall because of brick layout or wiring constraints, the homeowner can still clearly monitor approaching visitors, packages, and suspicious movement without blind spots—something traditional fixed-view models struggle to achieve.',
                image: '/images/product-doorbell.png' // Placeholder
            },
            {
                title: 'Chime as Wi-Fi Extender + Storage Base',
                description: 'Our chime works not only as a ringer but also as a Wi-Fi extender and storage base. The microSD card is stored inside the chime, not the doorbell.',
                whyBetter: [
                    'If the doorbell is damaged or stolen, video evidence remains safe.',
                    'Extended signal coverage allows for more flexible doorbell placement.',
                    'More stable connectivity improves notification reliability.'
                ],
                scenario: 'If someone tries to remove or vandalize the doorbell, the critical recorded alarm videos remain stored in the chime safely indoors—unlike traditional models that lose footage when the device is stolen. Meanwhile, users can place the doorbell farther from the router, covering more types of house layouts.',
                image: '/images/hero-banner.png' // Placeholder
            },
            {
                title: 'Stable 2.4GHz Wi-Fi Connection',
                description: 'Optimized for 2.4GHz networks to provide better wall penetration and long-range connectivity, ensuring your doorbell stays online.',
                whyBetter: [
                    'Better signal range through exterior walls.',
                    'High compatibility with standard routers.',
                    'More reliable connection for remote alerts.'
                ],
                scenario: 'Since doorbells are often installed outside thick exterior walls or brick, the 2.4GHz band offers superior penetration compared to 5GHz, ensuring you never miss a visitor notification even if the router is far away.',
                image: '/images/hero2.jpg' // Placeholder
            },
            {
                title: 'Built-in 5,000mAh Rechargeable Battery',
                description: 'The integrated 5000mAh battery enables the doorbell to operate for up to 120 days per charge, depending on usage.',
                whyBetter: [
                    'Fewer charging interruptions.',
                    'More convenient for renters or homes without doorbell wiring.',
                    'Flexible installation without concern for power supply.'
                ],
                scenario: 'For users who prioritize low-maintenance devices (e.g., rental properties or vacation homes), the long-lasting battery ensures reliable operation for months at a time—without frequent recharging or wiring.',
                image: '/images/scenario-soho.png' // Placeholder
            }
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
                image: '/images/product-cameras.png' // Placeholder
            },
            {
                title: 'AI Human / Vehicle Detection + Smart Tracking',
                description: 'DualWatch uses advanced AI algorithms to precisely recognize people and vehicles, significantly reducing false notifications. Smart tracking ensures the subject remains visible throughout the event.',
                whyBetter: [
                    'People & vehicle differentiation.',
                    'Clear tracking for complete event context.'
                ],
                scenario: 'Delivery: When a delivery truck approaches, the camera identifies it as a vehicle, highlights it, and logs the plate area for reference—great for package theft investigations.\n\nSuspicious Vehicle: If a car stops briefly near your garage, DualWatch tracks it and records how long it stayed and who got in/out.\n\nPedestrian: If someone walks from the street toward your driveway, the camera tracks them continuously, capturing face + movement direction.',
                image: '/images/hero-banner.png' // Placeholder
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
                image: '/images/hero2.jpg' // Placeholder
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
                image: '/images/scenario-soho.png' // Placeholder
            }
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
                image: '/images/product-cameras.png' // Placeholder
            },
            {
                title: 'Captures More Area with Pan & Tilt',
                description: 'With a 0-355° pan and 0-90° tilt range, Alert Flash provides flexible all-around monitoring, ensuring minimal blind spots around the home.',
                whyBetter: [
                    'Allows users to remotely reposition the view.',
                    'Reduces the number of cameras needed.',
                    'Ideal for large open spaces or irregular layouts.'
                ],
                scenario: 'One camera can watch both the front driveway and side alley simply by rotating the head.\n\nWhen motion is detected near the garage, users can pan the camera to follow activity without physically moving the unit.\n\nPerfect for homes with large yards, patios, or fencing lines where fixed cameras can\'t cover every angle.',
                image: '/images/hero-banner.png' // Placeholder
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
                image: '/images/hero2.jpg' // Placeholder
            }
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
                image: '/images/product-cameras.png' // Placeholder
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
                image: '/images/hero-banner.png' // Placeholder
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
                image: '/images/hero2.jpg' // Placeholder
            }
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
                image: '/images/product-lock.png' // Placeholder
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
                image: '/images/hero-banner.png' // Placeholder
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
                image: '/images/hero2.jpg' // Placeholder
            }
        ]
    },
    'guardianeye-ptz': {
        keySellingPoints: [
            {
                title: 'Smart Tracking - Automatically Follows Movement',
                description: 'The camera uses intelligent motion analysis to detect and follow moving targets, ensuring the person or object stays within view.',
                whyBetter: [
                    'No need to manually adjust the camera angle.',
                    'Captures a complete sequence of events.',
                    'Reduces blind spots when monitoring large spaces.',
                    'Helps build clearer activity evidence.'
                ],
                scenario: 'When a stranger walks toward your driveway, the camera automatically pans and tilts to follow their movement from the gate to the doorstep, capturing their route clearly.\n\nA delivery driver approaches your home – smart tracking watches from the sidewalk to the front door, helping you verify if the package was dropped off properly.\n\nIf a suspicious person paces around a parked vehicle, smart tracking records their movement, producing more useful evidence than a fixed shot.',
                image: '/images/product-cameras.png' // Placeholder
            },
            {
                title: 'Two-Way Talk - Real-Time Communication',
                description: 'Built-in microphone and speaker let you speak directly with people near the camera via the app.',
                whyBetter: [
                    'Easy to talk to visitors or couriers.',
                    'Respond no matter where you are.',
                    'Helpful for elderly family or kids coming home.',
                    'Can help deter suspicious activity.'
                ],
                scenario: 'While at work, you can tell a courier where to safely leave a package.\n\nKids arrive home early - parents can greet them and confirm everything is okay.\n\nIf someone unfamiliar is near the property, you can talk to them remotely, letting them know they\'re being monitored, which often discourages intrusion.',
                image: '/images/hero-banner.png' // Placeholder
            },
            {
                title: 'Smart Color Night Vision',
                description: 'Four enhanced night-vision modes provide vivid nighttime imaging, helping capture critical detail even with limited ambient lighting.',
                whyBetter: [
                    'See real colors rather than low-detail grayscale.',
                    'Better identification of people, vehicles, and clothing.',
                    'More useful video evidence at night.',
                    'Works even when the environment is pitch-black.'
                ],
                scenario: 'Late at night, you can still see a visitor\'s clothing color, direction of movement, or vehicle color - valuable for security reports.\n\nWhen monitoring a dark yard or garage entrance, smart color night vision helps identify faces and objects more accurately.\n\nIf a suspicious vehicle stops outside, the camera can capture plate area and color tones more clearly compared with standard night-vision cameras.',
                image: '/images/hero2.jpg' // Placeholder
            }
        ]
    }
};
