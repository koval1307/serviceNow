import { createHttpEffect } from "@servicenow/ui-effect-http";
import { actionTypes } from "@servicenow/ui-core";

const { COMPONENT_BOOTSTRAPPED } = actionTypes;


export const actionHandlers = {
	[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
		const { dispatch, updateState } = coeffects;

		updateState({
			isLoading:true
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

		updateState({ incidents: result, isLoading:false });
	},
};