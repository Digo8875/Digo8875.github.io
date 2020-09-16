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
		//###############################   BUTTONS DIVS SKILLS   ##############################################
		$('#div_skill_desenvolvimento_web').hide();
		$('#close_skill_desenvolvimento_web').hide();

		$('#open_skill_desenvolvimento_web').click(function(){

			$('#div_skill_desenvolvimento_web').show();
			$('#open_skill_desenvolvimento_web').hide();
			$('#close_skill_desenvolvimento_web').show();
		});

		$('#close_skill_desenvolvimento_web').click(function(){

			$('#div_skill_desenvolvimento_web').hide();
			$('#open_skill_desenvolvimento_web').show();
			$('#close_skill_desenvolvimento_web').hide();
		});



		$('#div_skill_linguagem_programacao').hide();
		$('#close_skill_linguagem_programacao').hide();

		$('#open_skill_linguagem_programacao').click(function(){

			$('#div_skill_linguagem_programacao').show();
			$('#open_skill_linguagem_programacao').hide();
			$('#close_skill_linguagem_programacao').show();
		});

		$('#close_skill_linguagem_programacao').click(function(){

			$('#div_skill_linguagem_programacao').hide();
			$('#open_skill_linguagem_programacao').show();
			$('#close_skill_linguagem_programacao').hide();
		});



		$('#div_skill_laravel').hide();
		$('#close_skill_laravel').hide();

		$('#open_skill_laravel').click(function(){

			$('#div_skill_laravel').show();
			$('#open_skill_laravel').hide();
			$('#close_skill_laravel').show();
		});

		$('#close_skill_laravel').click(function(){

			$('#div_skill_laravel').hide();
			$('#open_skill_laravel').show();
			$('#close_skill_laravel').hide();
		});
		//######################################################################################################
	}
);