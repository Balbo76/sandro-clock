import { store, withScope } from '@wordpress/interactivity';

const { state, actions } = store( 'sandro-clock', {
	actions: {
		updateSandroClock: () => {
			state.ora = Date('DD/MM/YYYY HH:mm:ss');

			const
				weekday = [
					"Domenica",
					"Lunedì",
					"MArtedì",
					"Mercoledì",
					"Giovedì",
					"Venerdì",
					"Sabato"
				],
				timeNow = new Date(),
				hours = timeNow.getHours(),
				minutes = timeNow.getMinutes(),
				seconds = timeNow.getSeconds(),
				date = timeNow.getDate(),
				year = timeNow.getFullYear(),

				hDeg = hours * 30 + minutes * (360/720),
				mDeg = minutes * 6 + seconds * (360/3600),
				sDeg = seconds * 6,

				hEl = document.querySelector('.hour-hand'),
				mEl = document.querySelector('.minute-hand'),
				sEl = document.querySelector('.second-hand'),
				dateEl = document.querySelector('.date'),
				dayEl = document.querySelector('.day');

			let month = timeNow.getMonth() + 1;
			var day = weekday[timeNow.getDay()];

			if ( month < 9 ){
				month = '0' + month;
			}

			hEl.style.transform = "rotate("+hDeg+"deg)";
			mEl.style.transform = "rotate("+mDeg+"deg)";
			sEl.style.transform = "rotate("+sDeg+"deg)";

			dateEl.innerHTML = date+"/"+month+"/"+year;
			dayEl.innerHTML = day;

		}
	},
	callbacks: {
		initSandroClock: () => {

			var dialLines = document.getElementsByClassName('diallines');
			var clockEl = document.getElementsByClassName('wp-block-sandro-clock')[0];

			for (var i = 1; i < 60; i++) {
				clockEl.innerHTML += "<div class='diallines'></div>";
				dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
			}

			setInterval(
				withScope( () => {
					actions.updateSandroClock();
				} ),
				1000
			);
		},
	},
} );
