

export default (state,) => {
	const {
		incidents,
		isModalOpen,
		currentIncident,
		filteredIncidents,
		toggle,
		filter,

	} = state;


	console.log("filtered",filteredIncidents)
	console.log("incidents", incidents)
	console.log(currentIncident);
	console.log(filter.length)



	return (
		<div className="container">
			<now-experience-filter></now-experience-filter>
			{state.isLoading ? (
				<now-loader className="loader" label="Loading..." size="lg" />
			) : null}
			{!filteredIncidents.length & !toggle & (filter.length !== 0) ? (
				<h1 className="No-incidents-title">
					No incidents matching your criteria
				</h1>
			) : (
				<ul className="now-card-container">
					{filteredIncidents.length
						? filteredIncidents.map((el) => {
								return (
									<li key={el.sys_id} className="now-card-item">
										<now-template-card-assist
											id="item"
											tagline={{
												icon: "tree-view-long-outline",
												label: "Incident",
											}}
											actions={[
												{
													id: "open",
													label: "Open Record",
													incidentId: `${el.sys_id}`,
												},
												{
													id: "delete",
													label: "Delete",
													incidentId: `${el.sys_id}`,
												},
											]}
											heading={{
												label: `${el.short_description}`,
											}}
											content={[
												{
													label: "Number",
													value: {
														type: "string",
														value: `${el.number}`,
													},
												},
												{
													label: "State",
													value: {
														type: "string",
														value: `${el.state}`,
													},
												},
												{
													label: "Assigned Group",
													value: {
														type: "string",
														value:
															el.assignment_group.display_value || "No group",
													},
												},

												{
													label: "Assigned to",
													value: {
														type: "string",
														value:
															el.assigned_to.display_value ||
															"No Person Assigned To",
													},
												},
											]}
											contentItemMinWidth="300"
											footerContent={{
												label: "Updated",
												value: `${el.opened_at}`,
											}}
											configAria={{}}
										></now-template-card-assist>
									</li>
								);
						  })
						: incidents.map((el) => {
								return (
									<li key={el.sys_id} className="now-card-item">
										<now-template-card-assist
											id="item"
											tagline={{
												icon: "tree-view-long-outline",
												label: "Incident",
											}}
											actions={[
												{
													id: "open",
													label: "Open Record",
													incidentId: `${el.sys_id}`,
												},
												{
													id: "delete",
													label: "Delete",
													incidentId: `${el.sys_id}`,
												},
											]}
											heading={{
												label: `${el.short_description}`,
											}}
											content={[
												{
													label: "Number",
													value: {
														type: "string",
														value: `${el.number}`,
													},
												},
												{
													label: "State",
													value: {
														type: "string",
														value: `${el.state}`,
													},
												},
												{
													label: "Assigned Group",
													value: {
														type: "string",
														value:
															el.assignment_group.display_value || "No group",
													},
												},

												{
													label: "Assigned to",
													value: {
														type: "string",
														value:
															el.assigned_to.display_value ||
															"No Person Assigned To",
													},
												},
											]}
											contentItemMinWidth="300"
											footerContent={{
												label: "Updated",
												value: `${el.opened_at}`,
											}}
											configAria={{}}
										></now-template-card-assist>
									</li>
								);
						  })}
				</ul>
			)}
			<now-modal
				size="md"
				manage-open
				opened={isModalOpen}
				headerLabel="Incident Card"
				footerActions={[
					{
						label: "Delete",
						variant: "primary-negative",
					},
				]}
			>
				<div>
					<h2>{currentIncident.description}</h2>
					<ul className="modal-list">
						<li className="modal-list-items">
							Subcategory :<br></br>
							{currentIncident.subcategory || "not defined"}
						</li>
						<li className="modal-list-items">
							Impact: <br></br>
							{currentIncident.impact}
						</li>
						<li className="modal-list-items">
							Urgency: <br></br>
							{currentIncident.urgency}
						</li>
						<li className="modal-list-items">
							Approval: <br></br>
							{currentIncident.approval}
						</li>
					</ul>
				</div>
			</now-modal>
		</div>
	);
};