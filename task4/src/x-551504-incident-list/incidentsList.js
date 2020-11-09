import { createCustomElement } from "@servicenow/ui-core";

import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "@servicenow/now-template-card";
import view from "./incidentsView";

import { actionHandlers } from "./actionHandlers";

createCustomElement("x-551504-incident-list", {
	renderer: { type: snabbdom },
	view,
	actionHandlers: {
		...actionHandlers,
	},
	styles,
});
