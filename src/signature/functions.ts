import { CallHierarchyIncomingCall } from "vscode";

export const functions = {
    "Accumulate": {
        label: "Accumulate",
        description: "Player accumulates quantity resources.",
        params: [
            { name: "Player" },
            { name: "Comparison" },
            { name: "Number" },
            { name: "ResourceType" },
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
            { name: "Player" },
            { name: "Comparison" },
            { name: "Number" },
            { name: "Unit" },
            { name: "Number" },
        ],
    },
    "Command": {
        description: "",
        params: [
            { name: "Player", description: "" },
            { name: "Comparison", description: "" },
            { name: "Number", description: "" },
            { name: "Unit", description: "" },
        ],
    },
    "CommandLeast": {
        description: "Current player commands the least units.",
        params: [
            { name: "Unit" }
        ],
    },
    "CommandLeastAt": {
        description: "Current player commands the least units at location.",
        params: [
            { name: "Unit" },
            { name: "Location" }
        ],
    },
    "CommandMost": {
        description: "Current player commands the most units.",
        params: [
            { name: "Unit" },
        ],
    },
    "CommandMostAt": {
        description: "Current player commands the most units at location.",
        params: [
            { name: "Unit" },
            { name: "Location" },
        ],
    },
    "CountdownTimer": {
        description: "Countdown timer is duration game seconds.",
        params: [
            { name: "Comparison" },
            { name: "Time" },
        ],
    },
    "Deaths": {
        description: "Elapsed scenario time is duration game seconds.",
        params: [
            { name: "Player" },
            { name: "Comparison" },
            { name: "Number" },
            { name: "Unit" },
        ],
    },
    "ElapsedTime": {
        description: "",
        params: [
            { name: "Comparison" },
            { name: "Time" },
        ],
    },
    "HighestScore": {
        description: "Current player has highest score points",
        params: [
            { name: "ScoreType" },
        ],
    },
    "Kills": {
        description: "Player kills quantity units.",
        params: [
            { name: "Player" },
            { name: "Comparison" },
            { name: "Number" },
            { name: "Unit" },
        ],
    },
    "LeastKills": {
        description: "Current player has least kills of unit.",
        params: [
            { name: "Unit" },
        ],
    },
    "LeastResources": {
        description: "Current player has least resources.",
        params: [
            { name: "ResourceType" },
        ],
    },
    "LowestScore": {
        description: "Current player has lowest score points",
        params: [
            { name: "ScoreType" },
        ],
    },
    "MostKills": {
        description: "Current player has least kills of unit.",
        params: [
            { name: "Unit" }
        ],
    },
    "MostResources": {
        description: "Current player has most resources.",
        params: [
            { name: "ResourceType" }
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
            { name: "Player" },
            { name: "Comparison" },
            { name: "Number" },
        ],
    },
    "Score": {
        description: "Player score type score is quantity.",
        params: [
            { name: "Player" },
            { name: "ScoreType" },
            { name: "Comparison" },
            { name: "Comparison" },
        ],
    },
    "Switch": {
        description: "Switch is set.",
        params: [
            { name: "Switch" },
            { name: "State" },
        ],
    },
    "CenterView": {
        description: "Center view for current player at location.",
        params: [
            { name: "Where" },
        ],
    },
    "Comment": {
        description: "comment.",
        params: [
            { name: "Text" }
        ],
    },
    "CreateUnit": {
        description: "Create quantity unit at location for player",
        params: [
            { name: "Number" },
            { name: "Unit" },
            { name: "Where" },
            { name: "ForPlayer" },
        ],
    },
    "CreateUnitWithProperties": {
        description: "Create quantity unit at location for player. Apply properties",
        params: [
            { name: "Count" },
            { name: "Unit" },
            { name: "Where" },
            { name: "Player" },
            { name: "Properties" },
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
            { name: "Text" },
            { name: "AlwaysDisplay" },
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
            { name: "Count" },
            { name: "Unit" },
            { name: "Owner" },
            { name: "Where" },
            { name: "NewOwner" },
        ],
    },
    "KillUnit": {
        description: "Kill all units for player.",
        params: [
            { name: "Unit" },
            { name: "Player" }
        ],
    },
    "KillUnitAt": {
        description: "Kill quantity units for player at location.",
        params: [
            { name: "Count" },
            { name: "Unit" },
            { name: "Where" },
            { name: "ForPlayer" },
        ],
    },
    "LeaderBoardControlAt": {
        description: "Show Leader Board for most control of units at location. Display label: label",
        params: [
            { name: "Unit" },
            { name: "Location" },
            { name: "Label" },
        ],
    },
    "LeaderBoardControl": {
        description: "Show Leader Board for most control of unit. Display label: label",
        params: [
            { name: "Unit" },
            { name: "Label" },
        ],
    },
    "LeaderBoardGreed": {
        description: "Show Greed Leader Board for player closest to accumulation of number ore and gas.",
        params: [
            { name: "Goal" }
        ],
    },
    "LeaderBoardKills": {
        description: "Show Leader Board for most kills of unit. Display label: label",
        params: [
            { name: "Unit" },
            { name: "Label" }
        ],
    },
    "LeaderBoardScore": {
        description: "Show Leader Board for most points. Display label: label",
        params: [
            { name: "ScoreType" },
            { name: "Label" },
        ],
    },
    "LeaderBoardResources": {
        description: "Show Leader Board for accumulation of most resource. Display label: label",
        params: [
            { name: "ResourceType" },
            { name: "Label" }
        ],
    },
    "LeaderBoardComputerPlayers": {
        description: "Set use of computer players in leaderboard calculations.",
        params: [
            { name: "State" },
        ],
    },
    "MinimapPing": {
        description: "Show minimap ping for current player at location.",
        params: [
            { name: "Where" },
        ],
    },
    "ModifyUnitEnergy": {
        description: "Set energy points for quantity units owned by player at location to percent%.",
        params: [
            { name: "Count" },
            { name: "Unit" },
            { name: "Owner" },
            { name: "Where" },
            { name: "Percent" },
        ],
    },
    "ModifyUnitHangarCount": {
        description: "Add at most quantity to hangar for quantity units at location owned by player.",
        params: [
            { name: "Add" },
            { name: "Count" },
            { name: "Unit" },
            { name: "Owner" },
            { name: "Where" },
        ],
    },
    "ModifyUnitHitPoints": {
        description: "Set hit points for quantity units owned by player at location to percent%.",
        params: [
            { name: "Count" },
            { name: "Unit" },
            { name: "Owner" },
            { name: "Where" },
            { name: "Percent" },
        ],
    },
    "ModifyUnitResourceAmount": {
        description: "Set resource amount for quantity resource sources owned by player at location to quantity.",
        params: [
            { name: "Count" },
            { name: "Owner" },
            { name: "Where" },
            { name: "NewValue" },
        ],
    },
    "ModifyUnitShields": {
        description: "Set shield points for quantity units owned by player at location to percent%.",
        params: [
            { name: "Count" },
            { name: "Unit" },
            { name: "Owner" },
            { name: "Where" },
            { name: "Percent" },
        ],
    },
    "MoveLocation": {
        description: "Center location labeled location on units owned by player at location.",
        params: [
            { name: "Location" },
            { name: "OnUnit" },
            { name: "Owner" },
            { name: "DestLocation" },
        ],
    },
    "MoveUnit": {
        description: "Move quantity units for player at location to destination.",
        params: [
            { name: "Count" },
            { name: "UnitType" },
            { name: "Owner" },
            { name: "StartLocation" },
            { name: "DestLocation" },
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
            { name: "Unit" },
            { name: "Owner" },
            { name: "StartLocation" },
            { name: "OrderType" },
            { name: "DestLocation" },
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
            { name: "Unit" },
            { name: "Player" },
        ],
    },
    "RemoveUnitAt": {
        description: "Remove quantity units for player at location.",
        params: [
            { name: "Count" },
            { name: "Unit" },
            { name: "Where" },
            { name: "ForPlayer" },
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
            { name: "Where" },
        ],
    },
    "SetAllianceStatus": {
        description: "Set Player to Ally status.",
        params: [
            { name: "Player" },
            { name: "Status" },
        ],
    },
    "SetCountdownTimer": {
        description: "Modify Countdown Timer: Set duration seconds.",
        params: [
            { name: "TimeModifier" },
            { name: "Number" },
        ],
    },
    "SetDeaths": {
        description: "Modify death counts for player: Set quantity for unit.",
        params: [
            { name: "Player" },
            { name: "Modifier" },
            { name: "Number" },
            { name: "Unit" },
        ],
    },
    "SetDoodadState": {
        description: "Set doodad state for units for player at location.",
        params: [
            { name: "State" },
            { name: "Unit" },
            { name: "Owner" },
            { name: "Where" },
        ],
    },
    "SetInvincibility": {
        description: "Set invincibility for units owned by player at location",
        params: [
            { name: "State" },
            { name: "Unit" },
            { name: "Owner" },
            { name: "Where" },
        ],
    },
    "SetMossionObjectives": {
        description: "Set Mission Objectives to: text.",
        params: [
            { name: "Text" },
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
            { name: "Player" },
            { name: "Modifier" },
            { name: "Amount" },
            { name: "ResourceType" },
        ],
    },
    "SetScore": {
        description: "Modify score for player: Set quantity points.",
        params: [
            { name: "Player" },
            { name: "Modifier" },
            { name: "Amount" },
            { name: "ScoreType" },
        ],
    },
    "SetSwitch": {
        description: "Set switch.",
        params: [
            { name: "Switch" },
            { name: "State" },
        ],
    },
    "TalkingPortrait": {
        description: "Show unit talking to current player for duration milliseconds.",
        params: [
            { name: "Unit" },
            { name: "Time" },
        ],
    },
    "Transmission": {
        description: "Send transmission to current player from unit at location.\nPlay WAV file. Modify transmission duration: Set number milliseconds.\nDisplay the following text: Text",
        params: [
            { name: "Unit" },
            { name: "Where" },
            { name: "WAVName" },
            { name: "TimeModifier" },
            { name: "Time" },
            { name: "Text" },
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
    "UnpaauseTimer": {
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
            { name: "Time" },
        ],
    },
    "SetMemory": {
        description: "Modify death counts for player: Set quantity for unit.",
        params: [
            { name: "Offset" },
            { name: "Modifier" },
            { name: "Value" },
        ],
    },
    "SetMemoryEPD": {
        description: "Modify death counts for player: Set quantity for unit.",
        params: [
            { name: "Offset" },
            { name: "Modifier" },
            { name: "Value" },
        ],
    },
    "SetNextPtr": {
        description: "SetMemory(trg + 4, SetTo, dest)",
        params: [
            { name: "Trg" },
            { name: "Dest" },
        ],
    },
    "Memory": {
        description: "Player has suffered quantity deaths of unit.",
        params: [
            { name: "Offset" },
            { name: "Comparison" },
            { name: "Value" },
        ],
    },
    "MemoryEPD": {
        description: "Player has suffered quantity deaths of unit.",
        params: [
            { name: "Offset" },
            { name: "Comparison" },
            { name: "Value" },
        ],
    },
    "dwread_epd": {
        description: "Read dword/epd value from epd.",
        params: [
            { name: "Offset" },
        ],
    },
};