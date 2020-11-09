

export default (state, { updateState }) => {
	const { result } = state;

	return (
		<div>
			<ul className="now-card-container">
				{result.map((el) => {
					return (
						<li key={el.number.value} className="now-card-item">
							<now-template-card-assist
								id="item"
								tagline={{
									icon: "tree-view-long-outline",
									label: "Incident",
								}}
								actions={[
									{ id: "share", label: "Copy URL" },
									{ id: "close", label: "Mark Complete" },
								]}
								heading={{
									label: `${el.short_description.display_value}`,
								}}
								content={[
									{
										label: "Number",
										value: {
											type: "string",
											value: `${el.number.display_value}`,
										},
									},
									{
										label: "State",
										value: {
											type: "string",
											value: `${el.state.display_value}`,
										},
									},
									{
										label: "Assigned Group",
										value: {
											type: "string",
											value: `${el.assignment_group.display_value}`,
										},
									},

									{
										label: "Assigned to",
										value: {
											type: "string",
											value: `${el.assigned_to.display_value}`,
										},
									},
								]}
								contentItemMinWidth="300"
								footerContent={{
									label: "Updated",
									value: `${el.opened_at.display_value}`,
								}}
								configAria={{}}
							></now-template-card-assist>
						</li>
					);
				})}
			</ul>
		</div>
	);
};