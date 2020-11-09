import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import "@servicenow/now-template-card";

const view = (state, {updateState}) => {
	return (
		<div className="now-card-container">
			<now-template-card-assist
				className="now-card-item"
				id="item"
				tagline={{ icon: "tree-view-long-outline", label: "Incident" }}
				actions={[
					{ id: "share", label: "Copy URL" },
					{ id: "close", label: "Mark Complete" },
				]}
				heading={{
					label: "My PDF docs are all locked from editing",
				}}
				content={[
					{
						label: "Number",
						value: { type: "string", value: "INC0000038" },
					},
					{ label: "State", value: { type: "string", value: "Closed" } },
					{
						label: "Assigned Group",
						value: { type: "string", value: "Service Desk" },
					},

					{
						label: "Assigned to",
						value: { type: "string", value: "Luke Wilson" },
					},
				]}
				contentItemMinWidth="300"
				footerContent={{ label: "Updated", value: "2019-01-15 08:41:09" }}
				configAria={{}}
			></now-template-card-assist>

			<now-template-card-assist
				className="now-card-item"
				tagline={{ icon: "tree-view-long-outline", label: "Incident" }}
				actions={[
					{ id: "share", label: "Copy URL" },
					{ id: "close", label: "Mark Complete" },
				]}
				heading={{
					label: "Hangs when trying to print VISIO document",
				}}
				content={[
					{ label: "Number", value: { type: "string", value: "INC0000006" } },
					{ label: "State", value: { type: "string", value: "Closed" } },
					{
						label: "Assigned Group",
						value: { type: "string", value: "Software" },
					},

					{
						label: "Assigned to",
						value: { type: "string", value: "Howard Johnson" },
					},
				]}
				contentItemMinWidth="300"
				footerContent={{ label: "Updated", value: "2019-01-15 08:41:09" }}
				configAria={{}}
			></now-template-card-assist>
			<now-template-card-assist
				className="now-card-item"
				tagline={{ icon: "tree-view-long-outline", label: "Incident" }}
				actions={[
					{ id: "share", label: "Copy URL" },
					{ id: "close", label: "Mark Complete" },
				]}
				heading={{
					label: "Printer in my office is out of toner",
				}}
				content={[
					{ label: "Number", value: { type: "string", value: "INC0000008" } },
					{ label: "State", value: { type: "string", value: "Closed" } },
					{
						label: "Assigned Group",
						value: { type: "string", value: "Hardware" },
					},

					{
						label: "Assigned to",
						value: { type: "string", value: "ITIL User" },
					},
				]}
				contentItemMinWidth="300"
				footerContent={{ label: "Updated", value: "2019-01-15 08:41:09" }}
				configAria={{}}
			></now-template-card-assist>
			<now-template-card-assist
				className="now-card-item"
				tagline={{ icon: "tree-view-long-outline", label: "Incident" }}
				actions={[
					{ id: "share", label: "Copy URL" },
					{ id: "close", label: "Mark Complete" },
				]}
				heading={{
					label: "Can't read email",
				}}
				content={[
					{ label: "Number", value: { type: "string", value: "INC0000001" } },
					{ label: "State", value: { type: "string", value: "Closed" } },
					{
						label: "Assigned Group",
						value: { type: "string", value: "Service Desk" },
					},

					{
						label: "Assigned to",
						value: { type: "string", value: "Charlie Whitherson" },
					},
				]}
				contentItemMinWidth="300"
				footerContent={{ label: "Updated", value: "2019-01-15 08:41:09" }}
				configAria={{}}
			></now-template-card-assist>
		</div>
	);
};

createCustomElement('x-551504-card-list', {
	renderer: {type: snabbdom},
	view,
	styles
});
