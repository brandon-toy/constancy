import Image from 'next/image'

export interface SpiritMetadata {
    name: string
    setup: string
    imageSource: string
    complexity: complexity
    innatePower: innatePower[]
}
enum complexity {
    low,
    medium,
    high,
    veryHigh,
}

interface innatePower {
    name: string
    speed: Speed
    range: PowerRange
    targetLand: Land | Land[]
    innateThresholds: innateThreshold[]
}

interface innateThreshold {
    description: string
    threshold: ElementsThreshold
}

enum Land {
    any,
    sand,
    mountain,
    wetlands,
    jungle,
}

enum Speed {
    fast,
    slow,
}

interface PowerRange {
    distance: number
    spiritSite: boolean
}

interface ElementsThreshold {
    sun?: number
    fire?: number
    water?: number
    earth?: number
    air?: number
    plant?: number
    animal?: number
}

const TownImage = () => {
    return (
        <Image
            src={'/constancy/cardicons/town.png'}
            alt="Town"
            width={20}
            height={20}
        />
    )
}

const CityImage = () => {
    return (
        <Image
            src={'/constancy/cardicons/city.png'}
            alt="Town"
            width={20}
            height={20}
        />
    )
}

const PresecenceImage = () => {
    return (
        <Image
            src={'/constancy/cardicons/presence.png'}
            alt="Presence"
            width={20}
            height={20}
        />
    )
}

const SPIRIT_METADATA: SpiritMetadata[] = [
    {
        name: "Lightning's Swift Strike",
        setup: `Put 2 ${PresecenceImage} on your starting board in the highest-numbered Sands.`,
        imageSource: '/constancy/spirits/lightning.png',
        complexity: complexity.low,
        innatePower: [
            {
                name: 'Thundering Destruction',
                innateThresholds: [
                    {
                        description: `Destroy 1 ${TownImage}.`,
                        threshold: { fire: 3, air: 2 },
                    },
                    {
                        description: `You may instead destroy 1 ${CityImage}.`,
                        threshold: { fire: 4, air: 3 },
                    },
                    {
                        description: `Also, Destroy 1 ${TownImage}/${CityImage}.`,
                        threshold: { fire: 5, air: 4, water: 1 },
                    },
                    {
                        description: `Also, Destroy 1 ${TownImage}/${CityImage}.`,
                        threshold: { fire: 5, air: 5, water: 2 },
                    },
                ],
                speed: Speed.slow,
                range: { distance: 1, spiritSite: true },
                targetLand: Land.any,
            },
        ],
    },
    // { name: 'River Surges in Sunlight' },
    // { name: 'Shadows Flicker Like Flame' },
    // { name: 'Vital Strength of the Earth' },
    // { name: 'A Spread of Rampant Green' },
    // { name: 'Thunderspeaker' },
    // { name: "Ocean's Hungry Grasp" },
    // { name: 'Keeper of the Forbidden Wilds' },
    // { name: 'Sharp Fangs Behind the Leaves' },
    // { name: 'Heart of the Wildfire' },
    // { name: 'Serpent Slumbering Beneath the Island' },
    // { name: 'Grinning Trickster Stirs Up Trouble' },
    // { name: 'Lure of the Deep Wilderness' },
    // { name: 'Shifting Memory of Ages' },
    // { name: "Stone's Unyielding Defiance" },
    // { name: 'Volcano Looming High' },
    // { name: 'Shroud of Silent Mist' },
    // { name: 'Vengeance as a Burning Plague' },
    // { name: 'Fractured Days Split the Sky' },
    // { name: 'Starlight Seeks Its Form' },
    // { name: 'Downpour Drenches the World' },
    // { name: 'Finder of Paths Unseen' },
    // { name: 'Devouring Teeth Lurk Underfoot' },
    // { name: 'Eyes Watch from the Trees' },
    // { name: 'Fathomless Mud of the Swamp' },
    // { name: 'Rising Heat of Stone and Sand' },
    // { name: 'Sun-Bright Whirlwind' },
    // { name: 'Ember-Eyed Behemoth' },
    // { name: 'Hearth-Vigil' },
    // { name: 'Towering Roots of the Jungle' },
    // { name: 'Breath of Darkness Down Your Spine' },
    // { name: 'Relentless Gaze of the Sun' },
    // { name: 'Wandering Voice Keens Delirium' },
    // { name: 'Wounded Waters Bleeding' },
]
