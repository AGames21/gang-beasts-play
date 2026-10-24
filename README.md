# Gang Beasts Browser (GitHub Pages launcher)

https://agames21.github.io/gang-beasts-play/

This site holds code only: the launcher page, a service worker and the fflate unzip library (MIT, Arjun Barrett).
No game files are hosted here or on any server.

1. Download a release zip from the private repo AGames21/gang-beasts-releases (Releases tab, signed in to GitHub).
2. Open the page and pick or drop the zip. It is unpacked into this browser's Cache Storage and stays there.
3. Play. `?stage=Girders|Towers|Wheel|Crane` opens a stage sandbox, `?build=<id>` picks a saved release,
   and the Releases button returns to the loader to add or remove releases.

Online rooms still use the relay at wss://gangbeasts.agamer21.kozow.com/ws (a relay only, no game files).
