import { createCustomElement } from "@servicenow/ui-core";

import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "@servicenow/now-template-card";
import "@servicenow/now-modal";
import view from "./incidentsView";
import "@servicenow/now-loader";

import { actionHandlers } from "./actionHandlers";

createCustomElement("x-551504-incident-list2", {
	renderer: { type: snabbdom },
	view,
	initialState: {
		isModalOpen: false,
		currentIncident: {},
		incidents: {},
		deletedIncidentId: "",
		isLoading:false,
	},
	actionHandlers: {
		...actionHandlers,
	},
	styles,
});
