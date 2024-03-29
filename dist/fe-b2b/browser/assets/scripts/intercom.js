function shouldHideMessenger() {
	if (window.innerWidth > 768) {
		return false;
	}

	const paths = [
		'/b2bmarket/listing/products',
		'/b2bmarket/company',
		'/profile/your-account/settings'
	]

	const links = [
		'http://localhost:4200',
		'http://localhost:4000',
		'https://globy.com',
		'https://dev.globy.com',
		'https://staging.globy.com',
	]

	let urls = [];

	for (const link of links) {
		for (const path of paths) {
			urls.push(link+path)
		}
	}

	// Check if the current URL is in the list of URLs to hide
	return urls.includes(window.location.href);
}

window.intercomSettings = {
	app_id: 'fgjzhwn9',
	hide_default_launcher: shouldHideMessenger()
};

(function () {
	var w = window;
	var ic = w.Intercom;
	if (typeof ic === 'function') {
		ic('reattach_activator');
		ic('update', w.intercomSettings);
	} else {
		var d = document;
		var i = function () {
			i.c(arguments);
		};
		i.q = [];
		i.c = function (args) {
			i.q.push(args);
		};
		w.Intercom = i;
		var l = function () {
			var s = d.createElement('script');
			s.type = 'text/javascript';
			s.async = true;
			s.src = 'https://widget.intercom.io/widget/fgjzhwn9';
			var x = d.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s, x);
		};
		if (document.readyState === 'complete') {
			l();
		} else if (w.attachEvent) {
			w.attachEvent('onload', l);
		} else {
			w.addEventListener('load', l, false);
		}
	}
})();
