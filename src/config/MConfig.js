/*
 * MScript.js by Alan James
 * version 130626
 * recommended jQuery version 1.9.0
 */

(function() {

	var MConfig = {};

	MConfig.version = '130626';

	// Speed
	MConfig.speedFast = 125;
	MConfig.speedNorm = 250;
	MConfig.speedSlow = 500;

	// Color
	MConfig.mono_1 = '#0a0a0a';
	MConfig.mono_1_2 = '#141414'; // Will Fix Later
	MConfig.mono_1_3 = '#232323'; // Will Fix Later
	MConfig.mono_2 = '#323232';
	MConfig.mono_3 = '#646464';
	MConfig.mono_4 = '#969696';
	MConfig.mono_4_2 = '#c8c8c8'; // Will Fix Later
	MConfig.mono_5 = '#e6e6e6';
	MConfig.mono_6 = '#ffffff';

	MConfig.red_1 = '#960000';
	MConfig.red_2 = '#fa0000';
	MConfig.red_3 = '#f07373';
	MConfig.red_4 = '#890c0c';

	MConfig.orange_1 = '#963c00';
	MConfig.orange_2 = '#fa6400';
	MConfig.orange_3 = '#f0a573';
	MConfig.orange_4 = '#8c4110';

	MConfig.yellow_1 = '#969600';
	MConfig.yellow_2 = '#fafa00'; // Change to #fac800 after redesign
	MConfig.yellow_3 = '#f0f073';
	MConfig.yellow_4 = '#8b8b0e';

	MConfig.green_1 = '#009600';
	MConfig.green_2 = '#00fa00';
	MConfig.green_3 = '#73f073';
	MConfig.green_4 = '#0d8a0d';

	MConfig.blue_1 = '#004b96';
	MConfig.blue_2 = '#007dfa';
	MConfig.blue_3 = '#73b2f0';
	MConfig.blue_4 = '#104e8c';

	MConfig.violet_1 = '#4b0096';
	MConfig.violet_2 = '#7d00fa';
	MConfig.violet_3 = '#b273f0';
	MConfig.violet_4 = '#4a0c89';

	MConfig.outline = MConfig.mono_3;
	MConfig.outline_down = MConfig.mono_2;

	// Visual
	MConfig.rounded = '3px'; // Same size as CSS
	MConfig.rounded_large = '2em';

	window.MConfig = MConfig;

})();
