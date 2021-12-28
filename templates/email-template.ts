import mjml2html from 'mjml';

export const emailTemplate = (name: string) =>
	mjml2html(`
	<mjml>
	<mj-body background-color="#F2F2F2">
	  <mj-section vertical-align="middle" padding-bottom="20px" text-align="center" >
		<mj-column vertical-align="middle">
		  <mj-image width="144px" align="center" src="https://progresja.com/t/img/logo.png" href="https://progresja.com/en/" alt="progresja-logo" align="center"></mj-image>
		</mj-column>
	  </mj-section>
	  <mj-section background-color="black">
		<mj-column>
		  <mj-text padding-top="0px" padding-bottom="10px" color="white" font-family="Helvetica,Arial,sans-serif" font-size="20px" font-weight="800" line-height="120%"> WITAJ! </mj-text>
		  <mj-text padding-top="0px" padding-bottom="0px" color="white" font-family="Helvetica,Arial,sans-serif" font-size="14px" line-height="120%">
			Hello ${name}<br />
			Przygkładowy tekst przedswaijący wygląd nagłówka</mj-text>
		</mj-column>
	  </mj-section>
	  <mj-section>
		<mj-column background-color="#FFFFFE">
		  <mj-image padding-bottom="0px" padding-top="0px" padding-left="0px" padding-right="0px" src="https://static.goout.cloud/progresjacom/2020/01/c99be213-tomr-1140x675.jpg" href="https://progresja.com/en/events/www-2020-tom-rosenthal/" alt=""></mj-image>
		  <mj-text padding-top="25px" padding-bottom="25px" font-family="Helvetica,Arial,sans-serif" font-size="14px" line-height="120%">Wiemy, że bardzo czekacie na koncert Toma Rosenthala w naszym kraju, my też. Jednak ze względu na sytuację epidemiologiczną musi przesunąć jego koncert na późniejszy termin.
		  </mj-text>
		</mj-column>
	  </mj-section>
	  <mj-section>
		<mj-column background-color="#FFFFFE">
		  <mj-image padding-bottom="0px" padding-top="0px" padding-left="0px" padding-right="0px" src="https://static.goout.cloud/progresjacom/2021/10/dab8b24a-vege-1140x641.jpg" href="https://progresja.com/en/events/wege-niedziela-nawoli/" alt=""></mj-image>
		  <mj-text padding-top="25px" padding-bottom="25px" font-family="Helvetica,Arial,sans-serif" font-size="14px" line-height="120%">Kochani! Wege niedziela zbliża się do nas wielkimi krokami! Jak widzicie wróciliśmy do Was z nowymi, jeszcze lepszymi pomysłami! 14 listopada w naszym klubie pojawią się wyjątkowi goście, którzy dadzą Wam to, co kochacie najbardziej – sushi oraz ramen!</mj-text>
		</mj-column>
	  </mj-section>
	  <mj-section>
		<mj-column background-color="#FFFFFE">
		  <mj-image padding-bottom="0px" padding-top="0px" padding-left="0px" padding-right="0px" src="https://static.goout.cloud/progresjacom/2021/10/f6e48d26-ms2022list-1140x641.jpg" href="https://progresja.com/en/events/eliminacje-ms-2022-polska-wegry/" alt=""></mj-image>
		  <mj-text padding-top="25px" padding-bottom="25px" font-family="Helvetica,Arial,sans-serif" font-size="14px" line-height="120%">Pamiętacie emocje, które towarzyszyły nam podczas Euro 2020?
			Piłka nożna wraca do Progresji! Tym razem wspólnie będziemy kibicować Polsce w Eliminacjach do Mistrzostw Świata 2022 w kawiarni Klubu Progresja! Zapraszamy wszystkich kibiców z Woli i okolic.</mj-text>
		</mj-column>
	  </mj-section>
	  <mj-section>
		<mj-column background-color="#FFFFFE">
		  <mj-image padding-bottom="0px" padding-top="0px" padding-left="0px" padding-right="0px" src="https://static.goout.cloud/progresjacom/2020/03/a2cb03e5-page-1140x641.jpg" href="https://progresja.com/en/events/otava-yo/" alt=""></mj-image>
		  <mj-text padding-top="25px" font-family="Helvetica,Arial,sans-serif" font-size="14px" line-height="120%">Otava Yo to bezsprzecznie zespół jedyny w swoim rodzaju i niepowtarzalny. Doświadczeni muzycy folkowi postanowili stworzyć nieco mniej poważny niż zwykle projekt muzyczny, nie rezygnując przy tym z tradycyjnych, rosyjskich dźwięków. W efekcie powstała formacja balansująca na granicy rozrywki i odniesień historycznych!</mj-text>
		  <mj-button background-color="black" padding-bottom="25px" border-radius="8px" href="ttps://progresja.com/en/events/otava-yo/" font-size="14px" font-family="Helvetica,Arial,sans-serif" line-height="120%">Kup bilet</mj-button>
		</mj-column>
	  </mj-section>
  
	  <mj-section background-color="#000001">
		<mj-section>
		  <mj-column width="100%" padding="0">
			<mj-social font-size="15px" icon-size="30px" mode="horizontal" padding="0" align="center">
			  <mj-social-element name="facebook" href="" background-color="black">
			  </mj-social-element>
			  <mj-social-element name="google" href="" background-color="black">
			  </mj-social-element>
			  <mj-social-element name="instagram" href="" background-color="black">
			  </mj-social-element>
			</mj-social>
			<mj-text color="#445566" font-size="11px" font-weight="bold" align="center">
			  Jakiś formalny tekst
			</mj-text>
			<mj-text color="#445566" font-size="11px" align="center" line-height="16px">
			  Dodakotwe informacje, które normalnie dodaje się do tekstu
			</mj-text>
			<mj-text color="#445566" font-size="11px" align="center" line-height="16px">
			  &copy; XXXXXXX
			</mj-text>
		  </mj-column>
		</mj-section>
	  </mj-section>
	</mj-body>
  </mjml>
`).html;
