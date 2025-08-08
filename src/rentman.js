hljs.initHighlightingOnLoad();

var oldIds = [
	"27485879892242",
	"360008796873",
	"360018705774",
	"360012031714",
	"360011447254",
	"115005877405",
	"211681165",
	"115004751514",
	"115005855765",
	"115000552189",
	"360011634613",

	"360015263940",
	"115004152545",
	"360007577754",
	"360010380973",
	"360008530093",
	"360005385614",
	"360008911254",
	"115004153445",
	"360000680854",
	"360008391314",
	"360003388974",

	"360008722994",
	"360001166734",
	"360002913374",
	"360009169239",
	"115004227949",
	"360011667234",

	"360002895813",
	"210658369",
	"360004001474",
	"360019622114",
	"213815525",
	"360008868453",
	"360005468594",
	"212104865",
	"211734725",
	"213273269",
	"210661349",
	"360015393273",
	"211681305",
	"210658869",
	"115005786869",
	"211735265",
	"360013123314",
	"360004371633",
	"360004344194",
	"210657849",
	"360011661334",
	"360004344114",
	"360001202954",
	"213440469",
	"360001829673",
	"115005017069",

	"115003492645",
	"210659929",
	"360007589274",
	"360015422454",
	"360010720060",
	"360008488334",
	"360008881780",
	"360007735474",
	"360008635653",
	"360013219233",
	"360015506773",

	"360001428254",
	"360001087334",
	"360001299574",
	"115004851785",
	"360011841574",
	"360001191153",
	"211722905",
	"360004901033",
	"360021727774",
	"360012127753",
	"211725365",
	"360001988214",
	"360010552194",
	"115005765645",
	"360011201473",
	"360012916580",
	"360017476594",
	"360021325153",
	"360010928593",
	"360008626733",
	"360009277574",
	"360010633213",
	"360012173354",
	"360010633193",

	"211723385",
	"211680409",
	"360004154633",
	"360004125394",
	"360004154653",
	"360004135694",
	"360004135734",
	"210703389",
	"360002716333",
	"211720309",
	"360007306494",
	"212437905",
	"212312685",
	"115005499469",
	"115004247389",
	"115004149445",


	"211727445",
	"211725905",
	"360024668174",
	"360005189174",
	"211727465",
	"360022013114",
	"360008723134",
	"360010633193",
	"360010633253",
	"360010633213",


	"115004168309",
	"360011586219",
	"360000299494",
	"360012226634",
	"360006037573",
	"360009079779",
	"11500414726",
	"360008871113",
	"360004377233",
	"211735245",
	"115005704849",
	"360011554079",
	"360003558873",
	"360011667234",
	"360009198700",
	"360015540213",
	"360011730694",
	"115005237109",
	"360011690739",
	"115004211645",

	"210657069",
	"115004676905",
	"360010420334",

	"360013148153",
	"360008528213",
	"360008528233",
	"360005113053",
	"360008389754",
	"360008389574",
	"360008389634",
	"360003388974",

	"360009667620",
	"115003657085",
	"115003713965",
	"360006441193",
	"360011665174",
	"360015506773",
	"360011944400",
	"360001087334",
	"360004135694",
	"211681145",
	"211662369",
	"115004154185",
	"360011537154",
	"360001748333",
	"115003465245",
	"115004462789",
	"360004135714",
	"360025162114",
	"115005058673",

	"115005034365",

	"360015263940",
	"360014464179",
	"360014466199",
	"360014466159",
	"360014466099",
	"360014466079",
	"360014466059",
	"360014401900",
	"360014401960",
	"360014401940",
	"360014466379",
	"360014401840",
	"360014466339",
	"360009910214",

	"360019134154",
	"360019613394",
	"360012556953",
	"360005288394",
	"115004830929",
	"360011757213",
	"360023286473",
	"210661009",
	"211722905",
	"360013292499",
	"360012585779",
	"211681145",
	"360023286593",

	"360016423420",
	"360016423260",
	"360016422600",
	"360016427840",
	"360016455199",
	"360016428080",
	"360016428020",
	"360016456159",
	"360016428280",
	"360016453279",
	"360016453039",
	"360020950280"

];
var newIds = [
	"26200585082258",
	"360014204180",
	"360014284880",
	"360015902019",
	"360014360700",
	"360015898239",
	"360012611160",
	"360014710799",
	"360015866540",
	"360014210360",
	"360014372819",

	"360015934439",
	"360015900179",
	"360013982380",
	"360014365179",
	"360014044739",
	"360014048619",
	"360016035999",
	"360014048499",
	"360015603179",
	"360014044039",
	"360002629740",

	"360013767839",
	"360013699120",
	"360014279999",
	"360013698600",
	"360014047779",
	"360013973240",

	"360014254000",
	"360014254000",
	"360013553000",
	"360013628759",
	"360013590720",
	"360013599680",
	"360013677019",
	"360013668139",
	"360013084979",
	"360012594219",
	"360014345720",
	"360014106599",
	"360014243139",
	"360013631800",
	"360013367659",
	"360013637220",
	"360013718160",
	"360013763199",
	"360013703139",
	"360013638440",
	"360015867120",
	"360013931999",
	"360013700660",
	"360012581679",
	"360014696379",
	"360013767499",

	"360013503420",
	"360014055700",
	"360014232559",
	"360014193840",
	"360014194100",
	"360014405639",
	"360013979460",
	"360014260839",
	"360014259799",
	"360014199640",
	"360014391919",

	"360013580119",
	"360014407219",
	"360013703140",
	"360014141299",
	"360013718240",
	"360013086279",
	"360013292499",
	"360014284900",
	"360013765880",
	"360013930799",
	"360013158280",
	"360013836939",
	"360013771040",
	"360013845340",
	"360013838520",
	"360015960120",
	"360013812939",
	"360013877120",
	"360014293220",
	"360013852060",
	"360013838560",
	"360014456399",
	"360014456399",
	"360014454859",

	"360014610140",
	"360014625560",
	"360013323900",
	"360014360520",
	"360014366299",
	"360014373260",
	"360014307939",
	"360013223940",
	"360014687739",
	"360014444159",
	"360014372420",
	"360014607700",
	"360014685859",
	"360014594620",
	"360014672919",
	"360015498439",



	"360014458519",
	"360013101260",
	"360013478180",
	"360015609959",
	"360014382840",
	"360015601560",
	"360014454859",
	"360014454859",
	"360014392200",
	"360014456399",

	"360013264720",
	"360013628279",
	"360013887460",
	"360013944139",
	"360013938099",
	"360013878320",
	"360013881760",
	"360014214060",
	"360013886600",
	"360013890780",
	"360014023019",
	"360014024199",
	"360013971080",
	"360013973240",
	"360013977700",
	"360014032939",
	"360014213620",
	"360013492560",
	"360013965120",
	"360012594659",

	"360014054799",
	"360015717380",
	"360016038859",

	"360015718080",
	"360015575940",
	"360015577120",
	"360015581499",
	"360015581499",
	"360015581499",
	"360015718080",
	"360015718080",

	"360015934439",
	"360015903460",
	"360015903980",
	"360015934439",
	"360014345720",
	"360014391919",
	"360013492560",
	"360013580119",
	"360014373260",
	"360002613739",
	"360014610140",
	"360015898239",
	"360014372819",
	"360013988420",
	"360015595380",
	"360013587379",
	"360014373260",
	"360016488759",
	"360015498839",

	"360017016060",

	"360015934439",
	"360015934559",
	"360015935539",
	"360015935639",
	"360015935759",
	"360015935839",
	"360015936019",
	"360015903460",
	"360015936339",
	"360015903980",
	"360015937799",
	"360015904700",
	"360016001899",
	"360014232559",

	"360014391919",
	"360015601560",
	"360014360520",
	"360016423260",
	"360013503420",
	"360013887460",
	"360013838520",
	"360013580119",
	"360013730520",
	"360013730520",
	"360013580119",
	"360014044739",
	"360013838520",

	"360016001899",
	"360015903460",
	"360015934559",
	"360015937799",
	"360015935539",
	"360015903980",
	"360015935639",
	"360015904700",
	"360015935839",
	"360015935759",
	"360015936339",
	"360021537260"

];

