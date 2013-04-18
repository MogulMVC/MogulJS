$(document).ready(function() {

	$('[data-mtip=n], [data-mtip=N], [data-mtip=b], [data-mtip=B]').MTip({
		gravity : 'N',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=nw], [data-mtip=NW]').MTip({
		gravity : 'NW',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=ne], [data-mtip=NE]').MTip({
		gravity : 'NE',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=s], [data-mtip=S], [data-mtip=t], [data-mtip=T]').MTip({
		gravity : 'S',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=sw], [data-mtip=SW]').MTip({
		gravity : 'SW',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=se], [data-mtip=SE]').MTip({
		gravity : 'SE',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=w], [data-mtip=W], [data-mtip=r], [data-mtip=R]').MTip({
		gravity : 'W',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=e], [data-mtip=E], [data-mtip=l], [data-mtip=L]').MTip({
		gravity : 'E',
		delayIn : MConfig.speedSlow
	});

});
