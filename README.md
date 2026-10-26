# Gang Beasts Browser (GitHub Pages player)

https://agames21.github.io/gang-beasts-play/

This site holds code only: the player page, a service worker and the fflate unzip library (MIT, Arjun Barrett).
No game files are hosted here.

The game builds stay in the private repo AGames21/gang-beasts-browser, branch `play` (`builds/latest.json` names the newest zip).
The first visit asks for a fine-grained GitHub token with Contents: Read-only on that repo. The page keeps it in this browser,
downloads the newest build through the GitHub API, unpacks it into Cache Storage, and sw.js serves it back under ./local/<id>/.
Later visits play at once and only download again when a newer build is published.

`?stage=Girders|Towers|Wheel|Crane` opens a stage, `?build=<id>` picks a saved build, and the Builds button shows the saved builds.
A release zip can still be loaded by hand from the More section.

Online rooms use the relay at wss://gangbeasts.agamer21.kozow.com/ws (a relay only, no game files).