for (var i = 0; i < oldIds.length; i++){
	if (window.location.href.indexOf(oldIds[i]) > -1) {
		window.location.href = 'https://support.rentman.io/hc/articles/' + newIds[i];
	}
}

// Custom JS

const pathName = window.location.pathname;

if (/\/hc\/[^\/]+\/?$/.test(pathName)) {
	$('body').addClass('home-active');
}

// Table of contents
const h1Selector = 'h1';
const h2Selector = "h2:not('.article-votes-question'):not('.recent-articles-title')";

if ($(`[data-article] ${h1Selector}, [data-article] ${h2Selector}`).length > 0) {
	TableOfContents.init({
		headers: `${h1Selector}, ${h2Selector}`,
	});
}

// Sticky header
var $window = $(window);
var $topbar = $('header.header');
var topbarHeight = parseInt($topbar.outerHeight());

$('body').css('--topbar-height', topbarHeight + 'px');

function onWindowScroll () {
	var scrollOffset = $window.scrollTop();

	$topbar.toggleClass('header--fixed', scrollOffset > (topbarHeight * 2));
};

$window.on('scroll', onWindowScroll);
onWindowScroll();

// Error page redirect
var notDefaultLanguage = window.location.href.indexOf('/en-us/') == -1;
var isArticle = window.location.href.indexOf('/articles/') > -1;
var isErrorPage = $(".error-page").length > 0;

