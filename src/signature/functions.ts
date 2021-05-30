import { CallHierarchyIncomingCall } from "vscode";
import { params } from "./params";

export const functions = {
    "Accumulate": {
        label: "Accumulate",
        description: "Player accumulates quantity resources.",
        params: [
            { name: "player" },
            { name: "comparison" },
            { name: "number" },
            { name: "resourceType" },
        ],
    },
    "Always": {
        label: "Always()",
        description: "This Condition is always considered true. Keep in mind that all of a trigger’s conditions must be met for it to activate; so adding Always to a trigger with other conditions has no effect.",
        params: [
        ],
    },
    "Bring": {
        description: "Player brings quantity units to location.",
        params: [
            { name: "player" },
            { name: "comparison" },
            { name: "number" },
            { name: "unit" },
            { name: "number" },
        ],
    },
    "Command": {
        description: "",
        params: [
            { name: "player", description: "" },
            { name: "comparison", description: "" },
            { name: "number", description: "" },
            { name: "unit", description: "" },
        ],
    },
    "CommandLeast": {
        description: "Current player commands the least units.",
        params: [
            { name: "unit" }
        ],
    },
    "CommandLeastAt": {
        description: "Current player commands the least units at location.",
        params: [
            { name: "unit" },
            { name: "location" }
        ],
    },
    "CommandMost": {
        description: "Current player commands the most units.",
        params: [
            { name: "unit" },
        ],
    },
    "CommandMostAt": {
        description: "Current player commands the most units at location.",
        params: [
            { name: "unit" },
            { name: "location" },
        ],
    },
    "CountdownTimer": {
        description: "Countdown timer is duration game seconds.",
        params: [
            { name: "comparison" },
            { name: "time" },
        ],
    },
    "Deaths": {
        description: "Elapsed scenario time is duration game seconds.",
        params: [
            { name: "player" },
            { name: "comparison" },
            { name: "number" },
            { name: "unit" },
        ],
    },
    "ElapsedTime": {
        description: "",
        params: [
            { name: "comparison" },
            { name: "time" },
        ],
    },
    "HighestScore": {
        description: "Current player has highest score points",
        params: [
            { name: "scoreType" },
        ],
    },
    "Kills": {
        description: "Player kills quantity units.",
        params: [
            { name: "player" },
            { name: "comparison" },
            { name: "number" },
            { name: "unit" },
        ],
    },
    "LeastKills": {
        description: "Current player has least kills of unit.",
        params: [
            { name: "unit" },
        ],
    },
    "LeastResources": {
        description: "Current player has least resources.",
        params: [
            { name: "resourceType" },
        ],
    },
    "LowestScore": {
        description: "Current player has lowest score points",
        params: [
            { name: "scoreType" },
        ],
    },
    "MostKills": {
        description: "Current player has least kills of unit.",
        params: [
            { name: "unit" }
        ],
    },
    "MostResources": {
        description: "Current player has most resources.",
        params: [
            { name: "resourceType" }
        ],
    },
    "Never": {
        description: "Never.",
        params: [
        ],
    },
    "Opponents": {
        description: "Player has quantity opponents remaining in the game.",
        params: [
            { name: "player" },
            { name: "comparison" },
            { name: "number" },
        ],
    },
    "Score": {
        description: "Player score type score is quantity.",
        params: [
            { name: "player" },
            { name: "scoreType" },
            { name: "comparison" },
            { name: "comparison" },
        ],
    },
    "Switch": {
        description: "Switch is set.",
        params: [
            { name: "switch" },
            { name: "state" },
        ],
    },
    "CenterView": {
        description: "Center view for current player at location.",
        params: [
            { name: "location" },
        ],
    },
    "Comment": {
        description: "comment.",
        params: [
            { name: "text" }
        ],
    },
    "CreateUnit": {
        description: "Create quantity unit at location for player",
        params: [
            { name: "number" },
            { name: "unit" },
            { name: "location" },
            { name: "forPlayer" },
        ],
    },
    "CreateUnitWithProperties": {
        description: "Create quantity unit at location for player. Apply properties",
        params: [
            { name: "count" },
            { name: "unit" },
            { name: "location" },
            { name: "player" },
            { name: "properties" },
        ],
    },
    "Defeat": {
        description: "End scenario in defeat for current player.",
        params: [
        ],
    },
    "DisplayText": {
        description: "Display for current player: text.",
        params: [
            { name: "text" },
            { name: "alwaysDisplay" },
        ],
    },
    "Draw": {
        description: "End the scenario in a draw for all players.",
        params: [
        ],
    },
    "GiveUnits": {
        description: "Give quantity units owned by player at location to player.",
        params: [
            { name: "count" },
            { name: "unit" },
            { name: "owner" },
            { name: "location" },
            { name: "newOwner" },
        ],
    },
    "KillUnit": {
        description: "Kill all units for player.",
        params: [
            { name: "unit" },
            { name: "player" }
        ],
    },
    "KillUnitAt": {
        description: "Kill quantity units for player at location.",
        params: [
            { name: "count" },
            { name: "unit" },
            { name: "location" },
            { name: "forPlayer" },
        ],
    },
    "LeaderBoardControlAt": {
        description: "Show Leader Board for most control of units at location. Display label: label",
        params: [
            { name: "unit" },
            { name: "location" },
            { name: "label" },
        ],
    },
    "LeaderBoardControl": {
        description: "Show Leader Board for most control of unit. Display label: label",
        params: [
            { name: "unit" },
            { name: "label" },
        ],
    },
    "LeaderBoardGreed": {
        description: "Show Greed Leader Board for player closest to accumulation of number ore and gas.",
        params: [
            { name: "goal" }
        ],
    },
    "LeaderBoardKills": {
        description: "Show Leader Board for most kills of unit. Display label: label",
        params: [
            { name: "unit" },
            { name: "label" }
        ],
    },
    "LeaderBoardScore": {
        description: "Show Leader Board for most points. Display label: label",
        params: [
            { name: "scoreType" },
            { name: "label" },
        ],
    },
    "LeaderBoardResources": {
        description: "Show Leader Board for accumulation of most resource. Display label: label",
        params: [
            { name: "resourceType" },
            { name: "label" }
        ],
    },
    "LeaderBoardComputerPlayers": {
        description: "Set use of computer players in leaderboard calculations.",
        params: [
            { name: "state" },
        ],
    },
    "MinimapPing": {
        description: "Show minimap ping for current player at location.",
        params: [
            { name: "location" },
        ],
    },
    "ModifyUnitEnergy": {
        description: "Set energy points for quantity units owned by player at location to percent%.",
        params: [
            { name: "count" },
            { name: "unit" },
            { name: "owner" },
            { name: "location" },
            { name: "percent" },
        ],
    },
    "ModifyUnitHangarCount": {
        description: "Add at most quantity to hangar for quantity units at location owned by player.",
        params: [
            { name: "Add" },
            { name: "count" },
            { name: "unit" },
            { name: "owner" },
            { name: "location" },
        ],
    },
    "ModifyUnitHitPoints": {
        description: "Set hit points for quantity units owned by player at location to percent%.",
        params: [
            { name: "count" },
            { name: "unit" },
            { name: "owner" },
            { name: "location" },
            { name: "percent" },
        ],
    },
    "ModifyUnitResourceAmount": {
        description: "Set resource amount for quantity resource sources owned by player at location to quantity.",
        params: [
            { name: "count" },
            { name: "owner" },
            { name: "location" },
            { name: "value" },
        ],
    },
    "ModifyUnitShields": {
        description: "Set shield points for quantity units owned by player at location to percent%.",
        params: [
            { name: "count" },
            { name: "unit" },
            { name: "owner" },
            { name: "location" },
            { name: "percent" },
        ],
    },
    "MoveLocation": {
        description: "Center location labeled location on units owned by player at location.",
        params: [
            { name: "location" },
            { name: "unit" },
            { name: "owner" },
            { name: "destLocation" },
        ],
    },
    "MoveUnit": {
        description: "Move quantity units for player at location to destination.",
        params: [
            { name: "count" },
            { name: "unit" },
            { name: "owner" },
            { name: "startLocation" },
            { name: "destLocation" },
        ],
    },
    "MuteUnitSpeech": {
        description: "Mute all non-trigger unit sounds for current player.",
        params: [
        ],
    },
    "Order": {
        description: "Issue order to all units owned by player at location: order to destination.",
        params: [
            { name: "unit" },
            { name: "owner" },
            { name: "startLocation" },
            { name: "orderType" },
            { name: "destLocation" },
        ],
    },
    "PauseGame": {
        description: "Pause the game.",
        params: [
        ],
    },
    "PauseTimer": {
        description: "Pause the countdown timer.",
        params: [
        ],
    },
    "PlayWAV": {
        description: "Play WAV file",
        params: [
            { name: "WAVName" }
        ],
    },
    "PreserveTrigger": {
        description: "Preserve Trigger.",
        params: [
        ],
    },
    "RemoveUnit": {
        description: "Remove all units for player.",
        params: [
            { name: "unit" },
            { name: "player" },
        ],
    },
    "RemoveUnitAt": {
        description: "Remove quantity units for player at location.",
        params: [
            { name: "count" },
            { name: "unit" },
            { name: "location" },
            { name: "forPlayer" },
        ],
    },
    "RunAIScript": {
        description: "Execute AI script script.",
        params: [
            { name: "Script" },
        ],
    },
    "RunAIScriptAt": {
        description: "Execute AI script script at location.",
        params: [
            { name: "Script" },
            { name: "location" },
        ],
    },
    "SetAllianceStatus": {
        description: "Set Player to Ally status.",
        params: [
            { name: "player" },
            { name: "allyStatus" },
        ],
    },
    "SetCountdownTimer": {
        description: "Modify Countdown Timer: Set duration seconds.",
        params: [
            { name: "modifier" },
            { name: "number" },
        ],
    },
    "SetDeaths": {
        description: "Modify death counts for player: Set quantity for unit.",
        params: [
            { name: "player" },
            { name: "modifier" },
            { name: "number" },
            { name: "unit" },
        ],
    },
    "SetDoodadState": {
        description: "Set doodad state for units for player at location.",
        params: [
            { name: "state" },
            { name: "unit" },
            { name: "owner" },
            { name: "location" },
        ],
    },
    "SetInvincibility": {
        description: "Set invincibility for units owned by player at location",
        params: [
            { name: "state" },
            { name: "unit" },
            { name: "owner" },
            { name: "location" },
        ],
    },
    "SetMossionObjectives": {
        description: "Set Mission Objectives to: text.",
        params: [
            { name: "text" },
        ],
    },
    "SetNextScenario": {
        description: "Load scenario after completion of current game.",
        params: [
            { name: "ScenarioName" },
        ],
    },
    "SetResources": {
        description: "Modify resources for player: Set quantity resource.",
        params: [
            { name: "player" },
            { name: "modifier" },
            { name: "amount" },
            { name: "resourceType" },
        ],
    },
    "SetScore": {
        description: "Modify score for player: Set quantity points.",
        params: [
            { name: "player" },
            { name: "modifier" },
            { name: "amount" },
            { name: "scoreType" },
        ],
    },
    "SetSwitch": {
        description: "Set switch.",
        params: [
            { name: "switch" },
            { name: "switchState" },
        ],
    },
    "TalkingPortrait": {
        description: "Show unit talking to current player for duration milliseconds.",
        params: [
            { name: "unit" },
            { name: "time" },
        ],
    },
    "Transmission": {
        description: "Send transmission to current player from unit at location. Play WAV file. Modify transmission duration: Set number milliseconds. Display the following text: Text",
        params: [
            { name: "unit" },
            { name: "location" },
            { name: "WAVName" },
            { name: "modifier" },
            { name: "time" },
            { name: "text" },
            { name: "AlwaysDisplay" },
        ],
    },
    "UnMuteUnitSpeech": {
        description: "Unmute all non-trigger unit sounds for current player.",
        params: [
        ],
    },
    "UnpauseGame": {
        description: "Unpause the game.",
        params: [
            { name: "" },
            { name: "" },
            { name: "" },
        ],
    },
    "UnpauseTimer": {
        description: "Unpause the countdown timer.",
        params: [
        ],
    },
    "Victory": {
        description: "End scenario in victory for current player.",
        params: [
        ],
    },
    "Wait": {
        description: "[Warning] Don't use Wait action UNLESS YOU KNOW WHAT YOU'RE DOING!",
        params: [
            { name: "time" },
        ],
    },
    "SetMemory": {
        description: "Modify death counts for player: Set quantity for unit.",
        params: [
            { name: "offset" },
            { name: "modifier" },
            { name: "value" },
        ],
    },
    "SetMemoryX": {
        description: "Modify death counts for player: Set quantity for unit. Only inner-mask scope will change.",
        params: [
            { name: "offset" },
            { name: "modifier" },
            { name: "value" },
            { name: "mask" },
        ],
    },
    "SetMemoryEPD": {
        description: "Modify death counts for player: Set quantity for unit.",
        params: [
            { name: "offset" },
            { name: "modifier" },
            { name: "value" },
        ],
    },
    "SetMemoryXEPD": {
        description: "Modify death counts for player: Set quantity for unit. Only inner-mask scope will change.",
        params: [
            { name: "offset" },
            { name: "modifier" },
            { name: "value" },
            { name: "mask" },
        ],
    },
    "SetNextPtr": {
        description: "SetMemory(trg + 4, SetTo, dest)",
        params: [
            { name: "trigger" },
            { name: "dest" },
        ],
    },
    "Memory": {
        description: "Player has suffered quantity deaths of unit.",
        params: [
            { name: "offset" },
            { name: "comparison" },
            { name: "value" },
        ],
    },
    "MemoryX": {
        description: "Player has suffered quantity deaths of unit. Only inner-mask scope will read.",
        params: [
            { name: "offset" },
            { name: "comparison" },
            { name: "value" },
            { name: "mask" },
        ],
    },
    "MemoryEPD": {
        description: "Player has suffered quantity deaths of unit.",
        params: [
            { name: "offset" },
            { name: "comparison" },
            { name: "value" },
        ],
    },
    "MemoryXEPD": {
        description: "Player has suffered quantity deaths of unit. Only inner-mask scope will read.",
        params: [
            { name: "offset" },
            { name: "comparison" },
            { name: "value" },
            { name: "mask" },
        ],
    },
    "EUDArray": {
        description: "Define EUDArray.",
        params: [
            { name: "size" },
        ],
    },
    "getcurpl": {
        description: "Return a value of Current Player.",
        params: [
        ],
    },
    "setcurpl": {
        description: "Set a value of Current Player.",
        params: [
            { name: "value" }
        ],
    },
    "dwepdread_epd": {
        description: "Read ptr/EPD value from EPD.",
        params: [
            { name: "offset" },
        ],
    },
    "dwread_epd": {
        description: "Read ptr value from EPD.",
        params: [
            { name: "offset" },
        ],
    },
    "dwread": {
        description: "Read ptr value from ptr.",
        params: [
            { name: "offset" },
        ],
    },
    "epdread_epd": {
        description: "Read EPD value from EPD.",
        params: [
            { name: "offset" },
        ],
    },
    "dwbreak": {
        description: "Split dword to word/byte values.",
        params: [
            { name: "value" },
        ],
    },
    "dwbreak2": {
        description: "Split dword to word/byte values. (maintain multiplier).",
        params: [
            { name: "value" },
        ],
    },
    "dwadd": {
        description: "Add a value to ptr.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "dwadd_epd": {
        description: "Add a value to EPD.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "dwsubtract": {
        description: "Add a value to ptr.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "dwsubtract_epd": {
        description: "Add a value to EPD.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "dwwrite_epd": {
        description: "Add a value to EPD.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "bread": {
        description: "Read a byte value from ptr.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "bread_epd": {
        description: "Read a byte value from EPD.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "bwrite": {
        description: "Write a byte value to ptr.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "bwrite_epd": {
        description: "Write a byte value to EPD.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "wread": {
        description: "Read a word value from ptr.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "wread_epd": {
        description: "Read a word value from EPD.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "wwrite": {
        description: "Write a word value to ptr.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "wwrite_epd": {
        description: "Write a word value to EPD.",
        params: [
            { name: "offset" },
            { name: "value" },
        ],
    },
    "srand": {
        description: "Set a random seed.",
        params: [
            { name: "value" },
        ],
    },
    "getseed": {
        description: "Get a random seed.",
        params: [
            { name: "value" },
        ],
    },
    "dwrand": {
        description: "Get a random dword value. Remember set random seed before using dwrand.",
        params: [
            { name: "value" },
        ],
    },
    "rand": {
        description: "Get a random word value. Remember set random seed before using rand.",
        params: [
            { name: "value" },
        ],
    },
    "randomize": {
        description: "Randomize a random seed.",
        params: [
        ],
    },
    "atan2": {
        description: "Return a arctangent value of y/x.",
        params: [
            { name: "x" },
            { name: "y" },
        ],
    },
    "lengthdir": {
        description: "Return dx, dy value of 'length' distance from starting point and in direction 'angle'.",
        params: [
            { name: "length" },
            { name: "angle" },
        ],
    },
    "sqrt": {
        description: "Return dx, dy value of 'length' distance from starting point and in direction 'angle'.",
        params: [
            { name: "value" },
        ],
    },
    "playerexist": {
        description: "Check is player exists.",
        params: [
            { name: "player" },
        ],
    },
    "EUDBinaryMax": {
        description: "Find maximum x satisfying cond(x) using binary search.",
        params: [
            { name: "condition" },
            { name: "minimum" },
            { name: "maximum" },
        ],
    },
    "EUDBinaryMin": {
        description: "Find minimum x satisfying cond(x) using binary search.",
        params: [
            { name: "condition" },
            { name: "minimum" },
            { name: "maximum" },
        ],
    },
    "EUDLoopRange": {
        description: "Loop [start, end) range.",
        params: [
            { name: "start" },
            { name: "end" },
        ],
    },
    "EUDLoopUnit": {
        description: "Loop all CUnits.",
        params: [
        ],
    },
    "EUDLoopUnit2": {
        description: "Loop all CUnits.",
        params: [
        ],
    },
    "simepleprint": {
        description: "Just print function.",
        params: [
            { name: "*args..." },
        ],
    },
    "SetPName": {
        description: "Set Player name.",
        params: [
            { name: "player" },
            { name: "*args" },
        ],
    },
    "SetPNamef": {
        description: "Set Player name. support string formatting.",
        params: [
            { name: "player" },
            { name: "format_string" },
            { name: "*args" },
        ],
    },
    "settbl": {
        description: "Set stat_txt.tbl.",
        params: [
            { name: "tblID" },
            { name: "offset" },
            { name: "*args" },
        ],
    },
    "settbl2": {
        description: "Set stat_txt.tbl.",
        params: [
            { name: "tblID" },
            { name: "offset" },
            { name: "*args" },
        ],
    },
    "settblf": {
        description: "Set stat_txt.tbl. support string formatting.",
        params: [
            { name: "tblID" },
            { name: "offset" },
            { name: "format_string" },
            { name: "*args" },
        ],
    },
    "settblf2": {
        description: "Set stat_txt.tbl. support string formatting.",
        params: [
            { name: "tblID" },
            { name: "offset" },
            { name: "format_string" },
            { name: "*args" },
        ],
    },
    "setloc": {
        description: "Set location's X, Y coordinate to entered coordinate.",
        params: [
            { name: "location" },
            { name: "x" },
            { name: "y" },
        ],
    },
    "setloc_epd": {
        description: "Set location's X, Y coordinate to EPD's Position.",
        params: [
            { name: "location" },
            { name: "epd" },
        ],
    },
    "addloc": {
        description: "add entered values to location's LEFT-TOP and RIGHT-LOW coordinate. use for parallel movement.",
        params: [
            { name: "location" },
            { name: "x" },
            { name: "y" },
        ],
    },
    "getlocTL": {
        description: "return location's LEFT-TOP coordinate.",
        params: [
            { name: "location" },
        ],
    },
    "posread_epd": {
        description: "return X, Y coordinate by targeted address.",
        params: [
            { name: "epd" },
        ],
    },
    "posread_cp": {
        description: "return X, Y coordinate by targeted address(CP).",
        params: [
            { name: "cp" },
        ],
    },
    "IsPName": {
        description: "Return true when current player's name matched.",
        params: [
            { name: "player" },
            { name: "name" },
        ]
    },
    "parse": {
        description: "",
        params: [
            { name: "dest" },
            { name: "radix" },
        ]
    },
    "DisplayTextAt": {
        description: "DisplayText, but can select display line. faster than StringBuffer.printAt",
        params: [
            { name: "line" },
            { name: "string" },
        ]
    },
    "PColor": {
        description: "Return player color code.",
        params: [
            { name: "player" }
        ]
    },
    "SetKills": {
        description: "",
        params: [
            { name: "player" },
            { name: "modifier" },
            { name: "number" },
            { name: "unit" },
        ]
    },
    "strcpy": {
        description: "Copy String from provided address.",
        params: [
            { name: "dest" },
            { name: "src" },
        ]
    },
    "strcmp": {
        description: "Compare two strings.",
        params: [
            { name: "string" },
            { name: "string" },
        ]
    },
    "memcpy": {
        description: "Copy memory.",
        params: [
            { name: "dest" },
            { name: "src" },
            { name: "copylen" }
        ]
    },
    "getuserplayerid": {
        description: "Get user player id.",
        params: []
    },
    "strlen": {
        description: "Return length of string.",
        params: [
            { name: "src" }
        ]
    },
    "strlen_epd": {
        description: "Return length of string.",
        params: [
            { name: "epd" }
        ]
    },
    "PName": {
        description: "Get Name of Player.",
        params: [
            { name: "number" }
        ]
    },
    "ptr2s": {
        description: "Get String from provided address.",
        params: [
            { name: "dest" },
        ]
    },
    "epd2s": {
        description: "Get String from provided address.",
        params: [
            { name: "epd" },
        ]
    },
    "hptr": {
        description: "Convert to hex.",
        params: [
            { name: "number" },
        ]
    },
    "GetMapStringAddr": {
        description: "Get Address of TrgString",
        params: [
            { name: "number" },
        ]
    },
    "eprintln": {
        descripton: "Display text at error line.",
        params: [
            { name: "*args" }
        ]
    },
    "QueueGameCommand": {
        description: "Queue game command to packet queue.",
        params: [
            { name: "data" },
            { name: "size" }
        ]
    },
    "getgametick": {
        description: "Get current gameb tick value",
        params: [],
    },
    "EUDLoopPlayer": {
        description: "Loop Players. if want to skip check force or race, skip parameter.",
        params: [
            { name: "playerType" },
            { name: "force" },
            { name: "race"},
        ]
    },
    "getnextchatdst": {
        description: "Get next chat destination.",
        params: [
        ]
    }
};