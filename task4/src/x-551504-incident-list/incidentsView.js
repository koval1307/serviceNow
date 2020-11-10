

export default (state, ) => {
	const { incidents } = state;
	const incidentsData = Array.from(incidents)

	return (
		<div>
			{state.isLoading ? (
				<now-loader className="loader" label="Loading..." size="lg" />
			) : null}
			<ul className="now-card-container">
				{incidentsData &&
					incidentsData.map((el) => {
						return (
							<li key={el.number} className="now-card-item">
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
										label: el.short_description,
									}}
									content={[
										{
											label: "Number",
											value: {
												type: "string",
												value: el.number,
											},
										},
										{
											label: "State",
											value: {
												type: "string",
												value: el.state,
											},
										},
										{
											label: "Assigned Group",
											value: {
												type: "string",
												value: el.assignment_group.display_value || "No group",
											},
										},

										{
											label: "Assigned to",
											value: {
												type: "string",
												value:
													el.assigned_to.display_value ||
													"No Person Assignet To",
											},
										},
									]}
									contentItemMinWidth="300"
									footerContent={{
										label: "Updated",
										value: el.opened_at,
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