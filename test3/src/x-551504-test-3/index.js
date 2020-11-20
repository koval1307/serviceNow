import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import "@servicenow/now-button"

const view = (state, { updateState }) => {
	const {whoToGreat, peopleCount} = state
	return (
		<div>
			<h1>Choose where to send greetings</h1>
			<span>
				<now-button
					label="world"
					variant="primary"
					size="md"
					tooltipContent=""
					configAria={{}}
					on-click={() => updateState({ whoToGreat: "Hello world" })}
				></now-button>
			</span>
			<span>
				<now-button
					label="Solar system"
					variant="primary"
					size="md"
					tooltipContent=""
					configAria={{}}
					on-click={() => updateState({ whoToGreat: "Hello solar system" })}
				></now-button>
			</span>
			<span>
				<now-button
					label="Galaxy"
					variant="primary"
					size="md"
					tooltipContent=""
					configAria={{}}
					on-click={() => updateState({ whoToGreat: "Hello galaxy" })}
				></now-button>
			</span>
			<div>
				<h1>{whoToGreat}</h1>
			</div>

			<div>
				<h1>People counter: {peopleCount}</h1>
				<now-button
					label="+1"
					variant="primary"
					size="md"
					tooltipContent="Add one person to the count"
					configAria={{}}
					on-click={() => updateState({ peopleCount: peopleCount + 1 })}
				></now-button>
				<now-button
					label="-1"
					variant="primary"
					size="md"
					tooltipContent=" remove one person from the count"
					configAria={{}}
					on-click={() => updateState({ peopleCount: peopleCount - 1 })}
				></now-button>
				<now-button
					label="Clear"
					variant="primary"
					size="md"
					tooltipContent=" remove one person from the count"
					configAria={{}}
					on-click={() => updateState({ peopleCount: 0 })}
				></now-button>
			</div>
		</div>
	);
};

createCustomElement('x-551504-test-3', {
	initialState: {
		whoToGreat: "",
		peopleCount: 0
	},
	renderer: {type: snabbdom},
	view,
	styles
});
