/* VAR para se trocar a base_url de localhost para a certa na hospedagem 
* Ex.: 
* Para Hospedagem:
*var base_url = '/BawSawApp/public';
* Para Localhost
*var base_url = '';
* A variável aqui fora da function se torna uma variável GLOBAL. Assim, 
* em todo lugar que precisarmos usar essa base_url ela poderá ser chamada facilmente. 
* Desde que esse arquivo JS esteja importado antes do outro que a utilizará */
var base_url = '';

$(document).ready(
  //inicializa o html adicionando os envetos js especificados abaixo
	function(){

		$("#header").load("header.html");


		$("#footer").load("footer.html");


		$('#link-curriculo-drive').click(function(){

			window.open('https://drive.google.com/file/d/1oII8nz2yv96z56kXsVVeTmj0M1j_4Tqb/view?usp=sharing', '_blank');
		});

		$('#link-home').click(function(){

			window.location.href="index.html";
		});

		$('#link-projetos-estudos').click(function(){

			window.location.href="projetos_estudos.html";
		});

		//######################################################################################################
	}
);