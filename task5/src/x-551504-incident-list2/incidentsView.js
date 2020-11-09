

export default (state, ) => {
	const { result,incidents,  isModalOpen ,currentIncident } = state;


	return (
		<div>
			{state.isLoading ? (
				<now-loader className="loader" label="Loading..." size="lg" />
			) : null}
			<ul className="now-card-container">
				{incidents.length &&
					incidents.map((el) => {
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
													`${el.assignment_group.display_value}`|| `No group`,
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
										value: `${el.opened_at}`,
									}}
									configAria={{}}
								></now-template-card-assist>
							</li>
						);
					})}
			</ul>
			<now-modal
				size="md"
				manage-open
				opened={isModalOpen}
				headerLabel="Incident Card"
				content={currentIncident.description}
				footerActions={[
					{
						label: "Delete",
						variant: "primary-negative",
						// clickActionType: "DELETE_ITEM",
					},
				]}
			></now-modal>
		</div>
	);
};