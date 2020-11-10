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
		const clickedItem = coeffects.action.payload.item.id;
	
	
		if (clickedItem === "open") {
			const currentIncident = state.incidents.find(
				(el) => el.sys_id === action.payload.item.incidentId
			);
		
			updateState({
				isModalOpen: true,
				currentIncident: currentIncident,
			});
		} else {
			dispatch("DELETE_INCIDENT", { sys_id: action.payload.item.incidentId });
		}
	},

	"NOW_MODAL#FOOTER_ACTION_CLICKED": (coeffects) => {
		const {  updateState, state, dispatch } = coeffects;
		const { currentIncident } = state;
		dispatch("DELETE_INCIDENT",{sys_id: currentIncident.sys_id})
		updateState({
			isModalOpen: false,
			
			})
	
	
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
		const { updateState } = coeffects;
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
};