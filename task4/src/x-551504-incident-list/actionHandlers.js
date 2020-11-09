import { createHttpEffect } from "@servicenow/ui-effect-http";
import { actionTypes } from "@servicenow/ui-core";

const { COMPONENT_BOOTSTRAPPED } = actionTypes;


export const actionHandlers = {
		[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
			const { dispatch } = coeffects;

			dispatch("FETCH_TASK_DATA", {
				sysparm_display_value: "all",
				sysparm_exclude_reference_link: true,
			});
		},
		FETCH_TASK_DATA: createHttpEffect("api/now/table/incident", {
			method: "GET",
			queryParams: ["sysparm_display_value", "sysparm_exclude_reference_link"],
			successActionType: "FETCH_TASK_DATA_SUCCEEDED",
		}),
		FETCH_TASK_DATA_SUCCEEDED: (coeffects) => {
			const { action, updateState } = coeffects;
			const { result } = action.payload;

			updateState({ result });
		},
	}