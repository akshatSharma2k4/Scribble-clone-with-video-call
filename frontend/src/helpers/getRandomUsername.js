const getRandomUsername = () => {
    const randomUsernames = [
        "ThunderQuasar",
        "EternalJourney",
        "LunarPulse",
        "VortexWhisper",
        "NovaVoyager",
        "SpectralKnight",
        "EclipseOracle",
        "InfinityScribe",
        "NebulaNomad",
        "AstralGuardian",
        "QuantumWanderer",
        "CelestialPhoenix",
        "GalacticSeraph",
        "ChronoCatalyst",
        "StellarDreamer",
        "RadiantReverie",
        "MysticWhisper",
        "AetherChronicle",
        "NebulaNinja",
        "QuantumQuintessence",
        "LuminousLabyrinth",
        "CelestialCrescent",
        "GalacticGlider",
        "ChronoNomad",
        "AstraAegis",
        "RadiantRonin",
        "NebulaNova",
        "QuantumQuasar",
        "LuminousLancer",
        "CelestialCipher",
        "StellarScribe",
        "MysticMarauder",
        "AetherAdventurer",
        "NebulaNimbus",
        "QuantumQuester",
        "GalacticGlimmer",
        "ChronoChampion",
        "CelestialCustodian",
        "AstraAcolyte",
        "RadiantRanger",
        "NebulaNavigator",
        "QuantumQuill",
        "LuminousLuminary",
        "CelestialSeeker",
        "StellarSentinel",
        "MysticMaverick",
        "AetherArtisan",
        "NebulaNebula",
        "QuantumQuirk",
        "GalacticGladiator",
        "ChronoChallenger",
        "CelestialConjurer",
        "AstraArchitect",
        "RadiantRevenant",
        "NebulaNurturer",
        "QuantumQuandary",
        "LuminousLibrarian",
        "CelestialStargazer",
        "StellarStrider",
        "MysticMentor",
        "AetherAcolyte",
        "NebulaNinja",
        "QuantumQuarry",
        "GalacticGuardian",
        "ChronoCrusader",
        "CelestialCaretaker",
        "AstraAdventurer",
        "RadiantRogue",
        "NebulaNebula",
        "QuantumQuill",
        "LuminousLegend",
        "CosmicVoyager",
        "EternalEcho",
        "LunarLuminary",
        "AstralEcho",
        "NebulaNavigator",
        "StellarSentinel",
        "EclipseEmissary",
        "QuantumQuasar",
        "CelestialCaster",
        "GalacticGuardian",
        "SpectralShade",
        "RadiantRanger",
        "MysticMarauder",
        "AetherAdventurer",
        "NebulaNebula",
        "StellarScribe",
        "QuantumQuester",
        "LuminousLancer",
        "CelestialCipher",
        "AstralArcanist",
        "GalacticGlimmer",
        "ChronoChampion",
        "RadiantRonin",
        "NebulaNomad",
        "QuantumQuintessence",
        "LuminousLabyrinth",
        "CelestialCrescent",
        "AstraAegis",
        "MysticMaverick",
        "StellarStrider",
        "NebulaNimbus",
        "QuantumQuirk",
        "GalacticGladiator",
        "ChronoChallenger",
        "CelestialConjurer",
        "AetherArchitect",
        "RadiantRevenant",
        "NebulaNurturer",
        "QuantumQuandary",
        "LuminousLibrarian",
        "CelestialStargazer",
        "AstraArtisan",
        "StellarSorcerer",
        "MysticMentor",
        "NebulaNavigator",
        "QuantumQuill",
        "GalacticGuardian",
        "ChronoCrusader",
        "CelestialCaretaker",
        "AetherAcolyte",
        "RadiantRaider",
        "NebulaNebula",
        "QuantumQuarry",
        "LuminousLegend",
        "CosmicCatalyst",
        "EternalEssence",
        "LunarLancer",
        "AstralArbiter",
        "NebulaNomad",
        "StellarSpecter",
        "EclipseEmperor",
        "QuantumQuintessence",
        "CelestialCipher",
        "GalacticGazer",
        "SpectralSorcerer",
        "RadiantRogue",
        "MysticMinstrel",
        "AetherAdventurer",
        "NebulaNimbus",
        "StellarScribe",
        "QuantumQuester",
        "LuminousLore",
        "CelestialCaster",
        "AstralArcanist",
        "GalacticGladiator",
        "ChronoChampion",
        "RadiantRanger",
        "NebulaNavigator",
        "QuantumQuasar",
        "LuminousLancer",
        "CelestialConjurer",
        "AstraArtisan",
        "MysticMarauder",
        "StellarStrider",
        "NebulaNebula",
        "QuantumQuirk",
        "GalacticGuardian",
        "ChronoCrusader",
        "CelestialCaretaker",
        "AetherAcolyte",
        "RadiantRaider",
        "NebulaNebula",
        "QuantumQuill",
        "LuminousLegend",
        "CosmicCatalyst",
        "EternalEssence",
        "LunarLancer",
        "AstralArbiter",
        "NebulaNomad",
        "StellarSpecter",
        "EclipseEmperor",
        "QuantumQuintessence",
        "CelestialCipher",
        "GalacticGazer",
        "SpectralSorcerer",
        "RadiantRogue",
        "MysticMinstrel",
        "AetherAdventurer",
        "NebulaNimbus",
        "StellarScribe",
        "QuantumQuester",
        "LuminousLore",
        "CelestialCaster",
        "AstralArcanist",
        "GalacticGladiator",
        "ChronoChampion",
        "RadiantRanger",
        "NebulaNavigator",
        "QuantumQuasar",
        "LuminousLancer",
        "CelestialConjurer",
        "AstraArtisan",
        "MysticMarauder",
        "StellarStrider",
        "NebulaNebula",
        "QuantumQuirk",
        "GalacticGuardian",
        "ChronoCrusader",
        "CelestialCaretaker",
        "AetherAcolyte",
        "RadiantRaider",
        "NebulaNebula",
        "QuantumQuill",
        "LuminousLegend",
        "CosmicCatalyst",
        "EternalEssence",
        "LunarLancer",
        "AstralArbiter",
        "NebulaNomad",
        "StellarSpecter",
        "EclipseEmperor",
        "QuantumQuintessence",
        "CelestialCipher",
        "GalacticGazer",
        "SpectralSorcerer",
        "RadiantRogue",
        "MysticMinstrel",
        "AetherAdventurer",
        "NebulaNimbus",
        "StellarScribe",
        "QuantumQuester",
        "LuminousLore",
        "CelestialCaster",
        "AstralArcanist",
        "GalacticGladiator",
        "ChronoChampion",
        "RadiantRanger",
        "NebulaNavigator",
        "QuantumQuasar",
        "LuminousLancer",
        "CelestialConjurer",
        "AstraArtisan",
        "MysticMarauder",
        "StellarStrider",
        "NebulaNebula",
        "QuantumQuirk",
        "GalacticGuardian",
        "ChronoCrusader",
        "CelestialCaretaker",
        "AetherAcolyte",
        "RadiantRaider",
        "NebulaNebula",
        "QuantumQuill",
        "LuminousLegend",
        "CosmicCatalyst",
        "EternalEssence",
        "LunarLancer",
        "AstralArbiter",
        "NebulaNomad",
        "StellarSpecter",
        "EclipseEmperor",
        "QuantumQuintessence",
        "CelestialCipher",
        "GalacticGazer",
        "SpectralSorcerer",
        "RadiantRogue",
        "MysticMinstrel",
        "AetherAdventurer",
        "NebulaNimbus",
        "StellarScribe",
        "QuantumQuester",
        "LuminousLore",
        "CelestialCaster",
        "AstralArcanist",
        "GalacticGladiator",
        "ChronoChampion",
        "RadiantRanger",
        "NebulaNavigator",
        "QuantumQuasar",
        "LuminousLancer",
        "CelestialConjurer",
        "AstraArtisan",
        "MysticMarauder",
        "StellarStrider",
        "NebulaNebula",
        "QuantumQuirk",
        "GalacticGuardian",
        "ChronoCrusader",
        "CelestialCaretaker",
        "AetherAcolyte",
        "RadiantRaider",
        "NebulaNebula",
        "QuantumQuill",
        "LuminousLegend",
    ];

    const val = Math.floor(Math.random() * randomUsernames.length);
    return randomUsernames[val];
};

export default getRandomUsername;