if (isArticle && notDefaultLanguage && isErrorPage) {
	var newURL = window.location.href.replace(/(.*\/hc\/)([\w-]+)(\/.*)/, "$1en-us$3");
	window.location.href = newURL;
}

// Social share popups
$('.share a').click(function (e) {
	e.preventDefault();
	window.open(this.href, '', 'height = 500, width = 500');
});

// Tabs
$('.tabs-link').click(function (e) {
	e.preventDefault();
	var $link = $(this);
	var tabIndex = $link.index();
	var $tab = $link.parents('.tabs').find('.tab').eq(tabIndex);

	$link
		.addClass('is-active')
		.siblings()
		.removeClass('is-active');

	$tab
		.removeClass('is-hidden')
		.siblings('.tab')
		.addClass('is-hidden');
});

// Video popups
$('.image-with-video-icon').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});

// Image popups
$('.image-with-lightbox').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	closeBtnInside: false,
	fixedContentPos: true,
	mainClass: 'mfp-with-zoom', // class to remove default margin from left and right side
	image: {
		verticalFit: true
	},
	zoom: {
		enabled: true,
		duration: 300 // don't foget to change the duration also in CSS
	}
});

// Accordeons
$('.accordion__item-title')
	.on('click', function () {
		var $title = $(this);
		$title.toggleClass('accordion__item-title--active');
		$title.parent('.accordion__item').find('.accordion__item-content').slideToggle();
	});

// Start of helpcenter manager analytics script
window.hcm = {};
function hcmanager(account_key, dataset_id, domain, script_url) {
	window.hcm._accountKey = account_key;
	window.hcm._datasetId = dataset_id;
	window.hcm._domain = domain;
	var script = document.createElement("script");
	script.type = "application/javascript";
	script.src = script_url;
	var first = document.getElementsByTagName('script')[0];
	first.parentNode.insertBefore(script, first);
}
hcmanager('9c678b75ea3a2211d205d8da3899891d', '605da4e4b393066b59b657d4', 'https://hcmanager.swifteq.com', 'https://scripts.swifteq.com/hc_events.js');

// End of helpcenter manager analytics script


// Pre-fill Form & Hide Fields in request form - RS
window.addEventListener("DOMContentLoaded", () => {
	const container = document.getElementById("new-request-form");
	if (container) {
		// Wait for the form to render
		const observer = new MutationObserver(() => {
			const form = container.querySelector("form");
			const formField = container.querySelector("input[name='request[ticket_form_id]']");

			// Check if the form exists and contains the ticket form ID
			if (form && formField) {
				const subjectField = container.querySelector("input[name='request[subject]']");
				const descriptionField = container.querySelector("textarea[name='request[description]']");

				if (subjectField && descriptionField) {

					if (formField.value === "20474319990034") {

						// Pre-fill for form ID 0000000000000
						subjectField.value = "Feedback ticket";
						descriptionField.value = "Feedback ticket";

						// Hide Subject, Description, Attachments fields and their labels/headers
						subjectField.closest('div[data-garden-id=\'forms.field\']').style.display = "none";
						descriptionField.closest('div[data-garden-id=\'forms.field\']').style.display = "none";

						const goal = document.querySelector("textarea[name='request[custom_fields][20448704398610]']");
						const problem = document.querySelector("textarea[name='request[custom_fields][20448776087954]']");

						const goalTitle = container.querySelector("label[for='" + goal.id + "']");
						const problemTitle = container.querySelector("label[for='" + problem.id + "']");
						const updateDescription = function (event) {
							let text = "<p></p><strong>" + goalTitle.innerText + "</strong><br>";
							text += goal.value.replace(/\r?\n/g, "<br />") + "</p>";
							text += "<p></p><strong>" + problemTitle.innerText + "</strong><br>";
							text += problem.value.replace(/\r?\n/g, "<br />") + "</p>";

							descriptionField.value = text;

							//update ckeditor value
							const domEditableElement = descriptionField.parentNode.querySelector('.ck-editor__editable');
							const editorInstance = domEditableElement.ckeditorInstance;
							editorInstance.setData(text);
						};
						goal.addEventListener('keyup', updateDescription);
						problem.addEventListener('keyup', updateDescription);

					}
					// Disconnect observer after making changes
					observer.disconnect();
				}

			}
		});

		// Observe the container for changes
		observer.observe(container, {
			childList: true,
			subtree: true
		});
	}
});