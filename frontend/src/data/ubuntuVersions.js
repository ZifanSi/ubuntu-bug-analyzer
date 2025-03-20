const ubuntuVersions = {
    "20.04": {
      name: "Ubuntu 20.04 LTS",
      releaseDate: "April 23, 2020",
      features: [
        { name: "F01 - Improved ZFS Support", status: "Working" },
        { name: "F02 - Better Performance", status: "Working" },
        { name: "F03 - New GNOME Shell Enhancements", status: "Working" },
      ],
      summary: [
        "After installing without trial, the root partition cannot be searched when booting (cannot boot).",
        "After installing the system, the screen will go black when entering the password. You need to go to tty to install the graphics driver and restart the gdm service.",
      ],
    },
    "20.04.1": {
      name: "Ubuntu 20.04.1 LTS",
      releaseDate: "August 6, 2020",
      features: [
        { name: "F01 - Improved ZFS Support", status: "Working" },
        { name: "F02 - Better Performance", status: "Not Working" },
        { name: "F03 - New GNOME Shell Enhancements", status: "Working" },
        { name: "F04 - Security Updates", status: "Working" },
      ],
      summary: [
        "After installing updates and restarting the gdm service or restarting, the top status bar will become smaller (to be precise, all the text on the GNOME desktop will become smaller).",
      ],
    },
    "20.04.2": {
      name: "Ubuntu 20.04.2 LTS",
      releaseDate: "February 11, 2021",
      features: [
        { name: "F01 - Improved ZFS Support", status: "Working" },
        { name: "F02 - Better Performance", status: "Not Working" },
        { name: "F03 - New GNOME Shell Enhancements", status: "Not Working" },
        { name: "F04 - Security Updates", status: "Working" },
        { name: "F05 - Kernel Update to 5.8", status: "Working" },
      ],
      summary: [
        "There are also some minor bugs, such as the application list may freeze when closing the folder, and you need to close gnome-session.",
      ],
    },
  };
  
  export default ubuntuVersions;
  