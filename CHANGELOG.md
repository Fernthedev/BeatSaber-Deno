# Changelog

## 1.3.3 [2023-03-04]

### Added

- Dragons 2.0 environment & color scheme
- Wrapper attribute interface separated (This should result in consistent and better developing
  experience)

### Fixed

- Event box constructor should no longer attempt to fix beat distribution value for step and offset
  type filter

## 1.3.3 - Hotfix [2023-02-22]

### Fixed

- Gradient conversion used wrong event class

## 1.3.1 [2023-02-22]

### Added

- Data check can now check for array of primitives
- Converts boost and lane rotation event from basic events to their respective arrays
- Temporary v2 event conversion to v3 event in beatmap v3 parsing

### Changed

- Updated custom data schema
- Data checks now performed after optimisation
- Difficulty related function now uses wrapper instead of concrete object
- Renamed save option attributes from `optimise` to `optimize`

### Fixed

- Data check throwing error for array of primitives
- Fixed optimisation removing required attributes

### Removed

- `_lineLayer` and `_height` from v2 obstacle (it never existed in the first place)

## 1.3.0 [2022-12-31]

### Added

- The Weeknd and Rock Mixtape environment & color scheme
- Wrapper class/interface
  - Write properties instantiation in more readable syntax
  - Able to instantiate object from existing class object (copy)
  - Mix-and-match is possible but will prioritise wrapper property
- External file interface
  - Currently supported `BPM Info`, `Cinema`, `Chroma`
- Zip extension
- Couple more utilities
  - Pseudorandom number generator (global or instanced)
  - Vector helpers
  - Color from helpers (various of input to return color array)
  - Array pick random
- Experimental Deno standard library usage
- Test coverage

### Changed

- Updated to beatmap v3.2.0
- Structural change
  - Custom data type moved to their dedicated folder to separate main and custom schema (main schema
    uses custom schema for custom data)
- Renamed `basicBeatmapEvents` and `colorBoostBeatmapEvents` to `basicEvents` and `colorBoostEvents`
- Beatmap v2 field rename (JSON remains the same)
- Improved function overloading and auto-completion
- Renamed couple of function to be camel/pascal case including acronyms (JS API left untouched)
- Array utilties now uses template

### Fixed

- Obstacle not correctly check for interactive in specific case
- Loose-autocomplete type incorrectly throw error when passed to primitive
- Couple of utils fixed from testing

## 1.2.2 [2022-10-07]

### Added

- Lizzo environment & color scheme
- Beatmap auto-fixer script
- Data and custom data correction patch
- Remove outside playable patch
- Library version

### Changed

- Updated to beatmap v3.1.0
- v2 Note and v2 Slider `cutDirection` shortened to `direction` to match v3 consistency
- Disallow both class object and object to be added in the same parameter for difficulty add object
  (this makes for less confusing autocomplete)
- Updated SPS info

### Fixed

- Convert To V3 script now actually ask for miscellaneous conversion
- Data check option now actually respect option
- Deleted stray `_preciseSpeed` custom data on conversion
- Autocomplete no longer includes object class property in add/creation
- JSDoc typo error

## 1.2.1 [2022-08-18]

### Added

- v3 BPM change support to `BeatPerMinute` class
- Custom data patching for v2 and v3

### Changed

- Conversion now keeps unknown custom data
- `NoteCutAngle` renamed to `NoteDirectionAngle`
- v2 Waypoints is now optional
- Updated Heck
- Couple of clean-up

### Fixed

- LightMapper default brightness now set to 1
- Object callback no longer warn undefined

## 1.2.0 [2022-08-02]

### Added

- Chroma geometry, material and component
  - This contains breaking changes to existing v3 Chroma
- More utilities standard, Chroma, and Noodle Extensions
  - LightMapper -> v3 lighting system for v2 light
  - EnvironmentGrab -> utility to write environment game object in regex and string form
- Configurable data check
  - Checks on save
- Object mirroring now use & change custom data
- Object get position/angle can use & return custom data value
- Object function callback method for more advanced use
- Color function can infer hex string as RGBA color
- Color function can take color object and uses them accordingly
  - Depend on use case, this will always convert to RGBA for ease of development
- Loose autocomplete

### Changed

- `path` is now called `directory` to avoid confusion
- Easings is now independent to beatmap
  - Easings can be retrieved from `utils`
- Beatmap V3 to V2 conversion now converts customData back
  - Attempts to fix position for environment track
- Beatmap object create will now always return array
- Types structure changes
- Renamed class `DifficultyData` to `Difficulty`
- Renamed method `toObject` to `toJSON` for JS built-in functionality
- All constructor is now protected instead of private

### Fixed

- Negative hue no longer result null value
- Obstacle mirroring now accounts for width
- `RgbaToHsva` hue returning normalised hue value instead
- `directory` potentially no longer prefix file name instead of going into folder
- `where` function does not filter correctly with exclude

## 1.1.1 [2022-06-19]

### Added

- Selector extension `where` function

### Changed

- v2 event floatValue and v2 obstacle lineLayer & height is now optional
- Class object data is now exposed (not recommended for modification purpose)
- Several changes to extensions

### Fixed

- Example is broken
- Sometimes error would come randomly

## 1.1.0 [2022-06-16]

### Added

- The Second environment and color scheme
- Environment class for Chroma extensions

### Changed

- Top-level functions use regular function instead of arrow function
- V2 objects use `pos` instead of `line`
- Slider create default multiplier from `0.5` to `1` and mid anchor to `0`
- Default options is now nested
- Cleaned up JSDoc

### Fixed

- Bookmark type file somehow ended up in class folder

## 1.0.4 [2022-06-14]

### Fixed

- `time` instead of `type` for custom events

## 1.0.3 [2022-06-13]

### Fixed

- Difficulty file name not being saved

## 1.0.2 [2022-06-12]

### Added

- Selector extension
  - Select object at time and between time
- Class object clone method

### Changed

- Custom data will now always exist in class object context
- Heck settings setter now allow for any valid field

### Fixed

- Several extensions fixed

## 1.0.1 [2022-06-11]

### Added

- File name saved to difficulty class object
  - Saving difficulty will prioritise file name from explicit option `filePath`, class object, info,
    and default value

### Changed

- Point definitions v2 to v3 conversion

### Removed

- `fileName` field removed from difficulty list interface due to redundancy (`settings` field
  already provided file name)

## 1.0.0 - First stable release [2022-06-07]
