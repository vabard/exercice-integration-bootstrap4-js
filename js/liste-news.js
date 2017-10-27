document.addEventListener('DOMContentLoaded', function()
{
		
	var listeElt = document.getElementById('liste-news');

	news.forEach(function(n){

		//rendu :
			// <div class="col-md-4 card news-card">
			// 	<img src="img/image.png"
			// 	    srcset="img/image@2x.png 2x,
			// 	            img/image@3x.png 3x"
			// 	    class="card-img-top"
			// 	    alt="Stranger Things 2 Amazing New Posters">
			//     <div class="card-body">
			// 	    <h3 class="card-title"><a href="#">Stranger Things 2 Amazing New Posters</a></h3>
			// 		<p class="card-text description">La deuxième saison de Stranger Things approche à grands pas. Netflix dévoile donc...</p>
			// 	    <p class="card-text btns-likes-comments">
			// 	    	<span><img src="img/btn-likes.svg" class="btn_likes" alt="">  20 likes</span>
			// 	      	<span><img src="img/btn-comments.svg" class="btn_comments" alt="">  10 comments</span>
			// 	    </p>
			// 	</div>
			// </div>

		
		// 1. Creation des elements
		
		var newsCardElt = document.createElement('div');
		var imgNewsElt = document.createElement('img');
		var cardBodyElt = document.createElement('div');
		var cardTitleElt = document.createElement('h3');
		var detailsUrlElt = document.createElement('a');
		var textTitle = document.createTextNode(n.title);
		var descriptionElt = document.createElement('p');
		var textDescription = document.createTextNode(n.description);
		var btnsLikesCommentsElt = document.createElement('p');
		var spanBtnLikesElt = document.createElement('span');
		var textLikes = document.createTextNode(n.likes + "  likes");
		var spanBtnCommentsLikesElt = document.createElement('span');
		var textComments = document.createTextNode(n.comments + "  comments");
		var imgBtnLikesElt = document.createElement('img');
		var imgBtnCommentsElt = document.createElement('img');


		// 2. emboitage

		newsCardElt = listeElt.appendChild(newsCardElt);
		imgNewsElt = newsCardElt.appendChild(imgNewsElt);
		cardBodyElt = newsCardElt.appendChild(cardBodyElt);

		// <h3 class="card-title"><a href="#">Stranger Things 2 Amazing New Posters</a></h3>
		cardTitleElt = cardBodyElt.appendChild(cardTitleElt);
		detailsUrlElt = cardTitleElt.appendChild(detailsUrlElt);
		textTitle = detailsUrlElt.appendChild(textTitle);

		// <p class="card-text description">La deuxième saison de Stranger Things approche à grands pas. Netflix dévoile donc...</p>
		descriptionElt = cardBodyElt.appendChild(descriptionElt);
		textDescription = descriptionElt.appendChild(textDescription);

		// <p class="card-text btns-likes-comments">
	      	// <span><img src="img/btn-likes.svg" class="btn_likes" alt="" aria-hidden="true">  20 likes</span>
	      	// <span><img src="img/btn-comments.svg" class="btn_comments" alt="" aria-hidden="true">  10 comments</span>
	    // </p>
		btnsLikesCommentsElt = cardBodyElt.appendChild(btnsLikesCommentsElt);

		spanBtnLikesElt = btnsLikesCommentsElt.appendChild(spanBtnLikesElt);
		imgBtnLikesElt = spanBtnLikesElt.appendChild(imgBtnLikesElt);
		textLikes = spanBtnLikesElt.appendChild(textLikes);

		spanBtnCommentsLikesElt = btnsLikesCommentsElt.appendChild(spanBtnCommentsLikesElt);
		imgBtnCommentsElt = spanBtnCommentsLikesElt.appendChild(imgBtnCommentsElt);
		textComments = spanBtnCommentsLikesElt.appendChild(textComments);
	


		// 3. changement des attributs

		imgNewsElt.src = "img/" + n.imgUrl;
		
		// ici on suppose qu'il y a une convention de nommage des fichiers images pour srcset :
			// srcset="img/image@2x.png 2x, img/image@3x.png 3x"
		var tab = n.imgUrl.split('.');// on divise le nom du fichier en deux avec separateur '.'
		var nomImage = tab[0]; // le nom d'image
		var extensionImage = tab[1]; // l'extention de l'image
		//concatenation
		imgNewsElt.srcset = "img/" + nomImage + "@2x." +  extensionImage + " 2x, " + nomImage + "@3x." + extensionImage + " 3x"; 
		
		imgNewsElt.alt = n.title;
		
		detailsUrlElt.href = n.url;
		imgBtnLikesElt.src = 'img/btn-likes.svg';
		imgBtnLikesElt.alt = '';
		imgBtnCommentsElt.src = 'img/btn-comments.svg';
		imgBtnCommentsElt.alt = '';


		// 4. Ajout des classes

		newsCardElt.className = "col-md-4 card news-card";
		imgNewsElt.className = "card-img-top";
		cardBodyElt.className = "card-body";
		cardTitleElt.className = "card-title";
		descriptionElt.className = "card-text description";
		btnsLikesCommentsElt.className = "card-text btns-likes-comments";
		imgBtnLikesElt.className = "btn_likes";
		imgBtnCommentsElt.className = "btn_comments";

	}); // end foreach
});





















