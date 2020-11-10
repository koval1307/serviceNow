import { createHttpEffect } from "@servicenow/ui-effect-http";
import { actionTypes } from "@servicenow/ui-core";

const { COMPONENT_BOOTSTRAPPED } = actionTypes;


export const actionHandlers = {
	[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
		const { dispatch, updateState } = coeffects;

		updateState({
			isLoading: true,
		});

		dispatch("FETCH_INCIDENTS_DATA", {
			sysparm_display_value: true,
		});
	},
	FETCH_INCIDENTS_DATA: createHttpEffect("api/now/table/incident", {
		method: "GET",
		queryParams: ["sysparm_display_value"],
		successActionType: "FETCH_INCIDENTS_DATA_SUCCEEDED",
	}),
	FETCH_INCIDENTS_DATA_SUCCEEDED: (coeffects) => {
		const { action, updateState } = coeffects;
		const { result } = action.payload;

		updateState({ incidents: result, isLoading: false });
	},

	"NOW_DROPDOWN_PANEL#ITEM_CLICKED": (coeffects) => {
		const { action, updateState, state, dispatch } = coeffects;

		const clickedLabel = coeffects.action.payload.item.label;
		switch (clickedLabel) {
			case "Closed":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});

				dispatch("UPDATE_FILTERED_DATA_BY_STATE"), { filter: clickedLabel };
				break;
			case "Howard Johnson":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});

				dispatch("UPDATE_FILTERED_DATA_BY_ASSIGNED_PERSON"),
					{ filter: clickedLabel };
				break;
			case "Beth Anglin":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});

				dispatch("UPDATE_FILTERED_DATA_BY_ASSIGNED_PERSON"),
					{ filter: clickedLabel };
				break;
			case "Don Goodliffe":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});

				dispatch("UPDATE_FILTERED_DATA_BY_ASSIGNED_PERSON"),
					{ filter: clickedLabel };
				break;
			case "ITIL User":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});

				dispatch("UPDATE_FILTERED_DATA_BY_ASSIGNED_PERSON"),
					{ filter: clickedLabel };
				break;
			case "Fred Luddy":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});

				dispatch("UPDATE_FILTERED_DATA_BY_ASSIGNED_PERSON"),
					{ filter: clickedLabel };
				break;
			case "David Loo":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});

				dispatch("UPDATE_FILTERED_DATA_BY_ASSIGNED_PERSON"),
					{ filter: clickedLabel };
				break;
			case "All":
				updateState({
					filter: null,

					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_STATE", { filter: null });
				break;
			case "On Hold":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_STATE"), { filter: clickedLabel };
				break;
			case "1 - High":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_IMPACT"), { filter: clickedLabel };
				break;
			case "2 - Medium":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_IMPACT"), { filter: clickedLabel };
				break;
			case "3 - Low":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_IMPACT"), { filter: clickedLabel };
				break;
			case "Any":
				updateState({
					filter: null,
					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_IMPACT", { filter: null });
				break;
			case "In Progress":
				updateState({
					filter: clickedLabel,
					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_STATE"), { filter: clickedLabel };
				break;
			case "Network":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_ASSIGNED_GROUP"),
					{ filter: clickedLabel };
				break;
			case "Hardware":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_ASSIGNED_GROUP"),
					{ filter: clickedLabel };
				break;
			case "Software":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_ASSIGNED_GROUP"),
					{ filter: clickedLabel };
				break;
			case "New":
				updateState({
					filter: clickedLabel,
					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_STATE"), { filter: clickedLabel };
				break;
			case "Openspace":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_ASSIGNED_GROUP"),
					{ filter: clickedLabel };
				break;

			case "Service Desk":
				updateState({
					filter: clickedLabel,

					isLoading: true,
				});
				dispatch("UPDATE_FILTERED_DATA_BY_ASSIGNED_GROUP"),
					{ filter: clickedLabel };
				break;
			case "Open Record":
				const currentIncident = state.incidents.find(
					(el) => el.sys_id === action.payload.item.incidentId
				);

				updateState({
					isModalOpen: true,
					currentIncident: currentIncident,
				});

				break;
			case "Delete":
				dispatch("DELETE_INCIDENT", { sys_id: action.payload.item.incidentId });
				break;
		}
	},
	UPDATE_FILTERED_DATA_BY_STATE: (coeffects) => {
		const { updateState, state } = coeffects;
		const { incidents } = state;
		const { filter } = state;
		const filteredData = incidents.filter((el) => el.state === filter);
		updateState({
			filteredIncidents: filteredData,
			isLoading: false,
			filter: null,
		});
	},
	UPDATE_FILTERED_DATA_BY_IMPACT: (coeffects) => {
		const { updateState, state } = coeffects;
		const { incidents } = state;
		const { filter } = state;
		const filteredData = incidents.filter((el) => el.impact === filter);
		updateState({
			filteredIncidents: filteredData,
			isLoading: false,
			filter: null,
		});
	},
	UPDATE_FILTERED_DATA_BY_ASSIGNED_GROUP: (coeffects) => {
		const { updateState, state } = coeffects;
		const { incidents } = state;
		const { filter } = state;
		const filteredData = incidents.filter(
			(el) => el.assignment_group.display_value === filter
		);
		updateState({
			filteredIncidents: filteredData,
			isLoading: false,
			filter: null,
		});
	},
	UPDATE_FILTERED_DATA_BY_ASSIGNED_PERSON: (coeffects) => {
		const { updateState, state } = coeffects;
		const { incidents } = state;
		const { filter } = state;
		const filteredData = incidents.filter(
			(el) => el.assigned_to.display_value === filter
		);
		updateState({
			filteredIncidents: filteredData,
			isLoading: false,
			filter: null,
		});
	},

	"NOW_MODAL#FOOTER_ACTION_CLICKED": (coeffects) => {
		const { action, updateState, state, dispatch } = coeffects;
		const { currentIncident } = state;
		dispatch("DELETE_INCIDENT", { sys_id: currentIncident.sys_id });
		updateState({
			isModalOpen: false,
		});
	},
	DELETE_INCIDENT: ({ action, dispatch, updateState }) => {
		updateState({
			isLoading: true,
			deletedIncidentId: action.payload.sys_id || "",
		});

		dispatch("DELETE_INCIDENT_EFFECT", { sys_id: action.payload.sys_id || "" });
	},
	DELETE_INCIDENT_EFFECT: createHttpEffect("api/now/table/incident/:sys_id", {
		method: "DELETE",
		pathParams: ["sys_id"],
		successActionType: "DELETE_INCIDENT_SUCCESS",
	}),
	"NOW_MODAL#OPENED_SET": (coeffects) => {
		const { action, updateState } = coeffects;
		updateState({
			isModalOpen: false,
		});
	},
	DELETE_INCIDENT_SUCCESS: ({ state, updateState, dispatch }) => {
		dispatch("FETCH_INCIDENTS_DATA", {
			sysparm_display_value: true,
		});
		updateState({
			isLoading: false,
			incidents: state.incidents.filter(
				(el) => el.sys_id !== state.deletedIncidentId
			),
		});
	},
	
	FETCH_FILTERED_DATA_SUCCEEDED: (coeffects) => {
		const { action, updateState } = coeffects;
		const { result } = action.payload;


		updateState({ filteredIncidents: result, isLoading: false });
	},
	"NOW_BUTTON#CLICKED": (coeffects) => {
 const {  dispatch} = coeffects;

		dispatch("UPDATE_FILTERED_DATA_BY_IMPACT", {
			filter: null,
		});
	},
};