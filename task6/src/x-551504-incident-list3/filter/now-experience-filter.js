import { createCustomElement } from "@servicenow/ui-core";

import styles from "./filter-styles.scss";

import "@servicenow/now-button";

createCustomElement("now-experience-filter", {
	view: (state, helpers) => {
	
	
		const dropdownItemsForAssignedPerson = [
			{ id: "user1", label: "Howard Johnson" },
			{ id: "user2", label: "Beth Anglin" },
			{ id: "user3", label: "Don Goodliffe" },
			{ id: "user4", label: "ITIL User" },
			{ id: "user5", label: "Fred Luddy" },
			{ id: "user6", label: "David Loo" },
		];
		const dropdownItemsForImpact = [
			{ id: "High", label: "1 - High" },
			{ id: "Medium", label: "2 - Medium" },
			{ id: "Low", label: "3 - Low" },
			{ id: "All", label: "Any" },
		];
		const dropdownItemsForState = [
			{ id: "onHold", label: "On Hold" },
			{ id: "closed", label: "Closed" },
			{ id: "inProgress", label: "In Progress" },
			{ id: "All", label: "All" },
			{ id: "New", label: "New" },
		];
const dropdownItemsForAssignedGroups = [
	{ id: "Network", label: "Network" },
	{ id: "Hardware", label: "Hardware" },
	{ id: "Software", label: "Software" },
	{ id: "Service_Desk", label: "Service Desk" },
	{ id: "OpenSpace", label: "Openspace" },

];
		return (
			<div className="filter-container">
				<div className="dropDown-Container">
					<h2 className="dropDown-title">Filter by incident state : </h2>
					<now-dropdown
						className="dropDown-item"
						hideLabel={true}
						placeholder="Select"
						select="single"
						items={dropdownItemsForState}
					/>
					<h2 className="dropDown-title">Filter by incident impact : </h2>
					<now-dropdown
						className="dropDown-item"
						placeholder="Select"
						hideLabel={true}
						select="single"
						items={dropdownItemsForImpact}
					/>
					<h2 className="dropDown-title">Filter by assigned group : </h2>
					<now-dropdown
						className="dropDown-item"
						hideLabel={true}
						placeholder="Select"
						select="single"
						items={dropdownItemsForAssignedGroups}
					/>
					<h2 className="dropDown-title">Filter by assigned person : </h2>
					<now-dropdown
						className="dropDown-item"
						hideLabel={true}
						placeholder="Select"
						select="single"
						items={dropdownItemsForAssignedPerson}
					/>
					<now-button
						className="dropDown-item"
						label="Reset filter"
						variant="primary"
						size="lg"
					></now-button>
				</div>
			</div>
		);
	},
	actionHandlers: {
	
		
	},
	
	properties: {},
	styles,
});
