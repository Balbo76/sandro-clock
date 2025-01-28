import {getContext, store, withScope} from '@wordpress/interactivity';

const { state, actions } = store( 'sandro-clock', {

	state: {
		get hdeg() {
			const context = getContext();
			return "rotate(" + (context.hours * 30 + context.minutes * (360/720)) + "deg)";
		},
		get mdeg(){
			const context = getContext();
			return "rotate(" + (context.minutes * 6 + context.seconds * (360/3600)) + "deg)";
		},
		get sdeg(){
			const context = getContext();
			return "rotate(" + (context.seconds * 6) + "deg)";
		},
	},
	actions: {
		updateSandroClock: () => {
			const
				now = new Date(),
				context = getContext();

			context.hours = now.getHours();
			context.minutes = now.getMinutes();
			context.seconds = now.getSeconds();
		}
	},
	callbacks: {
		initSandroClock: () => {
			setInterval(
				withScope( () => {
					actions.updateSandroClock();
				} ),
				1000
			);
		},
	},
} );
