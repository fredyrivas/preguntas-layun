// $(document).foundation();


$(document).ready(function() {
	$('#tipue_search_input').tipuesearch();

	setvideo();
});


function getVideoId() {
	return $('.tipue_search_content_url').find('a').attr('href');
}

function setvideo() {
	$('#video_container').empty().html('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + getVideoId() + '" frameborder="0" allowfullscreen></iframe>')
}
