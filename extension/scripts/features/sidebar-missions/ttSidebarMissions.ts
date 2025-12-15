(async (): Promise<any> => {
    const { hasSidebar } = await checkDevice();
	if (!hasSidebar) return "Not supported on mobiles or tablets!";

    featureManager.registerFeature(
		"Sidebar Missions",
		"sidebar",
		() => settings.pages.sidebar.missions,
		null,
		showMissions,
		removeMissions,
		{
			storage: ["settings.pages.sidebar.missions"],
		},
		null
	);

    async function showMissions() {

    }

    async function removeMissions() {

    }
})();