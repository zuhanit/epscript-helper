"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
exports.params = {
    "player": {
        description: "Player Description",
        type: [
            'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12',
            'CurrentPlayer', 'Foes', 'Allies', 'NeutralPlayers', 'Force1', 'Force2', 'Force3', 'Force4',
            'NonAlliesVictoryPlayers'
        ],
    },
    "comparison": {
        description: "Comparison Description",
        type: [
            'AtLeast', 'AtMost', 'Exactly'
        ]
    },
    "number": {
        description: "Number Description",
        type: []
    },
    "resourceType": {
        description: "ResourceType Description",
        type: [
            'Ore', 'Gas', 'OreAndGas'
        ]
    },
    "unit": {
        description: "Unit Description",
        type: [
            "Terran Marine",
            "Terran Ghost",
            "Terran Vulture",
            "Terran Goliath",
            "Goliath Turret",
            "Terran Siege Tank (Tank Mode)",
            "Tank Turret",
            "Terran SCV",
            "Terran Wraith",
            "Terran Science Vessel",
            "Gui Montag (Firebat)",
            "Terran Dropship",
            "Terran Battlecruiser",
            "Vulture Spider Mine",
            "Nuclear Missile",
            "Terran Civilian",
            "Sarah Kerrigan (Ghost)",
            "Alan Schezar (Goliath)",
            "Alan Turret",
            "Jim Raynor (Vulture)",
            "Jim Raynor (Marine)",
            "Tom Kazansky (Wraith)",
            "Magellan (Science Vessel)",
            "Edmund Duke (Siege Tank)",
            "Duke Turret",
            "Edmund Duke (Siege Mode)",
            "Duke Turret",
            "Arcturus Mengsk (Battlecruiser)",
            "Hyperion (Battlecruiser)",
            "Norad II (Battlecruiser)",
            "Terran Siege Tank (Siege Mode)",
            "Tank Turret",
            "Terran Firebat",
            "Scanner Sweep",
            "Terran Medic",
            "Zerg Larva",
            "Zerg Egg",
            "Zerg Zergling",
            "Zerg Hydralisk",
            "Zerg Ultralisk",
            "Zerg Broodling",
            "Zerg Drone",
            "Zerg Overlord",
            "Zerg Mutalisk",
            "Zerg Guardian",
            "Zerg Queen",
            "Zerg Defiler",
            "Zerg Scourge",
            "Torrasque (Ultralisk)",
            "Matriarch (Queen)",
            "Infested Terran",
            "Infested Kerrigan (Infested Terran)",
            "Unclean One (Defiler)",
            "Hunter Killer (Hydralisk)",
            "Devouring One (Zergling)",
            "Kukulza (Mutalisk)",
            "Kukulza (Guardian)",
            "Yggdrasill (Overlord)",
            "Terran Valkyrie",
            "Cocoon",
            "Protoss Corsair",
            "Protoss Dark Templar",
            "Zerg Devourer",
            "Protoss Dark Archon",
            "Protoss Probe",
            "Protoss Zealot",
            "Protoss Dragoon",
            "Protoss High Templar",
            "Protoss Archon",
            "Protoss Shuttle",
            "Protoss Scout",
            "Protoss Arbiter",
            "Protoss Carrier",
            "Protoss Interceptor",
            "Dark Templar (Hero)",
            "Zeratul (Dark Templar)",
            "Tassadar/Zeratul (Archon)",
            "Fenix (Zealot)",
            "Fenix (Dragoon)",
            "Tassadar (Templar)",
            "Mojo (Scout)",
            "Warbringer (Reaver)",
            "Gantrithor (Carrier)",
            "Protoss Reaver",
            "Protoss Observer",
            "Protoss Scarab",
            "Danimoth (Arbiter)",
            "Aldaris (Templar)",
            "Artanis (Scout)",
            "Rhynadon (Badlands)",
            "Bengalaas (Jungle)",
            "Unused",
            "Unused",
            "Scantid (Desert)",
            "Kakaru (Twilight)",
            "Ragnasaur (Ash World)",
            "Ursadon (Ice World)",
            "Zerg Lurker Egg",
            "Raszagal (Dark Templar)",
            "Samir Duran (Ghost)",
            "Alexei Stukov (Ghost)",
            "Map Revealer",
            "Gerard DuGalle (Ghost)",
            "Zerg Lurker",
            "Infested Duran",
            "Disruption Field",
            "Terran Command Center",
            "Terran Comsat Station",
            "Terran Nuclear Silo",
            "Terran Supply Depot",
            "Terran Refinery",
            "Terran Barracks",
            "Terran Academy",
            "Terran Factory",
            "Terran Starport",
            "Terran Control Tower",
            "Terran Science Facility",
            "Terran Covert Ops",
            "Terran Physics Lab",
            "Unused Terran Bldg",
            "Terran Machine Shop",
            "Unused Terran Bldg",
            "Terran Engineering Bay",
            "Terran Armory",
            "Terran Missile Turret",
            "Terran Bunker",
            "Norad II (Crashed Battlecruiser)",
            "Ion Cannon",
            "Uraj Crystal",
            "Khalis Crystal",
            "Infested Command Center",
            "Zerg Hatchery",
            "Zerg Lair",
            "Zerg Hive",
            "Zerg Nydus Canal",
            "Zerg Hydralisk Den",
            "Zerg Defiler Mound",
            "Zerg Greater Spire",
            "Zerg Queen's Nest",
            "Zerg Evolution Chamber",
            "Zerg Ultralisk Cavern",
            "Zerg Spire",
            "Zerg Spawning Pool",
            "Zerg Creep Colony",
            "Zerg Spore Colony",
            "Unused Zerg Bldg",
            "Zerg Sunken Colony",
            "Zerg Overmind (With Shell)",
            "Zerg Overmind",
            "Zerg Extractor",
            "Mature Crysalis",
            "Zerg Cerebrate",
            "Zerg Cerebrate Daggoth",
            "Unused Zerg Bldg 5",
            "Protoss Nexus",
            "Protoss Robotics Facility",
            "Protoss Pylon",
            "Protoss Assimilator",
            "Protoss Unused",
            "Protoss Observatory",
            "Protoss Gateway",
            "Protoss Unused",
            "Protoss Photon Cannon",
            "Protoss Citadel of Adun",
            "Protoss Cybernetics Core",
            "Protoss Templar Archives",
            "Protoss Forge",
            "Protoss Stargate",
            "Stasis Cell/Prison",
            "Protoss Fleet Beacon",
            "Protoss Arbiter Tribunal",
            "Protoss Robotics Support Bay",
            "Protoss Shield Battery",
            "Khaydarin Crystal Formation",
            "Protoss Temple",
            "Xel'Naga Temple",
            "Mineral Field (Type 1)",
            "Mineral Field (Type 2)",
            "Mineral Field (Type 3)",
            "Cave",
            "Cave-in",
            "Cantina",
            "Mining Platform",
            "Independent Command Center",
            "Independent Starport",
            "Jump Gate",
            "Ruins",
            "Kyadarin Crystal Formation",
            "Vespene Geyser",
            "Warp Gate",
            "Psi Disrupter",
            "Zerg Marker",
            "Terran Marker",
            "Protoss Marker",
            "Zerg Beacon",
            "Terran Beacon",
            "Protoss Beacon",
            "Zerg Flag Beacon",
            "Terran Flag Beacon",
            "Protoss Flag Beacon",
            "Power Generator",
            "Overmind Cocoon",
            "Dark Swarm",
            "Floor Missile Trap",
            "Floor Hatch (UNUSED)",
            "Left Upper Level Door",
            "Right Upper Level Door",
            "Left Pit Door",
            "Right Pit Door",
            "Floor Gun Trap",
            "Left Wall Missile Trap",
            "Left Wall Flame Trap",
            "Right Wall Missile Trap",
            "Right Wall Flame Trap",
            "Start Location",
            "Flag",
            "Young Chrysalis",
            "Psi Emitter",
            "Data Disc",
            "Khaydarin Crystal",
            "Mineral Chunk (Type 1)",
            "Mineral Chunk (Type 2)",
            "Vespene Orb (Protoss Type 1)",
            "Vespene Orb (Protoss Type 2)",
            "Vespene Sac (Zerg Type 1)",
            "Vespene Sac (Zerg Type 2)",
            "Vespene Tank (Terran Type 1)",
            "Vespene Tank (Terran Type 2)",
        ]
    },
    "location": {
        description: "Location Description",
        type: []
    },
    "time": {
        description: "Time Description",
        type: []
    },
    "scoreType": {
        description: "ScoreType Description",
        type: [
            'Units', 'Buildings', 'UnitsAndBuildings', 'TotalKills', 'Razings', 'KillsAndRazings', 'Custom'
        ]
    },
    "switch": {
        description: "Switch",
        type: []
    },
    "state": {
        description: "State",
        type: [
            'Set', 'Cleared'
        ]
    },
    "text": {
        description: "Text",
        type: []
    },
    "forPlayer": {
        description: "ForPlayer",
        type: [
            'P1'
        ]
    },
    "count": {
        description: "Count",
        type: [
            'All'
        ]
    },
    "properties": {
        description: "Properties",
        type: [
            'clocked =', 'burrowed =', 'intransit =', 'hallucinated =', 'invincible =', 'hitpoint =', 'shield =', 'energy =', 'resource =', 'hangar ='
        ]
    },
    "owner": {
        description: "Owner",
        type: [
            'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12',
            'CurrentPlayer', 'Foes', 'Allies', 'NeutralPlayers', 'Force1', 'Force2', 'Force3', 'Force4',
            'NonAlliesVictoryPlayers'
        ]
    },
    "newOwner": {
        description: "NewOwner Description",
        type: [
            'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12',
            'CurrentPlayer', 'Foes', 'Allies', 'NeutralPlayers', 'Force1', 'Force2', 'Force3', 'Force4',
            'NonAlliesVictoryPlayers'
        ]
    },
    "label": {
        description: "Label Description",
        type: []
    },
    "goal": {
        description: "Goal Description",
        type: []
    },
    "percent": {
        description: "Percent Description",
        type: []
    },
    "add": {
        description: "Add Description",
        type: [
            'Add'
        ]
    },
    "newValue": {
        description: "NewValue Description",
        type: []
    },
    "destLocation": {
        description: "DestLocation Description",
        type: []
    },
    "startLocation": {
        description: "StartLocation Description",
        type: []
    },
    "script": {
        description: "Script Description",
        type: []
    },
    "timeModifier": {
        description: "TimeModifier Description",
        type: [
            'Add', 'SetTo', 'Subtract'
        ]
    },
    "modifier": {
        description: "Modifier Description",
        type: [
            'Add', 'SetTo', 'Subtract'
        ]
    },
    "scenarioName": {
        description: "ScenarioName Description",
        type: []
    },
    "offset": {
        description: "Offset Description",
        type: []
    },
    "value": {
        description: "Value Description",
        type: []
    },
    "size": {
        description: "size",
        type: []
    },
    "y": {
        description: "y Coordinate.",
        type: []
    },
    "x": {
        description: "x Coordinate.",
        type: []
    },
    "length": {
        description: "",
        type: []
    },
    "angle": {
        description: "",
        type: []
    },
    "condition": {
        description: "",
        type: []
    },
    "minimum": {
        description: "",
        type: []
    },
    "maximum": {
        description: "",
        type: []
    },
    "*args": {
        description: "",
        type: []
    },
    "format_string": {
        description: "",
        type: []
    },
    "tblID": {
        description: "",
        type: []
    },
    "epd": {
        description: "",
        type: []
    },
    "cp": {
        description: "",
        type: []
    },
    "trigger": {
        description: "",
        type: []
    },
    "mask": {
        description: "",
        type: []
    },
};
//# sourceMappingURL=params.js.map